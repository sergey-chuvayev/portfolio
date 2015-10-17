var state = '';

var Player = function($videoSelector, selectors) {

	this.selector = {
		video: $videoSelector,
		bReplay: $('.button-replay'),
		bPause: $('.button-pause'),
		bPlay: $('.button-play'),
		bMute: $('.button-mute'),
		bUnmute: $('.button-unmute')
	}

	console.log(this.selector);

	var video = this.selector.video.get(0);
	
	this.pause = function() {
		video.pause();
		this.selector.bPlay.show();
		this.selector.bPause.hide();
		state = 'paused'
	}
	this.play = function() {
		video.play();
		this.selector.bPlay.hide();
		this.selector.bPause.show();
		state = 'playing'
	}
	this.replay = function() {
		this.selector.bReplay.hide();
		video.currentTime = 0;
		video.play();
		state = 'replay'
	}
	this.hideAllControls = function() {
		this.selector.bPlay.hide();
		this.selector.bPause.hide();
		this.selector.bReplay.hide();
		this.selector.bMute.hide();
		this.selector.bUnmute.hide();
	}
	this.mute = function() {
		this.selector.bMute.show();
		this.selector.bUnmute.hide();
		$(video).attr('muted', true);
		state = 'muted'
	}
	this.unmute = function() {
		this.selector.bMute.hide();
		this.selector.bUnmute.show();
		$(video).attr('muted', false);
		state = 'unmuted'
	}
}

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
		return state !== 'ended' && state !== 'manuallyPaued'
	}

});

$(function() {

	// add preloader on load
	player.selector.video.on('loadstart', function () {
		$(this).attr('poster', 'http://iphonewrd.com/img/loading.gif');
		player.hideAllControls();
	});

	// remove preloader on play
	player.selector.video.on('canplay', function () {
		console.log('canplay');
		$(this).removeAttr('poster');
		player.mute();
		player.play();
	});

	// appear replay button and pause video
    player.selector.video.get(0).addEventListener('ended',function(){
    	player.pause();
    	player.hideAllControls();
    	$('.button-replay').show();
    	state = 'ended'
    });

    player.selector.bReplay.click(function(){
    	player.replay();
    });
    player.selector.bPause.click(function(){
    	player.pause();
    	state = 'manuallyPaued'
    });
    player.selector.bPlay.click(function(){
    	player.play();
    });
    player.selector.bMute.click(function(){
    	player.mute();
    });
    player.selector.bUnmute.click(function(){
    	player.unmute();
    });
});

function initIFrame(params) {
	$('.banner-container').css('background','url(' + params.bg + ')'); // set bg to banner
	$('video source').attr('src',params.video); // set video src
	$('video').get(0).load();
}