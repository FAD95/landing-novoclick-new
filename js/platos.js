function runElements(value, clean, itemSelect, addElement) {

    console.log(addElement)
    var clasElement = 'class="button-like"';
    var text = 'Añadir';
    if (itemSelect) {
        if (itemSelect.hasOwnProperty(value.subtitle)) {
            if (itemSelect[value.subtitle].includes(value.title)) {
                clasElement = 'class="button-like active-btn"';
                text = 'Plato añadido';
            }
        }
    }

    if (clean) {
        $( '.contain-descripcion-select' )
            .find( '.description-items' )
                .remove();
    }

    let moduleSelected = $( '.contain-descripcion-select' ).html();

    $( '.contain-descripcion-select' ).empty();

    var list = '';
    value.items.forEach(element => {
        list += `<li>${element}</li>`
    });

    let item = {
        'module': value.subtitle,
        'title': value.title
    }

    console.log(addElement ? addElement: '');

    $('.contain-descripcion-select').append(
        `
                <div class="description-items">
                    <div>
                        <h2>${ value.title }</h2>
                    </div>
                    <div class="product-select">
                        <ul>
                            ${ list }
                        </ul>
                        <div>
                            ${value.icon}
                        </div>
                    </div>
                    <button ${ clasElement } data-select='${JSON.stringify(item)}'>
                        <i class="fa fa-thumbs-up element"> ${ text }</i>
                    </button>
                </div>
            ${ addElement ? addElement : moduleSelected }
        `
    )
}

