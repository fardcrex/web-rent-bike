<template>
  <div class="container_page">
    <SectionFirst
      class="section1"
      :tituloTop="SectionFirstData.tituloTop"
      :tituloBottom="SectionFirstData.tituloBottom"
      :cuerpo="SectionFirstData.cuerpo"
    >

      <template v-slot:imagen>
        <ManBike class="svg-imagen" />
      </template>
      <template v-slot:botons>
        <BottonDemo />
        <div class="box"></div>
        <BottonApk />
      </template>
    </SectionFirst>

  </div>
</template>

<script>
import ManBike from "@/components-svg/ManBike.vue";
import BottonApk from "@/components/BottonApk.vue";
import BottonDemo from "@/components/BottonDemo.vue";
import SectionFirst from "@/components/SectionFirst.vue";
export default {
  name: "Home",
  props: {
    msg: String,
  },
  components: {
    SectionFirst,
    ManBike,
    BottonApk,
    BottonDemo,
  },
  data() {
    return {
      SectionFirstData: {
        tituloTop: "Elige un horario",
        tituloBottom: "y renta un ciclista",
        cuerpo: `
         Mini sistema para la renta de ciclistas en tiempo real con distintos horarios que van desde las 8:00 am hasta las 8:00 pm en GTM-5. 
          Disponible tanto para Web y Móvil (Android).`,
      },
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/styles/style.scss";
.box {
  height: 1.5rem;
}
.svg-imagen {
  max-width: 80%;
  height: 35vh;
  padding-top: 1rem;
  min-height: 17em;
  max-height: 20em;
  @media screen and (min-width: $tablet) {
    max-width: 85%;
    margin-top: 1rem;
    height: auto;
  }
  @media screen and (min-width: $notebook) {
    margin: 0;
    max-height: 60rem;
    height: 80%;
    max-width: 90%;
  }
  @media screen and (min-width: $laptop) {
    margin: 0;
    max-height: 65rem;
    height: 82.5%;
    max-width: 95%;
  }
  @media screen and (min-width: $desk) {
    margin: 0;
    max-height: 70rem;
    height: 85%;
  }
}
</style>
