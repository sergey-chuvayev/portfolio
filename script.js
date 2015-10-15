var Player = function() {
	this.pause = function() {
		$('video').get(0).pause();
		$('.button-play').show();
		$('.button-pause').hide();
	}
	this.play = function() {
		$('video').get(0).play();
		$('.button-play').hide();
		$('.button-pause').show();
		$('.button-mute').show();
	}
	this.replay = function() {
		$('.button-replay').hide();
		$('video').get(0).currentTime = 0;
		$('video').get(0).play();
	}
	this.hideAllControls = function() {
		$('.button-play').hide();
		$('.button-pause').hide();
		$('.button-replay').hide();
		$('.button-mute').hide();
		$('.button-unmute').hide();
	}
}

var player = new Player();

$(window).on("message", function(e) {

	switch(e.originalEvent.data) {
		case 'scrolledUnder':
			player.pause();
			break;
		case 'scrolledAbove':
			player.play();
			break;
		default:
			initIFrame(e.originalEvent.data);
	}

});

$(function() {
	// add preloader on load
	$('video').on('loadstart', function () {
		$(this).attr('poster', 'http://iphonewrd.com/img/loading.gif');
		player.hideAllControls();
	});

	// remove preloader on play
	$('video').on('canplay', function () {
		$(this).removeAttr('poster');
		player.play();
	});

	// appear replay button and pause video
    $('video').get(0).addEventListener('ended',function(){
    	player.pause();
    	player.hideAllControls();
    	$('.button-replay').show();
    });

    $('.button-replay').click(function(){
    	player.replay();
    });

    $('.button-pause').click(function(){
    	player.pause();
    });

    $('.button-play').click(function(){
    	player.play();
    });
});

function initIFrame(params) {
	$('.banner-container').css('background','url(' + params.bg + ')'); // set bg to banner
	$('video source').attr('src',params.video); // set video src
	$('video').get(0).load();
}