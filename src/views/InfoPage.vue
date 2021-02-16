<template>
  <div class="container">
    <h1>{{tittle}}</h1>
    <h2>{{subTitle1}}</h2>
    <ul class="lista">
      <li
        v-for="(item,index) in featuresBase"
        v-bind:key="index"
      >
        {{item}}
      </li>

    </ul>
    <h2>{{subTitle2}}</h2>
    <ul class="lista">
      <li
        v-for="(item,index) in featuresApp"
        v-bind:key="index"
      >
        {{item}}
      </li>

    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tittle: "Funcionalidades del Sistema",
      subTitle1: "Características base",
      subTitle2: "Características extras de la app",
      featuresBase: [
        "- Visualización de ciclistas disponibles en tiempo real.",
        "- Podrás rentar un ciclista por horario.",
        "- No podras rentar si no hay ciclistas disponibles.",
        "- Si has rentado se visulizará con una franja verde.",
        "- Si no se puede rentar se visulizará con una franja roja.",
      ],
      featuresApp: [
        "- Etiquetas de 'Hoy' o 'Mañana' de acuerdo a la hora (Gtm-5) en tiempo real.",
        "- Los contadores de disponibilidad se reinician automaticamente.",
        "- Tener una ventana con todas tus rentas vigentes.",
        "- Recordatorio de cuanto tiempo falta para que comienze o termine tus rentas en tiempo real.",
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/style.scss";
.container {
  min-height: 70vh;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  color: $color-primary;
  margin: auto;
  width: 90%;
  @media screen and (min-width: $tablet) {
    width: 85%;
    //  grid-template-rows: ;
  }
  @media screen and (min-width: $notebook) {
    width: 80%;
  }
  @media screen and (min-width: $laptop) {
    width: 80%;
  }
  @media screen and (min-width: $desk) {
    width: 75%;
  }
}
h1 {
  padding: 1rem 0;
}
.lista {
  padding: 1rem 0;
  text-align: left;
}
li {
  padding: 0.8rem 0;
}
</style>