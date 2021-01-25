<template>
  <section class="bg-w">
    <div class="container-grid">
      <slot name="imagen"></slot>
      <div class="container-data">
        <h1>
          <span>{{tituloTop}}</span>
          {{tituloBottom}}
        </h1>
        <p>{{cuerpo}}</p>
        <div class="container-boton">
          <slot name="botons"></slot>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    tituloTop: { type: String, default: "Título por defecto" },
    tituloBottom: { type: String, default: "Título por defecto" },
    cuerpo: {
      type: String,
      default: "Sin Contenido",
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/styles/style.scss";
.bg-w {
  width: 100%;
}

.container-grid {
  //background-color: antiquewhite;
  min-height: 60rem * 0.625;
  height: calc(70vh);
  max-height: 75.3rem * 0.625;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 2em;
  align-items: center;
  justify-items: center;
  margin: 0 auto;
  @media screen and (min-width: $tablet) {
    min-height: 80rem * 0.625;
    max-height: 85rem * 0.625;
    grid-template-rows: auto 1fr;
  }
  @media screen and (min-width: $notebook) {
    min-height: 54rem * 0.625;
    height: calc(95vh - 7.26rem * 0.625);
    max-height: 60rem * 0.625;
    grid-template-columns: 2.5fr 3fr;
    grid-template-rows: 1fr;
  }
  @media screen and (min-width: $laptop) {
    min-height: 55rem * 0.625;
    height: calc(75vh);
    max-height: 65rem * 0.625;
    max-width: 140rem * 0.625;
  }
}
.container-data {
  min-height: 20em;
  align-self: stretch;
  justify-self: start;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  text-align: start;
  padding: 0 3rem * 0.625;
  @media screen and (min-width: $tablet) {
    padding-left: 10rem * 0.625;
    width: 90%;
  }
  @media screen and (min-width: $notebook) {
    width: 100%;
    padding: 0 5rem * 0.625;
    padding-right: 0;
    display: grid;
    align-content: center;
    justify-content: center;
    gap: 1.5rem * 0.625;
    grid-row: 1/2;
    grid-column: 1/2;
    width: 85%;
  }
  @media screen and (min-width: $laptop) {
    padding-left: 6rem * 0.625;
    gap: 1.8rem * 0.625;
    width: 95%;
  }
  @media screen and (min-width: $desk) {
    padding-left: 10rem * 0.625;
    padding-right: 0;
    gap: 2rem * 0.625;
  }
}
h1 {
  /* text-transform: uppercase; */
  margin: 0;
  font-weight: bold;
  color: $color-primary;
  font-size: 3rem * 0.625;
  @media screen and (min-width: $tablet) {
    font-size: 3.5rem * 0.625;
  }
  @media screen and (min-width: $notebook) {
    font-size: 4rem * 0.625;
  }
  @media screen and (min-width: $laptop) {
    font-size: 4.5rem * 0.625;
  }
  @media screen and (min-width: $desk) {
    font-size: 5rem * 0.625;
  }
  span {
    display: block;
    margin-bottom: 0.14rem * 0.625;
  }
}
p {
  margin-bottom: 1rem * 0.625;
  font-size: 1.5rem * 0.625;
  line-height: 2rem * 0.625;
  @media screen and (min-width: $notebook) {
    font-size: 1.6rem * 0.625;
    line-height: 2.1rem * 0.625;
  }
  @media screen and (min-width: $laptop) {
    font-size: 1.75rem * 0.625;
    line-height: 2.3rem * 0.625;
    width: 85%;
  }
  @media screen and (min-width: $desk) {
    font-size: 1.9rem * 0.625;
    line-height: 2.5rem * 0.625;
    width: 95%;
  }
}
</style>