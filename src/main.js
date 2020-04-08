import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
Vue.config.productionTip = false

import url from "./network/url";
import {request} from "./network/request";
Vue.prototype.request = request
Vue.prototype.url = url

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
