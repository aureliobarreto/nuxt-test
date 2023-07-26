<template>
  <v-app>
    <index/>
    <v-footer
      absolute
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import index from '../pages/index.vue'
export default {
  components: { index },
  name: 'DefaultLayout',
  data () {
    return {
      
    }
  }
}
</script>
