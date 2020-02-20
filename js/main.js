$(document).ready(function(){
	$('.slider__2').slick({
		speed:900,
		easing:'ease',
		responsive:[
			{
				breakpoint:1126,
				settings: {
					arrows:false,
					dots:true,
				}
			},{
				breakpoint:492,
				settings:{
					arrows:false,
					dots:true,
				}
			}
			],
	});
});



