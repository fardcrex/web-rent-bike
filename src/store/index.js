import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoadingUser: true,
    uidUser: "",
  },
  mutations: {
    SET_USER_DATA(state, uidUser) {
      console.log(uidUser);
      state.uidUser = uidUser;
      state.isLoadingUser = false;
    },
  },
  actions: {},
});
