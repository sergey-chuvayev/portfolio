$.fn.iFrameVideoBanner = function(options) {

	var $iframe = this;

	var defaultOptions = { 
		iframeURL: 'http://localhost:4000/',
		video: 'http://lamcdn.net/specials.lookatme.ru/0000000001/banners/system/clients/top/guerlain/video2.mp4',
		bg: 'http://content.adfox.ru/151007/adfox/503157/1402233_2.jpg',
		width: 970,
		height: 250
	}
	for(var option in defaultOptions) this[option] = options && options[option]!==undefined ? options[option] : defaultOptions[option];

	// set iframeUrl to iframe
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