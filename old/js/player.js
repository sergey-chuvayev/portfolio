var Player = function($videoSelector) {

	this.state = ''; // TODO: make state incapsulated with method getStatus

	this.selectors = {
		video: $videoSelector,
		bReplay: $('.button-replay'),
		bPause: $('.button-pause'),
		bPlay: $('.button-play'),
		bMute: $('.button-mute'),
		bUnmute: $('.button-unmute'),
		progress: $('#progressBar')
	}

	this.pause = function() {
		this.selectors.video.get(0).pause();
		this.selectors.bPlay.show();
		this.selectors.bPause.hide();
		this.state = 'paused'
	}
	this.play = function() {
		this.selectors.video.get(0).play();
		this.selectors.bPlay.hide();
		this.selectors.bPause.show();
		this.selectors.progress.show();
		this.state = 'playing'
	}
	this.replay = function() {
		this.selectors.bReplay.hide();
		this.selectors.video.get(0).currentTime = 0;
		this.selectors.video.get(0).play();
		this.state = 'replay'
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
		this.selectors.video.prop('muted', true);
		this.state = 'muted'
	}
	this.unmute = function() {
		this.selectors.bMute.show();
		this.selectors.bUnmute.hide();
		this.selectors.video.prop('muted', false);
		this.state = 'unmuted'
	}
	this.setProgressValueTo = function(val, duration) {
		var percentage = Math.floor((100 / duration) * val);
		this.selectors.progress.val(percentage);
	}
}