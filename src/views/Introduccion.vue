<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .cont_intro_1.pt-5
      p(data-aos="fade-right") Para iniciar el desarrollo temático y conceptual de este componente formativo, es importante tener un contexto sobre lo que se tratará, por tal motivo, se presenta una breve introducción a través del siguiente video que orientará este aprendizaje:
      figure.mt-5(data-aos="fade-left")
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/9Psw3IVbn8I" title="Las pymes digitales" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>
<style lang="sass">
.cont_intro_1, .cont_intro_1 *
  position: relative
.cont_intro_1:before
  content: ''
  background-color: #CCEEFF
  position: absolute
  width: 125%
  left: -15%
  height: 50%
  top: 0
</style>
