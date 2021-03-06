import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

// Importing the global css file
import './assets/styles.scss'

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
