import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'
import feather from 'vue-icon'

Vue.use(Vuetify)
Vue.use(feather, 'v-icon')

new Vue({
  el: '#app',
  render: h => h(App)
})
