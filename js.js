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
    });

    // menu switch
    let
        $switcher = $('.menu__nav__link');
    $menu_item = $('.menu__item');

    $switcher.on('click', function (event) {
        event.preventDefault();

        $switcher.removeClass('menu__nav__link--active');
        $(this).addClass('menu__nav__link--active');
    });

































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




});