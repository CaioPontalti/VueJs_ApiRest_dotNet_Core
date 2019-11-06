<template>

  <nav v-bind:class="cor || blue">
      <div class="nav-wrapper container">
        <a v-bind:href="url || '/home'" class="brand-logo">{{logo || 'Site'}}</a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><a href="/home">{{ this.userName }}</a></li>
          <li><a href="badges.html">Components</a></li>
          <li><a href="/login" v-on:click="logoff()">Logoff</a></li>
        </ul>
      </div>
    </nav>

</template>
<script>

export default {
  name:'NavBar',
  props:['logo', 'url', 'cor', 'usuario'],
  data() {
    return {
      userName:''
    }
  },
  methods: {
    logoff(){
      localStorage.removeItem('token');
      localStorage.removeItem('userName');
    }
  },
  created() {
    this.userName = localStorage.getItem('userName');
  }
}

</script>

<style scoped>

</style>
