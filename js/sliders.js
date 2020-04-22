jQuery(document).ready(function () {
    console.log("Slider is ready!");

    $('window').resize(function () {
        bodyWidthLive = $('body').width();

        $('.about__slider').slick('setPosition');
        $('.menu__slider').slick('setPosition');
        $('.gallery__slider').slick('setPosition');
    });

    $('.about__slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    });

    $('.menu__slider--1').slick({
        infinite: false,
        rows: 2,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true,
        dots: true,

        responsive: [
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },

            {
                breakpoint: 815,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ],

        appendArrows: $('#controle_1'),
        appendDots: '#controle_1',
    });

    $('.menu__slider--2').slick({
        infinite: false,
        rows: 2,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true,
        dots: true,

        responsive: [
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },

            {
                breakpoint: 815,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ],

        appendArrows: $('#controle_2'),
        appendDots: '#controle_2',
    });

    $('.menu__slider--3').slick({
        infinite: false,
        rows: 2,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true,
        dots: true,

        responsive: [
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },

            {
                breakpoint: 815,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ],

        appendArrows: $('#controle_3'),
        appendDots: '#controle_3',
    });

    $('.menu__slider--4').slick({
        infinite: false,
        rows: 2,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true,
        dots: true,

        responsive: [
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },

            {
                breakpoint: 815,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ],

        appendArrows: $('#controle_4'),
        appendDots: '#controle_4',
    });

    $('.menu__slider--5').slick({
        infinite: false,
        rows: 2,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true,
        dots: true,

        responsive: [
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },

            {
                breakpoint: 815,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ],

        appendArrows: $('#controle_5'),
        appendDots: '#controle_5',
    });

    $('.gallery__slider').slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 2,
        arrows: true,
        dots: true,

        responsive: [
            {
                breakpoint: 1650,
                settings: {
                    appendArrows: $('.gallery__controle'),
                }
            },

            {
                breakpoint: 1280,
                settings: {

                    slidesToShow: 3,
                    slidesToScroll: 2,
                }
            },

            {
                breakpoint: 769,
                settings: {

                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },

            {
                breakpoint: 426,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ],

        appendArrows: $('.gallery__slider__wrapper'),
        appendDots: '.gallery__controle',
    });

    $('.feedback__slider').slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        dots: true,

        responsive: [
            {
                breakpoint: 1650,
                settings: {
                    appendArrows: $('.feedback__controle'),
                }
            },

            {
                breakpoint: 1025,
                settings: {

                    slidesToShow: 2,
                    slidesToScroll: 2,
                    appendArrows: $('.feedback__controle'),
                }
            },

            {
                breakpoint: 426,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    appendArrows: $('.feedback__controle'),
                }
            },
        ],

        appendArrows: $('.feedback__slider__wrapper'),
        appendDots: '.feedback__controle',
    });

});
