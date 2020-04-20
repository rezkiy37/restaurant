jQuery(document).ready(function () {
    console.log("Slider is ready!");

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
        appendDots: '.menu__controle'
    });

    $('window').resize(function () {
        bodyWidthLive = $('body').width();

        $('.menu__slider').slick('setPosition');
    });
});
