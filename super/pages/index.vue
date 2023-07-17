<template>
  <v-container>
    <v-toolbar color="primary">
      <v-toolbar-title class="white--text">fullstack-python-vue-project</v-toolbar-title>
    </v-toolbar>    
    <v-card>

      <v-card-title>
        <v-spacer/>
        <v-text-field append-icon="mdi-magnify"></v-text-field>
      </v-card-title>

  
          <v-row>
            <v-col lg="3" md="4" xs="12" v-for="(item,i) in noticias.data" :key="i">
              <v-card
                :loading="loading"
                class="mx-auto my-12"
                max-width="374"
                height="450"
              >
            <!-- <template>
              <v-progress-linear
                color="deep-purple"
                height="10"
                indeterminate
              ></v-progress-linear>
            </template> -->

                <v-img
                  height="250"
                  :src="item.imageUrl"
                ></v-img>

                <v-card-title>{{item.title}}</v-card-title>

                <v-card-text>
                  <v-row
                    align="center"
                    class="mx-0"
                  >
                    <!-- <v-rating
                      :value="4.5"
                      color="amber"
                      dense
                      half-increments
                      readonly
                      size="14"
                    ></v-rating> -->

                    
                  </v-row>
                  <div>{{item.description}}</div>
                </v-card-text>

                <v-divider class="mx-4"></v-divider>   

                <v-card-actions>
                  <v-spacer></v-spacer>

                  <v-btn icon color="deep-purple lighten-2">
                    <v-icon>mdi-heart</v-icon>
                  </v-btn>

                  <v-btn icon color="deep-purple lighten-2">
                    <v-icon>mdi-bookmark</v-icon>
                  </v-btn>

                  <v-btn icon color="deep-purple lighten-2">
                    <v-icon>mdi-share-variant</v-icon>
                  </v-btn>  
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
    </v-card>
  </v-container>


  <!-- <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card class="logo py-4 d-flex justify-center">
        <NuxtLogo />
        <VuetifyLogo />
        
      </v-card>
      <v-card>
        <v-card-title class="headline">
          Welcome to the Vuetify + Nuxt.js template
        </v-card-title>
        <v-card-text>
          <p>Vuetify is a progressive Material Design component framework for Vue.js. It was designed to empower developers to create amazing applications.</p>
          <p>
            For more information on Vuetify, check out the <a
              href="https://vuetifyjs.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              documentation
            </a>.
          </p>
          <p>
            If you have questions, please join the official <a
              href="https://chat.vuetifyjs.com/"
              target="_blank"
              rel="noopener noreferrer"
              title="chat"
            >
              discord
            </a>.
          </p>
          <p>
            Find a bug? Report it on the github <a
              href="https://github.com/vuetifyjs/vuetify/issues"
              target="_blank"
              rel="noopener noreferrer"
              title="contribute"
            >
              issue board
            </a>.
          </p>
          <p>Thank you for developing with Vuetify and I look forward to bringing more exciting features in the future.</p>
          <div class="text-xs-right">
            <em><small>&mdash; John Leider</small></em>
          </div>
          <hr class="my-3">
          <a
            href="https://nuxtjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Nuxt Documentation
          </a>
          <br>
          <a
            href="https://github.com/nuxt/nuxt.js"
            target="_blank"
            rel="noopener noreferrer"
          >
            Nuxt GitHub
          </a>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="primary"
            nuxt
            to="/inspire"
          >
            Continue
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row> -->
</template>

<script>
import noticiaService from '../services/noticias.service'
export default {
  name: 'IndexPage',
  data () {
    return {
      noticias: []
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
  }
}
</script>
