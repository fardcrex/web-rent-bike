<template>
  <div>
    <img
      v-if="imagenIcon=='github'"
      src="../assets/github.png"
      :alt="alt"
    > <img
      v-else-if="imagenIcon=='linkedin'"
      src="../assets/linkedin.png"
      :alt="alt"
    > <img
      v-else-if="imagenIcon=='twitter'"
      src="../assets/twitter.png"
      :alt="alt"
    >
    <img
      v-else
      src="../assets/logo.png"
      :alt="alt"
    >

    <a :href="href">
      <p>{{body}}</p>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    imagenIcon: { type: String, default: "logo" },
    alt: { type: String, default: "bicicleta" },
    href: { type: String, default: "https://rent-bike-system.web.app/" },
    body: { type: String, default: "Inicio" },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/style.scss";
div {
  margin: 2rem 0 0;
  display: flex;
  align-items: center;
}
p {
  font-size: 1.1rem;
  margin-left: 1rem;
  text-decoration: underline;
  color: $color-text-dark;
}
img {
  width: 2rem;
}
</style>