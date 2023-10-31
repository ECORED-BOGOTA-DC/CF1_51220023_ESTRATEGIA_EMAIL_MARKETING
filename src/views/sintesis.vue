<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p(data-aos="fade-right") Las pymes en la actualidad presentan muchas ventajas dada la innovación tecnológica con las que cuentan, lo que ha generado un favorecimiento frente a lo que se puede ofrecer a través de estrategias como el #[em marketing] digital, que logra cada vez más capturar un elevado número de clientes tanto para compra de productos como para adquisición de servicios, ya que el consumidor digital hoy día es muy alto; los negocios que se logran a través del Internet dependen mucho de la publicidad digital, por lo que este componente formativo le dará las herramientas suficientes para hacer crecer su Pyme a través de la comunicación digital.
    p.mt-4.mb-5(data-aos="fade-left") A través del siguiente mapa, se resume de manera puntual los temas vistos en él, esto es:

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Imagen que contiene la síntesis, la cual presenta de manera resumidas los temas abordados en componente formativo como lo es: los conceptos de planeación, metodología y modelos, la aplicación de publicidad digital, las diversas estrategias y actividades para segmentación y arquetipos, todo esto manejado dentro del contexto de los negocios electrónicos e internet.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

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
