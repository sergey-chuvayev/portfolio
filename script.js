$(window).on("message", function(e) {

	switch(e.originalEvent.data.eventName) {
		case 'scrolledDown':
			$('video').get(0).pause();
			break;
		case 'scrolledUp':
			$('video').get(0).play();
			break;
		default:
			initIFrame(e.originalEvent.data);
	}

});

function initIFrame(params) {
	$('video source').attr('src',params.video); // set video src
	$('video').get(0).load();
	$('.banner-container').css('background','url(' + params.bg + ')'); // set bg to banner
}