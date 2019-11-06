<template>
  <div class="row">
    <grid-vue class="input-field" tamanho="12">
      <textarea v-model="conteudo" id="txt1" class="materialize-textarea"></textarea>
      <label for="txt1">O que está acontecendo?</label>
    </grid-vue>
    <p>
      <grid-vue v-if="conteudo" :class="['btn waves-effect waves-ligth', cor]" tamanho="2 offset-s10">Publicar</grid-vue>
    </p>
  </div>
</template>

<script>
import GridVue from '../../components/layouts/GridVue'

export default {
  name:'PublicarConteudoVue',
  props:['cor'],
  components:{
    GridVue
  },
  data() {
    return {
      conteudo:''
    }
  },
}
</script>

<style scoped>

</style>
