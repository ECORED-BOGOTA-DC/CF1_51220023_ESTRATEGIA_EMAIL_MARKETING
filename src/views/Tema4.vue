<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 La publicidad digital y el ámbito de aplicación
    
    .row
      .col-lg-4.mb-4.mb-md-0.col-md-6(data-aos="fade-right")
        figure.col-8.m-auto.col-md-12
          img(src="@/assets/curso/tema4/1.png")
      .col-lg-8.col-md-6(data-aos="fade-left")
        p La publicidad digital se constituye de herramientas que sirven para promocionar y divulgar los bienes y servicios a través del internet, se definen como una parte del marketing digital, y abarcan alrededor del 60% de las estrategias que se realizan por medios virtuales. La aplicación permite la promoción y difusión del producto o servicio por medio de plataformas digitales. Las plataformas están desarrolladas para trabajar usando el internet, por medio de celulares, dispositivos digitales y/o programas en televisión digital, o radial.
    
    Separador

    .titulo-segundo(data-aos="zoom-in-right")
      h2#t_4_1 4.1 Concepto de Publicidad Digital
    
    .row
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right" style="place-self:center;")
        p Es importante primero mencionar lo que significa la publicidad tradicional, para posteriormente comprender la publicidad digital:
        .col-xl-12.m-auto.mt-4
          .p-4(data-aos="flip-up" style="background: linear-gradient(180deg, rgba(0,169,255,1) 0%, rgba(0,80,219,1) 100%);border-radius:10px;")
            .row.m-0
              .col-lg-2.col-md-3.mb-4.mb-md-0(style="place-self:center;")
                figure.text-center
                  img(src="@/assets/curso/tema4/2.svg" style="display:inline;max-width:80px;")
              .col-lg-7.col-md-6.mb-4.mb-md-0(style="place-self:center;")
                h4.mb-0.text-white Piezas publicitarias tradicionales
              .col-lg-3.col-md-3.text-center(style="place-self:center;")
                a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=RGG-OLsce8c" target="_blank")
                  span Enlace web
                  i.fas.fa-link
        p.mt-4 Ahora la publicidad digital se define como las técnicas onlinze para difundir, promocionar, y comunicar los productos de una empresa. Su objetivo es influir al consumidor, en búsqueda del aumento de las ventas, generando sensaciones y percepciones, que generan en el consumidor final interés y curiosidad. Por sí sola, la publicidad digital no es efectiva, por lo tanto, se debe combinar con algunos elementos, que permitan impactar a la persona correcta. El mensaje debe ser adecuado para responder las necesidades del público, creando contenido útil y de calidad.
        p.mt-4 En el siguiente video, se recomienda acciones a tener en cuenta a la hora de crear un texto publicitario: 
        .col-xl-12.m-auto.mt-4
          .p-4(data-aos="flip-up" style="background: linear-gradient(180deg, rgba(0,169,255,1) 0%, rgba(0,80,219,1) 100%);border-radius:10px;")
            .row.m-0
              .col-lg-2.col-md-3.mb-4.mb-md-0(style="place-self:center;")
                figure.text-center
                  img(src="@/assets/curso/tema4/2.svg" style="display:inline;max-width:80px;")
              .col-lg-7.col-md-6.mb-4.mb-md-0(style="place-self:center;")
                h4.mb-0.text-white Redacción de textos publicitarios
              .col-lg-3.col-md-3.text-center(style="place-self:center;")
                a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=VF8kSA8kuRs" target="_blank")
                  span Enlace web
                  i.fas.fa-link
      .col-lg-4(data-aos="fade-left" style="place-self:center;")
        figure.col-8.col-md-12.m-auto
          img(src="@/assets/curso/tema4/3.png")
    
    Separador

    .titulo-segundo(data-aos="zoom-in-right")
      h2#t_4_2 4.2 Tipos de publicidad digital
    
    p(data-aos="fade-left") Existen dos tipos de publicidad digital más conocidos, aunque con la continua evolución de las tecnologías han ido apareciendo otros que vienen evolucionando:
    
    





      
</template>

<script>
export default {
  name: 'Tema4',
  components: {},
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
