$(window).on("message", function(e) {
	initIFrame(e.originalEvent.data);
});

function initIFrame(params) {
	$('video source').attr('src',params.video); // set video src
	$('video').get(0).load();
	$('.banner-container').css('background','url(' + params.bg + ')'); // set bg to banner
}