function chargeItems(forDefault, module) {


    // Aperitivos
    var obj_1 = [{
            title: 'AUDITORÍA WEB',
            subtitle: 'Aperitivo',
            img: 'imgs/+fotos platos digitales/1 aperitivos/1 analisis web.png',
            icon: '<i class="fa fa-utensils"></i>',
            items: ['Brief', 'Anilisis de SEO de sitio web', 'Anilisis de rendimiento web', 'Medición de la experiencia del cliente.', 'Anilisis de contenido.', 'Análisis de contenido', 'Reporte de recomendaciones de mejora', 'Análisis de arquitectura del sitio web  ']
        },
        {
            title: 'ANÁLISIS CUANTITATIVO DE RRSS ',
            subtitle: 'Aperitivo',
            img: 'imgs/+fotos platos digitales/1 aperitivos/2 analisis de rrss.png',
            icon: '<i class="fa fa-utensils"></i>',
            items: ['Brief', 'Monitoreo y listening de RRSS', 'Medición de alcances', 'Medición de fortaleza de marca', 'Medición de sentimientos y reputación ', 'Medición de impactos']
        },
        {
            title: 'ANÁLISIS DE COMPETENCIA',
            subtitle: 'Aperitivo',
            img: 'imgs/+fotos platos digitales/1 aperitivos/3 analisis de competencia.png',
            icon: '<i class="fa fa-utensils"></i>',
            items: ['Brief', 'Análisis de búsquedas orgánicas y pagas', 'Análisis de keywords', 'Análisis de autoridad del dominio ', 'Análisis de back links', 'Análisis de publicidad en Display', 'Mapa de posicionamiento de la competencia', 'Número de páginas indexadas']
        },
        {
            title: 'CLUSTER DE AUDIENCIA',
            subtitle: 'Aperitivo',
            img: 'imgs/+fotos platos digitales/1 aperitivos/4 cluster de audiencia.png',
            icon: '<i class="fa fa-utensils"></i>',
            items: ['Brief', 'Definición e identificación de cluster de audiencia', 'Definición de buyer persona por cada cluster', 'Alcance por cluster', 'Enfoque de contenido por cada cluster']
        },
        {
            title: 'ANÁLISIS DE ESTRATEGIA DE ATRACCIÓN POR CONTENIDO',
            subtitle: 'Aperitivo',
            img: 'imgs/+fotos platos digitales/1 aperitivos/5 Análisis de estrategia de atracción .png',
            icon: '<i class="fa fa-utensils"></i>',
            items: ['Brief', 'Análisis de contenido de valor', 'Análisis de volumen de tráfico orgánico', 'Análisis de crecimiento de RRSS ', 'Análisis de generación de leads', "Medición de resultados"]
        },
        {
            title: 'ANÁLISIS DE PAUTA DIGITAL',
            subtitle: 'Aperitivo',
            img: 'imgs/+fotos platos digitales/1 aperitivos/6 Análisis de pauta digital .png',
            icon: '<i class="fa fa-utensils"></i>',
            items: ['Brief', 'Análisis de canales de pauta digital ', 'Análisis de publicidad Mobile', 'Análisis de publicidad geolocalizada', 'Análisis de presupuesto ', "Análisis de objetivos de pauta digital"]
        },
        {
            title: 'ANALÍTICA DE BASE DE DATOS DE CLIENTE',
            subtitle: 'Aperitivo',
            img: 'imgs/+fotos platos digitales/1 aperitivos/7 Analítica de bases de datos .png',
            icon: '<i class="fa fa-utensils"></i>',
            items: ['Brief', 'Análisis de rebote', 'Análisis de actualización de la base', 'Normalización de la base ']
        },
        {
            title: 'ANALÍTICA DE GESTIÓN Y CONVERSIÓN DE LEADS ',
            subtitle: 'Aperitivo',
            img: 'imgs/+fotos platos digitales/1 aperitivos/8 Análisis de gestión y conversión de leads.png',
            icon: '<i class="fa fa-utensils"></i>',
            items: ['Brief', 'Análisis de embudos de conversión ', 'Análisis de procesos ', 'Análisis de herramientas de gestión ', 'Análisis de modelos de automatización ']
        },
        {
            title: 'ANÁLISIS CUALITATIVO DE SATISFACCIÓN DE CLIENTE',
            subtitle: 'Aperitivo',
            img: 'imgs/+fotos platos digitales/1 aperitivos/9 Análisis de satisfacción de cliente.png',
            icon: '<i class="fa fa-utensils"></i>',
            items: ['Brief', 'Análisis de reacciones en RRSS', 'Análisis de comentarios en RRSS', 'Análisis de sentimientos a través de llamada ', 'Análisis para medir reacciones en texto ']
        },
        {
            title: 'ANÁLISIS DEL CICLO DE VENTA',
            subtitle: 'Aperitivo',
            img: 'imgs/+fotos platos digitales/1 aperitivos/7 Analítica de bases de datos .png',
            icon: '<i class="fa fa-utensils"></i>',
            items: ['Brief', 'Análisis de SQL ', 'Análisis de entrevista con cliente, conocimiento de presupuestos', 'Análisis y estandarización de tiempos, procesos, contenidos de contacto, propuesta , seguimiento y cierre de ventas.', 'Análisis de indicadores de decisión']
        },
    ];

    // Platos Fuertes
    var obj_2 = [{
            title: 'ESTRATEGIA SEÓ',
            subtitle: 'Platos Fuertes',
            img: 'imgs/+fotos platos digitales/2 platos fuertes/1 Estrategia SEO.png',
            icon: '<i class="fa fa-drumstick-bite"></i>',
            items: ['Brief', 'Definición de objetivos', 'Auditoría del sitio web', 'Creación del buyer persona', 'Identificación de palabras claves', 'Benchmark ó análisis de competencia', 'Indexación de imágenes', 'Elementos claves (Favicon, Meta tags, Meta Description,estilos y arquitectura)', 'Revisión de back links y enlaces rotos', 'Fortalecer el contenido', 'Análisis de medición de SEO', 'Análisis de estrategia y creación de Google Search Console']
        },
        {
            title: 'ESTRATEGIA SEM',
            subtitle: 'Platos Fuertes',
            img: 'imgs/+fotos platos digitales/2 platos fuertes/2 Estrategia SEM .png',
            icon: '<i class="fa fa-drumstick-bite"></i>',
            items: ['Brief', 'Definición de objetivos ', 'Modelado de la estrategia y selección de palabras claves', 'Estimación el retorno de la inversión (ROI de la campaña)', 'Anilisis de contenido. 1', 'Ejecución táctica (Creación de grupos de anuncios y revisión diseño de la página de aterrizaje o la landing page)', 'Medición, optimización  y reporte de la campaña']
        },
        {
            title: 'E-MAIL MARKETING',
            subtitle: 'Platos Fuertes',
            img: 'imgs/+fotos platos digitales/2 platos fuertes/3 E-mail Marketing .png',
            icon: '<i class="fa fa-drumstick-bite"></i>',
            items: ['Brief', 'Definición de los objetivos del e-mail marketing', 'Elección de audiencias (base del cliente y/o suscriptores de Novoclick)', 'Tageo de las audiencias vs. perfil de buyer persona', 'Modelado de la estrategia, frecuencia de envíos y automatización del embudo', 'Ejecución táctica', 'Resolución de insumos de diseño y habeas data de flyer y landing page ', 'Medición, optimización  y reporte de estrategia ']

        },
        {
            title: 'ADMINISTRACIÓN DE RRSS',
            subtitle: 'Platos Fuertes',
            img: 'imgs/+fotos platos digitales/2 platos fuertes/4 Administración de tráfico en RRSS.png',
            icon: '<i class="fa fa-drumstick-bite"></i>',
            items: ['Brief', 'Análisis de situación actual', 'Definición de la estrategia y los KPI’s de RRSS', 'Modelado de la estrategia de contenidos, tráfico y presupuesto de pauta ', 'Ejecución táctica (parrilla de contenidos y diseño de piezas de publicación)', 'Ejecución táctica (parrilla de contenidos y diseño de piezas de publicación)', 'Administración por publicaciones y por RRSS', 'Medición, optimización  y reporte de estrategia']
        },
        {
            title: 'DATA MANAGER',
            subtitle: 'Platos Fuertes',
            img: 'imgs/+fotos platos digitales/2 platos fuertes/5 Analítica de datos.png',
            icon: '<i class="fa fa-drumstick-bite"></i>',
            items: ['Brief', 'Entendimiento de la necesidad', 'Definición de objetivos', 'Ejecución táctica', 'Medición, optimización  y reporte de estrategia']
        },
        {
            title: 'WHATSAPP MARKETING',
            subtitle: 'Platos Fuertes',
            img: 'imgs/+fotos platos digitales/2 platos fuertes/6 Whatsapp Marketing.png',
            icon: '<i class="fa fa-drumstick-bite"></i>',
            items: ['Brief', 'Definición de la estrategia de WhatsApp Marketing', 'Validación de la bases de datos', 'Creación de la parrilla de contenidos ', 'Creación de la parrilla de contenidos ', 'Creación optin ', 'Diseño del sitio de aterrizaje ']
        },
        {
            title: 'SMS MARKETING',
            subtitle: 'Platos Fuertes',
            img: 'imgs/+fotos platos digitales/2 platos fuertes/smsmarketing.png',
            icon: '<i class="fa fa-drumstick-bite"></i>',
            items: ['Brief', 'Definición de la estrategia de WhatsApp Marketing', 'Validación de la bases de datos', 'Creación de la parrilla de contenidos ', 'Creación de la parrilla de contenidos ', 'Creación optin', 'Diseño del sitio de aterrizaje ']
        },
        {
            title: 'PUBLICIDAD PROGRAMÁTICA',
            subtitle: 'Platos Fuertes',
            img: 'imgs/+fotos platos digitales/2 platos fuertes/9 Publicidad programática.png',
            icon: '<i class="fa fa-drumstick-bite"></i>',
            items: ['Brief', 'Definición de los objetivos y presupuesto de la publicidad programática', 'Resolución de clusters de audiencia ', 'Definición de canales (Mobile, display , video, push ad, audio ad)', 'Definición de las tácticas (-campañas: campañas por audiencia, campañas dirigidas a apps móviles)', 'Creación optin', 'Medición, optimización  y reporte de campaña ']
        },
        {
            title: 'ENVÍOS MÁSIVOS DE SMS',
            subtitle: 'Platos Fuertes',
            img: 'imgs/+fotos platos digitales/2 platos fuertes/EnviomasivoSMS.png',
            icon: '<i class="fa fa-drumstick-bite"></i>',
            items: ['Envíos a cualquier país del mundo', 'Programación por zona horaria', 'Envíos diferidos', 'Personalización de datos', 'Remitente configurable', 'Emojis']
        },
        {
            title: 'SERVICIOS DE VOZ',
            subtitle: 'Platos Fuertes',
            img: 'imgs/+fotos platos digitales/2 platos fuertes/Serviciodevoz.png',
            icon: '<i class="fa fa-drumstick-bite"></i>',
            items: ['Envíos de mensajes de voz a celulares y teléfonos fijos', 'Planificación según zona horaria', 'Personalización de mensaje de texto', 'Opción de subida de audio o locución automática de voz humana']
        },
        {
            title: 'PUSH APP/WEB',
            subtitle: 'Platos Fuertes',
            img: 'imgs/+fotos platos digitales/2 platos fuertes/push app web.png',
            icon: '<i class="fa fa-drumstick-bite"></i>',
            items: ['Disponibilidad para Android e iOS', 'Posibilidad de dar de altas todas las APP’s necesarias', 'Segmentación y geolocalización', 'Emojis y contenido de valor']
        },
        {
            title: 'MAILING',
            subtitle: 'Platos Fuertes',
            img: 'imgs/+fotos platos digitales/2 platos fuertes/mailing.png',
            icon: '<i class="fa fa-drumstick-bite"></i>',
            items: ['Estadísticas de principio a fin, aperturas, acciones y clicks por usuario', 'Planificación por zona horaria', 'Envíos diferidos', 'Emojis y personalización']
        },
        {
            title: 'SMS LANDING PAGE',
            subtitle: 'Platos Fuertes',
            img: 'imgs/+fotos platos digitales/2 platos fuertes/smslandingpage.png',
            icon: '<i class="fa fa-drumstick-bite"></i>',
            items: ['Trackeo completo de toda la interacción realizada en la Landing Page', 'Posibilidad de enviar comunicaciones complejas']
        }
    ];

    // Platos Especiales
    var obj_3 = [{
            title: 'GENERACION DE LEEDS PRE Y POST CALIFICADOS',
            subtitle: 'Platos Especiales',
            img: 'imgs/+fotos platos digitales/3 platos especiales/A.- PLATOS ESPECIAL DE CONVERSIÓN PARA.png',
            icon: '<i class="fa fa-drumstick-bite"></i>',
            items: ['Generación de Leeds']
        },
        {
            title: 'PLATOS ESPECIALES POR OBJETIVO',
            subtitle: 'Platos Especiales',
            img: 'imgs/+fotos platos digitales/3 platos especiales/B.- PLATOS ESPECIALES POR OBJETIVO.png',
            icon: '<i class="fa fa-drumstick-bite"></i>',
            items: ['Tráfico', 'Generación de Leeds', 'Calificación de leads ó conversión de leads', 'Inbound marketing']
        },
        {
            title: 'PLATOS ESPECIALES INTERACTIVOS',
            subtitle: 'Platos Especiales',
            img: 'imgs/+fotos platos digitales/3 platos especiales/C PLATOS ESPECIALES INTERACTIVO.png',
            icon: '<i class="fa fa-drumstick-bite"></i>',
            items: ['Ferias virtuales', 'Webinars', 'Teatros y Eventos en vivo']
        }
    ];

    // Adiciones
    var obj_4 = [{
            title: 'GESTIÓN DE LEADS',
            subtitle: 'Adiciones',
            img: 'imgs/+fotos platos digitales/4 Adiciones/GESTIÓN DE LEADS.png',
            icon: '<i class="fa fa-drumstick-bite"></i>',
            items: ['Brief', 'Definición de objetivos ', 'Modelado de la estrategia (cronograma, contact center robótico, humano o híbrido, embudo, guiones y contenidos)', 'Integración y trazabilidad por origen de registros (leads de diferentes canales online y offline)', 'Ejecución táctica ', 'Entrega de huella de gestión en panel administrable ', 'Reportería de estrategia ']
        },
        {
            title: 'CALIFICACIÓN DE LEADS ',
            subtitle: 'Adiciones',
            img: 'imgs/+fotos platos digitales/4 Adiciones/CALIFICACIÓN DE LEADS.png',
            con: '<i class="fa fa-drumstick-bite"></i>',
            items: ['Brief', 'Definición de objetivos y parámetros de calificación de leads (MQL Lead scoring)', 'Modelado de la estrategia ( cronograma, contact center robótico, humano o híbrido, embudo, guiones y contenidos)', 'Entrega de data en panel de cliente en tiempo real ', 'Reporte de gestión y calificación', 'Poscalificación opcional de gestión comercial']
        },
        {
            title: 'CONVERSIÓN DE LEADS',
            subtitle: 'Adiciones',
            img: 'imgs/+fotos platos digitales/4 Adiciones/CONVERSIÓN DE LEADS.png',
            con: '<i class="fa fa-drumstick-bite"></i>',
            items: ['Brief', 'Definición de objetivos y parámetros de calificación de leads (MQL Lead scoring)', 'Modelado de la estrategia ( cronograma, contact center robótico, humano o híbrido, embudo, guiones y contenidos)', 'Integración y trazabilidad por origen de registros (leads de diferentes canales online y offline)', 'Integración a su canal de ventas (asignación y/o agendamiento de responsable)', 'Creación de alertas de notificación para cada responsable']

        }
    ];

    //Postres
    var obj_5 = [{
            title: 'PLATAFORMA CRM (Bitrix 24)',
            subtitle: 'Postres',
            img: 'imgs/+fotos platos digitales/postres/plataforma.png',
            icon: '<i class="fa fa-ice-cream"></i>',
            items: ['Brief de necesidad comercial', 'Modelado de la solución CRM a medida', 'Definición presupuesto y tiempo de implementación', 'Capacitación equipo comercial', 'Implementación de la solución', 'Soporte']
        },
        {
            title: 'INTEGRACIÓN A SU CRM ACTUAL',
            subtitle: 'Postres',
            img: 'imgs/+fotos platos digitales/postres/crm.png',
            icon: '<i class="fa fa-ice-cream"></i>',
            items: ['Brief de integración', 'Modelado de la solución API', 'Creación de código de integración', 'Pruebas de integración', 'Implementación de la solución', 'Soporte']
        },
        {
            title: 'CUSTOMER EXPIERENCE VÍA WHATSAPP',
            subtitle: 'Postres',
            img: 'imgs/+fotos platos digitales/postres/customer.png',
            icon: '<i class="fa fa-ice-cream"></i>',
            items: ['Creación de cuentas WhatsApp Business verificado', 'Creación de la cuenta verificada vía API WhatsApp',
                'Creación subcuentas (áreas de mercadeo, comercial, administrativo)', 'Automatización de mensajes inteligencia artificial',
                'Plataforma de atención', 'API para envíos masivos', 'Integración de sistemas masivos', 'Creación de tableros de control y seguimiento',
                'Control de asistencia de las sesiones', 'Configuración de horas de servicio', 'Configuración de usuarios por sub. cuentas',
                'Seguimiento de keywords'
            ]
        },
        {
            title: 'CONTACT CENTER (WOLKVOX)',
            subtitle: 'Postres',
            img: 'imgs/+fotos platos digitales/postres/contact.png',
            icon: '<i class="fa fa-ice-cream"></i>',
            items: ['Creación de marcador predictivo', 'Omnicanalidad (atención de chatbots, interacciones y llamadas', 'Análisis de speech',
                'Análisis automático de voz del cliente', 'Análisis de aseguramiento de calidad', 'Reconocimiento de voz para IVR'
            ]
        }
    ];

    var buildString = '';
    var objects;
    let itemsRun;

    if (forDefault) {
        objects = obj_1;
    } else {
        $('.items .slider .owl-stage-outer .owl-stage').empty();
        if (module == 'Platos Fuertes') {
            objects = obj_2;
        } else if (module == 'Aperitivo') {
            objects = obj_1;
        } else if (module == 'Platos Especiales') {
            objects = obj_3;
        } else if (module == 'Adiciones') {
            objects = obj_4;
        } else if (module == 'Postres') {
            objects = obj_5;
        }
    }

    if (forDefault) {
        $.each(objects, function(key, value) {
            if (key == 0) {
                runElements(
                    value = value,
                    clean = false,
                    itemSelect = null,
                    addElement = `<div class="img-module">
                        <img src='imgs/menu-img/foto aperitivo.png'
                    </div>`
                )
            }
            buildString += `
                    <div class="card-dishes">
                        <div class="img"><img src="${value.img}" alt="" srcset="">
                        </div>
                        <b class="text">${value.title}</b>
                        <div class="select-items" data-options='${JSON.stringify(value)}'>
                            <i class="fa fa-${key == 0 && forDefault ? 'check' : ''}"></i>
    
                        </div>
                    </div>
                `
        });
    } else {
        if (objects.length >= 1 && objects.length <= 3) {
            itemsRun = 5;
        } else if (objects.length >= 8 & objects.length < 10) {
            itemsRun = 1;
        } else if (objects.length >= 4 && objects.length <= 7) {
            itemsRun = 3;
        } else {
            itemsRun = 0;
        }
        for (let i = 0; i <= itemsRun; i++) {
            $.each(objects, function(key, value) {
                $('.items .slider .owl-stage-outer .owl-stage').append(`
                <div class="owl-item active" style="width: 278.5px; margin-right: 12px;">
                    <div class="card-dishes">
                        <div class="img"><img src="${value.img}" alt="" srcset="">
                        </div>
                        <b class="text">${value.title}</b>
                        <div class="select-items" data-options='${JSON.stringify(value)}'>
                        </div>
                    </div>
                </div>
                `).trigger('refresh.owl.carousel');
            })
        }
    }
    var lastItem = `
                    <div class="slider owl-carousel other">
                        ${buildString}
                    </div>
                    `

    forDefault ? $('.items').append(lastItem) : '';
}


