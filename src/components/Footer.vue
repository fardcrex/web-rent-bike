<template>
  <footer>
    <SvgWave />
    <div class="container_footer">

      <div class="project_container">
        <h2>Repositorios:</h2>
        <LinkImg
          imagenIcon="github"
          alt="github"
          href="https://github.com/fardcrex/web-rent-bike"
          body="Repositorio de la versión web"
        />
        <LinkImg
          imagenIcon="github"
          alt="github"
          href="https://github.com/fardcrex/app-rent-bike"
          body="Repositorio de la versión móvil"
        />

      </div>
      <div class="developer_container">
        <h2>Desarrollador:</h2>
        <h3>Jair Conislla Bocangel</h3>

        <LinkImg
          imagenIcon="github"
          alt="github"
          href="https://github.com/fardcrex"
          body="Github"
        />
        <LinkImg
          imagenIcon="linkedin"
          alt="github"
          href="https://www.linkedin.com/in/jair-pool-conislla-bocangel-a6931579/"
          body="Linkedin"
        />
        <LinkImg
          imagenIcon="twitter"
          alt="github"
          href="https://twitter.com/fardcrex"
          body="Twitter"
        />

      </div>
      <div class="creditos_container">
        <h2>Créditos:</h2>
        <div
          v-for="data in dataCredito"
          :key="data.page"
          class="link_style"
        >
          Iconos diseñados por <a
            :href="data.page"
            :title="data.author"
          >{{data.author}}</a>
        </div>
        <p class="link_style"> from <a
            href="https://www.flaticon.es/"
            title="Flaticon"
          >www.flaticon.es</a></p>
      </div>

    </div>
  </footer>
</template>
/* from <a
            href="https://www.flaticon.es/"
            title="Flaticon"
          >www.flaticon.es</a> */
<script>
import SvgWave from "@/components-svg/SvgWave.vue";
import LinkImg from "@/components/LinkImg.vue";
export default {
  components: {
    SvgWave,
    LinkImg,
  },
  data() {
    return {
      dataCredito: [
        { page: "https://www.flaticon.es/autores/surang", author: "Surang" },
        {
          page: "https://www.flaticon.es/authors/roundicons",
          author: "Roundicons",
        },
        {
          page: "https://www.flaticon.es/authors/pixel-perfect",
          author: "Pixel-perfect",
        },
        {
          page: "https://www.flaticon.es/autores/dinosoftlabs",
          author: "Dinosoftlabs",
        },
        { page: "https://www.flaticon.es/autores/eucalyp", author: "Eucalyp" },
        { author: "Freepik", page: "https://www.freepik.com" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/style.scss";
.container_footer {
  min-height: 45vh;
  display: grid;
  align-items: start;
  justify-content: center;
  justify-items: start;
  margin: auto;
  padding-top: 1.5rem;
  grid-template-columns: 1fr;
  background-color: $color-secondary;
  grid-template-areas: "project" "developer" "credito";
  @media screen and (min-width: $tablet) {
    grid-template-columns: 1fr;
    //  grid-template-rows: ;
  }
  @media screen and (min-width: $notebook) {
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "project credito" "developer credito";
    // grid-template-rows: 28rem * 0.625 14rem * 0.625 14rem * 0.625;
  }
  @media screen and (min-width: $laptop) {
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;
    grid-template-areas: "project developer credito";
    /*  margin: 0 auto;
    max-width: 120rem * 0.625;
    align-items: center;
    min-height: 38rem * 0.625;
    height: 30vh;
    max-height: 40rem * 0.625; */
  }
  @media screen and (min-width: $desk) {
    grid-template-columns: 1fr 1fr 1.2fr;
  }
}
$padding: 3rem;
$padding-s: 2rem;
.project_container {
  // background-color: red;
  padding: $padding-s;
  grid-area: project;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 2rem;
  @media screen and (min-width: $tablet) {
    padding: $padding;
  }
  @media screen and (min-width: $notebook) {
    margin-top: 0;
  }
}
.developer_container {
  padding: $padding-s;
  grid-area: developer;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media screen and (min-width: $tablet) {
    padding: $padding;
  }
  h3 {
    font-size: 1.3rem;
    color: $color-text-dark;
  }
}
.creditos_container {
  padding: $padding-s;
  grid-area: credito;
  flex-direction: column;
  align-items: flex-end;
  text-align: start;
  @media screen and (min-width: $tablet) {
    padding: $padding;
  }

  .link_style {
    margin-top: 2rem;
    font-size: 1rem;
    @media screen and (min-width: $laptop) {
      margin-top: 1.5rem;
    }
  }
}
</style>