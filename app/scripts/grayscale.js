/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery to collapse the navbar on scroll

// $(function(){
//
// 	var $window = $(window);//Window object
// 	var scrollTime = 0.4;//Scroll time
// 	var scrollDistance = 150;//Distance. Use smaller value for shorter scroll and greater value for longer scroll
//
// 	$window.on("mousewheel DOMMouseScroll", function(event){
//
// 		event.preventDefault();
//
// 		var delta = event.originalEvent.wheelDelta/120 || -event.originalEvent.detail/3;
// 		var scrollTop = $window.scrollTop();
// 		var finalScroll = scrollTop - parseInt(delta*scrollDistance);
//
// 		TweenMax.to($window, scrollTime, {
// 			scrollTo : { y: finalScroll, autoKill:true },
// 				ease: Power1.easeOut,	//For more easing functions see http://api.greensock.com/js/com/greensock/easing/package-detail.html
// 				autoKill: true,
// 				overwrite: 5
// 			});
//
// 	});
//
// });
function collapseNavbar() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
}

$(window).scroll(collapseNavbar);
$(document).ready(collapseNavbar);

// jQuery for page scrolling feature - requires jQuery Easing plugin
// $(function() {
//     $('a.page-scroll').bind('click', function(event) {
//         var $anchor = $(this);
//         $('html, body').stop().animate({
//             scrollTop: $($anchor.attr('href')).offset().top
//         }, 1500, 'easeInOutExpo');
//         event.preventDefault();
//     });
// });

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
  if ($(this).attr('class') != 'dropdown-toggle active' && $(this).attr('class') != 'dropdown-toggle') {
    $('.navbar-toggle:visible').click();
  }
});
