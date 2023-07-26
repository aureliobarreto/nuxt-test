<template>
  <div>
    <v-toolbar color="primary">
      <v-toolbar-title class="white--text">fullstack-python-vue-project</v-toolbar-title>
      <v-spacer/>
      <v-btn text flat class="white--text"> Sobre nós </v-btn>
    </v-toolbar>    
    <v-card>

      <v-card-title>
        <v-spacer/>
        <v-text-field v-model="search" placeholder="Buscar notícias" append-icon="mdi-magnify"></v-text-field>
      </v-card-title>  
          <v-row>
            <template v-if="loading">
            <v-col  lg="4" md="6" xs="12" v-for="j in 6" :key="j">
                <v-skeleton-loader                   
                  class="mx-auto"
                  max-width="300"
                  type="card, text, text"
                ></v-skeleton-loader>              
            </v-col>
          </template>
            
          <template v-if="!loading">
            <v-col lg="4" md="6" xs="12" v-for="(item,i) in noticiasFiltradas" :key="i">
              <v-card
                :loading="loading"
                class="mx-auto my-12"
                max-width="374"
                height="500"
              >
                <v-img v-if="item.img != ''"
                  height="250"
                  :src="item.img"
                >
              </v-img>

                <v-img v-else height="250" src="https://www.uefs.br/modules/galeria/uploads/2459/destaque_1653999195Portico.jpg">
                </v-img>
                <v-card flat height="100px" style="overflow-y: auto;">
                  <v-card-title height="50px"> {{ item.title }}</v-card-title> 
                </v-card>             
                <v-card flat height="100px" style="overflow-y: auto;">
                  <v-card-text > {{ limitText(item.description) }} </v-card-text> 
                </v-card>     
              

                <v-divider class="mx-4 align-end"></v-divider>   

                <v-card-actions>
                  <v-spacer></v-spacer>

                  <v-btn icon color="deep-purple lighten-2">
                    <v-icon>mdi-heart</v-icon>
                  </v-btn>                  

                  <v-btn icon color="deep-purple lighten-2">
                    <v-icon>mdi-share-variant</v-icon>
                  </v-btn>
                  
                  <v-btn :href="item.uri" target="_blank"  icon color="deep-purple lighten-2">
                    <v-icon>mdi-open-in-new</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
            </template>
          </v-row>
    </v-card>
  </div>
</template>

<script>
import noticiaService from '../services/noticias.service'
export default {
  name: 'IndexPage',
  data () {
    return {
      loading: false,
      noticias: [],
      search: ''
    }
  },
  methods: {
    carregarNoticias () {
      this.loading = true
      noticiaService.retornarNoticias().then(resp => {
        if (resp.status == 200){
          console.log('--> ', resp.data)
          this.noticias = resp.data
        }
      }).finally(() => {
          this.loading = false
      })
    },
   
    // async load2 () {
    //   var aux = await this.$axios.$get('news', { progress: false })
    //   console.log('AUX: ', aux)
    // }
  },
  mounted () {
    this.carregarNoticias()
    //this.load2()
  },
  computed: {
    limitText() {
    return function(item) {
      if (item) {
        if (item.length > 40) {
          return item.substring(0, 40) + "...";
        } else {
          return item;
        }
      } else {
        return "";
      }
    };
    },
    noticiasFiltradas () {
      if (!this.search) {
        return this.noticias.data
      }
      const busca = this.search.toLowerCase()
      return this.noticias.data.filter(item => {
        const nome = item.title.toLowerCase()
        return nome.includes(busca)
      })
    }
  }
}
</script>
