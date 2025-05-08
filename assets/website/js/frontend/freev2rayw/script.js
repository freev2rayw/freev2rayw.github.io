/*-----------------------------------------------------------------------------------
    Template Name: Akpager - Multipurpose Landing page HTML Template
    Template URI: https://webtend.net/demo/html/akpager/
    Author: WebTend
    Author URI:  https://webtend.net/
    Version: 1.0

    Note: This is Main JS File.
-----------------------------------------------------------------------------------
	CSS INDEX
	===================
    ## Header Style
    ## Dropdown menu
    ## Submenu
    ## Sidebar Menu
    ## Menu Hidden Sidebar
    ## Search Box
    ## Fancy Box
    ## Video Popup
    ## Marquee Right
    ## Marquee Left
    ## Testimonials Three
    ## Testimonials Four
    ## Testimonials Five
    ## Testimonials Six
    ## Testimonials Seven
    ## Testimonials Eight
    ## Testimonials Nine
    ## Price Range Fliter
    ## Project Filter
    ## Course Filter
    ## Project Masonry
    ## Coming Soon
    ## Fact Counter
    ## Tooltip
    ## Scroll to Top
    ## Nice Select
    ## AOS Animation
    ## Preloader
    
-----------------------------------------------------------------------------------*/

(function ($) {

    "use strict";

    $(document).ready(function () {

        // ## Header Style and Scroll to Top
        function headerStyle() {
            if ($('.main-header').length) {
                var windowpos = $(window).scrollTop();
                var siteHeader = $('.main-header');
                var scrollLink = $('.scroll-top');
                if (windowpos >= 250) {
                    siteHeader.addClass('fixed-header');
                    scrollLink.fadeIn(300);
                } else {
                    siteHeader.removeClass('fixed-header');
                    scrollLink.fadeOut(300);
                }
            }
        }
        headerStyle();
        
        
        // ## Dropdown menu
        var mobileWidth = 992;
        var navcollapse = $('.navigation li.dropdown');

        navcollapse.hover(function () {
            if ($(window).innerWidth() >= mobileWidth) {
                $(this).children('ul').stop(true, false, true).slideToggle(300);
                $(this).children('.megamenu').stop(true, false, true).slideToggle(300);
            }
        });
        
        // ## Submenu Dropdown Toggle
        if ($('.main-header .navigation li.dropdown ul').length) {
            $('.main-header .navigation li.dropdown').append('<div class="dropdown-btn"><span class="far fa-angle-down"></span></div>');

            //Dropdown Button
            $('.main-header .navigation li.dropdown .dropdown-btn').on('click', function () {
                $(this).prev('ul').slideToggle(500);
                $(this).prev('.megamenu').slideToggle(800);
            });
            
            //Disable dropdown parent link
            $('.navigation li.dropdown > a').on('click', function (e) {
                e.preventDefault();
            });
        }
        
        // Submenu Dropdown Toggle
        if ($('.main-header .main-menu').length) {
            $('.main-header .main-menu .navbar-toggle').click(function () {
                $(this).prev().prev().next().next().children('li.dropdown').hide();
            });
        }
        
        
        // ## Sidebar Menu
        if ($('.sidebar-menu li.dropdown ul').length) {
            $('.sidebar-menu li.dropdown').append('<div class="dropdown-btn"><span class="far fa-angle-down"></span></div>');

            //Dropdown Button
            $('.sidebar-menu li.dropdown .dropdown-btn').on('click', function () {
                $(this).prev('ul').slideToggle(500);
                $(this).prev('.megamenu').slideToggle(800);
            });
            
            //Disable dropdown parent link
            $('.sidebar-menu li.dropdown > a').on('click', function (e) {
                e.preventDefault();
            });
        }
        
        
         
        // ## Menu Hidden Sidebar Content Toggle
        if($('.menu-sidebar').length){
            //Show Form
            $('.menu-sidebar').on('click', function(e) {
                e.preventDefault();
                $('body').toggleClass('side-content-visible');
            });
            //Hide Form
            $('.hidden-bar .cross-icon,.form-back-drop,.close-menu').on('click', function(e) {
                e.preventDefault();
                $('body').removeClass('side-content-visible');
            });
            //Dropdown Menu
            $('.fullscreen-menu .navigation li.dropdown > a').on('click', function() {
                $(this).next('ul').slideToggle(500);
            });
        }
         
        
        // ## Search Box
		$('.nav-search > button').on('click', function () {
			$('.nav-search form').toggleClass('hide');
		});
        
        
        // Hide Box Search WHEN CLICK OUTSIDE
		if ($(window).width() > 767){
			$('body').on('click', function (event) {
				if ($('.nav-search > button').has(event.target).length == 0 && !$('.nav-search > button').is(event.target)
					&& $('.nav-search form').has(event.target).length == 0 && !$('.nav-search form').is(event.target)) {
					if ($('.nav-search form').hasClass('hide') == false) {
						$('.nav-search form').toggleClass('hide');
					};
				}
			});
		}
        
        
        // ## Fancy Box Hover
        $('.fancy-box').hover(
            function(){
                $(this).find('.inner-content').slideDown();
            }, function() {
                $(this).find('.inner-content').slideUp();
            }
        );
        
  
        // ## Video Popup
        if ($('.video-play').length) {
            $('.video-play').magnificPopup({
                type: 'video',
            });
        }
        
        
        // ## Marquee Right Slider
        if ($('.marquee-slider-right').length) {
            $('.marquee-slider-right').slick({
                speed: 8000,
                autoplay: true,
                autoplaySpeed: 0,
                centerMode: true,
                cssEase: 'linear',
                slidesToShow: 1,
                slidesToScroll: 1,
                variableWidth: true,
                infinite: true,
                initialSlide: 1,
                arrows: false,
                buttons: false,
            });
        }
         
        
        // ## Marquee Left Slider
        if ($('.marquee-slider-left').length) {
            $('.marquee-slider-left').slick({
                speed: 8000,
                autoplay: true,
                autoplaySpeed: 0,
                centerMode: true,
                cssEase: 'linear',
                slidesToShow: 1,
                slidesToScroll: -1,
                variableWidth: true,
                infinite: true,
                initialSlide: 1,
                arrows: false,
                buttons: true,
                rtl: true,
            });
        }
         
        
        // ## Testimonials Three Slider
        if ($('.testi-slider-three').length) {
            $('.testi-slider-three').slick({
                autoplay: true,
                autoplaySpeed: 5000,
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                initialSlide: 1,
                arrows: false,
                dots: true,
                responsive: [
                    {
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: 1,
                        }
                    }
                ]
            });
        }
        
        
        // ## Testimonials Four Slider
        if ($('.testi-slider-four').length) {
            $('.testi-slider-four').slick({
                autoplay: true,
                autoplaySpeed: 5000,
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                initialSlide: 1,
                arrows: false,
                dots: true,
                responsive: [
                    {
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: 1,
                        }
                    }
                ]
            });
        }
        
        
        // ## Testimonials Five Slider
        if ($('.testi-slider-five').length) {
            $('.testi-slider-five').slick({
                autoplay: true,
                autoplaySpeed: 5000,
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                initialSlide: 1,
                arrows: false,
                dots: true,
            });
        }
        
        
        // ## Testimonials Six Slider
        if ($('.testi-slider-six').length) {
            $('.testi-slider-six').slick({
                autoplay: true,
                autoplaySpeed: 5000,
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                initialSlide: 1,
                arrows: true,
                dots: false,
                prevArrow: '<button class="prev-arrow"><i class="far fa-chevron-left"></i></button>',
                nextArrow: '<button class="next-arrow"><i class="far fa-chevron-right"></i></button>',
            });
        }
        
        
        // ## Testimonials Seven Slider
        if ($('.testi-slider-seven').length) {
            $('.testi-slider-seven').slick({
                autoplay: true,
                autoplaySpeed: 5000,
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                initialSlide: 1,
                arrows: true,
                dots: false,
                prevArrow: '.testi-prev',
                nextArrow: '.testi-next',
            });
        }
        
        
        
        // ## Testimonials Eight Slider
        if ($('.testi-slider-eight').length) {
            $('.testi-slider-eight').slick({
                autoplay: true,
                autoplaySpeed: 5000,
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                initialSlide: 1,
                arrows: false,
                dots: false,
            });
        }
        
        
        // ## Testimonials Nine Slider
        if ($('.testi-slider-nine').length) {
            $('.testi-slider-nine').slick({
                autoplay: true,
                autoplaySpeed: 5000,
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                initialSlide: 1,
                arrows: false,
                dots: true,
                responsive: [
                    {
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: 2,
                        }
                    },
                    {
                        breakpoint: 991,
                        settings: {
                            slidesToShow: 1,
                        }
                    }
                ]
            });
        }
        
        
        // ## Price Range Fliter jQuery UI
        if ($('.price-slider-range').length) {
            $(".price-slider-range").slider({
                range: true,
                min: 5,
                max: 100,
                values: [10, 65],
                slide: function (event, ui) {
                    $("#price").val("$ " + ui.values[0] + " - $ " + ui.values[1]);
                }
            });
            $("#price").val("$ " + $(".price-slider-range").slider("values", 0) +
                " - $ " + $(".price-slider-range").slider("values", 1));
        }
        
        // ## Project Filter
        $('.project-active').imagesLoaded(function () {
			var items = $('.project-active').isotope({
				itemSelector: '.item',
				percentPosition: true,
				masonry: {
					columnWidth: 1,
				},
			});
			// items on button click
			$('.project-nav').on('click', 'li', function () {
				var filterValue = $(this).attr('data-filter');
				items.isotope({
					filter: filterValue
				});
			});
			// menu active class
			$('.project-nav li').on('click', function (event) {
				$(this).siblings('.active').removeClass('active');
				$(this).addClass('active');
				event.preventDefault();
			});
		});
        
        
        // ## Course Filter
        $('.course-active').imagesLoaded(function () {
			var items = $('.course-active').isotope({
				itemSelector: '.item',
				percentPosition: true,
				masonry: {
					columnWidth: 1,
				},
			});
			// items on button click
			$('.course-nav').on('click', 'li', function () {
				var filterValue = $(this).attr('data-filter');
				items.isotope({
					filter: filterValue
				});
			});
			// menu active class
			$('.course-nav li').on('click', function (event) {
				$(this).siblings('.active').removeClass('active');
				$(this).addClass('active');
				event.preventDefault();
			});
		});
        
        
        
        // ## Project Masonry
        if ($('.project-masonry').length) {
            $(this).imagesLoaded(function () {
                $('.project-masonry').isotope({
                    // options
                    itemSelector: '.item',
                });
            });
        }
        
        
        // ## Coming Soon CountDown //
		if($('.coming-soon-wrap').length !== 0){
                const second = 1000,
				  minute = second * 60,
				  hour = minute * 60,
				  day = hour * 24;
				let	countDown = new Date('Mar 15, 2024 00:00:00').getTime(),
			x = setInterval(function() {
			  let now = new Date().getTime(),
				  distance = countDown - now;
				document.getElementById('days').innerText = Math.floor(distance / (day)),
				document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
				document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
				document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);
			  //do something later when date is reached
			  //if (distance < 0) {
			  //  clearInterval(x);
			  //  'IT'S MY BIRTHDAY!;
			  //}
			}, second)
        };
        
        
        /* ## Fact Counter + Text Count - Our Success */
        if ($('.counter-text-wrap').length) {
            $('.counter-text-wrap').appear(function () {
                
                var $t = $(this),
                    n = $t.find(".count-text").attr("data-stop"),
                    r = parseInt($t.find(".count-text").attr("data-speed"), 10);

                if (!$t.hasClass("counted")) {
                    $t.addClass("counted");
                    $({
                        countNum: $t.find(".count-text").text()
                    }).animate({
                        countNum: n
                    }, {
                        duration: r,
                        easing: "linear",
                        step: function () {
                            $t.find(".count-text").text(Math.floor(this.countNum));
                        },
                        complete: function () {
                            $t.find(".count-text").text(this.countNum);
                        }
                    });
                }

            }, {
                accY: 0
            });
        }
        
        
        
        // ## Tooltip active
        $('.tooltip-item').hover(function () {
            $('.tooltip-item').removeClass('active');
            $(this).addClass('active');
        });
        
        
        
        // ## Scroll to Top
        if ($('.scroll-to-target').length) {
            $(".scroll-to-target").on('click', function () {
                var target = $(this).attr('data-target');
                // animate
                $('html, body').animate({
                    scrollTop: $(target).offset().top
                }, 1000);

            });
        }
        
        
        
        // ## Nice Select
        $('select').niceSelect();
        
        
        // ## AOS Animation
        AOS.init();
        
 
    });
    
    
    /* ==========================================================================
       When document is resize, do
    ========================================================================== */

    $(window).on('resize', function () {
        var mobileWidth = 992;
        var navcollapse = $('.navigation li.dropdown');
        navcollapse.children('ul').hide();
        navcollapse.children('.megamenu').hide();

    });


    /* ==========================================================================
       When document is scroll, do
    ========================================================================== */

    $(window).on('scroll', function () {

        // Header Style and Scroll to Top
        function headerStyle() {
            if ($('.main-header').length) {
                var windowpos = $(window).scrollTop();
                var siteHeader = $('.main-header');
                var scrollLink = $('.scroll-top');
                if (windowpos >= 100) {
                    siteHeader.addClass('fixed-header');
                    scrollLink.fadeIn(300);
                } else {
                    siteHeader.removeClass('fixed-header');
                    scrollLink.fadeOut(300);
                }
            }
        }

        headerStyle();

    });

    /* ==========================================================================
       When document is loaded, do
    ========================================================================== */

    $(window).on('load', function () {

        // ## Preloader
        function handlePreloader() {
            if ($('.preloader').length) {
                $('.preloader').delay(200).fadeOut(500);
            }
        }
        handlePreloader();
        
    });

})(window.jQuery);
