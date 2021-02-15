<template>
  <div class="container">
    <h1>{{tittle}}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tittle: "Por ahora solo en la versión móvil",
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/style.scss";
.container {
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: $color-primary;
}
</style>