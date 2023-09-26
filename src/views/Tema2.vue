<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Conceptos básicos de la planeación

    .row
      .col-lg-4.col-md-6.mb-4.mb-md-0(style="place-self:center;" data-aos="fade-right")
        figure.col-8.col-md-12.m-auto
          img(src="@/assets/curso/tema2/1.png")
      .col-lg-8.col-md-6(data-aos="fade-left" style="place-self:center;")
        p Para realizar negocios electrónicos exitosos, no es suficiente tener el producto y un canal de venta, es vital conocer sobre planeación y como ejecutarla en su negocio por pequeño que sea. 
        p.mt-4 La planeación en un comercio electrónico, sin importar si es servicio (intangible) o producto (tangible), debe contemplar:
        ul.lista-ul.mb-0.mt-4
          li.mb-2.d-flex
            i.fas.fa-check(style="color:#94E435;")
            | Una estructura del negocio. 
          li.mb-2.d-flex
            i.fas.fa-check(style="color:#94E435;")
            | Estrategia de oferta.
          li.mb-2.d-flex
            i.fas.fa-check(style="color:#94E435;")
            | Estrategia de venta.
          li.mb-2.d-flex
            i.fas.fa-check(style="color:#94E435;")
            | Estrategia de soporte.
          li.mb-2.d-flex
            i.fas.fa-check(style="color:#94E435;")
            | Misión y visión del negocio.
          li.mb-2.d-flex
            i.fas.fa-check(style="color:#94E435;")
            | Metas a cumplir. 
          li.mb-2.d-flex
            i.fas.fa-check(style="color:#94E435;")
            | Plan de trabajo en un tiempo definido. 
          li.mb-0.d-flex
            i.fas.fa-check(style="color:#94E435;")
            | Matriz de Amenazas, Fortalezas, Dificultades u Obstáculos, para definir planes de acción.
    
    p.mt-5(data-aos="fade-right") Para todo lo anterior, es necesario realizar seguimiento y mediciones de los resultados para la realización de planes de acción o mejora. Para este seguimiento y medición existen herramientas especiales para garantizar la veracidad de los resultados.

    Separador

    .titulo-segundo(data-aos="zoom-in-right")
      h2#t_2_1 2.1 Concepto de planeación

    .col-xl-8.col-lg-10.m-auto
      .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5(data-aos="flip-up")
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/tema2/2.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 Planear hace referencia a la elaboración de estrategias que posibilita la consecución de metas establecidas, para ello se necesita analizar y comprender la situación, establecer objetivos y metas, plantear la metodología o actividades a desarrollar, ejecutar las acciones pertinentes y por último evaluar y tomar decisiones.
    
    p.mt-5(data-aos="fade-right") Gracias a la planificación, los individuos pueden alcanzar metas y cumplir objetivos, llevar una lista de tareas hechas y por hacer, y llevar el presupuesto en dinero y la estimación del tiempo para cada una de las actividades.

    .row.mt-3
      .col-lg-8.col-md-6.mb-4.mb-md-0(data-aos="fade-right" style="place-self:center;")
        p.mt-4 Existen diversas plataformas o herramientas tecnológicas que ayudan a la implementación del trabajo colaborativo de planeación, una de ellas es Trello, conocida por crear equipos de trabajo, para gestionar las tareas, asignaciones y cumplimiento de actividades que hacen parte del plan de trabajo de una organización, controlando la eficiencia y productividad de cada usuario. Su interfaz gráfica interpreta un tablero digital, donde se puede visualizar las tareas asignadas, con tiempos, alcance, entre otros atributos por persona o equipo de trabajo; en esta plataforma, un director o líder de equipo puede observar en tiempo real el cumplimento de actividades y los motivos o problemas que se han presentado, con el fin de generar una estrategia que evite el retraso e impida el cumplimiento de la meta.
      .col-lg-4.col-md-6(data-aos="fade-left" style="place-self:center;")
        figure.col-8.col-md-12.m-auto
          img(src="@/assets/curso/tema2/3.png")
    
    p.mt-4(data-aos="fade-right") En el siguiente enlace, se puede revisar cómo crear un usuario para utilizar esta herramienta de gestión:

    .col-xl-10.m-auto.mt-5
      .p-4(data-aos="flip-up" style="background: linear-gradient(180deg, rgba(0,169,255,1) 0%, rgba(0,80,219,1) 100%);border-radius:10px;")
        .row.m-0
          .col-lg-2.col-md-3.mb-4.mb-md-0(style="place-self:center;")
            figure.text-center
              img(src="@/assets/curso/tema2/4.svg" style="display:inline;max-width:80px;")
          .col-lg-7.col-md-6.mb-4.mb-md-0(style="place-self:center;")
            h4.mb-0.text-white Crear usuario en Trello 
          .col-lg-3.col-md-3.text-center(style="place-self:center;")
            a.boton.color-acento-botones(href="https://trello.com/signup" target="_blank")
              span Enlace web
              i.fas.fa-link
    
    Separador

    .titulo-segundo(data-aos="zoom-in-right")
      h2#t_2_2 2.2 Metodologías y modelos de planeación
    
    .row
      .col-lg-4.col-md-6.mb-4.mb-md-0(style="place-self:center;" data-aos="fade-right")
        figure.col-8.col-md-12.m-auto
          img(src="@/assets/curso/tema2/5.png")
      .col-lg-8.col-md-6(data-aos="fade-left" style="place-self:center;")
        p Para implementar planeación en un negocio electrónico, se debe tener en cuenta la metodología y/o modelo a implementar, es decir, el paso a paso para que su proceso comercial sea rentable. Por ello es importante tener claridad en estos conceptos. 
        p.mt-4 Las metodologías de planificación se definen como las acciones o actividades que son necesarias para el cumplimiento de uno o varios objetivos, en un tiempo determinado. 
        p.mt-4 Una de las metodologías más utilizadas, es la Metodología de Marco Lógico MML.
    
    .col-xl-8.col-lg-10.m-auto.mt-5
       .bloque-texto-a.color-primario.p-4.p-md-5(data-aos="flip-up")
        .row.m-0.align-items-center.justify-content-between
          .col-lg-4.mb-4.mb-lg-0
            h5.mb-0 Qué es MML:
          .col-lg-8
            .bloque-texto-a__texto.p-4
              p.mb-0 Es una herramienta para planificar y evaluar proyectos; se dio a conocer en la década de 1970 por parte de la USAID y desde entonces ha sido utilizada en los diferentes campos de inversión pública (nacional e internacional) por diversas entidades (público, privada) como el Banco Mundial, el BID, agencias de cooperación internacional, entre otras. (Osorio, 2010).
    
    p.mt-5(data-aos="fade-right") La MML se estructura en dos etapas que contiene la secuencia de identificación y diseño de un proyecto:

    .row.mt-4
      .col-lg.mb-4.mb-lg-0
        .h-100.p-4.p-md-5(style="background-color:#B2E5FF;" data-aos="fade-right")
          figure.col-8.m-auto.col-md-12
            img(src="@/assets/curso/tema2/6.png")
          h5.mt-3 Identificación y alternativas:
          p.mt-3.mb-0 Se analiza la situación actual para proyectar la situación deseada y seleccionar las estrategias que permitirán llegar a la meta. En esta etapa se realiza el análisis de involucrados, análisis de problemas, análisis de objetivos y análisis de alternativas.
      .col-lg.mb-4.mb-lg-0
        .h-100.p-4.p-md-5(style="background-color:#B2CAF4;" data-aos="fade-left")
          figure.col-8.m-auto.col-md-12
            img(src="@/assets/curso/tema2/6.png")
          h5.mt-3 Planificación:
          p.mt-3.mb-0 En esta etapa se aborda la MML, estructurando actividades y recursos que se definen y visualizan en un intervalo de tiempo.
    
    p.mt-5(data-aos="fade-right") La MML tiene como propósito responder a interrogantes como:

    .row.mt-5.justify-content-center
      .col-lg.col-md-6.mb-4.mb-lg-0(data-aos="zoom-in")
        .h-100.p-4.d-flex.flex-wrap.align-content-center.text-center.cont_flecha.cont_flecha1(style="background-color:#00A9FF;")
          p.mb-0.fw-bold.text-center.w-100 ¿Qué impacto positivo se espera alcanzar con el proyecto?
      .col-lg.col-md-6.mb-4.mb-lg-0.cont_flecha2(data-aos="zoom-in")
        .h-100.p-4.d-flex.flex-wrap.align-content-center.text-center.cont_flecha.cont_flecha1(style="background-color:#94E435;")
          p.mb-0.fw-bold.text-center.w-100 ¿Qué bienes o servicios se van a producir?
      .col-lg.col-md-6.mb-4.mb-lg-0.cont_flecha2(data-aos="zoom-in")
        .h-100.p-4.d-flex.flex-wrap.align-content-center.text-center.cont_flecha.cont_flecha1(style="background-color:#FFC401;")
          p.mb-0.fw-bold.text-center.w-100 ¿Cuál es la finalidad que se persigue con el proyecto?
      .col-lg.col-md-6.mb-4.mb-lg-0.cont_flecha2(data-aos="zoom-in")
        .h-100.p-4.d-flex.flex-wrap.align-content-center.text-center.cont_flecha.cont_flecha1(style="background-color:#0050DB;")
          p.mb-0.fw-bold.text-center.w-100.text-white ¿Cuánto va a costar producir esos bienes o servicios?
      .col-lg.col-md-6.mb-4.mb-lg-0.cont_flecha2(data-aos="zoom-in")
        .h-100.p-4.d-flex.flex-wrap.align-content-center.text-center.cont_flecha(style="background-color:#FF3E72;")
          p.mb-0.fw-bold.text-center.w-100 ¿Qué factores externos afectan el normal desarrollo del proyecto?
    
    p.mt-5(data-aos="fade-right") Uno de los aspectos más importantes para acertar en la solución de una problemática es generar una lluvia de ideas y seleccionar las mejores de ellas. En la selección se debe tener experiencia y experticia para escoger la mejor alternativa de solución a la problemática existente.
    p.mt-4(datta-aos="fade-left") Un buen análisis de problemas contiene:

    .row.mt-5
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        figure.col-8.col-md-6.col-lg-12.m-auto
          img(src="@/assets/curso/tema2/8.svg")
      .col-lg-8(data-aos="fade-left")
        .tarjeta.tarjeta--azul.p-4.p-lg-5(style="background-color:#DFF7C2;")
          SlyderA(tipo="b")
            .row
              .col-md-6.mb-4.mb-md-0
                p.fw-bold Conocimiento del problema, donde se debe identificar completamente la situación actual y proponer diferentes alternativas de solución.
              .col-md-6
                figure.col-8.m-auto
                  img(src='@/assets/curso/tema2/9.png')
            .row
              .col-md-6.mb-4.mb-md-0
                p.fw-bold Identificar las causas y efectos del problema anteriormente mencionado. 
              .col-md-6
                figure.col-8.m-auto
                  img(src='@/assets/curso/tema2/10.png')
            .row
              .col-md-6.mb-4.mb-md-0
                p.fw-bold Seleccionar los medios que se van a utilizar para solución del problema.
              .col-md-6
                figure.col-8.m-auto
                  img(src='@/assets/curso/tema2/11.png')
            .row
              .col-md-6.mb-4.mb-md-0
                p.fw-bold Establecer alternativas de solución y seleccionar la mejor de todas (tiempo, alcance, medios utilizados, etc.).
              .col-md-6
                figure.col-8.m-auto
                  img(src='@/assets/curso/tema2/12.png')
    
    br
    .mt-5.p-3.mb-4(style="max-width:fit-content;background-color:#94E435;border-radius:0px 60px 60px 0px;position:relative;" data-aos="fade-right")
      div(style="width:50px;height:12px;background-color:#FF3E72;border-radius:60px;position:absolute;top:-5px;")
      div(style="width:15px;height:15px;background-color:#FFC401;border-radius:100%;position:absolute;top:-12px;left:40px;")
      div(style="width:40px;height:10px;background-color:#0050DB;border-radius:60px;position:absolute;bottom:-3px;right:30px;")
      h4.mb-0.pe-4.ps-3 Análisis de involucrados

    p(data-aos="fade-left") En el marco del proceso de preinversión del proyecto, específicamente en su etapa de identificación, es importante realizar el estudio de los diferentes #[em stakeholders] directos o indirectos, que pueden verse afectados por la operación del proyecto. Estas personas son conocidas como actores del proyecto, y se estima que generen sus opiniones o experiencias de percepción.
    p.mt-4(data-aos="fade-right") El análisis de involucrados según la Cepal implica:

    .row.mt-5
      .col-lg.mb-4.mb-lg-0(data-aos="zoom-in-up")
        .h-100.cont_hover_1.p-4(style="background-color:#B2E5FF;border-radius:15px;")
          figure
            img(src="@/assets/curso/tema2/13.svg" style="max-width:100px;")
          p.mt-4.fw-bold Identificación
          p.mt-3 Reconocer a los involucrados con interés directo o indirecto.
      .col-lg.mb-4.mb-lg-0(data-aos="zoom-in-up")
        .h-100.cont_hover_1.p-4(style="background-color:#B2E5FF;border-radius:15px;")
          figure
            img(src="@/assets/curso/tema2/14.svg" style="max-width:100px;")
          p.mt-4.fw-bold Investigación
          p.mt-3 Indagar los intereses, capacidad, roles, influencia, poder, entre otros.
      .col-lg.mb-4.mb-lg-0(data-aos="zoom-in-up")
        .h-100.cont_hover_1.p-4(style="background-color:#B2E5FF;border-radius:15px;")
          figure
            img(src="@/assets/curso/tema2/15.svg" style="max-width:100px;")
          p.mt-4.fw-bold Interpretación
          p.mt-3 Comprender los resultados de la investigación y definir la forma en que van a formar parte del proyecto.

    br
    .mt-5.p-3.mb-4(style="max-width:fit-content;background-color:#94E435;border-radius:0px 60px 60px 0px;position:relative;" data-aos="fade-right")
      div(style="width:50px;height:12px;background-color:#FF3E72;border-radius:60px;position:absolute;top:-5px;")
      div(style="width:15px;height:15px;background-color:#FFC401;border-radius:100%;position:absolute;top:-12px;left:40px;")
      div(style="width:40px;height:10px;background-color:#0050DB;border-radius:60px;position:absolute;bottom:-3px;right:30px;")
      h4.mb-0.pe-4.ps-3 Análisis de problemas
    
    p(data-aos="fade-left") Un proyecto inicia con la identificación de un problema y culmina con la identificación de alternativas de solución. Es muy común que al identificar problemas estos se plantean como la falta o la ausencia de su solución. Por ejemplo, afirmaciones como la falta de crédito, la falta de repuestos, la falta de infraestructura, entre otros, dejan sin análisis otras causas que motivan el problema y proponen una solución única como: contar con créditos, adquirir repuestos y construir infraestructura, que no permiten analizar alternativas más eficientes y eficaces o simplemente dejan sin solución el problema. Estas prácticas tienden a inducir malas decisiones de inversión (Cepal, Ilpes, 2005, p. 10).

    .row.mt-5.p-4(style="background-color:#EFFBE1;")
      .col-lg-8.mb-4.mb-md-0.col-md-6(data-aos="fade-right" style="place-self:center;")
        p.fw-bold Para realizar una buena identificación de los problemas, es necesario:
        ul.lista-ul.mt-4.mb-0
          li.mb-3.d-flex
            i.fas.fa-circle(style="color:#00A9FF;")
            div
             p #[strong Origen:] el inicio de las ideas de proyectos que puedan generar distintos campos de aplicación de las políticas de desarrollo.
          li.mb-3.d-flex
            i.fas.fa-circle(style="color:#00A9FF;")
            div
             p #[strong Problema versus proyecto:] se refiere al uso eficiente de recursos, con los proyectos de inversión se generan problemas y dan respuesta de forma racional.
          li.mb-0.d-flex
            i.fas.fa-circle(style="color:#00A9FF;")
            div
             p.mb-0 #[strong Buena evaluación versus un buen proyecto:] un proyecto debe evaluarse tanto al comienzo (evaluación ex ante), como al final (evaluación ex post), que permita determinar el impacto o el resultado, para lo cual debe estar bien identificado y bien formulado.
      .col-lg-4.col-md-6(data-aos="fade-left" style="place-self:center;")
        figure.col-8.m-auto.col-md-12
          img(src="@/assets/curso/tema2/16.svg")
    










