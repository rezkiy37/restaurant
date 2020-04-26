jQuery(document).ready(function () {

    console.log('Ready!');

    // variables
    let
        $body = $('body');
    width = $(window).width();
    bodyWidth = $body.width();


    // burger 
    let
        $burger = $('.header__burger');
    $nav = $('.header__nav');

    $burger.on('click', function (event) {
        event.preventDefault();

        $(this).toggleClass('active');
        $nav.toggleClass('active');
        $body.toggleClass('no-scroll');
    });

    // top
    if (bodyWidth >= 751) {
        var lastScrollTop = 0;

        $(window).scroll(function (event) {
            var st = $(this).scrollTop();

            if (st > lastScrollTop) {
                $('.header').addClass('header-scroll');
                $('.header__nav').addClass('header__nav-scroll');
            }
            else {
                $('.header').removeClass('header-scroll');
                $('.header__nav').removeClass('header__nav-scroll');
            }
            lastScrollTop = st;
        });
    }

    // all btn or links
    let
        $btn = $('button, a');

    $btn.on('click', function (event) {
        let
            btn_data_btn = $(this).data('btn');
        btn_data_anchor = $(this).data('anchor');
        btn_data_modal_btn = $(this).data('modal_btn');

        switch (btn_data_btn) {
            case "no-click":
                event.preventDefault();
                console.log(btn_data_btn);

                break;
            default:
                console.log('It is not a no-click btn');
        }

        switch (btn_data_anchor) {
            case "#about":
                event.preventDefault();
                console.log(btn_data_anchor);
                break;
            case "#menu":
                event.preventDefault();
                console.log(btn_data_anchor);
                break;
            case "#gallery":
                event.preventDefault();
                console.log(btn_data_anchor);
                break;
            case "#feedback":
                event.preventDefault();
                console.log(btn_data_anchor);
                break;
            case "#contacts":
                event.preventDefault();
                console.log(btn_data_anchor);
                break;
            default:
                console.log('It is not an anchor link');
        }

        switch (btn_data_modal_btn) {
            case "#modal_feedback":
                event.preventDefault();

                console.log(btn_data_modal_btn);

                $('.modal').addClass('open');
                $bg.show();

                $body.addClass('no-scroll');

                setTimeout(function () {
                    $('.modal').css({ "opacity": "1" });
                }, 200);

                setTimeout(function () {
                    $('.modal__feedback').css({ "transform": "scale(1)" });
                }, 300);

                break;
        }
    });

    // menu switcher class
    let
        $switcher = $('.menu__nav__link');
    $menu_item = $('.menu__item');

    $switcher.on('click', function (event) {
        event.preventDefault();

        $switcher.removeClass('menu__nav__link--active');
        $(this).addClass('menu__nav__link--active');

    });

    // map height
    contactsHeight = $('.contacts__inner').height();

    console.log(contactsHeight);

    $('.contacts__map').css({ 'height': contactsHeight });

    // contacts form input wrapper
    if (width <= 450) {
        console.log(width);

        let $input = $('.footer__form__input--wrap');

        $input.wrapAll("<div class='footer__form__input__wrapper'></div>");

        $('.contacts__map').css({ 'height': 500 });
    }

    // Click on BG 
    let $bg = $('.modal');

    $bg.on("click", function () {

        $body.removeClass('no-scroll');

        setTimeout(function () {
            $('.modal__feedback').css({ "transform": "scale(0)" });
        }, 200);

        setTimeout(function () {
            $bg.css({
                'opacity': '0'
            });
        }, 300);

        setTimeout(function () {
            $bg.hide();
            $bg.removeClass('open');
        }, 400);

    });

    $(".modal__window").on("click", function (event) {
        event.stopPropagation();
    });

    // scroll
    $("[data-anchor]").on("click", function (event) {
        event.preventDefault();

        let elementId = $(this).data("anchor");
        let elementOffset = $(elementId).offset().top;

        $("html, body").animate({
            scrollTop: elementOffset - 100
        }, 700);
    });


    // $(window).resize(function () {
    //     newWidth = $(window).width();
    // });






























    // menu switch
    // let
    //     $switcher = $('.menu__nav__link');
    // $menu_item = $('.menu__item');

    // $switcher.on('click', function (event) {
    //     event.preventDefault();

    //     $switcher.removeClass('menu__nav__link--active');
    //     $(this).addClass('menu__nav__link--active');

    //     switcher_data = $(this).data('menu');

    //     console.log(switcher_data);

    //     $.each($menu_item, function () {
    //         menu_item_data = $(this).data('menu_slick');
    //         console.log(menu_item_data);

    //         this_menu_item = '[data-menu_slick="{menu_item_data}"]'.replace('{menu_item_data}', menu_item_data);
    //         console.log(menu_item_data);


    //         if (switcher_data == menu_item_data) {
    //             $menu_item.removeClass('menu__item--active');

    //             menu_item_html = $("div{this_menu_item}".replace('{this_menu_item}', this_menu_item));

    //             console.log(menu_item_html);


    //             menu_item_html.addClass('menu__item--active');

    //             $('.menu__slider').slick('setPosition');
    //         }
    //     });

    // });

    // modal click bg
    // var modalArray = ["modal_feedback"];
    // var modalVisable;

    // if ($('.modal').is(':visible')) {
    //     modalVisable = true;
    // }
    // else {
    //     modalVisable = false;
    // }

    // console.log(modalVisable);


    // window.addEventListener("mouseup", function (event) {

    //     console.log(event.target.className);

    //     if (event.target != modalArray[0] && modalVisable == 1) {

    //         $('.modal__feedback').hide();
    //         $('.modal').hide();

    //         console.log(event.target.className);
    //     }

    // });




});