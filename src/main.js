import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import { routes } from './routes'
import { store } from './store/store'
import App from './App.vue'

Vue.use(VueRouter)
Vue.use(VueResource)

Vue.http.options.root = 'https://vuejs-stock-trader-f2ed0.firebaseio.com/'

Vue.filter('currency', (value) => {
  return '$' + value.toLocaleString()
})
const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
