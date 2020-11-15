// menu
    let btnMenu = document.querySelector('.btn-menu');
    let menu = document.querySelector('.list-container');
    let menuContent = document.querySelector('.menu');
    let activador = true;
    let barIconX = document.querySelector('.btn-menu i');

    // evento
        btnMenu.addEventListener('click', () => {

            barIconX.classList.toggle('fa-times');

            if(activador) {

                menu.style.left = "0";
                menu.style.transition = "0.5s";
                activador = false;

            } else {

                activador = false;
                menu.style.left = "-100%";
                menu.style.transition = "0.5s";
                activador = true;

            }

        });

// datos
    let enlaces = document.querySelectorAll('.lists li a');

    // bucles
        enlaces.forEach((element) => {

            // intercalar clase activo
            element.addEventListener('click', (event) => {

                // quitar clase activo
                enlaces.forEach((link) => {
                    link.classList.remove('activo');
                });

                // añadir clase activo
                event.target.classList.add('activo');

            });

        });

// efecto scroll
    let prevScrollPos = window.pageYOffset;
    let goTop = document.querySelector('.go-top');

    window.onscroll = () => {
        //Hide & Show - Scroll Menu (Function)
            let currentScrollPos = window.pageYOffset;

            if (prevScrollPos > currentScrollPos) {
                menuContent.style.top = '0px';
                menuContent.style.transition = '0.5s';
            }else{
                menuContent.style.top = '-60px';
                menuContent.style.transition = '0.5s';
            }
            
            prevScrollPos = currentScrollPos;

        //Scoll Menu & Go Top & See Down (Styles)
            let arriba = window.pageYOffset;
            //Conditions
                if(arriba <= 600){
                    menuContent.style.borderBottom = 'none';
                    //Ocultar Go Top
                    goTop.style.right = '-100px';
                }else{
                    menuContent.style.borderBottom = '3px solid #ff2e63';
                    //Mostrar Go Top
                    goTop.style.right = '0px';
                }

    }

//Go Top Click
    goTop.addEventListener('click', () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });

    let abajo = document.querySelector('#abajo');

    abajo.addEventListener('click', () => {
        document.body.scrollTop = 600;
        document.documentElement.scrollTop = 600;
    
    });