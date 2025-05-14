<template>
  <div class="curso-main-container complementario">
    <BannerInterno
      icono="far fa-folder-open"
      titulo="Material complementario"
    ></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5 mb-5">
      <div class="table-responsive">
        <table>
          <thead>
            <tr>
              <th colspan="3" scope="col">Tema</th>
              <th colspan="5" scope="col">Referencia APA del material</th>
              <th colspan="2" scope="col">Tipo</th>
              <th colspan="2" scope="col">Enlace</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(item, index) in computedData"
              :key="'complementario-' + index"
            >
              <td
                class="text-start"
                colspan="3"
                scope="row"
                v-html="item.tema"
              ></td>
              <td
                class="text-start"
                colspan="5"
                scope="row"
                v-html="item.referencia"
              ></td>
              <td colspan="2" v-html="item.tipo"></td>
              <td colspan="2">
                <div class="complementario__enlaces">
                  <a
                    v-for="(link, linkIndex) of item.link"
                    :key="linkIndex"
                    class="complementario__btn"
                    :href="link"
                    target="_blank"
                    ><i class="fas fa-external-link-alt"></i
                  ></a>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MaterialComplementario',
  computed: {
    complementarioData() {
      return [
        {
          tema: 'Introducción analítica de datos y visualización',
          referencia:
            'Ecosistema de Recursos Educativos Digitales SENA. (2024b, julio 25). <em>Introducción Analítica de datos y visualización.</em>',
          tipo: 'Video',
          link: 'https://www.youtube.com/watch?v=LuTpQ44F2xY',
        },
        {
          tema: 'Pruebas exploratorias, usabilidad y aceptación',
          referencia:
            'Ecosistema de Recursos Educativos Digitales SENA. (2024a, abril 3). <em>Pruebas de exploratorias, usabilidad y aceptación.</em>',
          tipo: 'Video',
          link: 'https://www.youtube.com/watch?v=CB3Bt4SFnCc',
        },
        {
          tema: 'Técnicas para el análisis de datos',
          referencia:
            'Ecosistema de Recursos Educativos Digitales SENA. (2022a, junio 27). <em>Técnicas para el análisis de datos.</em>',
          tipo: 'Video',
          link: 'https://www.youtube.com/watch?v=pjTI4UOgkM8',
        },
        {
          tema: ' Introducción a la visualización de datos',
          referencia:
            'Ecosistema de Recursos Educativos Digitales SENA. (2022c, diciembre 26). <em>Introducción a la visualización de datos.</em>',
          tipo: 'Video',
          link: 'https://www.youtube.com/watch?v=-7nn2bm07Dw',
        },
        {
          tema: 'Metodologías de visualización de datos',
          referencia:
            'Ecosistema de Recursos Educativos Digitales SENA. (2023, 20 septiembre). <em>Metodologías de visualización de datos.</em>',
          tipo: 'Video',
          link: 'https://www.youtube.com/watch?v=-JuQjKfqYpY',
        },
        {
          tema: 'Análisis de datos y elaboración de informes',
          referencia:
            'Ecosistema de Recursos Educativos Digitales SENA. (2022b, agosto 26). <em>Análisis de datos y elaboración de informes.</em>',
          tipo: 'Video',
          link: 'https://www.youtube.com/watch?v=0vTv9pTVgvQ',
        },
      ]
    },
    computedData() {
      const data = this.complementarioData
      return data.map(item => {
        let nuevoLink = []
        if (item.link) {
          if (typeof item.link === 'string') {
            nuevoLink.push(item.link)
          } else {
            nuevoLink = item.link
          }
        } else if (item.descarga) {
          if (typeof item.descarga === 'string') {
            nuevoLink.push(this.obtenerLink(item.descarga))
          } else {
            item.descarga.forEach(link => {
              nuevoLink.push(this.obtenerLink(link))
            })
          }
        }
        return {
          ...item,
          link: nuevoLink,
        }
      })
    },
  },
}
</script>

<style lang="sass">
.complementario
  &__enlaces
    display: flex
    justify-content: center
    flex-wrap: wrap
    a
      margin: 0 5px
  &__btn
    font-size: 1.5em
    line-height: 1em
table
  width: calc(100% - 1px)
  min-width: 800px
  thead
    background-color: $color-sistema-e
    th
      border-color: $color-sistema-e
  th, td
    padding: 25px 20px
    text-align: center
</style>
