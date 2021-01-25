<template>
  <div class="button">
    <img
      src="../assets/android.png"
      alt="android"
    >
    <p>Descargar APK</p>
    <img
      src="../assets/nube.png"
      alt="nube"
    >
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/style.scss";
.button {
  color: $color-primary;
  background-color: $color-bg;
  height: 3.2rem;
  font-size: 0.8rem;
  width: 50%;
  min-width: 16.25rem;
  margin: 0;
  border-radius: 1rem;
  border: 1px solid $color-secondary;
  outline: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  img {
    height: 60%;
  }
}
</style>