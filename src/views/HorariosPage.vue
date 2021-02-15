<template>
  <div class="container">
    <div class="table">
      <div class="list_tile">
        <h3>Horario</h3>
        <h3>Ciclista disponibles</h3>
        <h3>Acción</h3>
      </div>

      <ListTile
        v-for="horario in dataHorarios"
        :key="horario.uidHorario"
        :hourInit="horario.hourInit"
        :hourFinish="horario.hourFinish"
        :minuteFinish="horario.minuteFinish"
        :minuteInit="horario.minuteInit"
        :bikesLimitAvailables="horario.bikesAvailables"
        :uidHorario="horario.uidHorario"
        :id_users="horario.id_users"
      />

    </div>
    <div v-if="isLoading">
      <ManBike class="svg-imagen" />
      <h2>Cargando ...</h2>
    </div>
  </div>
</template>

<script>
import ManBike from "@/components-svg/ManBike.vue";
import { mapState } from "vuex";
import ListTile from "@/components/ListTile.vue";
import { getListHorarios } from "@/services/horario_services.js";
export default {
  components: {
    ListTile,
    ManBike,
  },

  created() {
    getListHorarios((querySnapshot) => {
      const horarios = [];

      querySnapshot.forEach((doc) => {
        horarios.push(doc.data());
      });
      horarios.sort((a, b) =>
        a.hourInit * 60 + a.minuteInit > b.hourInit * 60 + b.minuteInit ? 1 : -1
      );
      this.dataHorarios = horarios;
    });
  },
  data() {
    return {
      dataHorarios: [],
    };
  },
  computed: {
    ...mapState({
      isLoadingUser: (state) => state.isLoadingUser,
    }),
    isLoading() {
      return this.dataHorarios.length === 0 || this.isLoadingUser;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/style.scss";
.container {
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  padding: 2rem 0 2rem;
}
.table {
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
.list_tile {
  display: flex;
  justify-content: space-between;
  color: $color-primary;
  padding: 0.5rem 1rem;
  @media screen and (min-width: $notebook) {
    padding: 1rem 2rem;
  }
}
.svg-imagen {
  max-width: 80%;
  height: 35vh;
  padding-top: 1rem;
  min-height: 17em;
  max-height: 20em;
  @media screen and (min-width: $tablet) {
    max-height: 55rem;
    height: 60vh;
  }
  @media screen and (min-width: $notebook) {
    margin: auto;
    max-height: 60rem;
    height: 65vh;
  }
  @media screen and (min-width: $laptop) {
    margin: auto;
    max-height: 65rem;
    height: 50vh;
  }
  /* @media screen and (min-width: $desk) {
    margin: 0;
    max-height: 70rem;
    height: 85%;
  } */
}
</style>