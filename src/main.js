// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible'
import axios from 'axios'
import './assets/reset.css'
import './assets/style.styl'
import Vant from 'vant'
import 'vant/lib/index.css'
axios.defaults.withCredentials = false
axios.defaults.timeout = 5000
axios.defaults.baseURL = 'http://47.111.27.189:88'
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN
axios.defaults.headers = {'Content-Type': 'application/x-www-form-urlencoded'}
Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.prototype.$axios = axios

Vue.use(Vant)
// Vue.prototype.HOST = '/api'
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
