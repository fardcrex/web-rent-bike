import Vue from "vue";
import VueRouter from "vue-router";

import Home from "@/views/Home.vue";
import RentPage from "@/views/RentPage.vue";
import InfoPage from "@/views/InfoPage.vue";
import HorariosPage from "@/views/HorariosPage.vue";
/*
 */

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/rentas",
    name: "RentPage",
    component: RentPage,
  },
  {
    path: "/horarios",
    name: "Horario",
    component: HorariosPage,
  },
  {
    path: "/info",
    name: "Info",
    component: InfoPage,
  },

  { path: "*", component: Home },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
});
export default router;
