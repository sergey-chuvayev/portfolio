$(function() {
	init({
		video: 'http://lamcdn.net/specials.lookatme.ru/0000000001/banners/system/clients/top/guerlain/video2.mp4',
		bg: 'http://www.emoticonswallpapers.com/background/skulls/skulls-background-pattern-0815.gif'
	});
});

function init(params) {
	// setTimeout(function() {
		var win = document.getElementsByTagName("iframe")[0].contentWindow;
		win.postMessage(params, 'http://localhost:4000/');
	// }, 100);
}