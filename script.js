	if (window.addEventListener) {
		window.addEventListener("message", function(event) {
			initIFrame(event.data);
		});
	}

function initIFrame(params) {
	$('video source').attr('src',params.video);
	$('video').get(0).load();
	$('.banner-container').css('background','url(' + params.bg + ')')
}