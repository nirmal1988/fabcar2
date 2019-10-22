var _css = [];
var _styles = [];
var _defaultStyle = {};
document.addEventListener('DOMContentLoaded', function() {
	
	console.log('Load all styles');
	setTimeout(() => {
		SelectionStore.indexedDB.getAllCSS(null, function(css){
			_css = css
		});
	
		SelectionStore.indexedDB.getAllStyles(null, function(styles){
			console.log('styles', styles);
			_styles = styles;
			styles.forEach(function(s){
				var isDefault = '';
				if(s.isDefault == 1){
					_defaultStyle = s;
					isDefault = 'selected';
				}
				$('#ddlStyles').append('<option '+ isDefault +' value="'+ s.styleId +'">'+ s.name +'</option>');
			});
			console.log('_defaultStyle', _defaultStyle);
			var _selectedStyle = _css.filter(x => x.styleId === _defaultStyle.styleId);
			console.log('_selectedStyle', _selectedStyle);
			var _defaultStyle = '';
			_selectedStyle.forEach(function(sc){
				_defaultStyle += sc.property +':'+ sc.value +';';
			});
			$('#defaultStyleList').html('<div style="'+ _defaultStyle +'"><b>Default Style: </b>Sample Text</div>');
		});
	}, 1000);
	
	setTimeout(function(){
		$('#ddlStyles').bind('change', function(){
			var styleId = $(this).val();
			var _defaultStyle = '';
			var _selectedStyle = _css.filter(x => Number(x.styleId) === Number(styleId));
			console.log('_selectedStyle', _selectedStyle);
			_selectedStyle.forEach(function(sc){
				_defaultStyle += sc.property +':'+ sc.value +';';
			});
			$('#defaultStyleList').html('<div style="'+ _defaultStyle +'"><b>Default Style: </b>Sample Text</div>');
		
			// Update Default style
			var _updatedStyle = _styles.filter(x => Number(x.styleId) === Number(styleId))[0];
			var _oldDefStyle = _styles.filter(x => Number(x.isDefault) === 1)[0];
			_updatedStyle.isDefault = 1;
			_oldDefStyle.isDefault = 0;
			SelectionStore.indexedDB.defaultStyle = _updatedStyle;
			SelectionStore.indexedDB.updateStyle(_updatedStyle);
			SelectionStore.indexedDB.updateStyle(_oldDefStyle);
		});
	}, 3000);
	
	$( "#tabs" ).tabs();
	var strFontNames = ["Abadi MT Condensed Light",
	"Albertus Extra Bold",
	"Albertus Medium",
	"Antique Olive",
	"Arial",
	"Arial Black",
	"Arial MT",
	"Arial Narrow",
	"Bazooka",
	"Book Antiqua",
	"Bookman Old Style",
	"Boulder",
	"Calisto MT",
	"Calligrapher",
	"Century Gothic",
	"Century Schoolbook",
	"Cezanne",
	"CG Omega",
	"CG Times",
	"Charlesworth",
	"Chaucer",
	"Clarendon Condensed",
	"Comic Sans MS",
	"Copperplate Gothic Bold",
	"Copperplate Gothic Light",
	"Cornerstone",
	"Coronet",
	"Courier",
	"Courier New",
	"Cuckoo",
	"Dauphin",
	"Denmark",
	"Fransiscan",
	"Garamond",
	"Geneva",
	"Haettenschweiler",
	"Heather",
	"Helvetica",
	"Herald",
	"Impact",
	"Jester",
	"Letter Gothic",
	"Lithograph",
	"Lithograph Light",
	"Long Island",
	"Lucida Console",
	"Lucida Handwriting",
	"Lucida Sans",
	"Lucida Sans Unicode",
	"Marigold",
	"Market",
	"Matisse ITC",
	"MS LineDraw",
	"News GothicMT",
	"OCR A Extended",
	"Old Century",
	"Pegasus",
	"Pickwick",
	"Poster",
	"Pythagoras",
	"Sceptre",
	"Sherwood",
	"Signboard",
	"Socket",
	"Steamer",
	"Storybook",
	"Subway",
	"Tahoma",
	"Technical",
	"Teletype",
	"Tempus Sans ITC",
	"Times",
	"Times New Roman",
	"Times New Roman PS",
	"Trebuchet MS",
	"Tristan",
	"Tubular",
	"Unicorn",
	"Univers",
	"Univers Condensed",
	"Vagabond",
	"Verdana",
	"Westminster",
	"Allegro",
	"Amazone BT",
	"AmerType Md BT",
	"Arrus BT",
	"Aurora Cn BT",
	"AvantGarde Bk BT",
	"AvantGarde Md BT",
	"BankGothic Md BT",
	"Benguiat Bk BT",
	"BernhardFashion BT",
	"BernhardMod BT",
	"BinnerD",
	"Bremen Bd BT",
	"CaslonOpnface BT",
	"Charter Bd BT",
	"Charter BT",
	"ChelthmITC Bk BT",
	"CloisterBlack BT",
	"CopperplGoth Bd BT",
	"English 111 Vivace BT",
	"EngraversGothic BT",
	"Exotc350 Bd BT",
	"Freefrm721 Blk BT",
	"FrnkGothITC Bk BT",
	"Futura Bk BT",
	"Futura Lt BT",
	"Futura Md BT",
	"Futura ZBlk BT",
	"FuturaBlack BT",
	"Galliard BT",
	"Geometr231 BT",
	"Geometr231 Hv BT",
	"Geometr231 Lt BT",
	"GeoSlab 703 Lt BT",
	"GeoSlab 703 XBd BT",
	"GoudyHandtooled BT",
	"GoudyOLSt BT",
	"Humanst521 BT",
	"Humanst 521 Cn BT",
	"Humanst521 Lt BT",
	"Incised901 Bd BT",
	"Incised901 BT",
	"Incised901 Lt BT",
	"Informal011 BT",
	"Kabel Bk BT",
	"Kabel Ult BT",
	"Kaufmann Bd BT",
	"Kaufmann BT",
	"Korinna BT",
	"Lydian BT",
	"Monotype Corsiva",
	"NewsGoth BT",
	"Onyx BT",
	"OzHandicraft BT",
	"PosterBodoni BT",
	"PTBarnum BT",
	"Ribbon131 Bd BT",
	"Serifa BT",
	"Serifa Th BT",
	"ShelleyVolante BT",
	"Souvenir Lt BT",
	"Staccato222 BT",
	"Swis721 BlkEx BT",
	"Swiss911 XCm BT",
	"TypoUpright BT",
	"ZapfEllipt BT",
	"ZapfHumnst BT",
	"ZapfHumnst Dm BT",
	"Zurich BlkEx BT",
	"Zurich Ex BT"];

	$("#font-list").append('<option value="0">Select</option>');

	strFontNames.forEach(function(f){
		$("#font-list").append('<option>'+ f +'</option>');
	});

	$('.div-font-style').click(function(){
		var borderWidth = $(this).css('border-width');
		if($(this).attr("name") == "b"){
			if(borderWidth == "1px")
				$('#style-output').css('font-weight', 'bold');
			else
				$('#style-output').css('font-weight', 'normal');
		}
		else if($(this).attr("name") == "i"){
			if(borderWidth == "1px")
				$('#style-output').css('font-style', 'italic');
			else
				$('#style-output').css('font-style', 'normal');
		}
		else if($(this).attr("name") == "u"){
			var deco = findCurrentDecoration();
			if(borderWidth == "1px")
				deco += " underline";
			else
				deco = deco.replace('underline', '');
			$('#style-output').css('text-decoration', deco);
		}
		else if($(this).attr("name") == "s"){
			var deco = findCurrentDecoration();
			if(borderWidth == "1px")
				deco += " line-through";
			else
				deco = deco.replace('line-through', '').replace(' ', '');
			$('#style-output').css('text-decoration', deco);
		}
		
		$(this).css('border-width', borderWidth == '1px' ? '3px' : '1px');
	});

	$('#font-size').append('<option value="0">Font Size</option>');
	for(var size = 1; size< 40; size++){
		$('#font-size').append('<option value="'+ size +'px">'+ size +'px</option>');
	}

	// show output
	$("#font-list").change(function(){
		if($(this).val() == 0){
			$('#style-output').css('font-family', '');
		}
		else{
			$('#style-output').css('font-family', $(this).val());
		}
	});

	$("#font-size").change(function(){
		if($(this).val() == 0){
			$('#style-output').css('font-size', '');
		}
		else{
			$('#style-output').css('font-size', $(this).val());
		}
	});

	function findCurrentDecoration(){
		var deco = $('#style-output').css('text-decoration');
		console.log('deco', deco);
		var _u =0;
		var _s =0
		if(deco.indexOf('underline') > -1) _u = 1;
		if(deco.indexOf('line-through') > -1) _s = 1;
		if(_u == 1 && _s == 1) deco = "underline line-through";
		else if(_u == 1 && _s == 0) deco = "underline";
		else if(_u == 0 && _s == 1) deco = "line-through";
		else if(_u == 0 && _s == 0) deco = "";
		return deco;
	}
  }, false);