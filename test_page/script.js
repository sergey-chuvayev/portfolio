var config = {
	iframeURL: 'http://localhost:4000/'
}

$(function() {

	// set iframe url to iframe
	$('iframe').attr('src', config.iframeURL);

	// pass video and bg links to iframe
	init({
		video: 'http://lamcdn.net/specials.lookatme.ru/0000000001/banners/system/clients/top/guerlain/video2.mp4',
		bg: 'http://content.adfox.ru/151007/adfox/503157/1402233_2.jpg'
	});

	var bannerBottom = $('.iframe-container').position().top + $('.iframe-container').height();
	$(document, window).scroll(function() {
		var iframe = $('iframe').get(0);
		if ($(document, window).scrollTop() > bannerBottom) {
			var win = iframe.contentWindow;
			win.postMessage('scrolled', config.iframeURL);
		}
	});
});

function init(params) {
	var iframe = $('iframe').get(0);
	
	// wait untill iframe loaded
	iframe.onload = function() {
		var win = iframe.contentWindow;
		win.postMessage(params, config.iframeURL);
	};
}