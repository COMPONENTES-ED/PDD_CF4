<template>
  <div class="curso-main-container introduccion">
    <BannerInterno></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5 mb-5">
      <div class="titulo-principal color-acento-contenido">
        <div class="titulo-principal__numero">
          <span><i class="fas fa-info"></i></span>
        </div>
        <h1>Introducción</h1>
      </div>
      <div class="row justify-content-center mb-5">
        <div class="col-lg-9 mb-lg-0 mb-3">
          <p class="mb-4">
            En la era actual de la analítica de datos, la capacidad para
            explorar, validar y visualizar información de manera efectiva se ha
            convertido en una competencia fundamental para cualquier persona del
            área. La toma de decisiones basada en datos requiere no solo la
            habilidad técnica para procesar información, sino también la
            capacidad de extraer insights significativos y comunicarlos de
            manera efectiva a diferentes audiencias.
          </p>
          <div class="p-4 mb-4" style="background-color: #e2f4f9 ">
            <p>
              El análisis exploratorio de datos representa el primer paso
              crítico en este proceso, permitiendo comprender la naturaleza y
              características de los datos antes de aplicar técnicas más
              avanzadas. Este proceso sistemático de exploración revela
              patrones, tendencias y anomalías que pueden ser claves para la
              toma de decisiones informada. Sin embargo, la exploración por sí
              sola no es suficiente; los hallazgos deben validarse rigurosamente
              para asegurar la solidez de las conclusiones derivadas.<br /><br />La
              visualización de datos actúa como un puente fundamental entre el
              análisis técnico y la comprensión humana, transformando
              información compleja en representaciones visuales intuitivas y
              persuasivas. En un mundo donde la cantidad de datos disponibles
              crece exponencialmente, la capacidad para crear visualizaciones
              efectivas se ha vuelto indispensable para comunicar hallazgos y
              facilitar la toma de decisiones a todos los niveles
              organizacionales.
            </p>
          </div>
          <p>
            Este componente formativo integra estos tres elementos críticos:
            exploración, validación y visualización, proporcionando un marco
            sistemático para transformar datos en decisiones accionables. A lo
            largo del contenido, se abordarán desde los fundamentos del análisis
            exploratorio hasta las técnicas avanzadas de visualización y
            narración con datos, enfatizando siempre la importancia de la
            validación rigurosa y la comunicación efectiva de resultados.
          </p>
        </div>
        <div class="col-lg-3 col-7">
          <img src="@/assets/curso/temas/1.png" alt="" />
        </div>
      </div>
      <div class="row justify-content-center mb-5">
        <div class="col-lg-5 col-7 mb-lg-0 mb-3">
          <img src="@/assets/curso/temas/2.png" alt="" />
        </div>
        <div class="col-lg-7">
          <div class="p-4 mb-4" style="background-color:#f3f0ea ">
            <p class="mb-0">
              <span class="color-tres"
                >¿Cómo podemos asegurar que nuestros análisis no solo sean
                técnicamente sólidos, sino también significativos y accionables
                para la toma de decisiones?</span
              >
              Este componente aborda esta pregunta fundamental, guiando al
              aprendiz a través de las metodologías, técnicas y mejores
              prácticas que permiten desarrollar un proceso analítico integral,
              desde la exploración inicial de los datos hasta la formulación de
              recomendaciones basadas en evidencia.
            </p>
          </div>
          <p>
            A medida que avancemos en el contenido, descubriremos cómo cada
            elemento se integra en un flujo de trabajo coherente que potencia la
            toma de decisiones informada. Desde el uso de bibliotecas
            especializadas para el análisis exploratorio hasta la creación de
            <em>dashboards</em> interactivos y la construcción de narrativas
            efectivas con datos, cada sección contribuye a desarrollar las
            competencias necesarias para convertirse en una persona competente
            en la analítica de datos moderna.
          </p>
        </div>
      </div>
      <figure>
        <div class="video">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/3yV9y0uOTMA?si=m7rJoA8R1ak1s4UH"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen="allowfullscreen"
          ></iframe>
        </div>
        <figcaption>
          Video. Exploración, validación y visualización de datos para la toma
          de decisiones
        </figcaption>
      </figure>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
