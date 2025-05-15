export default {
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
        titulo: 'Fundamentos del análisis exploratorio de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Introducción a la limpieza y transformación de datos',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Importancia en el análisis de datos',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Preparación del entorno de programación',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Bibliotecas especializadas para análisis de datos',
            hash: 't_1_4',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Métodos de análisis exploratorio',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo:
              'Análisis univariado: estadísticas descriptivas y visualizaciones',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo:
              'Análisis bivariado: correlaciones y relaciones entre variables',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Análisis multivariado: patrones y agrupaciones',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo:
              'Técnicas de reducción de dimensionalidad y selección de características',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Visualización de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Principios de visualización efectiva',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo:
              'Creación de gráficos interactivos con bibliotecas especializadas',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: '<em>Dashboards</em> para toma de decisiones',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Narración con datos',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'De datos a decisiones',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Identificación de <em>insights</em>',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Validación de hipótesis con datos',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Comunicación de resultados',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Recomendaciones basadas en evidencia',
            hash: 't_4_4',
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
        download: 'downloads/228136_CF04_DU.pdf',
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
  global: {
    Name:
      'Exploración, validación y visualización de datos para la toma de decisiones',
    Description:
      'Este componente aborda los fundamentos y técnicas del análisis exploratorio y la visualización de datos, enfocado en la toma de decisiones efectivas. Examina métodos estadísticos y técnicas de visualización avanzada y principios de comunicación de datos, integrando aspectos teóricos con aplicaciones prácticas mediante herramientas modernas. Diseñado para desarrollar competencias en la exploración sistemática y su traducción en <em>insights</em> accionables.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [],
  },
}
