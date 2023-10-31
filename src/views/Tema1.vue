<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Contexto de Internet y los negocios electrónicos
    
    p(data-aos="fade-right") El siguiente video realiza una breve contextualización sobre la importancia del Internet en los negocios electrónicos:

    figure.mt-5(data-aos="fade-left")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/xkkkoyxgiis" title="Contexto de internet y los negocios electrónicos" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      
    Separador

    .titulo-segundo(data-aos="zoom-in-right")
      h2#t_1_1 1.1 Historia del Internet
    
    p(data-aos="fade-right") A continuación se puede ver una breve historia del Internet desde su origen: 

    .tarjeta.tarjeta--gris.p-4.mt-5(style="background-color:#EFFBE1;")
      LineaTiempoC.color-acento-contenido(text-small)
        .row.col-lg-10.m-auto(titulo="1958")
          .p-3.m-auto(style="max-width:fit-content;background-color:#9ADDFF;border-radius:10px;")
            p.mb-0 Nace la empresa ARPA.
        .row.col-lg-10.m-auto(titulo="1961")
          .p-3.m-auto(style="max-width:fit-content;background-color:#9ADDFF;border-radius:10px;")
            p.mb-0 Nacen los primeros correos electrónicos.
        .row.col-lg-10.m-auto(titulo="1967")
          .p-3.m-auto(style="max-width:fit-content;background-color:#9ADDFF;border-radius:10px;")
            p.mb-0 ARPA publicó un plan para crear una red de ordenadores denominada ARPANET.
        .row.col-lg-10.m-auto(titulo="1974")
          .p-3.m-auto(style="max-width:fit-content;background-color:#9ADDFF;border-radius:10px;")
            p.mb-0 Crean el protocolo IP/TCP.
        .row.col-lg-10.m-auto(titulo="1980")
          .p-3.m-auto(style="max-width:fit-content;background-color:#9ADDFF;border-radius:10px;")
            p.mb-0 Nace Microsoft.
        .row.col-lg-10.m-auto(titulo="1987")
          .p-3.m-auto(style="max-width:fit-content;background-color:#9ADDFF;border-radius:10px;")
            p.mb-0 Desarrollo de la DNS.
        .row.col-lg-10.m-auto(titulo="1989")
          .p-3.m-auto(style="max-width:fit-content;background-color:#9ADDFF;border-radius:10px;")
            p.mb-0 Internet empieza a tener uso comercial.
        .row.col-lg-10.m-auto(titulo="1990")
          .p-3.m-auto(style="max-width:fit-content;background-color:#9ADDFF;border-radius:10px;")
            p.mb-0 ARPANET deja de existir.
        .row.col-lg-10.m-auto(titulo="1991")
          .p-3.m-auto(style="max-width:fit-content;background-color:#9ADDFF;border-radius:10px;")
            p.mb-0 Aparece la www.
        .row.col-lg-10.m-auto(titulo="1994")
          .p-3.m-auto(style="max-width:fit-content;background-color:#9ADDFF;border-radius:10px;")
            p.mb-0 Creación de Yahoo.
        .row.col-lg-10.m-auto(titulo="1998")
          .p-3.m-auto(style="max-width:fit-content;background-color:#9ADDFF;border-radius:10px;")
            p.mb-0 Creación de Google.
        .row.col-lg-10.m-auto(titulo="2001")
          .p-3.m-auto(style="max-width:fit-content;background-color:#9ADDFF;border-radius:10px;")
            p.mb-0 Enciclopedia de Wikipedia.
        .row.col-lg-10.m-auto(titulo="2006")
          .p-3.m-auto(style="max-width:fit-content;background-color:#9ADDFF;border-radius:10px;")
            p.mb-0 Internet alcanza los 1.100.000.000 usuarios.
        .row.col-lg-10.m-auto(titulo="2010")
          .p-3.m-auto(style="max-width:fit-content;background-color:#9ADDFF;border-radius:10px;")
            p.mb-0 Internet alcanza los 1.966.000.000 de usuarios de Internet.
        .row.col-lg-10.m-auto(titulo="Actualidad")
          .p-3.m-auto(style="max-width:fit-content;background-color:#9ADDFF;border-radius:10px;")
            p.mb-0 Sigue creciendo en usuarios.

    Separador

    .titulo-segundo(data-aos="zoom-in-right")
      h2#t_1_2 1.2 Evolución del Internet
    
    .row
      .col-lg-8.col-md-6.mb-4.mb-md-0(data-aos="fade-right" style="place-self:center;")
        p En esta sección se contextualizará sobre la evolución de Internet, incluyendo que esta representa el crecimiento y desarrollo a favor de la temática #[strong(style="color:#00A9FF;") “estrategias de comunicación para las pymes”.]
        p.mt-4 A través del tiempo, Internet ha evolucionado debido a los impulsos generados por los gobiernos, investigadores, educadores y personas en general, en búsqueda de satisfacer necesidades de diferente finalidad. Las políticas creadas por las entidades estatales han traído beneficios a la sociedad que incluye acceso a la información, rompiendo los límites de espacio y tiempo. El crecimiento acelerado de Internet ha repercutido en algunas crisis técnicas, como congestión, escasez de dominios, actividades ilegales, sobreexposición de información veraz y no veraz, discriminaciones digitales que se basan en nivel socioeconómico, educativo, raza, entre otros.
        p.mt-4 Desde 1950 hasta hoy se ha incrementado constantemente el volumen de las redes de datos, así como los servicios que se ofrecen. 
      .col-lg-4.col-md-6(data-aos="fade-left" style="place-self:center;")
        figure.col-8.col-md-12.m-auto
          img(src="@/assets/curso/tema1/1.png" alt="Imagen decorativa")
    
    .col-xl-10.m-auto.mt-5
       .bloque-texto-a.color-primario.p-4.p-md-5(data-aos="flip-up")
        .row.m-0.align-items-center.justify-content-between
          .col-lg-4.mb-4.mb-lg-0
            h5.mb-0 Logros más importantes de Internet:
          .col-lg-8
            .bloque-texto-a__texto.p-4
              ul.lista-ul.mb-0
                li.mb-3.d-flex
                  i.fas.fa-check(style="color:#94E435;")
                  | El diseño descentralizado y participativo, el cual ha permitido que personas de todo el mundo puedan evolucionar y fortalecer las capacidades de la red mundial.
                li.mb-3.d-flex
                  i.fas.fa-check(style="color:#94E435;")
                  | Al ser un sistema abierto y colaborativo, su evolución es constante e inmediata. 
                li.mb-3.d-flex
                  i.fas.fa-check(style="color:#94E435;")
                  | Es una red accesible para todas las comunidades mundiales.
                li.d-flex.mb-0
                  i.fas.fa-check(style="color:#94E435;")
                  | Fortalecimiento constante en seguridad informática, lo que da confiabilidad en su uso. 
    
    Separador

    .titulo-segundo(data-aos="zoom-in-right")
      h2#t_1_3 1.3 Concepto de negocios electrónicos
    
    .row
      .col-lg-4.col-md-6.mb-4.mb-md-0(data-aos="fade-right")
        figure.col-8.m-auto.col-md-12
          img(src="@/assets/curso/tema1/2.png" alt="Imagen decorativa")
      .col-lg-8.col-md-6(data-aos="fade-left")
        p Una de las finalidades más importantes del Internet, es ser el canal por excelencia para realizar negocios electrónicos.
        p.mt-4 Los negocios electrónicos (#[em E-business]) están basados en la integración de las TIC con las actividades de los negocios. Es decir, son estrategias empresariales integradas con las nuevas tecnologías para desarrollar cualquier modelo de negocio a través del Internet, permitiendo mejorar su gestión y aumentar la productividad.
        p.mt-4 Los negocios electrónicos dan un giro extremo a las formas tradicionales de comprar, como un efecto de la globalización y apertura internacional de los mercados. Esta nueva idea conecta las actividades económicas realizadas por Internet (comercialización o intercambio de productos o servicios).
    
    p.mt-5(data-aos="fade-right") En la siguiente tabla 1 se mencionan las ventajas y desventajas de la realización de negocios en Internet:

    .titulo-sexto.color-acento-contenido.mt-5(data-aos="fade-right")
      h5 Tabla 1.
      span Ventajas y desventajas
    
    .col-xl-10.m-auto.mt-5
      .tabla-a.color-acento-botones(data-aos="flip-up")
        table
          caption.mt-0.fw-normal(style="background-color:#F6F6F6;") Nota, Sena (2022).
          thead(style="border:0;")
            tr(style="background-color:#0050DB;")
              th.text-white.p-3 Ventajas
              th.text-white.p-3 Desventajas
          tbody
            tr
              td.p-4 Los negocios electrónicos se realizan de manera inmediata o instantánea sin importar la ubicación de los negocios. 
              td.p-4 El coste de cambiar de proveedor puede ser caro al migrar.
            tr
              td.p-4  Relación directa entre proveedor y cliente, evita tanto intermediario. 
              td.p-4 La competencia puede ser mucha y muy variada.
            tr
              td.p-4  No hay necesidad de movilidad física para realizar el negocio electrónico.
              td.p-4 Si no hay implementación de seguridad informática, puede ser víctima de estafa o robo. 
            tr
              td.p-4  Ahorro de tiempo y dinero.
              td.p-4 Por la gran oferta, se hace más difícil la fidelización del cliente. 
            tr
              td.p-4  Servicio 24 horas, 7 días a la semana, los 365 días del año.
              td.p-4
            tr
              td.p-4  No hay necesidad de una localización física.
              td.p-4
            tr
              td.p-4  El idioma no es un inconveniente gracias a los soportes para esta intermediación. 
              td.p-4
    
    p.mt-5(data-aos="fade-right") En Colombia existe una entidad que concentra información sobre los negocios electrónicos, la Cámara de Comercio Electrónico es una entidad privada sin ánimo de lucro, de orden gremial, que tiene como propósito promover y fortalecer la industria #[em e-commerce] en Colombia, a través del entendimiento y centralización de las cifras que determinan el comportamiento del comercio electrónico en el país, la incidencia en políticas públicas y la promoción del conocimiento y confianza en el sector.  En el siguiente enlace se puede consultar mayor información sobre esta entidad:

    .col-xl-10.m-auto.mt-5
      .p-4(data-aos="flip-up" style="background: linear-gradient(180deg, rgba(0,169,255,1) 0%, rgba(0,80,219,1) 100%);border-radius:10px;")
        .row.m-0
          .col-lg-2.col-md-3.mb-4.mb-md-0(style="place-self:center;")
            figure.text-center
              img(src="@/assets/curso/tema1/3.svg" style="display:inline;max-width:80px;" alt="Imagen decorativa")
          .col-lg-7.col-md-6.mb-4.mb-md-0(style="place-self:center;")
            h4.mb-0.text-white  Cámara de Comercio Electrónico de Colombia
          .col-lg-3.col-md-3.text-center(style="place-self:center;")
            a.boton.color-acento-botones(href="https://www.ccce.org.co/ccce/" target="_blank")
              span Enlace web
              i.fas.fa-link
    
    Separador

    .titulo-segundo(data-aos="zoom-in-right")
      h2#t_1_4 1.4 Modelos de negocios electrónicos
    
    p(data-aos="fade-right") Hoy en día los #[em E-business] crecen a un ritmo acelerado, estimando para el 2023 que sus ventas se incrementen hasta un 87%. Sin embargo, se deben conocer fundamentos y técnicas para que estos negocios prosperen, debido a que no solo por un impulso o sentimiento se  crean negocios electrónicos. Se deben tener en cuenta más aspectos como:

    .col-xl-10.m-auto.mt-5
      .row.cont_1_1.p-4
        .col-lg-4.col-md-6.mb-4.mb-md-0(style="place-self:center;" data-aos="fade-right")
          figure.col-8.col-md-12.m-auto
            img(src="@/assets/curso/tema1/4.svg" alt="Imagen decorativa")
        .col-lg-8.col-md-6(data-aos="fade-left" style="place-self:center;")
          ul.lista-ul.mb-0
            li.mb-2.d-flex
              i.fas.fa-check(style="color:#0050DB;")
              | Tendencias del mercado. 
            li.mb-2.d-flex
              i.fas.fa-check(style="color:#0050DB;")
              | Comportamiento del consumidor. 
            li.mb-2.d-flex
              i.fas.fa-check(style="color:#0050DB;")
              | Situación económica de la población meta. 
            li.mb-2.d-flex
              i.fas.fa-check(style="color:#0050DB;")
              | Medios de pago. 
            li.mb-2.d-flex
              i.fas.fa-check(style="color:#0050DB;")
              | Plataforma de envíos de productos o ejecución de servicios. 
            li.mb-2.d-flex
              i.fas.fa-check(style="color:#0050DB;")
              | Equipo de atención al cliente de manera constante. 
            li.mb-2.d-flex
              i.fas.fa-check(style="color:#0050DB;")
              | Plan de negocios para cada temporada. 
            li.mb-2.d-flex
              i.fas.fa-check(style="color:#0050DB;")
              | Innovación en los productos o servicios. 
            li.mb-2.d-flex
              i.fas.fa-check(style="color:#0050DB;")
              | Entre otros. 
          
    p.mt-5(data-aos="fade-right") Existen varios tipos de modelos de negocio electrónico, entre los que se destacan:

    .col-xl-10.m-auto.mt-5
      .p-4(data-aos="flip-up" style="background: linear-gradient(180deg, rgba(0,169,255,1) 0%, rgba(0,80,219,1) 100%);border-radius:10px;")
        .row.m-0
          .col-lg-2.col-md-3.mb-4.mb-md-0(style="place-self:center;")
            figure.text-center
              img(src="@/assets/curso/tema1/5.svg" style="display:inline;max-width:80px;" alt="Imagen decorativa")
          .col-lg-7.col-md-6.mb-4.mb-md-0(style="place-self:center;")
            h4.mb-0.text-white Diferentes maneras de hacer comercios electrónicos
          .col-lg-3.col-md-3.text-center(style="place-self:center;")
            a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=5079y-YZe7A" target="_blank")
              span Enlace web
              i.fas.fa-link







      
</template>

<script>
import LineaTiempoC from '../components/LineaTiempoC.vue'
export default {
  name: 'Tema1',
  components: {
    LineaTiempoC,
  },
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

<style lang="sass">
.linea-tiempo-c__header__btn, .linea-tiempo-c__header__btn--left, .linea-tiempo-c__header__btn--right, .pasos-b__header__btn--left, .pasos-b__header__btn--right
  border: 2px solid #FFC401
  background-color: #FFC401
.bloque-texto-a.color-primario
  background-color: #E8E8E8
.cont_1_1, .cont_1_1 *
  position: relative
.cont_1_1:before
  content: ''
  position: absolute
  width: 80%
  right: 0
  height: 100%
  top: 0
  background-color: #D9F2FF
@media screen and (max-width: 768px)
  .cont_1_1:before
    width: 100%
</style>
