<template>
  <div class="curso-main-container pb-3">
    <BannerInterno></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5 mb-5">
      <div class="titulo-principal color-acento-contenido">
        <div class="titulo-principal__numero"><span>3</span></div>
        <h1>Visualización de datos</h1>
      </div>
      <div class="row justify-content-center mb-5">
        <div class="col-lg-9 mb-lg-0 mb-3">
          <div class="p-4" style="background-color: #e5e9eb ">
            <p class="mb-0">
              La visualización de datos para la toma de decisiones representa un
              pilar fundamental en el proceso analítico moderno, abarcando desde
              los principios fundamentales del diseño visual hasta las técnicas
              avanzadas de narración con datos. Este capítulo explora la
              progresión desde los fundamentos de la visualización efectiva,
              estableciendo las bases teóricas y prácticas para la creación de
              representaciones visuales impactantes, pasando por la
              implementación de visualizaciones interactivas y dashboards
              dinámicos, hasta llegar a las técnicas sofisticadas de data
              storytelling. La integración de estos elementos, fundamentada en
              principios sólidos de diseño y cognición, permite transformar
              datos complejos en narrativas visuales persuasivas que facilitan
              la comprensión profunda y la toma de decisiones informada en
              contextos empresariales y analíticos.
            </p>
          </div>
        </div>
        <div class="col-lg-3 col-7">
          <img src="@/assets/curso/temas/59.png" alt="" />
        </div>
      </div>
      <Separador></Separador>
      <div
        id="t_3_1"
        class="titulo-segundo color-acento-contenido"
        data-aos="fade-right"
      >
        <h2>3.1 Principios de visualización efectiva</h2>
      </div>
      <p class="mb-4">
        La visualización de datos es una disciplina fundamental en el análisis
        moderno, que actúa como puente entre los datos complejos y la
        comprensión humana. Los principios de visualización efectiva se
        fundamentan en la investigación sobre percepción visual, cognición
        humana y diseño de información, lo cual configura un marco sistemático
        para la creación de representaciones visuales que sean precisas,
        intuitivas y persuasivas en el contexto de la toma de decisiones.
      </p>
      <div class="row justify-content-center mb-5">
        <div class="col-lg-9 mb-lg-0 mb-3">
          <div class="p-3" style="background-color: #d7eed6 ">
            <p class="mb-0">
              La efectividad de una visualización se sustenta en principios
              fundamentales como la claridad, la economía y la integridad en la
              representación de datos. El principio de claridad exige que cada
              elemento visual tenga un propósito definido y contribuya
              significativamente a la comprensión, mientras que la economía
              visual sugiere utilizar la mínima cantidad de elementos necesarios
              para comunicar el mensaje, asegurando siempre que la
              representación no distorsione los datos subyacentes.
            </p>
          </div>
        </div>
        <div class="col-lg-3 col-7">
          <img src="@/assets/curso/temas/60.svg" alt="" />
        </div>
      </div>
      <p class="mb-5" data-aos="fade-right">
        Por su parte, la selección del tipo de visualización adecuado representa
        una decisión crítica que debe fundamentarse en la naturaleza de los
        datos y los objetivos específicos de comunicación. Esta decisión implica
        considerar múltiples factores como el tipo de variables, las relaciones
        que se desean destacar y el contexto en el que se utilizará la
        visualización, permitiendo seleccionar la representación más efectiva
        para cada situación específica.
      </p>
      <div class="row justify-content-center mb-5">
        <div class="col-lg-10">
          <div
            class="titulo-sexto color-acento-contenido"
            data-aos="fade-right"
          >
            <h5>Tabla 3.</h5>
            <span
              >Principios fundamentales para considerar en la visualización de
              datos</span
            >
          </div>
          <div class="tabla-a color-acento-botones mb-5">
            <table>
              <caption>
                Fuente: OIT, 2024.
              </caption>
              <thead class="border-0">
                <tr class="text-white" style="background-color: #3ba935">
                  <th>Principio</th>
                  <th>Definición</th>
                  <th>Aplicación Práctica</th>
                  <th>Errores comunes por evitar</th>
                </tr>
              </thead>
              <tbody class="text-center">
                <tr>
                  <td>Simplicidad</td>
                  <td>
                    El arte de maximizar la cantidad de información transmitida
                    mientras se minimiza el ruido visual. Enfoque en la esencia
                    del mensaje
                  </td>
                  <td>
                    Eliminar elementos decorativos innecesarios. Usar el espacio
                    en blanco estratégicamente para guiar la atención
                  </td>
                  <td>
                    Sobrecarga de elementos visuales, decoraciones excesivas que
                    no aportan información
                  </td>
                </tr>
                <tr>
                  <td>Jerarquía visual</td>
                  <td>
                    Organización de elementos visuales para guiar la atención
                    del observador en un orden específico y lógico
                  </td>
                  <td>
                    Usar tamaño, color y posición para destacar información
                    crítica. Establecer niveles claros de importancia
                  </td>
                  <td>
                    Falta de contraste entre elementos importantes y
                    secundarios, desorganización visual
                  </td>
                </tr>
                <tr>
                  <td>Consistencia</td>
                  <td>
                    Mantener uniformidad en el diseño, formato y estilo a través
                    de toda la visualización o conjunto de visualizaciones
                  </td>
                  <td>
                    Utilizar una paleta de colores coherente, mantener formatos
                    consistentes para elementos similares
                  </td>
                  <td>
                    Mezclar diferentes estilos o convenciones, cambiar formatos
                    sin justificación
                  </td>
                </tr>
                <tr>
                  <td>Proporcionalidad</td>
                  <td>
                    Representación precisa y honesta de las relaciones numéricas
                    en elementos visuales
                  </td>
                  <td>
                    Asegurar que las escalas sean apropiadas y que las
                    comparaciones visuales reflejen las diferencias reales
                  </td>
                  <td>
                    Manipulación de escalas, uso de gráficos truncados que
                    distorsionan la percepción
                  </td>
                </tr>
                <tr>
                  <td>Accesibilidad</td>
                  <td>
                    Diseño que considera las necesidades de diferentes usuarios
                  </td>
                  <td>
                    Usar combinaciones de colores que funcionen para daltónicos,
                    incluir etiquetas claras y textos alternativos
                  </td>
                  <td>
                    Depender solo del color para transmitir información, usar
                    textos demasiado pequeños
                  </td>
                </tr>
                <tr>
                  <td>Contextualización</td>
                  <td>
                    Proporcionar el contexto necesario para interpretar
                    correctamente la información presentada
                  </td>
                  <td>
                    Incluir títulos informativos, ejes claramente etiquetados y
                    notas explicativas cuando sea necesario
                  </td>
                  <td>
                    Presentar datos aislados sin referencia, omitir información
                    clave para la interpretación
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="row justify-content-center mb-5 g-0">
        <div class="col-lg-4 mb-lg-0 mb-3 d-lg-block d-none">
          <img src="@/assets/curso/temas/61.png" alt="" />
        </div>
        <div class="col-lg-8">
          <div class="p-3" style="background-color: #c6e9f3 ">
            <p class="mb-0">
              La implementación práctica de estos principios requiere un
              equilibrio cuidadoso entre los diferentes elementos y
              consideraciones presentados en la tabla. Por ejemplo, mientras la
              simplicidad nos impulsa a eliminar elementos superfluos, la
              contextualización nos recuerda la importancia de mantener
              información suficiente para una interpretación adecuada. De manera
              similar, la jerarquía visual debe trabajar en armonía con la
              accesibilidad, asegurando que la organización visual sea efectiva
              para todos los usuarios, independientemente de sus capacidades
              visuales.<br /><br />El uso efectivo del color, la forma y otros
              elementos visuales constituye un aspecto central en la creación de
              visualizaciones efectivas. El color debe emplearse de manera
              estratégica, considerando tanto sus aspectos funcionales como sus
              implicaciones perceptuales, mientras que la jerarquía visual,
              implementada a través del tamaño, el contraste y la posición de
              los elementos, guía la atención del observador y facilita la
              exploración sistemática de la información.<br /><br />La
              integración de principios de diseño con consideraciones cognitivas
              permite crear visualizaciones que sean tanto estéticamente
              agradables como cognitivamente eficientes. La carga cognitiva debe
              minimizarse mediante el uso apropiado de anotaciones, leyendas y
              elementos contextuales, manteniendo la consistencia en el diseño
              para facilitar la comparación y comprensión de diferentes aspectos
              de los datos.
            </p>
          </div>
        </div>
      </div>
      <Separador></Separador>
      <div
        id="t_3_2"
        class="titulo-segundo color-acento-contenido"
        data-aos="fade-right"
      >
        <h2>
          3.2 Creación de gráficos interactivos con bibliotecas especializadas
        </h2>
      </div>
      <p class="mb-5" data-aos="fade-right">
        La interactividad en la visualización de datos marca un punto de
        inflexión en la forma en que los usuarios interactúan con y comprenden
        la información compleja. Las bibliotecas modernas de visualización han
        evolucionado significativamente, proporcionando un conjunto robusto de
        capacidades que transforman visualizaciones estáticas en interfaces
        dinámicas y exploratorias. Esta evolución responde a la creciente
        necesidad de herramientas que permitan a los usuarios no solo consumir
        información visual, sino participar activamente en su exploración y
        análisis.
      </p>
      <div class="row justify-content-center mb-5">
        <div class="col-lg-7 mb-lg-0 mb-3">
          <AccordionRED
            class="mb-5"
            tipo="a"
            clase-tarjeta="tarjeta tarjeta--azul"
          >
            <div titulo="Interacciones básicas de exploración: ">
              <p class="mb-0">
                La capacidad de hacer <em>zoom</em> y <em>pan</em> permite a los
                usuarios examinar detalles específicos sin perder el contexto
                general, especialmente estratégico en visualizaciones de grandes
                conjuntos de datos. El filtrado dinámico facilita la exploración
                de subconjuntos específicos de datos, permitiendo a los usuarios
                construir y probar hipótesis sobre la marcha. Los tooltips
                informativos y etiquetas dinámicas proporcionan contexto
                adicional bajo demanda, enriqueciendo la experiencia de
                exploración sin sobrecargar la visualización principal.
              </p>
            </div>
            <div titulo="Manipulación avanzada de datos: ">
              <p class="mb-0">
                Las capacidades de ordenamiento dinámico permiten a los usuarios
                reorganizar la información según diferentes criterios, revelando
                patrones que podrían no ser evidentes en una organización
                estática. La agregación y desagregación interactiva facilita la
                exploración de datos a diferentes niveles de granularidad,
                permitiendo tanto visiones generales como análisis detallados.
                La selección y resaltado de elementos específicos ayuda a los
                usuarios a mantener el foco en áreas de interés mientras
                mantienen la consciencia del contexto general.
              </p>
            </div>
            <div titulo="Enlace y coordinación entre vistas:">
              <p class="mb-0">
                La actualización sincronizada de múltiples visualizaciones
                relacionadas permite explorar diferentes aspectos de los mismos
                datos simultáneamente. Los filtros cruzados entre diferentes
                vistas facilitan la comprensión de relaciones complejas entre
                variables. La persistencia de selecciones a través de diferentes
                visualizaciones ayuda a mantener la coherencia en la exploración
                de datos multidimensionales.
              </p>
            </div>
          </AccordionRED>
        </div>
        <div class="col-lg-5 col-7">
          <img src="@/assets/curso/temas/62.png" alt="" />
        </div>
      </div>
      <p class="mb-5" data-aos="fade-right">
        El diseño efectivo de interactividad requiere una comprensión profunda
        de los principios de interacción humano-computadora. La respuesta
        inmediata a las acciones del usuario resulta clave para mantener el
        flujo de análisis, mientras que las transiciones suaves entre estados
        ayudan a mantener la continuidad visual y cognitiva. La consistencia en
        las interacciones a través de diferentes componentes de la visualización
        reduce la carga cognitiva y facilita el aprendizaje del sistema.
      </p>
      <div class="row justify-content-center mb-4">
        <div class="col-lg-2 col-6 mb-lg-0 mb-3">
          <img src="@/assets/curso/temas/63.svg" alt="" />
        </div>
        <div class="col-lg-10">
          <p class="mb-0">
            La implementación de visualizaciones interactivas debe considerar
            cuidadosamente el rendimiento y la escalabilidad. Las técnicas de
            optimización, como el muestreo dinámico y la agregación progresiva,
            permiten mantener la responsividad incluso con grandes volúmenes de
            datos. El almacenamiento en caché inteligente y la carga bajo
            demanda pueden mejorar significativamente la experiencia del usuario
            sin comprometer la riqueza de la interactividad.<br /><br />La
            accesibilidad debe ser una consideración central en el diseño de
            visualizaciones interactivas. Los controles deben ser operables a
            través de diferentes dispositivos de entrada, y la información
            relevante debe ser accesible a través de múltiples modalidades. La
            inclusión de atajos de teclado y la compatibilidad con tecnologías
            de asistencia amplían el alcance y utilidad de las visualizaciones.
          </p>
        </div>
      </div>
      <p class="mb-4">
        La documentación y guía del usuario son esenciales en la adopción
        efectiva de visualizaciones interactivas. Las ayudas contextuales,
        tutoriales integrados y documentación clara pueden ayudar a los usuarios
        a descubrir y aprovechar toda la funcionalidad disponible. La
        retroalimentación clara sobre las acciones posibles y sus efectos ayuda
        a los usuarios a construir un modelo mental efectivo de la
        interactividad.
      </p>
      <p class="fw-bold mb-4">
        Los casos de uso más avanzados de visualización interactiva incluyen:
      </p>
      <div class="row justify-content-center mb-5">
        <div class="col-lg-5 mb-lg-0 mb-3">
          <div class="tarjeta p-4 h-100" style="background-color: #e5e9eb ">
            <div class="row justify-content-center mb-3">
              <div class="col-lg-6">
                <img src="@/assets/curso/temas/64.svg" alt="" />
              </div>
            </div>
            <h5 class="mb-4">Análisis exploratorio colaborativo:</h5>
            <p class="mb-0">
              Los sistemas modernos permiten múltiples usuarios interactuar
              simultáneamente con las mismas visualizaciones, facilitando la
              colaboración en tiempo real. La capacidad de guardar y compartir
              estados específicos de exploración permite la documentación
              efectiva de hallazgos y la comunicación asíncrona. La integración
              con herramientas de anotación y comentarios enriquece el proceso
              colaborativo, permitiendo la construcción colectiva de
              conocimiento.
            </p>
          </div>
        </div>
        <div class="col-lg-5 mb-lg-0 mb-3">
          <div class="tarjeta p-4 h-100" style="background-color: #f3f0ea ">
            <div class="row justify-content-center mb-3">
              <div class="col-lg-6">
                <img src="@/assets/curso/temas/65.svg" alt="" />
              </div>
            </div>
            <h5 class="mb-4">Narración de datos interactiva:</h5>
            <p class="mb-0">
              La combinación de interactividad con técnicas de
              <em>storytelling</em> permite crear presentaciones dinámicas que
              se adaptan a diferentes audiencias y niveles de interés. La
              capacidad de desviar de un camino narrativo predefinido para
              explorar detalles específicos enriquece la experiencia de
              aprendizaje mientras mantiene la coherencia narrativa general.
            </p>
          </div>
        </div>
      </div>
      <div class="row justify-content-center mb-5">
        <div class="col-lg-8 mb-lg-0 mb-3">
          <div class="p-4" style="background-color: #eaf5e9 ">
            <p class="mb-0">
              La integración de visualizaciones interactivas en flujos de
              trabajo analíticos más amplios extiende su utilidad más allá de la
              exploración inicial de datos. La capacidad de exportar hallazgos,
              guardar estados de análisis y conectar con otras herramientas
              analíticas crea un ecosistema cohesivo que soporta el ciclo
              completo de análisis de datos.<br /><br />La evolución continua de
              las capacidades interactivas, impulsada por avances en tecnología
              web y procesamiento de datos, promete expandir aún más las
              posibilidades de exploración y análisis visual. La emergencia de
              nuevas técnicas de interacción y visualización seguirá
              enriqueciendo nuestra capacidad para descubrir y comunicar
              <em>insights </em> significativos en datos complejos.
            </p>
          </div>
        </div>
        <div class="col-lg-4 col-7">
          <img src="@/assets/curso/temas/66.png" alt="" />
        </div>
      </div>
      <Separador></Separador>
      <div
        id="t_3_3"
        class="titulo-segundo color-acento-contenido"
        data-aos="fade-right"
      >
        <h2>3.3 <em>Dashboards</em> para toma de decisiones</h2>
      </div>
      <div class="row justify-content-center mb-5">
        <div class="col-lg-9 mb-lg-0 mb-3">
          <p class="mb-4">
            Los <em>dashboards</em> modernos representan una evolución
            significativa en la visualización de datos empresariales,
            transformando la manera en que las organizaciones monitorean,
            analizan y responden a información crítica del negocio. Herramientas
            como Tableau, Power BI y Looker han establecido nuevos estándares en
            la creación de interfaces analíticas, permitiendo la integración de
            datos en tiempo real con visualizaciones interactivas sofisticadas.
          </p>
          <div class="p-4" style="background-color: #e2f4f9">
            <p class="mb-0">
              La arquitectura efectiva de <em>dashboards</em> contemporáneos se
              apoya en <em>frameworks</em> robustos como React para aplicaciones
              web, D3.js para visualizaciones personalizadas, y bibliotecas
              especializadas como Apache ECharts para gráficos interactivos.
              Estas tecnologías permiten crear experiencias altamente
              responsivas que mantienen su rendimiento incluso con grandes
              volúmenes de datos y múltiples usuarios concurrentes.<br /><br />Los
              casos de uso empresariales han expandido significativamente el
              alcance de los <em>dashboards</em>. En finanzas, los
              <em>dashboards</em> de rendimiento financiero integran datos de
              múltiples fuentes para proporcionar visiones en tiempo real de
              métricas críticas como flujo de caja, márgenes y proyecciones. En
              operaciones, los <em>dashboards</em> de control de producción
              permiten el monitoreo en tiempo real de eficiencia, calidad y
              mantenimiento predictivo. El sector <em>retail</em> utiliza
              <em>dashboards</em> de análisis de ventas que combinan datos de
              transacciones, inventario y comportamiento del consumidor para
              optimizar operaciones y estrategias de <em>marketing.</em>
            </p>
          </div>
        </div>
        <div class="col-lg-3 col-6">
          <img src="@/assets/curso/temas/67.png" alt="" />
        </div>
      </div>
      <p class="mb-4 fw-bold">
        Los elementos críticos para el éxito de un dashboard moderno incluyen:
      </p>
      <div class="row justify-content-center mb-5">
        <div class="col-lg-10">
          <AccordionRED
            class="mb-5"
            tipo="a"
            clase-tarjeta="tarjeta tarjeta--azul"
          >
            <div titulo="Arquitectura de datos robusta:">
              <p class="mb-0">
                Los sistemas ETL modernos como Apache Airflow o Databricks
                aseguran la integración continua de datos actualizados, mientras
                que las bases de datos columnares como ClickHouse o Apache Pinot
                optimizan el rendimiento de consultas analíticas. La
                implementación de cachés inteligentes y agregaciones
                pre-calculadas permite mantener tiempos de respuesta óptimos
                incluso con grandes volúmenes de datos.
              </p>
            </div>
            <div titulo="Diseño centrado en el usuario: ">
              <p class="mb-0">
                Las mejores prácticas actuales enfatizan
                <em>layouts</em> adaptables que funcionan en múltiples
                dispositivos, desde pantallas de control hasta dispositivos
                móviles. La implementación de patrones de diseño como el
                <em
                  >“overview first, zoom and filter, then details on demand”</em
                >
                de Shneiderman mejora significativamente la usabilidad.
              </p>
            </div>
            <div titulo="Capacidades analíticas avanzadas: ">
              <p class="mb-0">
                La integración de técnicas de análisis estadístico,
                <em>machine learning</em> y procesamiento de señales permite la
                detección automática de anomalías y la generación de alertas
                predictivas. Herramientas como Prophet para
                <em>forecasting</em> o bibliotecas de detección de anomalías
                como ADTK enriquecen las capacidades analíticas del
                <em>dashboard.</em>
              </p>
            </div>
            <div titulo="Colaboración: ">
              <p class="mb-0">
                Funcionalidades modernas como anotaciones compartidas,
                exportación de <em>insights </em> y programación automatizada de
                reportes facilitan la colaboración entre equipos y la
                comunicación efectiva de hallazgos.
              </p>
            </div>
          </AccordionRED>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-4 col-7 mb-lg-0 mb-3">
          <img src="@/assets/curso/temas/68.png" alt="" />
        </div>
        <div class="col-lg-8">
          <div class="p-4" style="background-color: #e2f4f9 ">
            <p class="mb-0">
              La optimización del rendimiento en <em>dashboards</em> modernos
              requiere consideración especial de aspectos técnicos como el
              diseño de consultas eficientes, la implementación de estrategias
              de <em>caching</em>, y la optimización de recursos visuales.
              Herramientas de monitoreo como New Relic o Grafana permiten
              identificar y resolver cuellos de botella en el rendimiento.<br /><br />La
              seguridad y el control de acceso representan aspectos críticos en
              la implementación de <em>dashboards</em> empresariales. La
              integración con sistemas de autenticación empresarial (SSO), la
              implementación de controles de acceso basados en roles (RBAC), y
              el registro detallado de actividades aseguran que la información
              sensible permanezca protegida mientras se mantiene accesible para
              los usuarios autorizados.<br /><br />La tendencia hacia
              <em>dashboards</em> más inteligentes y automatizados continúa
              evolucionando, con la incorporación de capacidades de
              procesamiento de lenguaje natural para consultas conversacionales,
              integración de asistentes virtuales para la exploración de datos,
              y la automatización de <em>insights </em> mediante técnicas de
              inteligencia artificial. Estas innovaciones están redefiniendo la
              interacción entre usuarios y datos empresariales, facilitando un
              acceso más intuitivo y efectivo a la información crítica para la
              toma de decisiones.
            </p>
          </div>
        </div>
      </div>
      <Separador></Separador>
      <div
        id="t_3_4"
        class="titulo-segundo color-acento-contenido"
        data-aos="fade-right"
      >
        <h2>3.4 Narración con datos</h2>
      </div>
      <div class="row justify-content-center mb-5">
        <div class="col-lg-8 mb-lg-0 mb-3">
          <p class="mb-0">
            La narración con datos representa una disciplina especializada que
            combina principios de diseño visual, estructura narrativa y
            psicología cognitiva para crear presentaciones efectivas de
            información cuantitativa. Este enfoque se centra en la construcción
            sistemática de narrativas que transforman datos complejos en
            historias coherentes y memorables.<br /><br />La estructura
            narrativa en la visualización de datos requiere una planificación
            cuidadosa que incluye el establecimiento del contexto, el desarrollo
            de la tensión narrativa y la revelación progresiva de
            <em>insights </em>. Estas técnicas narrativas deben adaptarse al
            tipo de datos, la complejidad del análisis y los objetivos de
            comunicación específicos.<br /><br />Los elementos estructurales del
            <em>data storytelling</em> incluyen la creación de un arco narrativo
            claro, el uso efectivo de analogías y metáforas visuales, y la
            integración coherente de elementos cuantitativos y cualitativos. La
            selección y secuenciación de visualizaciones debe responder a esta
            estructura narrativa, construyendo gradualmente la comprensión de la
            audiencia.
          </p>
        </div>
        <div class="col-lg-4 col-7">
          <img src="@/assets/curso/temas/74.svg" alt="" />
        </div>
      </div>
      <div class="tarjeta p-4 mb-5" style="background-color: #f3f0ea ">
        <p class="mb-0">
          La implementación de técnicas de <em>storytelling</em> visual requiere
          considerar aspectos como el ritmo de la presentación, los puntos de
          énfasis visual y los momentos de revelación de información clave. La
          integración efectiva de estos elementos crea una experiencia narrativa
          que mantiene el interés de la audiencia mientras comunica información
          compleja de manera accesible.
        </p>
      </div>
      <div class="row justify-content-center mb-5">
        <div class="col-lg-8">
          <div
            class="titulo-sexto color-acento-contenido"
            data-aos="fade-right"
          >
            <h5>Figura 2.</h5>
            <span>
              Proceso iterativo para un
              <em>data storytelling</em> efectivo</span
            >
          </div>
          <img
            class="mb-4"
            src="@/assets/curso/temas/75.svg"
            alt="la Figura 2, titulada «Proceso iterativo para un data storytelling efectivo», ilustra un proceso en cuatro etapas para desarrollar y comunicar historias de datos de manera impactante y comprensible. la primera etapa, identificación de contexto y audiencia, se centra en comprender el entorno y las necesidades de quienes recibirán el mensaje. la segunda etapa, estructuración de la narrativa, consiste en organizar la historia de los datos para que siga un flujo claro y lógico. la tercera, diseño visual del mensaje, implica seleccionar visualizaciones y elementos gráficos que refuercen la claridad y atractivo de la información. la última etapa, entrega y retroalimentación, asegura que el mensaje se transmita adecuadamente y permite ajustar y mejorar la narrativa en función de los comentarios recibidos. este proceso iterativo facilita la creación de historias de datos claras, atractivas y alineadas con los intereses de la audiencia."
          />
          <figcaption>Fuente: OIT, 2024.</figcaption>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tema3',
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
