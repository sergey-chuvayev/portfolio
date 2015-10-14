$(function() {
	var win = document.getElementsByTagName("iframe")[0].contentWindow;
	win.postMessage('ololo', 'http://localhost:4000/');
});

