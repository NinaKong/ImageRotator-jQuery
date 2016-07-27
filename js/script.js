/*Nina Kong*/
function slideShow() {
    var currentImage = $('.slideshow .current');
    var nextImage = currentImage.next();
    if (nextImage.length == 0)
        nextImage = $('.slideshow div:first');

    currentImage.removeClass('current').addClass('previous');
    nextImage.css({ opacity: 0.0 }).addClass('current')
            .animate({ opacity: 1.0 }, 2000,
                        function() {
                            currentImage.removeClass('previous');
                        });
}
$(document).ready(function(){
	var windowHeight = $( window ).height();
	$(".image").height(windowHeight);

    var windowWidth = $( window ).width();
    $(".image").width(windowWidth);

	setInterval("slideShow()", 4000);
});
