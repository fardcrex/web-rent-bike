<template>

  <header>
    <div class="container-page">
      <nav>
        <div class="nav-brand">
          <a href="/">
            <img
              src="../assets/logo.png"
              alt=""
            >
          </a>
        </div>

        <ul
          class="nav-list"
          v-bind:class="{ active: isActive }"
        >

          <li
            class="nav-item"
            v-for="(item,index) in nav_links"
            v-bind:key="index"
          >
            <router-link
              :to="{name:item.rutaName}"
              class="nav-link"
            >{{item.name}}</router-link>
          </li>
        </ul>
      </nav>

    </div>
  </header>

</template>

<script>
/* eslint-disable */
export default {
  props: {
    nav_links: Array,
  },
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    changeActiveNav() {
      this.isActive = !this.isActive;
    },
  },
};
</script>

<style lang="scss" scoped >
@import "@/assets/styles/style.scss";

header {
  border-bottom: 0.15rem * 0.625 solid $color-secondary;
}
nav {
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;

  padding: 0.4rem 0;
  //  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}
.nav-brand {
  a {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  img {
    width: 3rem;
  }
}

.nav-list {
  width: 25rem;

  background-color: #d7d4e4;
  position: fixed;
  top: 0;
  right: -26rem;
  display: flex;

  width: initial;
  height: initial;
  background-color: transparent;
  position: initial;
  top: initial;
  right: initial;
  flex-direction: row;
  transition: initial;
}

.nav-item {
  margin: 0 0 0 3rem;
}
.nav-link {
  color: $color-primary;
  position: relative;
  font-size: 1.2rem;

  &:before {
    content: "";
    position: absolute;
    left: 0;
    bottom: -0.1rem;
    background-color: $color-primary;
    width: 100%;
    height: 1.6px;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 650ms;
  }
  &:hover::before {
    transform: scaleX(1);
  }
}
.router-link-exact-active {
  color: $color-primary;
  position: relative;
  font-size: 1.2rem;
  &:before {
    content: "";
    position: absolute;
    left: 0;
    bottom: -0.1em;
    background-color: $color-primary;
    width: 100%;
    height: 1.6px;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 650ms;
    transform: scaleX(1);
  }
}
</style>
