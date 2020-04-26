window.onload = () => {

    let menu = document.getElementsByClassName('menu__slider'),
        controle = document.getElementsByClassName('menu__controle');


    console.log(menu);

    for (let i = 0; i < menu.length; i++) {

        if (i == 0) {
            menu[i].style.display = 'block';
            controle[i].style.display = 'block';
        }
        else {
            menu[i].style.display = 'none';
            controle[i].style.display = 'none';
        }
    }

    document.querySelector('.menu__nav').addEventListener('click', linkClick);

    function linkClick(event) {

        console.log(event);

        if (event.target.className == 'menu__nav__link menu__nav__link--active') {
            let
                data_tab = event.target.getAttribute('data-tab-link');

            console.log(data_tab, menu);

            for (i = 0; i < menu.length; i++) {
                if (data_tab == i) {
                    menu[i].style.display = 'block';
                    controle[i].style.display = 'block';

                    $('.menu__slider').slick('setPosition');
                }
                else {
                    menu[i].style.display = 'none';
                    controle[i].style.display = 'none';
                }
            }

        }
    }

}