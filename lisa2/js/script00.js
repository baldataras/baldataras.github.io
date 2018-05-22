$(function () {
    function time() {
        var today = new Date;
        var year = today.getFullYear();
        $('.update_date').text(year);
        console.log('LisA DESIGN ©' + year + '. All rights reserved');
    };
    time()

    $(document).ready(function () {
        $('.log_in').addClass('active')
    });

    setTimeout(function () {
        $('.banner').addClass('active');
    }, 100);

    $(".slider1").click({
        infinite: true,
        arrows: true,
        slidesToShow: 3,
        dots: true,
        dotsClass: 'slick-dots',
        autoplay: false,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 2
                }
		},
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    arrows: false
                }
		},
		]
    });

    function mobil_menu() {
        var w = $(window).outerWidth();
        if (w <= 769) {
            $('.mobil_button').click(function () {
                $('header,nav').toggleClass('active');
            });
            $(window).scroll(function () {
                $('header,nav').removeClass('active');
            });
        }
    }
    mobil_menu();
    $(document).resize(function () {
        mobil_menu();
    });

    $(document).on('click', '.remove_tag ', function () {
        $(this).closest('.tag').remove();
    });


    function body_hidden() {
        if ($('body').hasClass('hidden')) {
            $('body').removeClass('hidden');
            $('.gallery').find('.active').removeClass();
            $('.slick-track').find('.active').removeClass('active');

        } else {
            $('body').addClass('hidden');
        }
    }

    function open_img() {
        var a = $('.gallery').find('.active').children('img').attr('src');
        $('.full_img').attr('src', a);
    };

    $(document).on('click', '.gallery  div', function () {
        var a = $(this).closest('.gallery').find('.active').removeClass();
        $(this).addClass('active');
        open_img();
        $('.modal_box').addClass('active');
        body_hidden();
    });

    $(document).on('click', '.close_modal', function () {
        $('.modal_box').removeClass().addClass('modal_box');
        $('.full').removeAttr('src');

        body_hidden();
    });

    $(document).on('click', '.step_right', function () {
        var next_class = $('.gallery').find('.active').removeClass().next('div').addClass('active');
        open_img();
        if (!next_class.length) {
            $('.gallery').find('.open').removeClass('active');
            $('.gallery div').first().addClass('active');
            open_img();
        }
    });

    $(document).on('click', '.step_left', function () {
        var prev_class = $('.gallery').find('.active').removeClass('active').prev('div').addClass('active');
        open_img();
        if (!prev_class.length) {
            $('.gallery').find('.open').removeClass('active');
            $('.gallery div').last().addClass('active');
            open_img();
        }
    });

    $(document).keydown(function (events) {
        if ($('.modal_box').hasClass('active')) {
            if (events.keyCode == 39) {
                $('.step_right').click();
            } else if (events.keyCode == 37) {
                $('.step_left').click();
            } else if (events.keyCode == 27) {
                $('.close_modal').click();
            }
        }
    });



    function open_img1() {
        var a = $('.slick-track').find('.active').children('img').attr('src');
        $('.full_img').attr('src', a);
    };

    $(document).on('click', '.slick-track .col img', function () {
        var a = $(this).closest('.slick-track').find('.active').removeClass('active');
        $(this).addClass('active');
        open_img1();
        $('.modal_box').addClass('active');
        body_hidden();
    });



    $(document).on('click', '.step_right', function () {
        var next_class = $('.slick-track').find('.active').removeClass('active').next('.col').addClass('active');
        open_img1();
        if (!next_class.length) {
            $('.slick-track').find('.active').removeClass('active');
            $('.slick-track .col').first().addClass('active');
            open_img1();
        }
    });

    $(document).on('click', '.step_left', function () {
        var prev_class = $('.slick-track').find('.active').removeClass('active').prev('.col').addClass('active');
        open_img1();
        if (!prev_class.length) {
            $('.slick-track').find('.active').removeClass('active');
            $('.slick-track .col').last().addClass('active');
            open_img1();
        }
    });




});
