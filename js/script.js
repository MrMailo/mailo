
$(document).ready(function(){
	$('.slider__1').slick({
		fade:false,
		speed:700,
		dots:true,
		arrows:false,
		autoplay:false,
			/*Интервал автоматического переключения слайдера*/
			autoplaySpeed:4000,
					/*пауза при щелчке на любое место  в блоке слайдера*/
					pauseOnFocus:true,
					/*пауза при навидении на слайдер */
					pauseOnHover:true,
					/*пауза  при навидении на точки */
					pauseOnDotsFocus:true,
		/*анимация слайдера*/
		easing:'ease',

	});
});

