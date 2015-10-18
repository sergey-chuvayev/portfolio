var Player = function($videoSelector) {

	this.selectors = {
		video: $videoSelector,
		bReplay: $('.button-replay'),
		bPause: $('.button-pause'),
		bPlay: $('.button-play'),
		bMute: $('.button-mute'),
		bUnmute: $('.button-unmute'),
		progress: $('#progressBar')
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
		this.selectors.progress.show();
		state = 'playing'
	}
	this.replay = function() {
		this.selectors.bReplay.hide();
		video.currentTime = 0;
		video.play();
		state = 'replay'
	}
	this.hideAllControls = function() {
		this.selectors.progress.hide();
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
	this.setProgressValueTo = function(val, duration) {
		var percentage = Math.floor((100 / duration) * val);
		this.selectors.progress.val(percentage);
	}
}