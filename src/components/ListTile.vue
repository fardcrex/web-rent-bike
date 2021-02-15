<template>
  <div
    class="list_tile_data"
    v-bind:class="{bg_red : isEmpty,bg_green : isActive, }"
  >
    <p>{{hourInitStr}}:{{minuteInitStr}} - {{hourFinishStr}}:{{minuteFinishStr}}</p>
    <p>{{bikesAvailables}}</p>
    <div
      v-on:click="onPress(uidHorario)"
      class="button"
      v-bind:class="{button_empty : isEmpty }"
    >
      <p>{{isLoading?'Espere':isActive?'Cancelar':'Solicitar'}}</p>
    </div>
  </div>
</template>

<script>
import { cancelHorario, selectlHorario } from "@/services/horario_services.js";
import { mapState } from "vuex";
export default {
  data() {
    return {
      isLoading: false,
    };
  },
  methods: {
    async onPress(uid) {
      if (this.isLoading) return;
      if (this.isEmpty) {
        alert("No hay ciclistas disponibles");
        return;
      }
      const myUId = this.uidUser;
      this.isLoading = true;
      const setList = new Set(this.id_users);
      if (setList.has(myUId)) {
        const isSucces = await cancelHorario({
          uidHorario: uid,
          uidUser: myUId,
        });
        this.isLoading = !isSucces;
      } else {
        const isSucces = await selectlHorario({
          uidHorario: uid,
          uidUser: myUId,
        });
        this.isLoading = !isSucces;
      }
    },
  },
  props: {
    hourInit: { type: Number, default: 0 },
    hourFinish: { type: Number, default: 0 },
    minuteFinish: { type: Number, default: 0 },
    minuteInit: { type: Number, default: 0 },
    bikesLimitAvailables: { type: Number, default: 0 },
    uidHorario: { type: String, default: "0" },
    id_users: { type: Array, default: () => [] },
  },
  computed: {
    ...mapState({
      uidUser: (state) => state.uidUser,
    }),
    isEmpty() {
      return this.bikesAvailables == 0 && !this.isActive;
    },
    bikesAvailables() {
      const value = this.bikesLimitAvailables - this.id_users.length;
      return value >= 0 ? value : 0;
    },
    isActive() {
      const setList = new Set(this.id_users);

      return setList.has(this.uidUser);
    },
    hourInitStr() {
      return `${this.hourInit > 9 ? "" : 0}${this.hourInit}`;
    },
    hourFinishStr() {
      return `${this.hourFinish > 9 ? "" : 0}${this.hourFinish}`;
    },
    minuteFinishStr() {
      return `${this.minuteFinish > 9 ? "" : 0}${this.minuteFinish}`;
    },
    minuteInitStr() {
      return `${this.minuteInit > 9 ? "" : 0}${this.minuteInit}`;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/style.scss";
.bg_red {
  background-color: #f46666;
}
.bg_green {
  background-color: #66f487;
}
.list_tile_data {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: $color-primary;
  padding: 1rem;

  font-size: 0.7rem;
  border-top: 0.07rem solid $color-secondary;
  @media screen and (min-width: $laptop) {
    font-size: 0.8rem;
  }
}
.button {
  color: $color-bg;
  background-color: $color-secondary;

  font-size: 0.6rem;
  padding: 0.6rem 0.8rem;
  min-width: 5.5rem;
  margin: 0;
  border-radius: 0.8rem;
  border: 1px solid $color-secondary;
  outline: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  @media screen and (min-width: $laptop) {
    min-width: 6rem;
    padding: 0.8rem 1rem;
  }
}
.button_empty {
  color: $color-secondary;
  border: 2px solid $color-secondary;
  background-color: #f46666;
  cursor: default;
}
</style>