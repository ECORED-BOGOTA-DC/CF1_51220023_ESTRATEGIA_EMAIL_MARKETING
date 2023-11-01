export default {
  global: {
    componenteFormativo: 'Las pymes digitales',
    descripcionCurso:
      'En este componente formativo, el aprendiz apropiará los conocimientos relacionados con los inicios del Internet hasta lo relacionado con la transformación del usuario en consumidor digital. A partir de este conocimiento, en su desempeño el aprendiz facilitará el uso de herramientas que permitan responder a los requerimientos de las instituciones y entidades público-privadas en el manejo de la comunicación digital.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
      {
        clases: ['banner-principal-decorativo-5'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-5.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Contexto de Internet y los negocios electrónicos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Historia del Internet',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Evolución del Internet',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Concepto de negocios electrónicos',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Modelos de negocios electrónicos',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Conceptos básicos de la planeación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Concepto de planeación',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Metodologías y modelos de planeación',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Entorno digital para los negocios',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Concepto de entorno digital',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Importancia de los avances tecnológicos',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'La publicidad digital y el ámbito de aplicación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Concepto de publicidad digital',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Tipos de publicidad digital',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'El <em>e-marketing</em> en las pymes',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Concepto de <em>e-marketing</em>',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'El <em>e-marketing</em> en las empresas',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Las TIC en las pymes',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: '<em>Marketing mix</em> digital',
            hash: 't_5_4',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'El consumidor digital',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Comportamiento del consumidor digital',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Segmentación y arquetipos digitales',
            hash: 't_6_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '4. La publicidad digital y el ámbito de aplicación',
      referencia:
        'Moro, V. (2014). <em>Marketing Digital</em>. Ediciones Paraninfo.',
      tipo: 'Libro',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_aleph000080197',
    },
    {
      tema: '5. El <em>e-marketing</em> en las pymes',
      referencia:
        'Serrano, J. (2015). <em>SEO: introducción a la disciplina del posicionamiento en buscadores</em>. Editorial UOC.',
      tipo: 'Libro',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1i756fj/TN_cdi_casalini_books_3133154',
    },
  ],
  glosario: [
    {
      termino: 'Contenidos digitales',
      significado:
        'piezas de información fundamentales en el <em><strong>Inbound Marketing</strong></em>, se pueden construir a través de videos, <em><strong>reels</strong></em>, imágenes, texto, <em><strong>Gif</strong></em>, mapas conceptuales, entre otros; el éxito del impacto en su creación dependerá de la creatividad, y se transformará en clientes, ventas y visitantes al negocio.',
    },
    {
      termino: 'Embudo de conversión',
      significado:
        'metodología o planificación estratégica que busca atraer, retener, convertir y fidelizar clientes, es decir, convertir un cliente potencial en verdadero consumidor y multiplicador de la marca.',
    },
    {
      termino: 'Entorno Digital',
      significado:
        'representa la mejora de experiencia de los clientes y el aumento de sus competencias para dar soporte a su núcleo productivo, cubriendo con agilidad las necesidades cambiantes exigidas por los mercados en un ecosistema volátil, incierto, complejo y ambiguo.',
    },
    {
      termino: 'Herramientas de búsqueda',
      significado:
        'herramientas que ayudan a los usuarios a encontrar información de interés que esté disponible en Internet de manera interactiva indexando gustos y temáticas en general. Las bases de datos de estas herramientas son una serie de activos digitales disponibles 24/7 a través de la red.',
    },
    {
      termino: 'Negocios electrónicos',
      significado:
        'los <em><strong>e-business</strong></em> están basados en la integración de las TIC con las actividades de los negocios. Es decir, son las estrategias empresariales integradas con las nuevas tecnologías para desarrollar cualquier modelo de negocio a través del Internet, permitiendo mejorar su gestión y aumentar la productividad.',
    },
    {
      termino: 'Palabras clave (<em>Keywords</em>)',
      significado:
        'principales instrumentos de búsqueda; son términos responsables de realizar el cambio de informaciones entre los sitios y los clientes de la red. Es la forma cómo los usuarios plasman sus búsquedas en los motores con el fin de obtener información y solucionar sus problemas.',
    },
    {
      termino: 'RRSS (Redes Sociales)',
      significado:
        'plataformas donde las personas pueden interactuar y socializar diversos temas, con la finalidad de compartir noticias, gustos, intereses, ideas, tendencias, etc.',
    },
    {
      termino: 'SEM (<em>Marketing</em> en motores de búsqueda)',
      significado:
        'hace referencia a las estrategias que incluyen la utilización de anuncios pagos. Con una estrategia SEM se crean campañas publicitarias y cada vez que un usuario digite la búsqueda, en el buscador el sitio aparece antes que los resultados orgánicos en forma de anuncio, siempre y cuando coincida con el interés de búsqueda del usuario.',
    },
    {
      termino: 'SEO (Optimización de motores de búsqueda)',
      significado:
        'se refiere a todas aquellas acciones, estrategias y técnicas de optimización de posicionamiento que se hacen en un sitio web para aparecer orgánicamente (No pago) en los buscadores (Google, Yahoo, Bing).',
    },
  ],
  referencias: [
    {
      referencia:
        'Bit2me Academy. (2022). <em>Minería Bitcoin ¿Cómo se crea un bloque?</em>',
      link:
        'https://academy.bit2me.com/mineria-bitcoin-como-se-crea-un-bloque/',
    },
    {
      referencia:
        'Cámara de Comercio Electrónico. (2022). <em>¿Qué es la CCCE?</em>. ',
      link: 'https://www.ccce.org.co/ccce/',
    },
    {
      referencia: 'Cicero. (2017). <em>Tipos de publicidad digital</em>.',
      link: 'https://www.cicerocomunicacion.es/tipos-de-publicidad-digital/',
    },
    {
      referencia:
        'Coobis. (2017). <em>Contenidos digitales para arrasar en redes sociales</em>.',
      link: '',
    },
    {
      referencia:
        'Herrera, H. H. (2012). Las redes sociales: una nueva herramienta de difusión. <em>Revista reflexiones</em>, 91(2).',
      link: 'https://concepto.de/redes-sociales/#ixzz7TPxAMgyc',
    },
    {
      referencia:
        'Ilpes, Cepal. (2005). <em>Metodología general de identificación, preparación y evaluación de proyectos de inversión pública</em>. (Vol. 39). Cepal.',
      link: '',
    },
    {
      referencia:
        'Kapeí. (2022). <em>¿Qué es el Embudo de Conversión y por qué es importante para el Marketing Digital?</em>',
      link: 'https://kapei.pe/marketing-digital/que-es-embudo-de-conversion/',
    },
    {
      referencia: 'Kotler, P. (2.006). <em>Dirección de marketing</em>.',
      link:
        'https://frrq.cvg.utn.edu.ar/pluginfile.php/14585/mod_resource/content/1/libro%20direccion-de-marketing%28kotler-keller_2006%29.pdf',
    },
    {
      referencia:
        'Moro, M. (2014). <em>Marketing Digital</em>. Ediciones Paraninfo. Print.',
      link: '',
    },
    {
      referencia:
        'Movistar. (2.022). <em>¿Cúal es el impacto de las TIC en las pequeñas empresas?</em>',
      link:
        'https://negociosdigitalesmovistar.com/emprendimiento/impacto-tic-pequenas-empresas/',
    },
    {
      referencia:
        'Osorio, J. (2010). <em>Identificación y formulación de proyectos, módulo de identificación de proyectos</em>. ESAP.',
      link: '',
    },
    {
      referencia:
        'Rojo, M. (2019). <em>Blockchain: Fundamentos De La Cadena De Bloques</em>. Primera Edición. ed. De La U Ra-ma Editorial. Print. Área Finanzas.',
      link: '',
    },
    {
      referencia: 'Trello.com. (2022). <em>Crea tu cuenta</em>.',
      link: 'https://trello.com/signup',
    },
    {
      referencia:
        'Wix. (2022). <em>App externa: Social Media Stream de SmartFox</em>.',
      link:
        'https://support.wix.com/es/article/app-externa-social-media-stream-de-smartfox',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizábal Gutiérrez',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Liliana Victoria Morales Gualdrón',
          cargo: 'Responsable de línea de producción',
          centro:
            'Regional Distrito Capital - Centro de Gestión De Mercados, Logística y Tecnologías de la Información',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Margarita Rosa Triana Sánchez',
          cargo: 'Experto temático',
          centro:
            'Región Norte de Santander - Centro de la industria, la empresa y los servicios',
        },
        {
          nombre: 'Claudia Milena Hernández Naranjo',
          cargo: 'Diseño Instruccional',
          centro: 'Regional Distrito Capital - Centro de Gestión Industrial',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Asesoría Metodológica',
          centro: 'Regional Distrito Capital - Centro Diseño y Metrología',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable Equipo Desarrollo Curricular',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Jhon Jairo Rodríguez Pérez',
          cargo: 'Corrección de estilo',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Metodología para la formación virtual',
          centro:
            'Regional Distrito Capital - Centro de Gestión De Mercados, Logística y Tecnologías de la Información',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yuly Andrea Rey Quiñonez',
          cargo: 'Diseño web',
          centro:
            'Regional Distrito Capital - Centro de Gestión De Mercados, Logística y Tecnologías de la Información',
        },
        {
          nombre: 'Luis Jesús Pérez Madariaga',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Regional Distrito Capital - Centro de Gestión De Mercados, Logística y Tecnologías de la Información',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animación y Producción audiovisual',
          centro:
            'Regional Distrito Capital - Centro de Gestión De Mercados, Logística y Tecnologías de la Información',
        },
        {
          nombre: 'Lady Adriana Ariza Luque',
          cargo: 'Animación y Producción audiovisual',
          centro:
            'Regional Distrito Capital - Centro de Gestión De Mercados, Logística y Tecnologías de la Información',
        },
        {
          nombre: 'Laura Gisselle Murcia Pardo',
          cargo: 'Animación y Producción audiovisual',
          centro:
            'Regional Distrito Capital - Centro de Gestión De Mercados, Logística y Tecnologías de la Información',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Evaluación de contenidos inclusivos y accesibles',
          centro:
            'Regional Distrito Capital - Centro de Gestión De Mercados, Logística y Tecnologías de la Información',
        },
        {
          nombre: 'Leyson Fabián Castaño Pérez',
          cargo: 'Validación de contenidos educativos',
          centro:
            'Regional Distrito Capital - Centro de Gestión De Mercados, Logística y Tecnologías de la Información',
        },
        {
          nombre: 'Lina Marcela Pérez Manchego',
          cargo: 'Validación de contenidos educativos y vinculación al LMS',
          centro:
            'Regional Distrito Capital - Centro de Gestión De Mercados, Logística y Tecnologías de la Información',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
