$.fn.iFrameVideoBanner = function(options) {

	if (options.iframeURL === undefined) {
		throw 'Please pass iFrame URL as { iframeURL: "http://hostname.domain/iframepage" }'
	}
	if (options.video === undefined) {
		throw 'Please pass video URL as { video: "link/to/video" }'
	}
	if (options.bg === undefined) {
		throw 'Please pass background URL as { bg: "link/to/background" }'
	}

	var $iframe = this;

	var defaultOptions = { 
		iframeURL: 'http://localhost:4000/',
		video: '',
		bg: '',
		width: 970,
		height: 250
	}

	// check if some otions are undefined
	for (var option in defaultOptions) {
		if (options[option] === undefined) {
			options[option] = defaultOptions[option];
		}
	}

	// set passed options to iframe
	$iframe.attr('src', options.iframeURL)
		.attr('width', options.width)
		.attr('height', options.height)
		.attr('scrolling', 'no');

	// pass video and bg links to iframe
	// wait untill iframe loaded
	var iframe = $iframe.get(0);
	iframe.onload = function() {
		var win = iframe.contentWindow;
		win.postMessage({
			video: options.video,
			bg: options.bg
		}, options.iframeURL);

	};

	// scrolling events and postMessage stuff
	var h = $iframe.attr('height');
	var bannerBottom = $iframe.position().top + h / 2;
	$(document, window).scroll(function() {
		var iframe = $iframe.get(0);
		var win = iframe.contentWindow;
		if ($(document, window).scrollTop() > bannerBottom) {
			win.postMessage('scrolledUnder', options.iframeURL);
		} else {
			win.postMessage('scrolledAbove', options.iframeURL);
		}
	});
};