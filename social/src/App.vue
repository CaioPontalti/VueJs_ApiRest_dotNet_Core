<template>
  <div :class="$route.meta.public ? 'div-public' : ''">
    <!-- area logada -->
    <template v-if="!$route.meta.public && !logado">
      <header>
        <nav-bar cor="grey darken-4" url="/home" logo="Social"></nav-bar>
      </header>

      <main>
        <router-view />
      </main>

      <footer>
        <FooterVue
          cor="grey darken-4"
          logo="Social"
          descricao="Minha descricao do Site"
          ano="2019"
        >
          <li>
            <a class="grey-text text-lighten-3" href="#!">Home</a>
          </li>
          <li>
            <a class="grey-text text-lighten-3" href="#!">Login</a>
          </li>
          <li>
            <a class="grey-text text-lighten-3" href="#!">Cadastro</a>
          </li>
          <li>
            <a class="grey-text text-lighten-3" href="#!">Sobre</a>
          </li>
        </FooterVue>
      </footer>
    </template>

    <!-- area deslogada -->
    <template v-else>
      <router-view />
    </template>
  </div>
</template>

<script>
import NavBar from '@/components/layouts/NavBar';
import FooterVue from '@/components/layouts/FooterVue';

export default {
  name: 'App',
  components: {
    NavBar,
    FooterVue
  },
  data() {
    return {
      usuario:{
        email:'',
        senha:''
      },
      errors:[],
      logado: false,
      userName:''
    }
  }
};
</script>

<style scoped>
.div-public {
    height: 100%;
    width: 100%;
    display: flex;
}
</style>
