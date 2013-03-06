$(document).ready(function() {
	//parallex();
	trialError();
});

function parallex() {
	$(window).scroll(function(){
		var body = $('body').scrollTop();
		$('.mainheader img').css('-webkit-transform', 'translateY(' + (body/2) + 'px)');
	});
}

function trialError() {
	$('.color-navs a').on({

		mouseenter: function(){
			bgColor = $(this).css('background-color');
			$('.mainheader').css({
				backgroundColor : bgColor,
				//backgroundImage : 'none'
			}).addClass('yes');
		},

		//mouseleave: function(){
		//	$('body').css(
		//		'background', '#fff url("../lullatone/public/images/linedpaper.png")').removeClass('yes');
		//},

		click: function(){
			bgImg = $(this).css('background-image');
			$('.mainheader').css('background',	bgImg)}
	});
}
