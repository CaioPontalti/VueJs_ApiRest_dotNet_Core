<template>
  <div class="container">
    <div class="row">
      <grid-vue tamanho="4">
        <card-menu-vue>
          <div class="row valign-wrapper">
            <grid-vue tamanho="3">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRQorJ5XNUOpDpm_Gz35uzXErLs3OHsihCI9A5I5Mn6dOWNTKUF" alt="" class="circle responsive-img"> <!-- notice the "circle" class -->
            </grid-vue>
            <grid-vue tamanho="9">
              <span class="black-text">
                <h5>Dw Drums</h5>
                Add the "circle" class to it to make it appear circular.
              </span>
            </grid-vue>
          </div>
        </card-menu-vue>
        <card-menu-vue>
          <h5>Descrição:</h5>
        </card-menu-vue>
      </grid-vue>

      <grid-vue tamanho="8">
        <publicar-conteudo-vue cor="brown lighten-1" />

        <card-conteudo-vue
          imagemPerfil="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRQorJ5XNUOpDpm_Gz35uzXErLs3OHsihCI9A5I5Mn6dOWNTKUF"
          nomePerfil= "Dw Drums">

          <CardDetalheVue imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRxRAkENKV5IIUkaJABXETWNyeQlQaYSF_4AtxWXqkKysLVyE1p"
                          descricao="DW Collector's Exotic Tasmanian 6-piece Shell Pack - DREX6PCTAZ 6-piece Tasmanian Blackwood Shell Packwith 10' and 12' Toms, 14' and 16' Floor Toms, 22' Bass Drum."
                          >
          </CardDetalheVue>
        </card-conteudo-vue>
      </grid-vue>

    </div>
  </div>
</template>

<script>
import CardConteudoVue from '@/components/social/CardConteudoVue'
import CardDetalheVue from '@/components/social/CardDetalheVue'
import PublicarConteudoVue from '@/components/social/PublicarConteudoVue'
import GridVue from '@/components/layouts/GridVue'
import CardMenuVue from '@/components/layouts/CardMenuVue'

export default {
  components:{
    CardConteudoVue,
    CardDetalheVue,
    PublicarConteudoVue,
    GridVue,
    CardMenuVue
  }
}
</script>
