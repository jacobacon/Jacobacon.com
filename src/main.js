import Vue from 'vue'
import App from './App.vue'
import VueParticles from "vue-particles";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false
Vue.use(VueParticles)

new Vue({
  render: h => h(App),
}).$mount('#app')
