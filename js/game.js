(function() {
    this.parse_url_params = function() {
        window.location.hash.slice(1).split('|').forEach(function(param){
            var kv = param.split(':');
            if(kv[1] == 'false'){
                kv[1] = false;
            }
            if(kv[1] == 'true'){
                kv[1] = true;
            }
            URL_PARAMS[kv[0]] = kv[1];
        })
    }

    var URL_PARAMS = {
        editor: false,
        box2d: false,
        lvl: 'xkcd1',
    };
    this.parse_url_params();
    
    var Ticker = createjs.Ticker;
    var gipCanvas;
    var stage;
    
    var box2dCanvas; 
    var box2dUtils; 
    var context;
    var SCALE = 30; 
    var world;
    var canvasWidth, canvasHeight;

    var curr_line = null;
    var isMouseDown = false;
    var canvasPosition;

    var b2Vec2 = Box2D.Common.Math.b2Vec2;
    var b2AABB = Box2D.Collision.b2AABB;
    var b2Body = Box2D.Dynamics.b2Body;
    
    var pigs = [];
    
    var lines = [];
    var lines_parent = new createjs.Container();
    var editing_mode = URL_PARAMS['editor'];

    var free_move_camera = true;

    var loaded_queue = new createjs.LoadQueue();

    var vp = {
        x:0,
        y:0,
        zoom:1,
        container: new createjs.Container(),
    }

    var box2dDebug = URL_PARAMS['box2d'];

    var lvl = LEVELS[URL_PARAMS['lvl']]
    
    var player = null, background = null;
    var keys = [];

    var touch_pointers = {};

    $(document).ready(function() {
        load();
    });

    this.load = function() {
        window.scrollTo(0,1);//hide top bar

        $('#loading').fadeIn()
        loaded_queue.on("complete", function(){
            $('#loading').hide()
            init()
        }, this);
        loaded_queue.loadManifest([
            {id: "bird", src:"img/bird.png"},
            {id: "bg", src:lvl.bg.src},
        ]);
    }
    
    this.init = function() {
        prepareStage();     
        prepareBox2d();     
        
        lvl.bg.img = loaded_queue.getResult("bg");
        background = new Background(vp.container, SCALE, lvl.bg);
        
        this.reset_lines();
        addLines();
        
        player = new Player(vp.container, SCALE, loaded_queue.getResult('bird'));
        player.createPlayer(world, lvl.player.start.x*SCALE, lvl.player.start.y*SCALE, 17);

        addContactListener();

        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);
        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);

        createjs.Touch.enable(stage);
        stage.addEventListener('pressmove', handlePressMove);
        stage.addEventListener('pressup', handlePressUp);

        window.onresize = function(){ onResize(); }
        onResize();
        
        this.debug_screen_on_off();
        this.editor_on_off();

        document.onkeydown = function(event) {
            return event.keyCode != 38 && event.keyCode != 40;
        }

        startTicker(30);    
    };

    this.editor_on_off = function(){
        lines_parent.visible = editing_mode;
        $('#editor').toggle(editing_mode);
    }
    
    
    this.prepareStage = function() {
        gipCanvas = $('#gipCanvas').get(0);
        
        stage = new createjs.Stage(gipCanvas);
        
        easelJsUtils = new EaselJsUtils(stage);
        stage.addChild(vp.container)
    };
    
    
    this.prepareBox2d = function() {
        box2dCanvas = $('#box2dCanvas').get(0);
        canvasWidth = parseInt(box2dCanvas.width);
        canvasHeight = parseInt(box2dCanvas.height);
        canvasPosition = $(box2dCanvas).position();
        context = box2dCanvas.getContext('2d');
        box2dUtils = new Box2dUtils(SCALE);
        world = box2dUtils.createWorld(context); 
    };

    this.editor_load_bg = function(evt) {
        var tgt = evt.target || window.event.srcElement,
            files = tgt.files;

        if (files && files.length) {
            var fr = new FileReader();
            fr.onload = function () {
                document.getElementById('bg').src = fr.result;
                background.setImage(fr.result);
                reset_lines();
            }
            fr.readAsDataURL(files[0]);
        }
    }

    this.reset_lines = function(){
        lines.forEach(function(line){
            line.remove();
        });
        lines = []

        var bg = loaded_queue.getResult("bg");
        var h = bg.height/SCALE*background.options.scale;
        var w = bg.width/SCALE*background.options.scale;
        addLine([{x:0, y:h},{x:w, y:h}]) //bottom
        addLine([{x:0, y:0},{x:w, y:0}]) //top
        addLine([{x:-0.1, y:0},{x:0, y:h}]) //left
        addLine([{x:w+0.1, y:0},{x:w, y:h}]) //right
    }

    this.addLine = function(coords){
        var line = new Line(box2dUtils, world, lines_parent, SCALE, coords);
        lines.push(line);
        return line;
    }

    this.addLines = function() {
        vp.container.addChild(lines_parent);
        lvl.lines.map(addLine);
    };

    this.addPigs = function() {
        for (var i=0; i<5; i++) {
            var pig = box2dUtils.createPig(world, vp.container, Math.random() * canvasWidth, Math.random() * canvasHeight - 400 / SCALE);
            pigs.push(pig);
        }
    };

    
    this.startTicker = function(fps) {
        Ticker.setFPS(fps);
        Ticker.addEventListener("tick", tick);
    };
    
    
    this.tick = function() {
        world.Step(1 / 15,  10, 10);
        world.ClearForces();

        handleInteractions();
        player.update();    

        for (var i=0; i < pigs.length; i++) {
            pigs[i].update();
        }

        vp.x = player.skin.x-canvasWidth/2/vp.zoom;
        vp.y = player.skin.y-canvasHeight/2/vp.zoom;

        if(box2dDebug){
            vp.x = 0;
            vp.y = 0;
        }

        vp.container.x = -vp.x;
        vp.container.y = -vp.y;

        vp.container.scaleX = vp.zoom
        vp.container.scaleY = vp.zoom

        if(box2dDebug){
            world.DrawDebugData();
        }
        stage.update();
    };

    
    this.handleKeyDown = function(evt) {
        keys[evt.keyCode] = true;

        if(evt.keyCode == 69){ //e
            editing_mode = !editing_mode;
            this.editor_on_off()
        }
        if(evt.keyCode == 66){ //b
            box2dDebug = !box2dDebug;
            this.debug_screen_on_off();
        }
        if(evt.keyCode == 80){ //p
            var pig = box2dUtils.createPig(world, vp.container, Math.random() * canvasWidth, Math.random() * canvasHeight - 400 / SCALE);
            pigs.push(pig);
        }

        if(evt.key == '-'){
            vp.zoom -= 0.1;
        }
        if(evt.key == '+'){
            vp.zoom += 0.1;
        }
        if(evt.key == 'r'){
            this.reset_lines();
        }
    }

    
    this.handleKeyUp = function(evt) {
        keys[evt.keyCode] = false;
    }

    
    this.handleInteractions = function() {
        for(key in touch_pointers){
            var coords = touch_pointers[key];
            console.log(coords)
            var x = coords.x;
            var y = coords.y;
            var w_middle = canvasWidth*2/3.;
            var w_quarter = canvasWidth/3.;
            console.log(w_middle, w_quarter);
            if(x < w_quarter){
                player.moveLeft();
            }
            if(x > w_quarter && x < w_middle){
                player.moveRight();
            }
            if(x > w_middle){
                player.jump();
            }
        }

        if (keys[38]) {
            player.jump();
        }
        if (keys[37]) {
            player.moveLeft();
        } else if (keys[39]) {
            player.moveRight();
        }   
    }

    
    this.isPlayer = function(object) {
        if (object != null && object.GetUserData() != null) {
            return object.GetUserData() == 'player';
        }
    }
    
    
    this.isFootPlayer = function(object) {
        if (object != null && object.GetUserData() != null) {
            return object.GetUserData() == 'footPlayer';
        }
    }
    
    
    this.isGroundOrBox = function(object) {
        if (object != null && object.GetUserData() != null) {
            return (object.GetUserData() == 'box'
                 || object.GetUserData() == 'ground' 
                 || object.GetUserData() == 'line' 
                 || object.GetUserData() == 'pig'
                 || object.GetUserData() == 'shortTree');
        }
    }

    this.mouseCoords = function(evt){
        var c =  {
            x: (evt.clientX - canvasPosition.left),
            y: (evt.clientY - canvasPosition.top)
        }
        c = vp.container.globalToLocal(c.x, c.y);
        return {
            x:c.x/SCALE,
            y:c.y/SCALE,
        }
    }
    this.touchCoords = function(evt){
        return {
            x: evt.stageX,
            y: evt.stageY
        }
    }


    this.handleMouseDown = function(evt) {
        isMouseDown = true;
        var pos = this.mouseCoords(evt);
        if(editing_mode){
            curr_line = this.addLine([pos,pos]);
        }
        handleMouseMove(evt);
        window.addEventListener('mousemove', handleMouseMove);
    }
    
    this.handleMouseUp = function(evt) {
        window.removeEventListener('mousemove', handleMouseMove);
        isMouseDown = false;
    }
    
    this.handleMouseMove = function(evt) {
        if(editing_mode){
            curr_line.setEnd(this.mouseCoords(evt));
        }
    }

    this.handlePressMove = function(evt) {
        touch_pointers[evt.pointerID] = this.touchCoords(evt);
    }

    this.handlePressUp = function(evt) {
        delete touch_pointers[evt.pointerID];
    }

    this.getBodyAtMouse = function() {
        selectedBody = null;
        mouseVec = new b2Vec2(mouseX, mouseY);
        var aabb = new b2AABB();
        aabb.lowerBound.Set(mouseX, mouseY);
        aabb.upperBound.Set(mouseX, mouseY);
        world.QueryAABB(getBodyCallBack, aabb);
        return selectedBody;
    }
    
    
    this.getBodyCallBack = function(fixture) {
        if (fixture.GetBody().GetType() != b2Body.b2_staticBody) {
            if (fixture.GetShape().TestPoint(fixture.GetBody().GetTransform(), mouseVec)) {
               selectedBody = fixture.GetBody();
               return false;
            }
        }
        return true;
    }
    
    this.debug_screen_on_off = function() {
        if (box2dDebug) {
            $(box2dCanvas).css('opacity', 1);
        } else {
            $(box2dCanvas).css('opacity', 0);
        }
    };

    
    this.addContactListener = function() {
        var b2Listener = Box2D.Dynamics.b2ContactListener;
        
        var listener = new b2Listener;
        
        
        listener.BeginContact = function(contact) {
            var obj1 = contact.GetFixtureA();
            var obj2 = contact.GetFixtureB();
            if (isFootPlayer(obj1) || isFootPlayer(obj2)) {
                if (isGroundOrBox(obj1) || isGroundOrBox(obj2)) {                   
                    player.jumpContacts ++; 
                }
            }
        }
        
        
        listener.EndContact = function(contact) {
            var obj1 = contact.GetFixtureA();
            var obj2 = contact.GetFixtureB();
            if (isFootPlayer(obj1) || isFootPlayer(obj2)) {
                if (isGroundOrBox(obj1) || isGroundOrBox(obj2)) {
                    player.jumpContacts --; 
                }
            }
        }
        listener.PostSolve = function(contact, impulse) {
            
        }
        listener.PreSolve = function(contact, oldManifold) {
            
        }
        world.SetContactListener(listener);
    }



    this.onResize = function() {
        var w = window.innerWidth;
        var h = window.innerHeight;

        gipCanvas.width = w;
        gipCanvas.height = h;

        canvasWidth = w;
        canvasHeight = h;
    }
}());