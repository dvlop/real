var LEVELS = {
	'base': {
		player:{
			start:{
				x:5,
				y:3,
			}
		},
		bg: {
			src:'img/bg.jpg',
			scale: 0.35,
		},
		lines: [[{"x":1.3322476083649406,"y":20.424629633220363},{"x":13.932247608364941,"y":20.657962962962973}],[{"x":13.932247608364941,"y":20.657962962962973},{"x":13.665580941698273,"y":18.891296296296307}],[{"x":13.665580941698273,"y":18.891296296296307},{"x":13.73224760836494,"y":18.02462962962964}],[{"x":13.73224760836494,"y":18.02462962962964},{"x":14.898914275031608,"y":17.25796296296297}],[{"x":14.898914275031608,"y":17.25796296296297},{"x":15.73224760836494,"y":17.824629629629637}],[{"x":15.73224760836494,"y":17.791296296296306},{"x":15.63224760836494,"y":20.55796296296297}],[{"x":15.63224760836494,"y":20.52462962962964},{"x":22.23224760836494,"y":20.191296296296304}],[{"x":22.091464311114642,"y":20.157974032233483},{"x":33.02456220482487,"y":19.824634813217653}],[{"x":18.1613261346797,"y":20.35812330527584},{"x":18.049940731810537,"y":16.262957654480907}],[{"x":18.055760186495927,"y":16.260132656291795},{"x":21.016315040100302,"y":16.058428736332665}],[{"x":20.750002687798244,"y":15.996830815257978},{"x":21.049784734861877,"y":19.862919306255872}],[{"x":33.04988450372122,"y":19.69542360261223},{"x":37.91655090778173,"y":20.09536579687365}],[{"x":14.349070555138038,"y":12.041494128948772},{"x":15.48240388847137,"y":11.374827462282104}],[{"x":15.48240388847137,"y":11.374827462282104},{"x":17.64907055513804,"y":11.34149412894877}],[{"x":17.64907055513804,"y":11.34149412894877},{"x":18.215737221804705,"y":11.708160795615438}],[{"x":15.575741457412592,"y":10.552293778220939},{"x":15.642408124079259,"y":9.785627111554273}],[{"x":15.642408124079259,"y":9.785627111554273},{"x":11.375741457412593,"y":9.818960444887606}],[{"x":11.375741457412593,"y":9.818960444887606},{"x":9.409074790745926,"y":9.45229377822094}],[{"x":9.409074790745926,"y":9.45229377822094},{"x":7.575741457412592,"y":10.15229377822094}],[{"x":7.607341931850262,"y":9.98879629629629},{"x":6.7406752651835955,"y":9.98879629629629}],[{"x":6.7406752651835955,"y":9.98879629629629},{"x":5.274008598516929,"y":11.555462962962956}],[{"x":-0.025991401483071285,"y":22.155462962962954},{"x":-0.05932473481640462,"y":9.188796296296289}],[{"x":-0.09265806814973795,"y":21.222129629629624},{"x":1.2406752651835953,"y":20.555462962962956}],[{"x":38.148551882211244,"y":20.229648260889288},{"x":39.08188497402986,"y":8.26296372559236}]],
	},
	'xkcd1': {
		player:{
			start:{
				x:20,
				y:10,
			}
		},
		bg: {
			src: "img/bg_xkcd.png",
			scale: 1,
		},
		lines:[[{"x":31.975123985913168,"y":19.512913032853252},{"x":29.8084573192465,"y":19.546246366186587}],[{"x":29.8084573192465,"y":19.57957969951992},{"x":23.041790652579834,"y":17.07957969951992}],[{"x":23.07512398591317,"y":17.07957969951992},{"x":20.541790652579834,"y":16.97957969951992}],[{"x":32.02089666695908,"y":19.39222646771397},{"x":40.78756333362574,"y":19.492226467713973}],[{"x":40.95423000029241,"y":19.492226467713973},{"x":41.987563333625744,"y":18.325559801047305}],[{"x":41.987563333625744,"y":18.325559801047305},{"x":43.12089666695908,"y":17.125559801047306}],[{"x":43.197591228979256,"y":17.074590402413396},{"x":44.36425789564592,"y":15.174590402413397}],[{"x":44.36425789564592,"y":15.174590402413397},{"x":43.130924562312586,"y":12.541257069080064}],[{"x":43.164257895645925,"y":12.541257069080064},{"x":41.73092456231259,"y":12.041257069080064}],[{"x":41.73092456231259,"y":12.041257069080064},{"x":40.33092456231259,"y":10.60792373574673}],[{"x":40.36425789564592,"y":10.60792373574673},{"x":40.79759122897926,"y":9.007923735746731}],[{"x":20.53951805871925,"y":16.93378483593606},{"x":15.206184725385917,"y":16.467118169269394}],[{"x":15.172851392052584,"y":16.467118169269394},{"x":10.63951805871925,"y":16.63378483593606}],[{"x":10.65462451919876,"y":16.636583586707477},{"x":5.75462451919876,"y":16.76991692004081}],[{"x":5.75462451919876,"y":16.76991692004081},{"x":3.221291185865427,"y":16.636583586707477}],[{"x":3.1491915819387675,"y":16.594703389071064},{"x":1.782524915272101,"y":16.761370055737732}],[{"x":1.782524915272101,"y":16.794703389071064},{"x":-0.05080841806123241,"y":16.8280367224044}]],
	},
	'bertille': {
		player:{
			start:{
				x:51.8,
				y:3,
			},
		},
		bg:{
			src: "img/bertille.jpg",
			scale: 0.7,
		},
		lines:[[{"x":54.56481359613386,"y":38.53435185185185},{"x":50.43148026280053,"y":38.20101851851852}],[{"x":50.43148026280053,"y":38.20101851851852},{"x":47.798146929467194,"y":37.93435185185185}],[{"x":47.798146929467194,"y":37.93435185185185},{"x":45.798146929467194,"y":37.53435185185185}],[{"x":45.798146929467194,"y":37.53435185185185},{"x":44.298146929467194,"y":37.20101851851852}],[{"x":44.298146929467194,"y":37.20101851851852},{"x":42.96481359613386,"y":37.234351851851855}],[{"x":43.038980262800536,"y":37.26308942130484},{"x":41.67231359613387,"y":37.46308942130484}],[{"x":41.73898026280053,"y":37.46308942130484},{"x":39.17231359613387,"y":37.996422754638175}],[{"x":39.17231359613387,"y":37.996422754638175},{"x":39.2056469294672,"y":37.996422754638175}],[{"x":39.2056469294672,"y":37.996422754638175},{"x":37.8056469294672,"y":38.16308942130484}],[{"x":37.8056469294672,"y":38.16308942130484},{"x":36.538980262800536,"y":38.19642275463818}],[{"x":36.538980262800536,"y":38.19642275463818},{"x":35.63898026280053,"y":37.996422754638175}],[{"x":35.63898026280053,"y":37.996422754638175},{"x":34.872313596133864,"y":37.76308942130484}],[{"x":34.872313596133864,"y":37.76308942130484},{"x":34.038980262800536,"y":37.396422754638174}],[{"x":34.038980262800536,"y":37.396422754638174},{"x":33.17231359613387,"y":37.29642275463818}],[{"x":33.17231359613387,"y":37.29642275463818},{"x":31.9056469294672,"y":37.32975608797151}],[{"x":31.938980262800534,"y":37.32975608797151},{"x":30.4056469294672,"y":37.496422754638175}],[{"x":30.338980262800533,"y":37.096422754638176},{"x":32.972313596133866,"y":36.79642275463818}],[{"x":33.1056469294672,"y":36.42975608797151},{"x":39.1056469294672,"y":35.529756087971506}],[{"x":39.3056469294672,"y":36.62975608797151},{"x":42.972313596133866,"y":36.12975608797151}],[{"x":30.4056469294672,"y":37.42975608797151},{"x":26.872313596133868,"y":37.79642275463818}],[{"x":26.9056469294672,"y":37.79642275463818},{"x":25.672313596133865,"y":37.86308942130484}],[{"x":25.656201830728726,"y":37.87353838216929},{"x":20.256201830728727,"y":38.30687171550263}],[{"x":20.256201830728727,"y":38.30687171550263},{"x":19.022868497395393,"y":38.30687171550263}],[{"x":19.08953516406206,"y":38.30687171550263},{"x":15.322868497395394,"y":37.74020504883596}],[{"x":15.356201830728727,"y":37.74020504883596},{"x":13.922868497395394,"y":38.040205048835965}],[{"x":13.922868497395394,"y":38.006871715502626},{"x":12.122868497395393,"y":39.27353838216929}],[{"x":9.156201830728726,"y":33.87353838216929},{"x":9.88953516406206,"y":33.10687171550263}],[{"x":9.88953516406206,"y":33.10687171550263},{"x":10.856201830728727,"y":32.84020504883596}],[{"x":10.856201830728727,"y":32.84020504883596},{"x":11.88953516406206,"y":33.27353838216929}],[{"x":11.88953516406206,"y":33.24020504883596},{"x":12.422868497395394,"y":34.540205048835965}],[{"x":12.422868497395394,"y":34.540205048835965},{"x":12.08953516406206,"y":35.94020504883596}],[{"x":12.08953516406206,"y":35.94020504883596},{"x":11.222868497395392,"y":36.84020504883596}],[{"x":11.222868497395392,"y":36.84020504883596},{"x":10.022868497395393,"y":37.24020504883596}],[{"x":29.261251875142882,"y":34.58144164858724},{"x":28.894585208476215,"y":34.18144164858724}],[{"x":28.96125187514288,"y":34.21477498192057},{"x":28.92791854180955,"y":33.548108315253906}],[{"x":28.92791854180955,"y":33.548108315253906},{"x":29.42791854180955,"y":33.014774981920574}],[{"x":29.42791854180955,"y":33.014774981920574},{"x":29.394585208476215,"y":32.28144164858724}],[{"x":29.394585208476215,"y":32.28144164858724},{"x":29.42791854180955,"y":31.614774981920572}],[{"x":29.42791854180955,"y":31.648108315253907},{"x":30.394585208476215,"y":30.78144164858724}],[{"x":30.394585208476215,"y":30.78144164858724},{"x":30.561251875142883,"y":30.78144164858724}],[{"x":30.594585208476214,"y":30.78144164858724},{"x":30.594585208476214,"y":29.548108315253906}],[{"x":30.594585208476214,"y":29.548108315253906},{"x":31.194585208476216,"y":28.948108315253908}],[{"x":31.194585208476216,"y":28.948108315253908},{"x":32.26125187514288,"y":28.748108315253905}],[{"x":32.06125187514288,"y":28.748108315253905},{"x":32.294585208476214,"y":27.81477498192057}],[{"x":32.294585208476214,"y":27.81477498192057},{"x":33.22791854180955,"y":27.114774981920572}],[{"x":33.22791854180955,"y":27.114774981920572},{"x":33.76125187514288,"y":26.848108315253906}],[{"x":33.76125187514288,"y":26.848108315253906},{"x":34.42791854180955,"y":27.48144164858724}],[{"x":34.33314176419847,"y":27.16992724117488},{"x":34.966475097531806,"y":26.269927241174877}],[{"x":34.966475097531806,"y":26.269927241174877},{"x":35.63314176419848,"y":25.869927241174878}],[{"x":35.63314176419848,"y":25.869927241174878},{"x":36.59980843086514,"y":25.70326057450821}],[{"x":36.59980843086514,"y":25.70326057450821},{"x":36.89980843086514,"y":26.103260574508212}],[{"x":36.89980843086514,"y":26.069927241174877},{"x":37.79980843086514,"y":25.369927241174878}],[{"x":37.79980843086514,"y":25.369927241174878},{"x":38.79980843086514,"y":25.136593907841544}],[{"x":38.79980843086514,"y":25.136593907841544},{"x":39.33314176419847,"y":25.536593907841546}],[{"x":39.33314176419847,"y":25.536593907841546},{"x":39.39980843086514,"y":26.00326057450821}],[{"x":39.39980843086514,"y":25.96992724117488},{"x":39.89980843086514,"y":25.403260574508213}],[{"x":39.89980843086514,"y":25.403260574508213},{"x":40.433141764198474,"y":25.16992724117488}],[{"x":40.433141764198474,"y":25.16992724117488},{"x":40.66647509753181,"y":25.20326057450821}],[{"x":40.66647509753181,"y":25.20326057450821},{"x":41.033141764198476,"y":25.903260574508213}],[{"x":40.999808430865144,"y":25.903260574508213},{"x":41.76647509753181,"y":25.50326057450821}],[{"x":41.76647509753181,"y":25.536593907841546},{"x":42.79980843086514,"y":25.369927241174878}],[{"x":42.79980843086514,"y":25.369927241174878},{"x":43.29980843086514,"y":25.869927241174878}],[{"x":43.36647509753181,"y":25.736593907841545},{"x":44.033141764198476,"y":25.369927241174878}],[{"x":43.999808430865144,"y":25.369927241174878},{"x":45.933141764198474,"y":25.036593907841546}],[{"x":45.933141764198474,"y":25.036593907841546},{"x":46.533141764198476,"y":25.636593907841544}],[{"x":46.533141764198476,"y":25.603260574508212},{"x":47.56647509753181,"y":25.036593907841546}],[{"x":47.56647509753181,"y":25.036593907841546},{"x":48.16647509753181,"y":25.336593907841543}],[{"x":48.13314176419848,"y":25.269927241174877},{"x":48.36647509753181,"y":26.236593907841545}],[{"x":48.36647509753181,"y":26.16992724117488},{"x":48.999808430865144,"y":26.603260574508212}],[{"x":48.966475097531806,"y":26.569927241174877},{"x":48.73314176419847,"y":27.336593907841543}],[{"x":48.73314176419847,"y":27.30326057450821},{"x":49.433141764198474,"y":27.96992724117488}],[{"x":49.433141764198474,"y":27.903260574508213},{"x":49.06647509753181,"y":28.46992724117488}],[{"x":49.06647509753181,"y":28.436593907841544},{"x":49.499808430865144,"y":28.70326057450821}],[{"x":49.499808430865144,"y":28.66992724117488},{"x":49.499808430865144,"y":29.16992724117488}],[{"x":49.499808430865144,"y":29.136593907841544},{"x":49.033141764198476,"y":29.403260574508213}],[{"x":49.033141764198476,"y":29.369927241174878},{"x":49.89980843086514,"y":29.936593907841544}],[{"x":49.89980843086514,"y":29.936593907841544},{"x":49.89980843086514,"y":30.569927241174877}],[{"x":49.89980843086514,"y":30.536593907841546},{"x":49.29980843086514,"y":31.036593907841546}],[{"x":49.29980843086514,"y":31.00326057450821},{"x":50.033141764198476,"y":31.50326057450821}],[{"x":49.999808430865144,"y":31.46992724117488},{"x":49.69980843086514,"y":32.06992724117488}],[{"x":49.69980843086514,"y":32.03659390784154},{"x":49.06647509753181,"y":32.76992724117488}],[{"x":12.77824365402635,"y":26.417851427559253},{"x":14.17824365402635,"y":27.151184760892587}],[{"x":14.111576987359683,"y":27.151184760892587},{"x":15.711576987359683,"y":27.48451809422592}],[{"x":15.711576987359683,"y":27.48451809422592},{"x":18.211576987359685,"y":27.317851427559255}],[{"x":18.14491032069302,"y":27.317851427559255},{"x":23.111576987359683,"y":26.117851427559252}],[{"x":23.111576987359683,"y":26.151184760892587},{"x":25.611576987359683,"y":24.851184760892586}],[{"x":25.566346081594855,"y":24.87526474094149},{"x":27.599679414928186,"y":23.408598074274824}],[{"x":27.566346081594855,"y":23.408598074274824},{"x":30.63301274826152,"y":21.97526474094149}],[{"x":30.53301274826152,"y":21.97526474094149},{"x":34.49967941492819,"y":20.97526474094149}],[{"x":34.49967941492819,"y":20.97526474094149},{"x":37.199679414928184,"y":20.608598074274823}],[{"x":26.399679414928187,"y":24.241931407608156},{"x":25.399679414928187,"y":21.14193140760816}],[{"x":24.666346081594853,"y":21.97526474094149},{"x":24.866346081594852,"y":20.808598074274823}],[{"x":24.866346081594852,"y":20.808598074274823},{"x":26.066346081594855,"y":19.341931407608158}],[{"x":26.066346081594855,"y":19.341931407608158},{"x":27.433012748261522,"y":18.408598074274824}],[{"x":27.433012748261522,"y":18.408598074274824},{"x":29.266346081594854,"y":18.108598074274823}],[{"x":29.266346081594854,"y":18.108598074274823},{"x":29.23301274826152,"y":18.108598074274823}],[{"x":29.199679414928188,"y":18.108598074274823},{"x":30.699679414928188,"y":18.508598074274822}],[{"x":30.699679414928188,"y":18.47526474094149},{"x":32.43301274826152,"y":19.741931407608156}],[{"x":37.15513470453231,"y":20.541852175774707},{"x":39.421801371198974,"y":20.64185217577471}],[{"x":39.421801371198974,"y":20.64185217577471},{"x":42.28846803786564,"y":21.008518842441376}],[{"x":42.25513470453231,"y":21.008518842441376},{"x":45.455134704532306,"y":21.808518842441377}],[{"x":45.421801371198974,"y":21.808518842441377},{"x":48.988468037865644,"y":23.375185509108043}],[{"x":48.988468037865644,"y":23.375185509108043},{"x":51.25513470453231,"y":24.308518842441377}],[{"x":51.214733021081784,"y":24.334643384107828},{"x":52.38139968774845,"y":24.567976717441162}],[{"x":52.34806635441512,"y":24.567976717441162},{"x":54.01473302108179,"y":24.701310050774495}],[{"x":54.01473302108179,"y":24.701310050774495},{"x":55.58139968774845,"y":24.66797671744116}],[{"x":55.54806635441512,"y":24.66797671744116},{"x":57.248066354415116,"y":24.567976717441162}],[{"x":12.491976855519045,"y":17.572481777732456},{"x":13.225310188852378,"y":17.77248177773246}],[{"x":13.225310188852378,"y":17.77248177773246},{"x":15.658643522185711,"y":17.239148444399124}],[{"x":15.658643522185711,"y":17.27248177773246},{"x":17.525310188852377,"y":16.572481777732456}],[{"x":17.525310188852377,"y":16.572481777732456},{"x":20.45864352218571,"y":15.30581511106579}],[{"x":20.45864352218571,"y":15.30581511106579},{"x":23.491976855519045,"y":13.639148444399124}],[{"x":23.491976855519045,"y":13.639148444399124},{"x":26.291976855519046,"y":12.30581511106579}],[{"x":26.22531018885238,"y":12.339148444399124},{"x":28.491976855519045,"y":11.439148444399125}],[{"x":28.42531018885238,"y":11.439148444399125},{"x":30.25864352218571,"y":11.072481777732458}],[{"x":30.191976855519044,"y":11.072481777732458},{"x":32.15864352218571,"y":11.20581511106579}],[{"x":32.05864352218571,"y":11.20581511106579},{"x":33.92531018885238,"y":11.372481777732457}],[{"x":33.82531018885238,"y":11.372481777732457},{"x":36.258643522185714,"y":11.80581511106579}],[{"x":36.22531018885238,"y":11.80581511106579},{"x":38.758643522185714,"y":12.172481777732457}],[{"x":38.791976855519046,"y":12.20581511106579},{"x":41.15864352218571,"y":12.172481777732457}],[{"x":41.12531018885238,"y":12.239148444399124},{"x":43.49197685551905,"y":11.939148444399125}],[{"x":43.49197685551905,"y":11.939148444399125},{"x":44.89197685551905,"y":11.372481777732457}],[{"x":52.60180605745789,"y":19.13930770947659},{"x":52.90180605745789,"y":17.63930770947659}],[{"x":52.90180605745789,"y":17.63930770947659},{"x":54.168472724124555,"y":17.205974376143256}],[{"x":55.58510807146786,"y":16.512629496419233},{"x":56.58510807146786,"y":16.312629496419234}],[{"x":56.58510807146786,"y":16.312629496419234},{"x":57.41844140480119,"y":16.8792961630859}],[{"x":70.69926644768432,"y":5.790667810424067},{"x":65.13259978101766,"y":27.390667810424066}],[{"x":48.343850186444534,"y":11.312708948313174},{"x":49.6105168531112,"y":10.546042281646509}],[{"x":49.6105168531112,"y":10.546042281646509},{"x":50.877183519777866,"y":10.146042281646508}],[{"x":50.9105168531112,"y":10.079375614979842},{"x":51.9105168531112,"y":9.97937561497984}],[{"x":51.9105168531112,"y":9.97937561497984},{"x":53.310516853111196,"y":10.012708948313174}],[{"x":53.310516853111196,"y":10.012708948313174},{"x":53.67718351977786,"y":10.312708948313174}],[{"x":53.55828402844527,"y":13.823560528681348},{"x":55.4916173617786,"y":14.890227195348015}],[{"x":48.094057240801966,"y":19.505336021346775},{"x":48.094057240801966,"y":19.505336021346775}]],
	}
}