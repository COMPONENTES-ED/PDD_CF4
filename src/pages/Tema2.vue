<template>
  <div class="curso-main-container pb-3">
    <BannerInterno></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5 mb-5">
      <div class="titulo-principal color-acento-contenido">
        <div class="titulo-principal__numero"><span>2</span></div>
        <h1>Métodos de análisis exploratorio</h1>
      </div>
      <div class="row justify-content-center mb-5">
        <div class="col-lg-8 mb-lg-0 mb-3">
          <p class="mb-0">
            Los métodos de análisis exploratorio representan un conjunto
            fundamental de técnicas y aproximaciones para descubrir patrones,
            relaciones y estructuras en los datos. Este capítulo aborda la
            progresión sistemática desde el análisis univariado, que proporciona
            una comprensión profunda de variables individuales mediante
            estadísticas descriptivas y visualizaciones, pasando por el análisis
            bivariado que explora las relaciones entre pares de variables, hasta
            llegar a técnicas más sofisticadas de análisis multivariado y
            reducción de dimensionalidad. La implementación programática de
            estos métodos, apoyada en bibliotecas especializadas, permite una
            exploración rigurosa y escalable de los datos, facilitando la
            identificación de insights relevantes y la preparación efectiva para
            análisis más avanzados, constituyendo así una base sólida para la
            toma de decisiones basada en evidencia.
          </p>
        </div>
        <div class="col-lg-4 col-7">
          <img src="@/assets/curso/temas/30.png" alt="" />
        </div>
      </div>
      <Separador></Separador>
      <div
        id="t_2_1"
        class="titulo-segundo color-acento-contenido"
        data-aos="fade-right"
      >
        <h2>
          2.1 Análisis univariado: estadísticas descriptivas y visualizaciones
        </h2>
      </div>
      <p class="mb-5" data-aos="fade-right">
        El análisis univariado constituye el fundamento inicial de cualquier
        exploración de datos, lo cual proporciona una comprensión profunda de
        las características individuales de cada variable. Este análisis
        sistemático requiere un entendimiento claro de los tipos de variables y
        las técnicas específicas aplicables a cada una.
      </p>
      <div class="row justify-content-center mb-5">
        <div class="col-lg-10">
          <div
            class="titulo-sexto color-acento-contenido"
            data-aos="fade-right"
          >
            <h5>Tabla 1.</h5>
            <span>Clasificación de variables para análisis de datos</span>
          </div>
          <div class="tabla-a color-acento-botones mb-5">
            <table>
              <thead class="border-0">
                <tr class="text-white" style="background-color: #3ba935">
                  <th>Tipo de variable</th>
                  <th>Descripción</th>
                  <th>Medidas estadísticas clave</th>
                  <th>Visualizaciones principales</th>
                </tr>
              </thead>
              <tbody class="text-center">
                <tr>
                  <td>Numéricas continuas</td>
                  <td>
                    Pueden tomar cualquier valor dentro de un rango definido.
                    Representan mediciones precisas que pueden incluir decimales
                    y valores intermedios
                  </td>
                  <td>Media, mediana, desviación estándar</td>
                  <td>Histogramas, <em>box plots</em></td>
                </tr>
                <tr>
                  <td>Numéricas discretas</td>
                  <td>
                    Valores numéricos enteros y contables, sin valores
                    intermedios posibles
                  </td>
                  <td>Moda, media, frecuencias</td>
                  <td>Diagramas de barras, gráficos de puntos</td>
                </tr>
                <tr>
                  <td>Categóricas nominales</td>
                  <td>
                    Categorías sin orden inherente que representan grupos o
                    clasificaciones mutuamente excluyentes
                  </td>
                  <td>Moda, frecuencias relativas</td>
                  <td>Gráficos de barras, gráficos de sectores</td>
                </tr>
                <tr>
                  <td>Categóricas ordinales</td>
                  <td>
                    Categorías con orden natural que representan niveles o
                    rangos secuenciales
                  </td>
                  <td>Mediana, frecuencias acumuladas</td>
                  <td>Diagramas de barras ordenados</td>
                </tr>
                <tr>
                  <td>Binarias</td>
                  <td>
                    Solo dos posibles valores mutuamente excluyentes.
                    Representan situaciones dicotómicas o decisiones con solo
                    dos resultados
                  </td>
                  <td>Proporción, frecuencia relativa</td>
                  <td>Gráficos de barras, <em>waffle charts</em></td>
                </tr>
                <tr>
                  <td>Temporales</td>
                  <td>
                    Mediciones en puntos de tiempo específicos que capturan la
                    evolución o cambio de una variable a lo largo del tiempo
                  </td>
                  <td>Media móvil, tendencia</td>
                  <td>Series temporales, <em>line plots</em></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="row justify-content-center mb-5">
        <div class="col-lg-3 col-7 mb-lg-0 mb-3">
          <img src="@/assets/curso/temas/31.png" alt="" />
        </div>
        <div class="col-lg-9">
          <p class="mb-4">
            La clasificación sistemática de variables en el análisis de datos
            constituye un marco fundamental para comprender y procesar la
            información de manera efectiva. Como se observa en la tabla, cada
            tipo de variable presenta características distintivas que determinan
            no solo su naturaleza intrínseca, sino también los métodos
            específicos para su análisis y visualización. Las variables
            numéricas continuas y discretas, por ejemplo, permiten operaciones
            matemáticas completas y requieren medidas estadísticas que capturen
            tanto su tendencia central como su dispersión, mientras que las
            variables categóricas, ya sean nominales u ordinales, demandan
            enfoques basados en frecuencias y proporciones que respeten su
            naturaleza cualitativa.
          </p>
          <div class="tarjeta p-4 mb-4" style="background-color: #f3f0ea ">
            <p class="mb-0">
              La comprensión profunda de estas clasificaciones es necesaria para
              seleccionar las herramientas analíticas apropiadas en cada caso.
              Por ejemplo, mientras que para variables continuas podemos
              calcular medias y desviaciones estándar que nos permiten entender
              su distribución completa, para variables categóricas necesitamos
              enfocarnos en frecuencias relativas y modas que nos ayuden a
              identificar patrones de agrupación y predominancia. Esta
              distinción se extiende también al ámbito de la visualización,
              donde cada tipo de variable requiere representaciones gráficas
              específicas que maximicen la comprensión de sus características
              fundamentales y faciliten la identificación de patrones
              relevantes.
            </p>
          </div>
          <p class="mb-0">
            Así mismo, las técnicas de análisis univariado abarcan desde medidas
            de tendencia central y dispersión hasta el análisis detallado de la
            forma y características de las distribuciones. La exploración de
            estas métricas fundamentales proporciona insights sobre la
            naturaleza y calidad de los datos, permitiendo identificar sesgos,
            valores atípicos y patrones de variabilidad.
          </p>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-7 mb-lg-0 mb-3">
          <div class="p-4" style="background-color: #e2f4f9 ">
            <p class="mb-0">
              La visualización en el análisis univariado juega un papel
              determinante, empleando técnicas como histogramas, diagramas de
              densidad y diagramas de caja para representar gráficamente la
              distribución y características de las variables. Estas
              representaciones visuales facilitan la identificación de patrones
              que podrían no ser evidentes a través de métricas numéricas
              exclusivamente.<br /><br />La implementación programática del
              análisis univariado mediante bibliotecas especializadas permite la
              automatización y escalabilidad de estos procesos exploratorios,
              facilitando la generación sistemática de perfiles de variables y
              la identificación eficiente de características relevantes para el
              análisis posterior.
            </p>
          </div>
        </div>
        <div class="col-lg-5 col-7">
          <img src="@/assets/curso/temas/32.png" alt="" />
        </div>
      </div>
      <Separador></Separador>
      <div
        id="t_t_2"
        class="titulo-segundo color-acento-contenido"
        data-aos="fade-right"
      >
        <h2>
          2.2 Análisis bivariado: correlaciones y relaciones entre variables
        </h2>
      </div>
      <p class="mb-5" data-aos="fade-right">
        El análisis bivariado representa un paso fundamental en la comprensión
        de las relaciones entre variables, expandiendo la exploración de datos
        más allá del análisis univariado hacia el estudio sistemático de
        interacciones por pares. Este nivel de análisis es importante para
        identificar patrones de asociación, dependencias y posibles relaciones
        causales que pueden informar decisiones estratégicas y modelado
        predictivo.
      </p>
      <div class="row justify-content-center mb-5">
        <div class="col-lg-6 mb-lg-0 mb-3">
          <div class="tarjeta p-4 px-5" style="background-color: #d7eed6 ">
            <p class="mb-4">
              La piedra angular del análisis bivariado reside en la medición y
              cuantificación de relaciones entre variables. Las técnicas
              fundamentales de correlación incluyen:
            </p>
            <ul class="lista-ul--color">
              <li class="d-flex">
                <i class="fas fa-check"></i>
                <p class="mb-0">
                  <b>Correlación de Pearson:</b> diseñada para evaluar
                  relaciones lineales entre variables continuas, esta métrica
                  proporciona tanto la dirección como la fuerza de la
                  asociación. Su interpretación debe considerar aspectos como la
                  presencia de <em>outliers</em>, la linealidad de la relación y
                  la normalidad de las distribuciones. Valores cercanos a +1 o
                  -1 indican correlaciones fuertes, mientras que valores
                  cercanos a 0 sugieren ausencia de relación lineal.
                </p>
              </li>
              <li class="d-flex">
                <i class="fas fa-check"></i>
                <p class="mb-0">
                  <b>Correlación de Spearman:</b> ofrece una alternativa no
                  paramétrica que evalúa relaciones monótonas, siendo menos
                  sensible a <em>outliers</em> y no requiriendo supuestos sobre
                  la distribución de los datos. Resulta particularmente útil
                  cuando las relaciones no son estrictamente lineales o cuando
                  trabajamos con variables ordinales.
                </p>
              </li>
              <li class="d-flex">
                <i class="fas fa-check"></i>
                <p class="mb-0">
                  <b>Correlación de Kendall:</b> proporciona una medida robusta
                  de asociación basada en concordancias, especialmente útil para
                  muestras pequeñas o cuando existen empates en los rangos. Su
                  interpretación es similar a otras correlaciones, pero con
                  diferentes propiedades estadísticas que la hacen preferible en
                  ciertos contextos.
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="tarjeta p-4 mb-4" style="background-color: #e2dacc ">
            <p class="mb-4">
              Las medidas de asociación para variables categóricas presentan sus
              propias consideraciones especiales:
            </p>
            <ul class="lista-ul--color">
              <li class="d-flex">
                <i class="fas fa-check"></i>
                <p class="mb-0">
                  <b>Chi-cuadrado y V de Cramér:</b> evalúan la independencia
                  entre variables categóricas y proporcionan medidas de la
                  fuerza de asociación. La interpretación debe considerar el
                  tamaño de la muestra y las frecuencias esperadas en cada
                  categoría.
                </p>
              </li>
              <li class="d-flex">
                <i class="fas fa-check"></i>
                <p class="mb-0">
                  <b>Coeficiente de contingencia:</b> ofrece una medida
                  normalizada de asociación para variables categóricas,
                  facilitando comparaciones entre diferentes pares de variables.
                </p>
              </li>
              <li class="d-flex">
                <i class="fas fa-check"></i>
                <p class="mb-0">
                  <b>Lambda y Tau de Goodman-Kruskal:</b> proporcionan medidas
                  direccionales de asociación, útiles cuando una variable puede
                  considerarse dependiente de la otra.
                </p>
              </li>
            </ul>
          </div>
          <img src="@/assets/curso/temas/45.png" alt="" />
        </div>
      </div>
      <div class="row justify-content-center mb-5">
        <div class="col-lg-5 col-7 mb-lg-0 mb-3">
          <img src="@/assets/curso/temas/46.png" alt="" />
        </div>
        <div class="col-lg-7">
          <p class="mb-4">
            La visualización es un tema central en el análisis bivariado, con
            diferentes técnicas adaptadas a distintos tipos de variables:
          </p>
          <ul class="lista-ul--color">
            <li class="d-flex">
              <i class="fas fa-check"></i>
              <p class="mb-0">
                Para <b>variables numéricas continuas:</b> los diagramas de
                dispersión revelan patrones, tendencias y posibles no
                linealidades. La adición de líneas de regresión o curvas
                suavizadas puede ayudar a identificar la naturaleza de las
                relaciones.
              </p>
            </li>
          </ul>
          <ul class="lista-ul--color">
            <li class="d-flex">
              <i class="fas fa-check"></i>
              <p class="mb-0">
                Para
                <b>combinaciones de variables categóricas y numéricas:</b> los
                diagramas de caja paralelos, gráficos de violín y diagramas de
                puntos agrupados permiten comparar distribuciones entre
                categorías.
              </p>
            </li>
          </ul>
          <ul class="lista-ul--color">
            <li class="d-flex">
              <i class="fas fa-check"></i>
              <p class="mb-0">
                Para <b>variables categóricas:</b> los mapas de calor de
                frecuencias, gráficos de mosaico y diagramas de barras apiladas
                visualizan patrones de concurrencia y asociación.
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div class="row justify-content-center mb-5 g-0">
        <div class="col-lg-8 mb-lg-0 mb-3">
          <div class="p-4" style="background-color: #e2f4f9 ">
            <p class="mb-4">
              La interpretación de relaciones bivariadas requiere una
              consideración cuidadosa de varios aspectos críticos:
            </p>
            <ul class="lista-ul--color">
              <li class="d-flex">
                <i class="fas fa-check"></i>
                <p class="mb-0">
                  <b>Causalidad vs. correlación:</b> la presencia de una
                  correlación fuerte no implica necesariamente una relación
                  causal. La inferencia causal requiere consideraciones
                  adicionales como temporalidad, plausibilidad mecánica y
                  control de variables confusoras.
                </p>
              </li>
              <li class="d-flex">
                <i class="fas fa-check"></i>
                <p class="mb-0">
                  <b>Variables confusoras:</b> pueden crear correlaciones
                  espurias o enmascarar relaciones reales. Su identificación y
                  control es esencial para una interpretación válida de las
                  relaciones observadas.
                </p>
              </li>
              <li class="d-flex">
                <i class="fas fa-check"></i>
                <p class="mb-0">
                  <b>No linealidad:</b> las relaciones pueden ser más complejas
                  que simples asociaciones lineales. Las técnicas de
                  visualización y medidas de asociación no lineales son
                  fundamentales para capturar estos patrones.
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-4 col-7">
          <img src="@/assets/curso/temas/47.svg" alt="" />
        </div>
      </div>
      <p class="mb-5" data-aos="fade-right">
        La integración del análisis bivariado en el proceso más amplio de
        exploración de datos requiere una consideración cuidadosa de múltiples
        aspectos prácticos. La escalabilidad emerge como un desafío
        significativo, especialmente cuando trabajamos con grandes conjuntos de
        datos donde el análisis de todas las posibles parejas de variables puede
        resultar computacionalmente intensivo. Esto frecuentemente requiere el
        desarrollo de estrategias de priorización y la implementación de métodos
        eficientes de cálculo y almacenamiento. Los analistas deben balancear la
        exhaustividad del análisis con las limitaciones prácticas de recursos y
        tiempo, identificando las relaciones más relevantes para los objetivos
        del proyecto.<br /><br />La visualización efectiva de relaciones
        bivariadas presenta sus propios desafíos cuando se trabaja con múltiples
        variables. La necesidad de presentar numerosas relaciones de manera
        clara y comprensible requiere un diseño cuidadoso de las
        visualizaciones. Las matrices de correlación, por ejemplo, pueden
        proporcionar una vista general de las relaciones entre múltiples
        variables, pero deben complementarse con visualizaciones más detalladas
        para relaciones específicas de interés. Las herramientas de
        visualización interactiva han emergido como una solución valiosa,
        permitiendo a los usuarios explorar dinámicamente diferentes aspectos de
        las relaciones entre variables.
      </p>
      <div class="row justify-content-center mb-5">
        <div class="col-lg-6 mb-lg-0 mb-3">
          <div class="tarjeta p-4" style="background-color: #d7eed6 ">
            <p class="mb-0">
              La documentación meticulosa del proceso de análisis bivariado
              resulta fundamental para garantizar la reproducibilidad y
              facilitar la comunicación de resultados. Esto incluye el registro
              detallado de las decisiones metodológicas tomadas, los supuestos
              considerados, y las limitaciones identificadas durante el
              análisis. La documentación debe abordar aspectos como la
              justificación para la selección de medidas específicas de
              asociación, los criterios utilizados para identificar y tratar
              <em>outliers</em>, y las consideraciones tenidas en cuenta al
              interpretar las relaciones observadas. Esta documentación no solo
              facilita la reproducibilidad del análisis, sino que también
              proporciona contexto para la interpretación y aplicación de los
              hallazgos en la toma de decisiones.
            </p>
          </div>
        </div>
        <div class="col-lg-3 col-7 mb-lg-0 mb-3">
          <img src="@/assets/curso/temas/48.png" alt="" />
        </div>
        <div class="col-lg-3">
          <p class="mb-0">
            La aplicación rigurosa del análisis bivariado sienta las bases para
            análisis más complejos y proporciona insights accionables para la
            toma de decisiones. La combinación de técnicas estadísticas
            robustas, visualizaciones efectivas y consideración cuidadosa de
            limitaciones y supuestos permite extraer valor significativo de las
            relaciones entre variables.
          </p>
        </div>
      </div>
      <Separador></Separador>
      <div
        id="t_2_3"
        class="titulo-segundo color-acento-contenido"
        data-aos="fade-right"
      >
        <h2>2.3 Análisis multivariado: patrones y agrupaciones</h2>
      </div>
      <div class="bloque-texto-g color-acento-contenido p-3 p-sm-4 p-md-5 mb-5">
        <div
          class="bloque-texto-g__img"
          :style="{
            'background-image': `url(${require('@/assets/curso/temas/49.png')})`,
          }"
        ></div>
        <div class="bloque-texto-g__texto p-4">
          <p class="mb-0">
            El análisis multivariado representa una extensión sofisticada del
            análisis exploratorio de datos, trascendiendo las limitaciones
            inherentes a los análisis uni y bivariados para adentrarse en el
            estudio simultáneo de múltiples variables y sus complejas
            interrelaciones. Esta aproximación metodológica emerge como una
            necesidad fundamental en la era moderna del análisis de datos, donde
            la multidimensionalidad de la información requiere herramientas y
            técnicas capaces de capturar y revelar patrones que permanecerían
            ocultos bajo aproximaciones más simples.<br /><br />La
            fundamentación teórica del análisis multivariado se construye sobre
            principios del álgebra lineal y la estadística multivariada. El
            concepto de espacio multidimensional proporciona el marco matemático
            necesario para comprender cómo las variables interactúan y se
            relacionan entre sí. La noción de distancia en estos espacios
            multidimensionales se extiende más allá de la concepción euclidiana
            tradicional, incorporando medidas de similitud y disimilitud que
            permiten cuantificar las relaciones entre observaciones en múltiples
            dimensiones simultáneamente.
          </p>
        </div>
      </div>
      <div class="row justify-content-center mb-5">
        <div class="col-lg-9 mb-lg-0 mb-3">
          <p class="mb-4">
            El Análisis de Componentes Principales (PCA) emerge como una técnica
            fundamental dentro del arsenal multivariado, proporcionando un
            método matemáticamente elegante para la reducción de dimensionalidad
            mientras preserva la estructura esencial de los datos. Este método
            transforma el espacio original de variables en un nuevo sistema de
            coordenadas donde los ejes (componentes principales) se orientan en
            las direcciones de máxima varianza, permitiendo así una
            representación más eficiente e interpretable de la estructura
            subyacente de los datos.
          </p>
          <div class="row justify-content-center g-0">
            <div class="col-lg-6 col-7">
              <img src="@/assets/curso/temas/50.png" alt="" />
            </div>
            <div class="col-lg-6">
              <div class="p-4 h-100" style="background-color: #f3f0ea ">
                <div class="d-flex align-items-center">
                  <p class="mb-0">
                    El análisis factorial, por su parte, profundiza en la
                    estructura latente de los datos, buscando identificar
                    factores no observables que explican los patrones de
                    correlación entre las variables observadas. Esta técnica
                    resulta particularmente valiosa en campos como la
                    psicometría y las ciencias sociales, donde los constructos
                    de interés frecuentemente no pueden medirse directamente,
                    sino que deben inferirse a partir de múltiples indicadores
                    observables.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-6L">
          <img src="@/assets/curso/temas/51.png" alt="" />
        </div>
      </div>
      <p class="mb-5" data-aos="fade-right">
        Los métodos de <em>clustering</em> o agrupamiento representan otro pilar
        fundamental del análisis multivariado, permitiendo la identificación de
        grupos naturales en los datos basados en múltiples características
        simultáneamente. Estos métodos van más allá de la simple segmentación
        basada en criterios únicos, incorporando la complejidad total de las
        relaciones multivariadas para identificar estructuras de agrupamiento
        que reflejan patrones significativos en los datos.
      </p>
      <div class="row justify-content-center mb-5">
        <div class="col-lg-4 col-7 mb-lg-0 mb-3">
          <img src="@/assets/curso/temas/52.png" alt="" />
        </div>
        <div class="col-lg-8">
          <p class="mb-4">
            La detección de anomalías multivariadas presenta desafíos
            particulares que requieren técnicas específicamente diseñadas para
            espacios multidimensionales. Los métodos tradicionales de detección
            de valores atípicos deben adaptarse para considerar no solo valores
            extremos en dimensiones individuales, sino también combinaciones
            inusuales de valores que podrían ser normales cuando se consideran
            de manera aislada pero anómalos en su conjunto.
          </p>
          <div class="tarjeta p-4 mb-4" style="background-color: #f3f0ea ">
            <p class="mb-0">
              La visualización de relaciones multivariadas requiere técnicas que
              puedan representar efectivamente la complejidad de los datos
              multidimensionales en espacios visuales bidimensionales o
              tridimensionales. Los gráficos de coordenadas paralelas permiten
              la visualización simultánea de múltiples dimensiones, mientras que
              las matrices de dispersión proporcionan una vista comprehensiva de
              las relaciones entre pares de variables en el contexto más amplio
              del análisis multivariado.
            </p>
          </div>
          <p class="mb-0">
            La interpretación del análisis multivariado demanda una comprensión
            profunda de los supuestos subyacentes a cada técnica y las
            limitaciones inherentes a la reducción de dimensionalidad. La
            validación de resultados debe considerar tanto la significancia
            estadística como la relevancia práctica en el contexto del dominio
            específico de aplicación. La robustez de las conclusiones debe
            evaluarse mediante técnicas de validación cruzada y análisis de
            sensibilidad que consideren la estabilidad de los resultados frente
            a variaciones en los datos o los parámetros del análisis.
          </p>
        </div>
      </div>
      <p data-aos="fade-right">
        La aplicación efectiva del análisis multivariado requiere un balance
        cuidadoso entre la sofisticación metodológica y la interpretabilidad
        práctica de los resultados. La comunicación de hallazgos complejos a
        audiencias no técnicas demanda habilidades particulares en la traducción
        de resultados técnicos a <em>insights</em> accionables, manteniendo
        siempre la integridad metodológica del análisis mientras se asegura su
        utilidad práctica en la toma de decisiones.
      </p>
      <Separador></Separador>
      <div
        id="t_2_4"
        class="titulo-segundo color-acento-contenido"
        data-aos="fade-right"
      >
        <h2>
          2.4 Técnicas de reducción de dimensionalidad y selección de
          características
        </h2>
      </div>
      <p class="mb-5" data-aos="fade-right">
        La reducción de dimensionalidad se constituye como clave en el análisis
        de datos modernos, donde la alta dimensionalidad puede oscurecer
        patrones importantes y dificultar la interpretación de resultados. Estas
        técnicas permiten simplificar la estructura de los datos mientras
        preservan la información más relevante para el análisis.<br /><br />Los
        métodos de reducción de dimensionalidad abarcan desde técnicas lineales
        como PCA (Análisis de Componentes Principales) hasta aproximaciones no
        lineales como t-SNE y UMAP. La selección apropiada de estos métodos
        depende de la naturaleza de los datos y los objetivos específicos del
        análisis, considerando factores como la preservación de relaciones
        locales versus globales.
      </p>
      <div class="row justify-content-center mb-5">
        <div class="col-lg-10">
          <div
            class="titulo-sexto color-acento-contenido"
            data-aos="fade-right"
          >
            <h5>Tabla 2.</h5>
            <span>Métodos de reducción de dimensionalidad </span>
          </div>
          <div class="tabla-a color-acento-botones mb-5">
            <table>
              <caption>
                Fuente: OIT, 2024.
              </caption>
              <thead class="border-0">
                <tr class="text-white" style="background-color: #3ba935">
                  <th>Método de reducción</th>
                  <th>Principio fundamental</th>
                  <th>Ventajas y casos de uso</th>
                  <th>Consideraciones y limitaciones</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>PCA (Análisis de Componentes Principales)</td>
                  <td>
                    Transforma los datos en componentes ortogonales que
                    maximizan la varianza explicada.
                  </td>
                  <td>
                    Ideal para compresión de datos con alta correlación,
                    manteniendo la interpretabilidad de los componentes
                  </td>
                  <td>
                    Limitado a relaciones lineales y sensible a valores
                    atípicos. Puede perder información importante en datos con
                    estructuras no lineales significativas
                  </td>
                </tr>
                <tr>
                  <td>t-SNE (t-Distributed Stochastic Neighbor Embedding)</td>
                  <td>
                    Preserva la estructura local de los datos mediante la
                    conservación de probabilidades de similitud entre pares de
                    puntos.
                  </td>
                  <td>
                    Excelente para análisis exploratorio de alta
                    dimensionalidad, con énfasis la preservación de estructuras
                    locales y <em>clusters</em>
                  </td>
                  <td>
                    No preserva distancias globales y computacionalmente
                    intensivo para grandes conjuntos de datos.
                  </td>
                </tr>
                <tr>
                  <td>UMAP (Uniform Manifold Approximation and Projection)</td>
                  <td>
                    Construye una representación topológica de los datos
                    utilizando teoría de conjuntos difusos y geometría
                    diferencial
                  </td>
                  <td>
                    Proporciona una reducción de dimensionalidad más rápida que
                    t-SNE, preservando estructura local y global
                  </td>
                  <td>
                    Requiere una selección cuidadosa de parámetros y puede ser
                    menos intuitivo de interpretar
                  </td>
                </tr>
                <tr>
                  <td>LDA (Análisis Discriminante Lineal)</td>
                  <td>
                    Busca proyecciones que maximicen la separación entre clases
                    mientras minimizan la dispersión dentro de las clases
                  </td>
                  <td>
                    Particularmente efectivo para problemas de clasificación
                    donde se busca maximizar la separabilidad entre clases
                  </td>
                  <td>
                    Requiere datos etiquetados y asume distribuciones normales
                    por clase
                  </td>
                </tr>
                <tr>
                  <td class="fst-italic">Autoencoder</td>
                  <td>
                    Red neuronal que aprende una representación comprimida de
                    los datos a través de una arquitectura de cuello de botella
                  </td>
                  <td>
                    Capaz de capturar patrones no lineales complejos y adaptarse
                    a diversos tipos de datos
                  </td>
                  <td>
                    Requiere grandes cantidades de datos para el entrenamiento y
                    es computacionalmente intensivo
                  </td>
                </tr>
                <tr>
                  <td>NMF (Factorización de Matrices No Negativas)</td>
                  <td>
                    Descompone la matriz de datos en dos matrices no negativas,
                    proporcionando una representación aditiva de los datos
                  </td>
                  <td>
                    Proporciona descomposiciones naturalmente interpretables
                    para datos no negativos. Aplicado a procesamiento de texto y
                    análisis de señales
                  </td>
                  <td>
                    Aplicable solo a datos no negativos y puede converger a
                    mínimos locales
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <p class="mb-5" data-aos="fade-right">
        Las técnicas de reducción de dimensionalidad representan un conjunto
        fundamental de herramientas en el análisis moderno de datos, que se
        constituyen como soluciones para uno de los desafíos más significativos
        en la era del <em>big data</em>: la complejidad dimensional. Como se
        observa en la tabla anterior, cada técnica aborda este desafío desde una
        perspectiva única, proporcionando diferentes compromisos entre la
        preservación de la estructura de los datos, la interpretabilidad y la
        eficiencia computacional. La evolución de estas técnicas refleja la
        progresión desde enfoques lineales clásicos como PCA hasta métodos más
        sofisticados como UMAP y <em>autoencoders</em>, que pueden capturar
        relaciones no lineales complejas en los datos.
      </p>
      <div class="row justify-content-center mb-5">
        <div class="col-lg-9 mb-lg-0 mb-3">
          <p class="mb-4">
            La selección de la técnica más apropiada para un caso específico
            requiere una comprensión profunda no solo de los principios
            matemáticos subyacentes, sino también del contexto del problema y
            las características particulares de los datos. Por ejemplo, mientras
            que PCA puede ser la elección óptima para datos con fuertes
            correlaciones lineales y cuando la interpretabilidad es
            determinante, técnicas como t-SNE o UMAP pueden ser más adecuadas
            cuando el objetivo principal es la visualización o el descubrimiento
            de <em>clusters</em>. Los <em>autoencoders</em>, por su parte, han
            ganado prominencia en escenarios donde la complejidad de los
            patrones requiere la capacidad de aprendizaje profundo, a pesar del
            costo en términos de interpretabilidad y recursos computacionales.
          </p>
          <div class="p-4 mb-4" style="background-color: #f3f0ea ">
            <p class="mb-0">
              Los métodos de reducción de dimensionalidad abarcan desde técnicas
              lineales como PCA (Análisis de Componentes Principales) hasta
              aproximaciones no lineales como t-SNE y UMAP. La selección
              apropiada de estos métodos depende de la naturaleza de los datos y
              los objetivos específicos del análisis, considerando factores como
              la preservación de relaciones locales versus globales. La
              selección de características complementa la reducción de
              dimensionalidad, enfocándose en la identificación y retención de
              las variables más informativas para un objetivo específico.
            </p>
          </div>
        </div>
        <div class="col-lg-3 col-6">
          <img src="@/assets/curso/temas/58.png" alt="" />
        </div>
      </div>
      <p class="mb-5" data-aos="fade-right">
        Este proceso implica la evaluación sistemática de la relevancia y
        redundancia de las características, utilizando criterios estadísticos y
        técnicas de selección automatizada. La implementación efectiva de estas
        técnicas requiere un balance cuidadoso entre la simplificación de los
        datos y la preservación de información significativa, considerando
        aspectos como la interpretabilidad de los resultados y la validación de
        las transformaciones realizadas.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
