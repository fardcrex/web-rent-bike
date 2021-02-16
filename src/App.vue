<template>
  <div id="app">

    <AppNav :nav_links="nav_links"></AppNav>

    <router-view msg="Welcome to Your Vue.js App" />
    <FooterPage />

  </div>
</template>

<script>
import AppNav from "@/components/NavBar.vue";
import FooterPage from "@/components/Footer.vue";
export default {
  name: "App",
  components: { AppNav, FooterPage },
  data() {
    return {
      nav_links: [
        {
          name: "Inicio",
          rutaName: "Home",
        },
        {
          name: "Info",
          rutaName: "Info",
        },
        {
          name: "Mis Rentas",
          rutaName: "RentPage",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "@/assets/styles/normalize";
@import "@/assets/styles/base.scss";

#app {
  text-align: center;
}
</style>
