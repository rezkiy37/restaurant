jQuery(document).ready(function () {
    console.log("Slider Menu is ready!");

    // menu
    let
        $switcher = $('.menu__nav__link');

    $switcher.on('click', function (event) {
        event.preventDefault();

        $switcher.removeClass('menu__nav__link--active');
        $(this).addClass('menu__nav__link--active');

        switcher_data = $(this).data('menu');

        console.log(switcher_data);

        switch (switcher_data) {
            case "#pizza":

                console.log('pizza');

                $('.menu__slider').slick('slickAdd',
                    ""
                );

                break;

            case "#pasta":

                console.log('pasta');

                $('.menu__slider').slick('slickAdd',
                    ""
                );

                break;

            case "#wine":

                console.log('wine');

                break;

            case "#snack":

                console.log('snack');

                break;

            case "#soup":

                console.log('soup');

                break;
        }

    });


});