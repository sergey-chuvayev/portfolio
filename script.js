$(window).on("message", function(e) {

	switch(e.originalEvent.data) {
		case 'scrolledUnder':
			console.log(e.originalEvent.data);
			$('video').get(0).pause();
			break;
		case 'scrolledAbove':
			console.log(e.originalEvent.data);
			$('video').get(0).play();
			break;
		default:
			initIFrame(e.originalEvent.data);
	}

});

$(function() {
	$('video').on('loadstart', function () {
		$(this).attr("poster", "http://iphonewrd.com/img/loading.gif");
	});
	$('video').on('canplay', function () {
		$(this).removeAttr("poster");
	});
});

function initIFrame(params) {
	$('.banner-container').css('background','url(' + params.bg + ')'); // set bg to banner
	$('video source').attr('src',params.video); // set video src
	$('video').get(0).load();
}