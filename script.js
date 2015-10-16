var state = '';
var Player = function() {
	var video = $('video').get(0);
	this.pause = function() {
		video.pause();
		$('.button-play').show();
		$('.button-pause').hide();
		state = 'paused'
	}
	this.play = function() {
		video.play();
		$('.button-play').hide();
		$('.button-pause').show();
		state = 'playing'
	}
	this.replay = function() {
		$('.button-replay').hide();
		video.currentTime = 0;
		video.play();
		state = 'replay'
	}
	this.hideAllControls = function() {
		$('.button-play').hide();
		$('.button-pause').hide();
		$('.button-replay').hide();
		$('.button-mute').hide();
		$('.button-unmute').hide();
	}
	this.mute = function() {
		$('.button-mute').show();
		$('.button-unmute').hide();
		$(video).prop('muted', true);
		state = 'muted'
	}
	this.unmute = function() {
		$('.button-mute').hide();
		$('.button-unmute').show();
		$(video).prop('muted', false);
		state = 'unmuted'
	}
}

var player = new Player();

$(window).on("message", function(e) {

	switch(e.originalEvent.data) {
		case 'scrolledUnder':
			console.log(state);
			if (state !== 'ended' && state !== 'manuallyPaued') {
				player.pause();
			}
			break;
		case 'scrolledAbove':
			console.log(state);
			if (state !== 'ended' && state !== 'manuallyPaued') {
				player.play();
			}
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
		player.mute();
		player.play();
	});

	// appear replay button and pause video
    $('video').get(0).addEventListener('ended',function(){
    	player.pause();
    	player.hideAllControls();
    	$('.button-replay').show();
    	state = 'ended'
    });

    $('.button-replay').click(function(){
    	player.replay();
    });
    $('.button-pause').click(function(){
    	player.pause();
    	state = 'manuallyPaued'
    });
    $('.button-play').click(function(){
    	player.play();
    });
    $('.button-mute').click(function(){
    	player.mute();
    });
    $('.button-unmute').click(function(){
    	player.unmute();
    });
});

function initIFrame(params) {
	$('.banner-container').css('background','url(' + params.bg + ')'); // set bg to banner
	$('video source').attr('src',params.video); // set video src
	$('video').get(0).load();
}