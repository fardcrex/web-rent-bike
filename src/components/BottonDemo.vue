<template>

  <div
    class="button"
    v-on:click="onPress"
  > <img
      src="../assets/foreign.png"
      alt="nube"
      class="img_2"
    >

    <p>Demo Web</p>

    <img
      src="../assets/sitio-web.png"
      alt="android"
      class="img_1"
    >
  </div>

</template>

<script>
export default {
  methods: {
    async onPress() {
      this.$router.push({ name: "Horario" });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/style.scss";
.button {
  color: $color-bg;
  background-color: $color-secondary;
  height: 3.25rem;
  font-size: 0.8rem;
  width: 50%;
  min-width: 16.25rem;
  margin: 0;
  border-radius: 0.8rem;
  border: 1px solid $color-secondary;
  outline: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  .img_1 {
    height: 75%;
  }
  .img_2 {
    height: 75%;
  }
}
</style>