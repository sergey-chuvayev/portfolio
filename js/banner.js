var state = '';
var firstWatch = true;

// Player class is in player.js file
var player = new Player($('video'));

$(window).on("message", function(e) {

	switch(e.originalEvent.data) {
		case 'scrolledUnder':
			if (notLockState()) {
				player.pause();
			}
			break;
		case 'scrolledAbove':
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

	// video not loaded: add preloader on load
	player.selectors.video.on('loadstart', function () {
		$(this).attr('poster', 'http://iphonewrd.com/img/loading.gif');
		player.hideAllControls();
	});

	// video loaded: remove preloader on play
	player.selectors.video.on('canplay', function () {
		$(this).removeAttr('poster');
		player.mute();
		player.play();
		
		if (firstWatch) {
			var freq = 5;
			countWatchTime(freq);
			firstWatch = false;
		} else {
			// remove the event listener for time count
			player.selectors.video.off('timeupdate');
		}

		// set progressbar value
		player.selectors.video.on('timeupdate',function(){
			player.setProgressValueTo(this.currentTime, this.duration);
		});
		
	});

	function countWatchTime(frequency) {
		player.selectors.video.on('timeupdate',function() {
			var ct = parseInt(this.currentTime);
			var duration = parseInt(this.duration);
			if (this.lastTime !== ct) {
				// check every freq value
				if (ct % frequency === 0 && ct !== 0) {
					eventOccured(ct);
				}
				// check if video ended
				if (ct === duration) {
					eventOccured('ended');
				} 
			}
			this.lastTime=ct;
		});
	}

	// video ended: appear replay button and pause video
	player.selectors.video.on('ended',function(){
		player.pause();
		player.hideAllControls();
		$('.button-replay').show();
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


	var eventOccured = function(eventParam) {
		// TODO: ability to set adfox or google analytics links
		switch(eventParam) {
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
			default:
				console.info('Watched ', eventParam, ' seconds of video');
		}
	}
    
});
