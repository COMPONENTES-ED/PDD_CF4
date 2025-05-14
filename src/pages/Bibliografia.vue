<template>
  <div class="curso-main-container referencias">
    <BannerInterno
      icono="fas fa-book"
      titulo="Referencias bibliográficas"
    ></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5 mb-5">
      <div v-for="ref in orderedData" :key="ref.link" class="referencias__item">
        <span v-html="ref.referencia"></span
        ><a v-if="ref.link" class="ms-1" :href="ref.link" target="_blank"
          ><span v-html="ref.link"></span
          ><i class="ms-1 fas fa-external-link-alt"></i
        ></a>
        <hr class="my-3" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Referencias',
  data: () => ({
    referencias: [
      {
        referencia:
          'Cairo, A. (2016). The Truthful Art: Data, Charts, and Maps for Communication. New Riders. ',
        link:
          'https://books.google.com.co/books?id=8dKKCwAAQBAJ&printsec=frontcover&source=gbs_ge_summary_r&cad=0#v=onepage&q&f=false',
      },
      {
        referencia:
          'Chen, C., Härdle, W. K., & Unwin, A. (2023). Handbook of Data Visualization. Springer Nature.',
        link: '',
      },
      {
        referencia:
          'Few, S. (2012). Show Me the Numbers: Designing Tables and Graphs to Enlighten. Analytics Press.',
        link: '',
      },
      {
        referencia:
          'Knaflic, C. N. (2015). Storytelling with Data: A Data Visualization Guide for Business Professionals. Wiley.',
        link: '',
      },
      {
        referencia:
          'McKinney, W. (2022). Python for Data Analysis: Data Wrangling with pandas, NumPy, and Jupyter. O&#39;Reilly Media.',
        link: 'https://doi.org/10.1201/b17511',
      },
      {
        referencia:
          'Nussbaumer Knaflic, C. (2020). Storytelling with Data: Let&#39;s Practice Wiley.',
        link: '',
      },
      {
        referencia:
          'Tufte, E. R. (2001). The Visual Display of Quantitative Information. Graphics Press.',
        link: '',
      },
      {
        referencia:
          'VanderPlas, J. (2023). Python Data Science Handbook: Essential Tools for Working with Data. O&#39;Reilly Media.',
        link: '',
      },
      {
        referencia:
          'Wickham, H. (2016). ggplot2: Elegant Graphics for Data Analysis. Springer.',
        link: 'https://doi.org/10.1007/978-3-319-24277-4',
      },
      {
        referencia:
          'Wilke, C. O. (2019). Fundamentals of Data Visualization: A Primer on Making Informative and Compelling Figures. O&#39;Reilly Media.',
        link: '',
      },
      {
        referencia:
          'Woo, K. H. (2024). Statistical Analysis and Data Visualization with Python. Chapman and Hall/CRC.',
        link: '',
      },
      {
        referencia:
          'Yau, N. (2013). Data Points: Visualization That Means Something. John Wiley & Sons.',
        link: '',
      },
    ],
  }),
  computed: {
    orderedData() {
      return [...this.referencias].sort((a, b) => {
        const afl = this.quitarAcentos(a.referencia.split(' ')[0].toLowerCase())
        const bfl = this.quitarAcentos(b.referencia.split(' ')[0].toLowerCase())
        if (afl < bfl) return -1
        if (afl > bfl) return 1
        return 0
      })
    },
  },
  methods: {
    quitarAcentos(str) {
      return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    },
  },
}
</script>

<style lang="sass">
.referencias
  &__item
    &:last-child
      hr
        display: none
    a
      color: $blue
      text-decoration: underline
      overflow-wrap: break-word
</style>
