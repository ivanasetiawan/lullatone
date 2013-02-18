$(document).ready(function() {
	paralex();
});

function paralex() {
	$(window).scroll(function(){
		var body = $('body').scrollTop();
		$('.mainheader img').css('-webkit-transform', 'translateY(' + (body/5) + 'px)');
	});
}
