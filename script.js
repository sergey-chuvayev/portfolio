	if (window.addEventListener) {
		window.addEventListener("message", function(event) {
			console.log(event.data);
			initFrame(event.data);
		});
	}

function initFrame(params) {
	$('video source').attr('src',params.video);
	$('video').get(0).load();
}