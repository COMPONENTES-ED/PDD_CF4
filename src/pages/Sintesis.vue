<template>
  <div class="curso-main-container pb-3">
    <BannerInterno icono="fas fa-sitemap" titulo="Síntesis"></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5">
      <div class="row justify-content-center mb-5">
        <div class="col-lg-8 mb-lg-0 mb-3">
          <div class="row justify-content-center mb-5">
            <div class="col-lg-4 col-7 mb-lg-0 mb-3">
              <img src="@/assets/curso/temas/s1.png" alt="" />
            </div>
            <div class="col-lg-8 mb-lg-0 mb-3">
              <div class="p-4" style="background-color: #10314b">
                <p class="mb-0 text-white">
                  El diagrama siguiente representa la estructura integral del
                  componente formativo, centrado en la exploración, validación y
                  visualización de datos para apoyar la toma de decisiones
                  informadas. Se organiza en cuatro áreas clave: fundamentos,
                  análisis exploratorio, visualización avanzada y soporte en la
                  toma de decisiones. Cada una de estas áreas se desglosa en
                  subtemas específicos que constituyen los pilares de un proceso
                  de análisis de datos efectivo y preciso.
                </p>
              </div>
            </div>
          </div>
          <div class="p-4 mb-4" style="background-color: #eaf5e9 ">
            <p class="mb-0">
              Esta organización refleja una secuencia lógica de aprendizaje,
              comenzando por los principios básicos de manejo y preparación de
              datos, hasta el uso de herramientas avanzadas de visualización y
              técnicas de validación. La interconexión entre las diferentes
              áreas ilustra cómo cada concepto contribuye al objetivo final de
              estructurar y presentar datos de manera coherente para facilitar
              la toma de decisiones basadas en evidencia.
            </p>
          </div>
          <p class="mb-0">
            El diagrama actúa como una guía visual para navegar los conceptos
            desarrollados en el texto, permitiendo al aprendiz entender
            rápidamente la estructura del componente y las relaciones entre sus
            distintos elementos. Se recomienda utilizarlo como una referencia
            para organizar el estudio y comprender la integración de los
            diversos aspectos de la exploración y validación de datos en el
            contexto de decisiones estratégicas.
          </p>
        </div>
        <div class="col-lg-4 d-lg-block d-none">
          <img src="@/assets/curso/temas/s2.png" alt="" />
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-10 mb-5">
          <figure>
            <img
              src="@/assets/curso/temas/sintesis2.svg"
              alt="La Figura 3 se denomina «Síntesis temática del componente», en ella se presentan los principales temas abordados en la exploración, validación y visualización de datos para la toma de decisiones, tales como los fundamentos, el análisis estadístico, la visualización y el soporte en la toma de decisiones, junto con algunos subtemas que forman parte integral de cada uno de ellos."
            />
            <figcaption>Fuente: OIT, 2024</figcaption>
          </figure>
        </div>
        <div class="col-auto">
          <a
            class="anexo mb-5"
            :href="obtenerLink('/downloads/Sintesis.pdf')"
            target="_blank"
          >
            <div class="anexo__icono">
              <img src="@/assets/bullets/icono-pdf.svg" />
            </div>
            <div class="anexo__texto">
              <p>Anexo. Síntesis</p>
            </div></a
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Sintesis',
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
