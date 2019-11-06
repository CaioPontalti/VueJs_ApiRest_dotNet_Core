<template>
  <div class="row">
    <div class="card">
      <div class="card-content">
        <div class="row valign-wrapper">
          <grid-vue tamanho="1">
            <img :src="imagemPerfil" alt="" class="circle responsive-img"> <!-- notice the "circle" class -->
          </grid-vue>
          <grid-vue tamanho="11">
            <span class="black-text">
              <strong>{{nomePerfil}}</strong> - <small> {{returDate}} </small>
            </span>
          </grid-vue>
        </div>
      </div>

      <slot></slot>

      <div class="card-action">
        <p>
          <i class="material-icons">favorite_border</i>
          <i class="material-icons">insert_comment</i>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import GridVue from '../layouts/GridVue'

export default {
  name:'CardConteudoVue',
  props:['imagemPerfil', 'nomePerfil'],
  components:{
    GridVue
  },
  computed: {
    returDate: function(){
      var dNow = new Date();
      var localdate = dNow.getDate() + '/' + (dNow.getMonth()+1) + '/' + dNow.getFullYear() + ' ' + dNow.getHours() + ':' + dNow.getMinutes();
      return localdate;
    }
  },
}
</script>

<style scoped>

</style>
