var state = '';

var Player = function($videoSelector) {

	this.selectors = {
		video: $videoSelector,
		bReplay: $('.button-replay'),
		bPause: $('.button-pause'),
		bPlay: $('.button-play'),
		bMute: $('.button-mute'),
		bUnmute: $('.button-unmute')
	}

	var video = this.selectors.video.get(0);
	
	this.pause = function() {
		video.pause();
		this.selectors.bPlay.show();
		this.selectors.bPause.hide();
		state = 'paused'
	}
	this.play = function() {
		video.play();
		this.selectors.bPlay.hide();
		this.selectors.bPause.show();
		state = 'playing'
	}
	this.replay = function() {
		this.selectors.bReplay.hide();
		video.currentTime = 0;
		video.play();
		state = 'replay'
	}
	this.hideAllControls = function() {
		this.selectors.bPlay.hide();
		this.selectors.bPause.hide();
		this.selectors.bReplay.hide();
		this.selectors.bMute.hide();
		this.selectors.bUnmute.hide();
	}
	this.mute = function() {
		this.selectors.bMute.hide();
		this.selectors.bUnmute.show();
		$(video).prop('muted', true);
		state = 'muted'
	}
	this.unmute = function() {
		this.selectors.bMute.show();
		this.selectors.bUnmute.hide();
		$(video).prop('muted', false);
		state = 'unmuted'
	}
}

// create object on video
var player = new Player($('video'));

$(window).on("message", function(e) {

	switch(e.originalEvent.data) {
		case 'scrolledUnder':
			console.log(state);
			if (notLockState()) {
				player.pause();
			}
			break;
		case 'scrolledAbove':
			console.log(state);
			if (notLockState()) {
				player.play();
			}
			break;
		default:
			initIFrame(e.originalEvent.data);
	}

	function notLockState() {
		return state !== 'ended' && state !== 'manuallyPaued';
	}

	function initIFrame(params) {
		player.selectors.video.parent().css('background','url(' + params.bg + ')'); // set bg to banner
		player.selectors.video.children('source').attr('src',params.video); // set video src
		player.selectors.video.get(0).load();
	}

});

$(function() {

	// add preloader on load
	player.selectors.video.on('loadstart', function () {
		$(this).attr('poster', 'http://iphonewrd.com/img/loading.gif');
		player.hideAllControls();
	});

	// remove preloader on play
	player.selectors.video.on('canplay', function () {
		console.log('canplay');
		$(this).removeAttr('poster');
		player.mute();
		player.play();
	});

	// video ended: appear replay button and pause video
    player.selectors.video.get(0).addEventListener('ended',function(){
    	player.pause();
    	player.hideAllControls();
    	$('.button-replay').show();
    	eventOccured('ended');
    	state = 'ended'
    });

    // click events
    player.selectors.bReplay.click(function(){
    	player.replay();
    	eventOccured('replay');
    });
    player.selectors.bPause.click(function(){
    	player.pause();
    	state = 'manuallyPaued'
    	eventOccured('pause');
    });
    player.selectors.bPlay.click(function(){
    	player.play();
    	eventOccured('play');
    });
    player.selectors.bMute.click(function(){
    	player.mute();
    	eventOccured('mute');
    });
    player.selectors.bUnmute.click(function(){
    	player.unmute();
    	eventOccured('unmute');
    });

	var eventOccured = function(eventStr) {
		// TODO: ability to set adfox or google analytics links
		switch(eventStr) {
			case 'replay':
				console.info('Replay button pressed');
				// example of google analytics 
				// ga('send', 'event', 'replay', 'click');
				break;
			case 'play':
				console.info('Play button pressed');
				break;
			case 'pause':
				console.info('Pause button pressed');
				break;
			case 'mute':
				console.info('Mute button pressed');
				break;
			case 'unmute':
				console.info('Unmute button pressed');
				break;
			case 'ended':
				console.info('Video has been fully played');
				break;
		}
	}
    
});
