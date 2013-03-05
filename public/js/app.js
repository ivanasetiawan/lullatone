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
	var windowHeight = $(window).height();

	$('.story').bind({
		'click' : function(e) {
			console.log('clicked');
		},
		'mouseenter' : function(f) {
			console.log('mouseenter');
		},
		'mouseleave' : function(g) {
			console.log('mouseleave');
		}
	});
}
