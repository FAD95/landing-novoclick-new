$(document).ready(function() {

    $(window).scroll(function() {
        scroll = $(window).scrollTop();
        if (scroll > 100) {
            $('.menu').css({ "position": "fixed" });
            $('.menu').css({ "width": "100%" });
            $('.menu').css({ "top": "0" });
            $('.menu').css({ "background": "#262626" });
            $('.menu a').css({ "color": "#fff" });
            $('.logo').css({ "color": "#fff" });
            $('.menu').css({ "box-shadow": "rgba(0, 0, 0, 0.22) 6px 1px 1px" });
            $('.menu').css({ "z-index": "100" });
        } else {
            $('.menu').css({ "position": "relative" });
            $('.menu').css({ "background": "transparent" });
            $('.menu').css({ "box-shadow": "0 0 0" });
            $('.menu a').css({ "color": "#fff" });
            $('.logo').css({ "color": "#fff" });
        }
    });

    $('.menu-icon').click(function() {
        $('header nav').slideToggle();
    });


    $('.contain-btn').click(function() {
        var y = $(window).scrollTop();
        $(window).scrollTop(y + 700);

        $('.initial-avatar').addClass('active-avatar');
    });

    $('.no-show-avatar').click(function() {
        $('.avatar').removeClass('active-avatar');
    })

    $('.active-elements').click(function() {
        $('.avatar').addClass('active-avatar');
    })

    $('.btn-avatar').click(function() {
        var y = $(window).scrollTop();
        $(window).scrollTop(y + 700);
    });


    $(document.body).on('click', '#menu-items a', function() {
        $('#menu-items a div').removeClass('isActive');

        $(this).find('div').addClass('isActive');
    });


    var menuActive = ''

    const setActiveMenu = (menu, active=true) => {

        $(`#menu-items a div`).removeClass('isActive');
        $(`#menu-items #${menu} div`).addClass('isActive');


        if ( active ) {
            menuActive = menu;
        }
    }

    $(window).scroll(function() {

        var positionCurrent = $(this).scrollTop();

        var withCurrent = $('.myBar')[0].style.width.split('%')[0];


        if (positionCurrent >= 0 && positionCurrent <= 2000) {
            
            setActiveMenu('nosotros-1', false);

            putProgress(withCurrent, 1);

        } else if (positionCurrent >= 3120 && positionCurrent <= 4200) {
       
            setActiveMenu('platos-digitales-1');

            putProgress(withCurrent, 2);

        } else if (positionCurrent >= 2001 && positionCurrent <= 3121) {

            setActiveMenu('herramientas-1');

            putProgress(withCurrent, 3);

        } else if (positionCurrent >= 4200 && positionCurrent <= 5000) {
          
            setActiveMenu('clientes-1');


            putProgress(withCurrent, 4);

        } else if (positionCurrent >= 5001 && positionCurrent <= 6499) {

            setActiveMenu('team-1');

            putProgress(withCurrent, 5);
        } else if (positionCurrent >= 6500 && positionCurrent <= 9199) {
           
            setActiveMenu('momento-1');

            putProgress(withCurrent, 6);
        } else if (positionCurrent >= 9200 && positionCurrent <= 10499) {

            setActiveMenu('academia-novoclick-1');

            putProgress(withCurrent, 7);
        } else if (positionCurrent >= 10500 && positionCurrent < 12800) {

            setActiveMenu('blog-1');

            putProgress(withCurrent, 8);

        } else if (positionCurrent >= 12800) {

            setActiveMenu('contacto-1');

            putProgress(withCurrent, 9);

        } else {
            $(`#menu-items a div`).removeClass('isActive');
        }

    });

    var open = false;

    $('.container-hamburger').on('click', function() {
        if (!open) {
            open = true;
        } else {
            open = false;
        }

        $('.container-hamburger').addClass('effect');
        if (open) {
            $(this).find('div').remove();
            let items = [{
                    name: 'Chef Digitales',
                    id: 'team-1'
                },
                {
                    name: 'Clientes',
                    id: 'clientes-1'
                },
                {
                    name: 'Momentos NovoClick',
                    id: 'momentos'
                },
                {
                    name: 'Blog',
                    id: 'blog-novoclick'
                },
                {
                    name: 'Contacto',
                    id: 'contacto-1'
                }
            ]
            let elements = '';
            items.forEach(element => {
                let classCurrent = 'router-active-hamburger';
                if (element.id == menuActive) {
                    classCurrent += ' isActive'
                }
                elements += `
                        <li id="menu-items">
                            <a id="${element.id}" href="#${element.id.split('-')[0]}">
                                <p>${element.name}</p>
                                <div class="${classCurrent}"></div>
                            </a>
                        </li>
                `
            });

            $(this).append(`
                <div class="extra-menu">
                        <ul>
                            ${elements}
                        </ul>
                </div>
                `);
        } else {
            $(this).find('div').remove();
            $(this).removeClass('effect');
        }
    });

    var modulesAlready = [];


    const sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
    }

    const setItems = async (min, max) => {
        $('.myBar').css({ 'width': `${max}%` });

        for (let i = min; i <= max; i++) {
            await sleep(50);
            $('.progres-number p').text(i.toString());
        }
    }

    const putProgress = async(withCurrent, module) => {

        let last = parseInt(withCurrent);

        if (!modulesAlready.includes(module)) {

            modulesAlready.push(module);
            $('.container-hamburger').addClass('effect');
            
            if (!last || last < 11) {

                setItems(1, 11);
            
                $('.progres-number').addClass('activeProgress');


            } else if (last < 22 && last >= 11) {

                setItems(11, 22);
                
            } else if (last < 33 && last >= 22) {
                setItems(22, 33);

            } else if (last < 44 && last >= 33) {
                
                setItems(33, 44);

            } else if (last < 55 && last >= 44) {

                setItems(44, 55);

            } else if (last < 66 && last >= 55) {

                setItems(55, 66);

            } else if (last < 77 && last >= 66) {

                setItems(66, 77);

            } else if (last < 88 && last >= 77) {

                setItems(77, 88);

            } else if (last >= 88) {

                setItems(88, 100);
            }

            $('.container-hamburger').removeClass('effect');
        }
    }
});