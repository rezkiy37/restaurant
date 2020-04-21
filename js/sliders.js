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

    $('.menu__slider').slick({
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

        appendArrows: $('.menu__controle'),
        appendDots: '.menu__controle',
    });

    $('.gallery__slider').slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 2,
        arrows: true,
        dots: true,

        responsive: [
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

        appendArrows: $('.gallery__controle'),
        appendDots: '.gallery__controle',
    });


});
