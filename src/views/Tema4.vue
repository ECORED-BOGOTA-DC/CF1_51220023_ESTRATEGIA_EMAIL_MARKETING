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
          img(src="@/assets/curso/tema4/1.png" alt="Imagen decorativa")
      .col-lg-8.col-md-6(data-aos="fade-left")
        p La publicidad digital se constituye de herramientas que sirven para promocionar y divulgar los bienes y servicios a través del Internet, se definen como una parte del #[em marketing] digital, y abarcan alrededor del 60% de las estrategias que se realizan por medios virtuales. La aplicación permite la promoción y difusión del producto o servicio por medio de plataformas digitales. Las plataformas están desarrolladas para trabajar usando el Internet, por medio de celulares, dispositivos digitales y/o programas en televisión digital, o radial.
    
    Separador

    .titulo-segundo(data-aos="zoom-in-right")
      h2#t_4_1 4.1 Concepto de publicidad digital
    
    .row
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right" style="place-self:center;")
        p Es importante primero mencionar lo que significa la publicidad tradicional, para posteriormente comprender la publicidad digital:
        .col-xl-12.m-auto.mt-4
          .p-4(data-aos="flip-up" style="background: linear-gradient(180deg, rgba(0,169,255,1) 0%, rgba(0,80,219,1) 100%);border-radius:10px;")
            .row.m-0
              .col-lg-2.col-md-3.mb-4.mb-md-0(style="place-self:center;")
                figure.text-center
                  img(src="@/assets/curso/tema4/2.svg" style="display:inline;max-width:80px;" alt="Imagen decorativa")
              .col-lg-7.col-md-6.mb-4.mb-md-0(style="place-self:center;")
                h4.mb-0.text-white Piezas publicitarias tradicionales
              .col-lg-3.col-md-3.text-center(style="place-self:center;")
                a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=RGG-OLsce8c" target="_blank")
                  span Enlace web
                  i.fas.fa-link
        p.mt-4 Ahora la publicidad digital se define como las técnicas online para difundir, promocionar, y comunicar los productos de una empresa. Su objetivo es influir al consumidor, en búsqueda del aumento de las ventas, generando sensaciones y percepciones, que generan en el consumidor final interés y curiosidad. Por sí sola, la publicidad digital no es efectiva, por lo tanto, se debe combinar con algunos elementos, que permitan impactar a la persona correcta. El mensaje debe ser adecuado para responder las necesidades del público, creando contenido útil y de calidad.
        p.mt-4 En el siguiente video, se recomienda acciones a tener en cuenta a la hora de crear un texto publicitario: 
        .col-xl-12.m-auto.mt-4
          .p-4(data-aos="flip-up" style="background: linear-gradient(180deg, rgba(0,169,255,1) 0%, rgba(0,80,219,1) 100%);border-radius:10px;")
            .row.m-0
              .col-lg-2.col-md-3.mb-4.mb-md-0(style="place-self:center;")
                figure.text-center
                  img(src="@/assets/curso/tema4/2.svg" style="display:inline;max-width:80px;" alt="Imagen decorativa")
              .col-lg-7.col-md-6.mb-4.mb-md-0(style="place-self:center;")
                h4.mb-0.text-white Redacción de textos publicitarios
              .col-lg-3.col-md-3.text-center(style="place-self:center;")
                a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=VF8kSA8kuRs" target="_blank")
                  span Enlace web
                  i.fas.fa-link
      .col-lg-4(data-aos="fade-left" style="place-self:center;")
        figure.col-8.col-md-12.m-auto
          img(src="@/assets/curso/tema4/3.png" alt="Imagen decorativa")
    
    Separador

    .titulo-segundo(data-aos="zoom-in-right")
      h2#t_4_2 4.2 Tipos de publicidad digital
    
    p(data-aos="fade-left") Existen dos tipos de publicidad digital más conocidos, aunque con la continua evolución de las tecnologías han ido apareciendo otros que vienen evolucionando:

    .col-xl-10.m-auto.mt-5
      .row
        .col-lg.mb-4.mb-lg-0
          .h-100.p-4.p-md-5(style="background-color:#CCEEFF;border-radius:20px;" data-aos="fade-right")
            figure.col-8.m-auto.col-md-12
              img(src="@/assets/curso/tema4/4.png" alt="Imagen decorativa")
            h5.mt-3 Medios pagos
            p.mt-3.mb-0 Son las plataformas que requieren de un pago su aparición en diversos medios sociales. Por ejemplo: #[em links], anuncios o publicidad en RRSS. 
        .col-lg.mb-4.mb-lg-0
          .h-100.p-4.p-md-5(style="background-color:#CCEEFF;border-radius:20px;" data-aos="fade-left")
            figure.col-8.m-auto.col-md-12
              img(src="@/assets/curso/tema4/5.png" alt="Imagen decorativa")
            h5.mt-3 Medios orgánicos
            p.mt-3.mb-0 Son las estrategias que logran ser eficientes de manera gratuita, entre ellas encontramos el #[em email marketing] o creación de contenidos de calidad.
    
    p.mt-5(data-aos="fade-right") En la siguiente figura 2 se aprecian otros tipos de publicidad:

    .titulo-sexto.color-acento-contenido.mt-5(data-aos="fade-left")
      h5 Figura 2.
      span Tipos de publicidad digital
    
    .row.mt-5
      .col-lg-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false" data-aos="zoom-in-up")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img.p-4.d-flex.align-content-center.flex-wrap
              figure.col-lg-5.m-auto.col-md-6.col-lg-10.col-7.col-xl-12
                img(src="@/assets/curso/tema4/6.svg" alt="Imagen decorativa")
              h5.mt-4.text-center.w-100(style="color:#12263F;") SEM
            .tarjeta-flip__contenido.p-4.p-xl-5(style="background-color:#B2E5FF;")
              figure
                img(src="@/assets/curso/tema4/7.svg" style="max-width:70px;" alt="Imagen decorativa")
              h5.mt-4(style="color:#12263F;") SEM
              ul.lista-ul.mt-3.mb-0
                li.d-flex(style="color:#12263F;")
                  i.lista-ul__vineta
                  | Enfocado a necesidades
                li.d-flex(style="color:#12263F;")
                  i.lista-ul__vineta
                  | Inversión media
                li.d-flex(style="color:#12263F;")
                  i.lista-ul__vineta
                  div La #[em Keyword] marca el precio
                li.d-flex(style="color:#12263F;")
                  i.lista-ul__vineta
                  | Pago por CPC
                li.d-flex(style="color:#12263F;")
                  i.lista-ul__vineta
                  | Compra por subasta
      .col-lg-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.color-acento-contenido(@mouseover="indicadorTarjetaFlip = false" data-aos="zoom-in-up")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img.p-4.d-flex.align-content-center.flex-wrap
              figure.col-lg-5.m-auto.col-md-6.col-lg-10.col-7.col-xl-12
                img(src="@/assets/curso/tema4/8.svg" alt="Imagen decorativa")
              h5.mt-4.text-center.w-100(style="color:#12263F;") Social Ads
            .tarjeta-flip__contenido.p-4.p-xl-5(style="background-color:#CCE4AF;")
              figure
                img(src="@/assets/curso/tema4/9.svg" style="max-width:70px;" alt="Imagen decorativa")
              h5.mt-4(style="color:#12263F;") Social Ads
              ul.lista-ul.mt-3.mb-0
                li.d-flex(style="color:#12263F;")
                  i.lista-ul__vineta
                  | Enfocado a deseos
                li.d-flex(style="color:#12263F;")
                  i.lista-ul__vineta
                  | Poca inversión
                li.d-flex(style="color:#12263F;")
                  i.lista-ul__vineta
                  | La audiencia marca el precio
                li.d-flex(style="color:#12263F;")
                  i.lista-ul__vineta
                  | Pago por CPC / CPM
                li.d-flex(style="color:#12263F;")
                  i.lista-ul__vineta
                  | Compra por subasta
      .col-lg-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.color-secundario(@mouseover="indicadorTarjetaFlip = false" data-aos="zoom-in-up")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img.p-4.d-flex.align-content-center.flex-wrap
              figure.col-lg-5.m-auto.col-md-6.col-lg-10.col-7.col-xl-12
                img(src="@/assets/curso/tema4/10.svg" alt="Imagen decorativa")
              h5.mt-4.text-center.w-100.mb-0.text-white(style="color:#12263F;") RTB
            .tarjeta-flip__contenido.p-4.p-xl-5(style="background-color:#9FB7E1;")
              figure
                img(src="@/assets/curso/tema4/11.svg" style="max-width:70px;" alt="Imagen decorativa")
              h5.mt-4(style="color:#12263F;") RTB
              ul.lista-ul.mt-3.mb-0
                li.d-flex(style="color:#12263F;")
                  i.lista-ul__vineta
                  div Deseos / #[em Branding]
                li.d-flex(style="color:#12263F;")
                  i.lista-ul__vineta
                  | Inversión alta
                li.d-flex(style="color:#12263F;")
                  i.lista-ul__vineta
                  | La audiencia marca el precio
                li.d-flex(style="color:#12263F;")
                  i.lista-ul__vineta
                  | Pago por CPM
                li.d-flex(style="color:#12263F;")
                  i.lista-ul__vineta
                  | Compra por subasta
      .col-lg-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.color-acento-botones(@mouseover="indicadorTarjetaFlip = false" data-aos="zoom-in-up")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img.p-4.d-flex.align-content-center.flex-wrap
              figure.col-lg-5.m-auto.col-md-6.col-lg-10.col-7.col-xl-12
                img(src="@/assets/curso/tema4/12.svg" alt="Imagen decorativa")
              h5.mt-4.text-center.w-100(style="color:#12263F;") #[em Display]
            .tarjeta-flip__contenido.p-4.p-xl-5(style="background-color:#ECDA9F;")
              figure
                img(src="@/assets/curso/tema4/13.svg" style="max-width:70px;" alt="Imagen decorativa")
              h5.mt-4(style="color:#12263F;") #[em Display]
              ul.lista-ul.mt-3.mb-0
                li.d-flex(style="color:#12263F;")
                  i.lista-ul__vineta
                  div Enfocado a #[em branding]
                li.d-flex(style="color:#12263F;")
                  i.lista-ul__vineta
                  | Inversión alta
                li.d-flex(style="color:#12263F;")
                  i.lista-ul__vineta
                  | El medio marca el precio
                li.d-flex(style="color:#12263F;")
                  i.lista-ul__vineta
                  | Pago por CPM
                li.d-flex(style="color:#12263F;")
                  i.lista-ul__vineta
                  | Compra directa
    
    figcaption.mt-3.fw-normal(style="background-color:#F6F6F6;" data-aos="fade-right") Nota, Cicero (2017).
    
    





      
</template>

<script>
export default {
  name: 'Tema4',
  components: {},
  data: () => ({
    indicadorTarjetaFlip: true,
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
