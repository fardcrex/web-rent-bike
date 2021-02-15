import Vue from "vue";
import App from "./App.vue";

import router from "./router";
import store from "./store";

import { auth } from "@/firebase";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  created() {
    //  console.log(auth);
    auth.onAuthStateChanged((user) => {
      if (user) {
        const uid = user.uid;
        this.$store.commit("SET_USER_DATA", uid);
      } else {
        auth
          .signInAnonymously()
          .then(() => {
            // Signed in..
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            const userUid = localStorage.getItem("userUid");
            if (userUid) {
              this.$store.commit("SET_USER_DATA", userUid);
            } else {
              const newUid = new Date().getTime();
              localStorage.setItem("userUid", newUid);
              this.$store.commit("SET_USER_DATA", newUid);
            }
          });
      }
    });
  },
  render: (h) => h(App),
}).$mount("#app");