</template>

<script>
export default {
  name: 'Tema2',
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
.bloque-texto-a.color-primario
  background-color: #E8E8E8
.cont_flecha, .cont_flecha *
  position: relative
  z-index: 1
.cont_flecha2, .cont_flecha2 *
  position: relative
  z-index: 1
.cont_flecha1:before
  content: ''
  position: absolute
  width: 22px
  height: 53%
  right: -12px
  top: -4px
  background-color: #ffffff
  transform: rotate(344deg)
.cont_flecha1:after
  content: ''
  position: absolute
  width: 22px
  height: 53%
  right: -12px
  bottom: -4px
  background-color: #ffffff
  transform: rotate(17deg)
.cont_flecha2:before
  content: ''
  position: absolute
  width: 23px
  height: 57%
  left: 0px
  top: 0px
  z-index: 2
  background-color: #ffffff
  transform: rotate(337deg)
.cont_flecha2:after
  content: ''
  position: absolute
  width: 33px
  height: 63%
  left: -12px
  bottom: -5px
  z-index: 2
  background-color: #ffffff
  transform: rotate(26deg)
.slyder-a__btn--sigt, .slyder-a__btn--atrs
  background-color: #FFC401
.slyder-a__bullets__item
  background-color: #EAE57E
.slyder-a__bullets__item--active
  background-color: #FFC401 !important
  border-color: #FFC401
.cont_hover_1
  transition: .4s all ease-in-out
.cont_hover_1:hover
  background-color: #00A9FF !important
</style>
