<template>
  <footer :class="'page-footer ' + cor">
    <div class="container">
      <div class="row">
        <div class="col l6 s12">
          <h5 class="white-text">{{logo || 'Meu Logo'}}</h5>
          <p class="grey-text text-lighten-4">{{descricao || 'Sem descricao' }}</p>
        </div>
        <div class="col l4 offset-l2 s12">
          <h5 class="white-text">Links</h5>
          <ul>
            <slot></slot>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer-copyright">
      <div class="container">
      © {{ano || 'sem ano'}} Copyright {{logo}}
      </div>
    </div>
</footer>
</template>

<script>
export default {
  name:'FooterVue',
  props:['cor', 'logo', 'descricao', 'ano'],
  data() {
    return {

    }
  },
  mounted() {
    //console.log(33, this.cor)
  }
}
</script>

<style scoped>

</style>
