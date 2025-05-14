<template>
  <div class="curso-main-container glosario">
    <BannerInterno icono="fas fa-atlas" titulo="Glosario"></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5 mb-5">
      <div
        v-for="letra in orderedData"
        :key="'letra-' + letra.letra"
        class="glosario__letra-item mb-2"
      >
        <div class="glosario__letra-item__letra me-4">
          <div class="glosario__letra-item__letra__icono">
            <span>{{ letra.letra }}</span>
          </div>
        </div>
        <div class="glosario__letra-item__texto">
          <p
            v-for="termino in letra.terminos"
            :key="termino.termino"
            class="mb-3"
          >
            <strong><i class="lista-ul__vineta"></i></strong
            ><strong v-html="termino.terminoHtml || termino.termino"> </strong
            ><strong>: </strong><span v-html="termino.significado"></span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import plantillaMixins from '@/js/plantillaMixins'
export default {
  name: 'Glosario',
  mixins: [plantillaMixins],
  data() {
    return {
      glosarioData: [
        {
          termino: 'Análisis bivariado',
          significado:
            'Técnica estadística que examina la relación entre dos variables diferentes, estudiando sus patrones de asociación y correlaciones. Fundamental para identificar relaciones causales potenciales y comprender cómo diferentes aspectos de los datos se influencian mutuamente.',
        },
        {
          termino: 'Análisis multivariado',
          significado:
            'Conjunto de métodos estadísticos que analizan simultáneamente múltiples variables y sus interrelaciones. Incluye técnicas como análisis de componentes principales y análisis factorial, permitiendo descubrir patrones complejos en los datos.',
        },
        {
          termino: '<em>Dashboard</em>',
          significado:
            'Panel visual interactivo que presenta información clave y métricas de manera consolidada y organizada. Facilita el monitoreo y toma de decisiones al proporcionar una vista integral del rendimiento y estado de diversos indicadores críticos.',
        },
        {
          termino: '<em>Data storytelling</em>',
          significado:
            'Práctica que combina visualización de datos, narrativa y análisis para construir historias significativas basadas en datos. Implica la selección de elementos visuales y la construcción de una narrativa coherente para presentar <em>insights</em> efectivamente.',
        },
        {
          termino: '<em>Framework</em>',
          significado:
            'Marco de trabajo que proporciona una estructura estandarizada y mejores prácticas para el desarrollo de soluciones analíticas. Incluye herramientas, bibliotecas y metodologías que facilitan la implementación de procesos de análisis.',
        },
        {
          termino: '<em>Insight</em>',
          significado:
            'Comprensión profunda derivada del análisis de datos que revela patrones, tendencias o relaciones no evidentes a primera vista. Proporciona valor accionable para la toma de decisiones, combinando hallazgos cuantitativos con contexto empresarial.',
        },
        {
          termino: 'KPI (Key Performance Indicator)',
          significado:
            'Métrica cuantificable crítica utilizada para evaluar el éxito en el cumplimiento de objetivos específicos. Proporciona una base objetiva para la evaluación del rendimiento y la toma de decisiones.',
        },
        {
          termino: '<em>Outlier</em>',
          significado:
            'Valor atípico que se desvía significativamente del patrón general de los datos. Su identificación y tratamiento adecuado es importante para el análisis estadístico robusto y puede revelar fenómenos interesantes.',
        },
        {
          termino: '<em>Pipeline</em>',
          significado:
            'Secuencia estructurada de procesos de datos donde la salida de cada etapa sirve como entrada para la siguiente. Representa un flujo de trabajo automatizado que incluye limpieza, transformación y análisis de datos.',
        },
        {
          termino: 'PCA (Principal Component Analysis)',
          significado:
            'Técnica de reducción de dimensionalidad que transforma variables correlacionadas en un conjunto menor de variables no correlacionadas. Fundamental para simplificar datos complejos manteniendo la información relevante.',
        },
        {
          termino: '<em>Script</em>',
          significado:
            'Programas que automatizan la ejecución de tareas específicas que normalmente se realizarían manualmente. En análisis de datos, permiten la reproducibilidad y escalabilidad de los procesos analíticos.',
        },
        {
          termino: '<em>t-SNE</em>',
          significado:
            'Técnica de reducción de dimensionalidad no lineal efectiva para la visualización de datos complejos. Preserva las relaciones locales entre puntos de datos, permitiendo la identificación de patrones y clusters.',
        },
        {
          termino: 'Validación cruzada',
          significado:
            'Técnica estadística para evaluar la calidad de modelos analíticos, dividiendo los datos en subconjuntos para entrenamiento y prueba. Permite estimar la precisión y confiabilidad de los resultados.',
        },
        {
          termino: 'Visualización interactiva',
          significado:
            'Representación gráfica dinámica que permite la exploración activa y manipulación de datos. Incluye características como zoom, filtrado y actualización en tiempo real para facilitar el descubrimiento de patrones.',
        },
      ],
    }
  },
  computed: {
    orderedData() {
      const newGlosarioData = [...this.glosarioData]
      newGlosarioData.forEach(element => {
        element.significado =
          element.significado.charAt(0).toLowerCase() +
          element.significado.slice(1)
      })

      const sortedData = [...newGlosarioData].reduce((r, e) => {
        const letra = this.quitarAcentos(e.termino.toLowerCase())[0]
        if (!r[letra]) r[letra] = { letra, terminos: [e] }
        else r[letra].terminos.push(e)
        return r
      }, {})

      const soloLetras = Object.keys(sortedData).sort()
      const newSortedData = []

      soloLetras.forEach(element => {
        const letraObj = sortedData[element]
        let terminos = letraObj.terminos

        if (terminos.length > 1) {
          const terminosOrdenados = []
          const soloTerminos = letraObj.terminos
            .map(termObj => termObj.termino)
            .sort((a, b) => {
              const an = this.quitarAcentos(a).toLowerCase()
              const bn = this.quitarAcentos(b).toLowerCase()
              if (an < bn) return -1
              if (bn < an) return 1
              return 0
            })
          soloTerminos.forEach(term => {
            terminosOrdenados.push(
              terminos.find(termino => termino.termino === term),
            )
          })
          terminos = terminosOrdenados
        }
        newSortedData.push({
          letra: letraObj.letra.toUpperCase(),
          terminos: terminos,
        })
      })
      return newSortedData
    },
  },
}
</script>

<style lang="sass">
.glosario
  &__letra-item
    display: flex
    &__texto
      padding-top: 5px
    &__letra
      &__icono
        width: 32px
        height: 32px
        position: relative
        line-height: 1em
        border-radius: 50%
        background-color: $color-sistema-d

        span
          position: absolute
          left: 50%
          top: 50%
          transform: translate(-50%,-50%)
          font-size: 1.1em
          font-weight: $base-black-font-weight
</style>
