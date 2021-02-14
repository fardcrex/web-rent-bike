<template>
  <footer>
    <SvgWave />
    <div class="container_footer">

      <div class="project_container">
        <div>Iconos diseñados por <a
            href="https://www.flaticon.es/autores/dinosoftlabs"
            title="DinosoftLabs"
          >DinosoftLabs</a>
          from <a
            href="https://www.flaticon.es/"
            title="Flaticon"
          >www.flaticon.es</a></div>
      </div>
      <div class="developer_container">
        <div>Iconos diseñados por <a
            href="https://www.freepik.com"
            title="Freepik"
          >Freepik</a> from <a
            href="https://www.flaticon.es/"
            title="Flaticon"
          >www.flaticon.es</a></div>
      </div>
      <div class="credito_container">
        <div>Iconos diseñados por <a
            href="https://www.flaticon.es/autores/eucalyp"
            title="Eucalyp"
          >Eucalyp</a> from <a
            href="https://www.flaticon.es/"
            title="Flaticon"
          >www.flaticon.es</a></div>
      </div>

    </div>
  </footer>
</template>

<script>
import SvgWave from "@/components-svg/SvgWave.vue";
export default {
  components: {
    SvgWave,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/style.scss";
.container_footer {
  min-height: 45vh;
  display: grid;
  align-items: center;
  justify-content: center;
  justify-items: center;
  margin: auto;
  grid-template-columns: 1fr;
  background-color: $color-secondary;
  grid-template-areas: "project" "developer" "credito";
  @media screen and (min-width: $tablet) {
    grid-template-columns: 1fr;
    //  grid-template-rows: ;
  }
  @media screen and (min-width: $notebook) {
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "project credito" "developer credito";
    // grid-template-rows: 28rem * 0.625 14rem * 0.625 14rem * 0.625;
  }
  @media screen and (min-width: $laptop) {
    grid-template-columns: 1fr 1fr 1fr;

    grid-template-areas: "project developer credito";
    /*  margin: 0 auto;
    max-width: 120rem * 0.625;
    align-items: center;
    min-height: 38rem * 0.625;
    height: 30vh;
    max-height: 40rem * 0.625; */
  }
  @media screen and (min-width: $desk) {
    grid-template-columns: 1fr 1fr 2fr;
    width: 100%;
  }
}
$padding: 4rem;
.project_container {
  background-color: red;
  padding: $padding;
  grid-area: project;
}
.developer_container {
  padding: $padding;
  background-color: green;
  grid-area: developer;
}
.credito_container {
  padding: $padding;
  background-color: yellow;
  grid-area: credito;
}
</style>