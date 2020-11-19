function chargeSettings() {

    $(document.body).on('click', '.btn-end-team-blue', function() {
        $('.pop-my-menu-2').removeClass('pop-my-menu-active');
    });


    let items = [{
            img: 'imgs/herramientas/Mesa de trabajo 50.png',
            description: 'Plataforma donde realizamos almacenamiento y bases de datos.',
            title: 'AWS'
        },
        {
            img: 'imgs/herramientas/Mesa de trabajo 51.png',
            description: 'Plataforma donde hacemos el mejor trabajo en equipo, compartimos archivos, gestionamos tareas, calendarios, dibujamos diagramas y editamos hojas de cálculo en tiempo real.',
            title: 'Samepage'

        },
        {
            img: 'imgs/herramientas/Mesa de trabajo 52.png',
            description: 'Plataforma donde analizamos tu sitio web y el de tú competencia, desde arquitectura, url´s y mucho más.',
            title: 'seigo'

        },
        {
            img: 'imgs/herramientas/Mesa de trabajo 53.png',
            description: 'Plataforma donde analizamos tú sitio web, nos mantenemos al día con tu competencia y sabemos que posición ocupa tu marca en el mercado.',
            title: 'Similar Web'

        },
        {
            img: 'imgs/herramientas/Mesa de trabajo 54.png',
            description: 'Plataforma donde hacemos mapas de calor para optimizar tus ventas.',
            title: 'H°TMAPS'
        },
        {
            img: 'imgs/herramientas/Mesa de trabajo 55.png',
            description: 'Plataforma donde optimizamos tus páginas web, medimos interacciones de los visitantes, comportamiento de usuario, contenidos de más interés, etc.',
            title: 'hotjar'
        },
        {
            img: 'imgs/herramientas/Mesa de trabajo 56.png',
            description: 'Plataforma donde descubrimos contenidos más compartidos, rastreamos marcas, competencia, backlinks, identificamos influencers de tu sector y generamos informes de análisis por asunto.',
            title: 'BuzzSumo'
        },
        {
            img: 'imgs/herramientas/Mesa de trabajo 57.png',
            description: 'Plataforma donde construímos aplicaciones móviles.',
            title: 'GetApp'
        },
        {
            img: 'imgs/herramientas/Mesa de trabajo 58.png',
            description: 'Plataforma donde encontramos palabras claves y temas relevantes de contenido organico relacionado al tema de tu empresa.',
            title: 'Media Toolkit'
        },
        {
            img: 'imgs/herramientas/Mesa de trabajo 59.png',
            description: 'Plataforma donde analizamos tu sitio web, aumentamos la visibilidad de este, analizamos datos de tu sitio para SEO, redes sociales, usabilidad y factores críticos.',
            title: 'woorank'
        },
        {
            img: 'imgs/herramientas/Mesa de trabajo 60.png',
            description: 'Plataforma donde mapeamos embudos de ventas.',
            title: 'GERU'
        },
        {
            img: 'imgs/herramientas/Mesa de trabajo 61.png',
            description: 'Plataforma donde nos conectamos con tu audiencia por el canal que tu quieras (email marketing, SMS,mensajería, web push, etc)',
            title: 'Send Pulse'
        },
        {
            img: 'imgs/herramientas/Mesa de trabajo 62.png',
            description: 'Plataforma donde alcanzamos nuestros objetivos estratégicos efectivamente, mediante el impulso adecuado de tu empresa.',
            title: 'Bitrix24'
        },
        {
            img: 'imgs/herramientas/Mesa de trabajo 63.png',
            description: 'Plataforma donde programamos tus publicaciones en diferentes redes sociales, generamos engagement con tus usuarios.',
            title: 'Buffer'
        },
        {
            img: 'imgs/herramientas/Mesa de trabajo 64.png',
            description: 'Plataforma donde sabemos las palabras claves más buscadas en internet y posicionamos contenido de tu página web.',
            title: 'Google Trends'
        },
        {
            img: 'imgs/herramientas/Mesa de trabajo 65.png',
            description: 'Plataforma donde monitoreamos el estado de tu sitio web, obtenemos tipos de información relevante.',
            title: 'Google Analytics'
        },
        {
            img: 'imgs/herramientas/Mesa de trabajo 66.png',
            description: 'Plataforma donde seguimos el tráfico de visitas y datos de tú audiencia.',
            title: 'Yandex'
        },
        {
            img: 'imgs/herramientas/Mesa de trabajo 68.png',
            description: 'Plataforma donde montamos servidores incluyecndo email, SMS, video conferencia, centro de llamada y funciones colaborativas.',
            title: 'Issabel'
        },
        {
            img: 'imgs/herramientas/Mesa de trabajo 69.png',
            description: 'Plataforma donde gestinamos CRM.',
            title: 'Salesforce'
        },
        {
            img: 'imgs/herramientas/Mesa de trabajo 69_1.png',
            description: 'Plataforma donde realizamos social media marketing, content management, web analytics y landing page.',
            title: 'HubSpot'
        },
        {
            img: 'imgs/herramientas/Mesa de trabajo 71.png',
            description: 'Plataforma donde creamos webinars en vivo.',
            title: 'Webinar Ignition'
        },
        {
            img: 'imgs/herramientas/Mesa de trabajo 72.png',
            description: 'Plataforma donde creamos webinars automatizados.',
            title: 'Everwebinar'
        },
        {
            img: 'imgs/herramientas/Mesa de trabajo 72_1.png',
            description: 'Plataforma donde planificamos y elegimos las mejores palabras claves para tus campañas.',
            title: 'Google AdWords'
        },
        {
            img: 'imgs/herramientas/Mesa de trabajo 73.png',
            description: 'Plataforma donde realizamos reuniones y tranmisión del tema que quieras en vivo.',
            title: 'Zoom'
        },
    ]

    let cards = '';
    items.forEach((element) => {
        cards += `
        <div class="card">
            <div class="contenedor-pop">
                <button id="btn-abrir-popup" class="btn-abrir-popup"><img id="mesa" data-select='${JSON.stringify(element)}' src="${element.img}"></button>
            </div>
        </div>
        `
    });

    let endCarousel = `
                    <div class="slider owl-carousel">
                        ${cards}
                    </div>`;

    $('.contenedor-carusel-unique').append(endCarousel);


    $(document.body).on('click', '.btn-abrir-popup', function() {

         if ( $(this).find('img')['length'] > 0) {
            let findData = $(this).find('img').data('select');

            $(this).find('img').remove();
    
            $(this).append(`
                <p class="description-settings" data-select='${JSON.stringify(findData)}'>${findData.description}</p>
                <i class="fa fa-plus icon-settings"><i>
            `)
         } else {

            let findData = $(this).find('p').data('select');

            $(this).find('i').remove();
            $(this).find('p').remove();

            $(this).append(`
                <img id="mesa" data-select='${JSON.stringify(findData)}' src="${findData.img}">
            `)
         }
        
    })


}


chargeSettings()