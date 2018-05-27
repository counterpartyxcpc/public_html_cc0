/* Theme Name: Staro - Responsive Landing page template
   Author: Coderthemes
   Version: 1.0.0
   Created: Aug 2017
   File Description: Main JS file of the template
*/



(function ($) {

    'use strict';

    function initNavbar() {

        $('.navbar-nav a').bind('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 0
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });
    }

    function initSticky() {
        $(".sticky").sticky({
            topSpacing: 0
        });
    }

    function initMagnificPopup() {
        $('.video-play-icon').magnificPopup({
          disableOn: 700,
          type: 'iframe',
          mainClass: 'mfp-fade',
          removalDelay: 160,
          preloader: false,

          fixedContentPos: false
        });
    }


    function init() {
        initNavbar();
        initSticky();
        initMagnificPopup();
        Waves.init();
    }

    init();

})(jQuery)