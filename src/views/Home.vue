<template>
  <div class="container_page">
    <SectionTitle
      class="section1"
      :tituloTop="SectionFirstData.tituloTop"
      :tituloBottom="SectionFirstData.tituloBottom"
      :cuerpo="SectionFirstData.cuerpo"
    >

      <template v-slot:imagen>
        <ManBike class="svg-imagen" />
      </template>
      <template v-slot:botons>
        <a
          href="../pdfs/reporte2-05-10.pdf"
          download="Reporte2Mayo2010"
        >
          Descargar Archivo
        </a>
      </template>
    </SectionTitle>

  </div>
</template>

<script>
import ManBike from "@/components-svg/ManBike.vue";
import SectionTitle from "@/components/SectionFirst.vue";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  components: {
    SectionTitle,
    ManBike,
  },
  data() {
    return {
      SectionFirstData: {
        linkApp:
          "https://play.google.com/store/apps/details?id=app.dinamo.dinamo&hl=es&fbclid=IwAR0XT4Gf7vyDmZFqHyBUW5hw-hzlIdrqZTPgdoS_L13pjzWXXYZhVs25b5c",
        tituloTop: "Arma tu",
        tituloBottom: "Horario y siente la magia",
        cuerpo: "Tambien disponible para android!",
      },
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/styles/style.scss";

.svg-imagen {
  max-width: 95%;
  height: 40rem * 0.625;

  margin-top: 1.5rem;
  @media screen and (min-width: $tablet) {
    margin-top: 2rem;
    height: 28rem;
  }
  @media screen and (min-width: $notebook) {
    margin: 0;
    max-height: 60rem;
    height: 80%;
  }
  @media screen and (min-width: $laptop) {
    margin: 0;
    max-height: 65rem;
    height: 82.5%;
  }
  @media screen and (min-width: $desk) {
    margin: 0;
    max-height: 70rem;
    height: 85%;
  }
}
</style>
