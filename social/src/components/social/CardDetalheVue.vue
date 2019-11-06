<template>
  <span>
    <div v-if="imagem" class="card-image">
      <img :src="imagem">
      <span class="card-title black-text"></span>
    </div>
    <div v-if="descricao" class="card-content">
      <p>{{descricao}}</p>
    </div>
  </span>
</template>

<script>
export default {
  name:'CardConteudoVue',
  props:['imagem', 'descricao']
}
</script>

<style scoped>

</style>
