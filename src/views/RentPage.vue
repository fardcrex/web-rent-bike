<template>
  <div class="container">
    <h1>{{tittle}}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tittle: "Renta de Bicleta",
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>