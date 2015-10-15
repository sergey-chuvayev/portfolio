$(window).on("message", function(e) {

	switch(e.originalEvent.data) {
		case 'scrolledUnder':
			$('video').get(0).pause();
			$('.button-play').show();
			$('.button-pause').hide();
			break;
		case 'scrolledAbove':
			$('video').get(0).play();
			$('.button-play').hide();
			$('.button-pause').show();
			break;
		default:
			initIFrame(e.originalEvent.data);
	}

});

$(function() {
	// add preloader on load
	$('video').on('loadstart', function () {
		$(this).attr('poster', 'http://iphonewrd.com/img/loading.gif');
	});

	// remove preloader on play
	$('video').on('canplay', function () {
		$(this).removeAttr('poster');
	});

	// appear replay button and pause video
    $('video').get(0).addEventListener('ended',function(){
    	$('.button-replay').show();
    	$(this).get(0).pause();
		$('.button-pause').hide();
		$('.button-mute').hide();
		$('.button-unmute').hide();
    },true);
});

function initIFrame(params) {
	$('.banner-container').css('background','url(' + params.bg + ')'); // set bg to banner
	$('video source').attr('src',params.video); // set video src
	$('video').get(0).load();
}