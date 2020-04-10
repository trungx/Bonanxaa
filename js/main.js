/*
Template Name: Bonanxaa - Minimal Portfolio Html 5 Responsive Template
Template URI: http://coderboys.net/
Author: CoderHut
Author URI: http://coderboys.net/
Version: 1.0
Tags: 
*/

(function ($) {

    'use strict';
    /*  ======================================
        Scroll To Menu fixed On Top
        ====================================== */
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 100) {
            $('.site-header').addClass('fixed-hdr');
        } else {
            $('.site-header').removeClass('fixed-hdr');
        }
    });

    /*  ======================================
        MeanMenu Active
        ====================================== */
    $('#mobile-menu').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: "991",
    });


    /*  ======================================
        Slider Carousel Active
        ====================================== */
    $(".slider-active").owlCarousel({
        animateOut: 'slideOutLeft',
        animateIn: 'fadeIn',
        items: 1,
        loop: true,
        autoplay: true,
        dots: false,
        autoplayTimeout: 6000, // auto play time
        mouseDrag: false,
        nav: true,
        navText: ["<i class='fas fa-angle-left'></i>", "<i class='fas fa-angle-right'></i>"],
        responsive: {
            0: {
                items: 1,
                nav: false,
                dots: true
            },
            767: {
                items: 1,
                nav: false,
                dots: false,
            },
            991: {
                items: 1,
                nav: true,
                dots: false,
            }
        }
    });

    $(".slider-active").on('translate.owl.carousel', function () {
        $('.single-slide-item h1').removeClass('fadeIn animated animated-04s').hide();
        $('.single-slide-item p').removeClass('fadeIn animated animated-08s').hide();
        $('.single-slide-item a').removeClass('fadeIn animated animated-12s').hide();
    });

    $(".slider-active").on('translated.owl.carousel', function () {
        $('.owl-item.active .single-slide-item h1').addClass('fadeIn animated animated-04s').show();
        $('.owl-item.active .single-slide-item p').addClass('fadeIn animated animated-08s').show();
        $('.owl-item.active .single-slide-item a').addClass('fadeIn animated animated-12s').show();
    });
    /*  ======================================
        Brand Carousel Active
        ====================================== */
    $(".brand-active").owlCarousel({
        items: 6,
        loop: true,
        autoplay: true,
        dots: false,
        nav: false,
        responsive: {
            0: {
                items: 2,
                nav: false,
            },
            600: {
                items: 4,
                nav: false,
            },
            1024: {
                items: 6,
                nav: false,
            }
        }
    });

    /*  ======================================
        Portfolio Carousel Active
        ====================================== */
    $(".portfolio-slider-active").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        dots: true,
        nav: false,
        responsive: {
            0: {
                items: 1,
                nav: false,
                dots: false,
            },
            600: {
                items: 1,
                nav: false,
            },
            1024: {
                items: 1,
                nav: false,
            }
        }
    });
    var itemBg = $('.itembg');

    $('.portfolio-slider-active .single-portfolio-slider').each(function () {
        var itmeImg = $(this).find('.itembg img').attr('src');
        $(this).css({
            background: 'url(' + itmeImg + ')'
        });
    });

    function slideThumb() {
        // Thumbnail

        var dotcount = 1;

        $('.portfolio-slider-active .owl-dot').each(function () {
            $(this).addClass('dotnumber' + dotcount);
            $(this).attr('data-info', dotcount);
            dotcount = dotcount + 1;
        });

        var slidecount = 1;

        $('.portfolio-slider-active .owl-item').not('.cloned').each(function () {
            $(this).addClass('slidenumber' + slidecount);
            slidecount = slidecount + 1;
        });

        $('.portfolio-slider-active .owl-dot').each(function () {

            var grab = $(this).data('info');
            var slidegrab = $('.slidenumber' + grab + ' .itembg img').attr('src');

            $(this).css("background-image", "url(" + slidegrab + ")");

        });
    }

    slideThumb();
    $(".portfolio-slider-active").on('translated.owl.carousel', function () {
        slideThumb();
    });
    
    /*  ======================================
        Ajax Contact form
        ====================================== */
    
    // Get the form.
    var form = $('#contact-form');

    // Get the messages div.
    var formMessages = $('.form-message');

    // Set up an event listener for the contact form.
    $(form).submit(function (e) {
        // Stop the browser from submitting the form.
        e.preventDefault();

        // Serialize the form data.
        var formData = $(form).serialize();

        // Submit the form using AJAX.
        $.ajax({
            type: 'POST',
            url: $(form).attr('action'),
            data: formData
        })
        .done(function (response) {
            // Make sure that the formMessages div has the 'alert-success' class.
            $(formMessages).removeClass('alert alert-danger');
            $(formMessages).addClass('alert alert-success');

            // Set the message text.
            $(formMessages).text(response);

            // Clear the form.
            $('#contact-form input,#contact-form textarea').val('');
        })
        .fail(function (data) {
            // Make sure that the formMessages div has the 'alert-danger' class.
            $(formMessages).removeClass('alert alert-success');
            $(formMessages).addClass('alert alert-danger');

            // Set the message text.
            if (data.responseText !== '') {
                $(formMessages).text(data.responseText);
            } else {
                $(formMessages).text('Oops! An error occured and your message could not be sent.');
            }
        });
    });


    $(window).on('load', function () {

        /*  ======================================
        Preloader Active
        ====================================== */
        var preLoader = $('.preloader');
        preLoader.fadeOut('500');


        /*  ======================================
        Isotope Active
        ====================================== */
        $('.gallery-list button').on('click', function () {
            $('.gallery-list button').removeClass('active');
            $(this).addClass('active');
        });
        var $container = $('.grid');
        $container.isotope({
            itemSelector: '.grid .grid-item',
            percentPosition: true,
            masonry: {
                columnWidth: 1
            }
        });
        $('#filters').on('click', 'button', function () {
            var filterValue = $(this).attr('data-filter');
            $container.isotope({
                filter: filterValue
            });
            return false;
        });
    });

}(jQuery));