$(function() {

    let itemsSelect = {};

    $('ul.navbar-nav li').on('click', function() {
        chargeItems(false, $(this).find('a')[0].innerText);
        $(this).parent().find('li.activeDish').removeClass('activeDish');
        $(this).addClass('activeDish');

        let imgSelect = $(this).data('options');

        $('.contain-descripcion-select .img-module').remove();
        $('.contain-descripcion-select').append(`
            <div class="img-module">
                <img src='${imgSelect}'
            </div>
        `)

    });

    $(document.body).on('click', '.select-items', function() {
        $('.select-items').find('i').remove();
        // $('.select-items').append(
        //     `
        //     <i class="fa fa-times"></i>  
        //     `
        // )
        $(this).find('i').remove();
        $(this).append(`
            <i class="fa fa-check"></i>`)
        runElements($(this).data("options"), true, itemsSelect);
    });

    $('.btn-end').on('click', function() {
        $('.pop-my-menu').addClass('pop-my-menu-active');
        $('.popup-overlay').animate({ left: '440px' });

        let checkedItems = '';
        for (const [key, value] of Object.entries(itemsSelect)) {
            var forkey = '';
            forkey += `<h4>${key}</h4>`;

            let liItems = '';

            value.forEach((item) => {
                liItems += `<li>${item}</li>`;
            })

            forkey += `
                <ul class="items-list">
                    ${liItems}
                </ul>
            `;
            $('.items-selected').append(forkey);
        }
    });

    $('.return-page').on('click', function() {
        $('.pop-my-menu').removeClass('pop-my-menu-active');

        $('.items-selected').empty();
    });

    $(document.body).on('click', '.button-like', function() {

        $('.button-like').text('Plato añadido');
        $('.button-like').addClass('. active-btn');

        let module = $(this).data("select").module;

        let title = $(this).data("select").title;

        if (itemsSelect.hasOwnProperty(module)) {
            if (!itemsSelect[module].includes(title)) {
                itemsSelect[module].push(title);
            }
        } else {
            itemsSelect[module] = [title];
        }
    });


});

chargeItems(true)