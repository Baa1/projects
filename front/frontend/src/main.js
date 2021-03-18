import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import axios from 'axios'
import config from './config'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false;

axios.defaults.baseURL = config.API_URL;

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

new Vue({
  store, 
	router,
  render: h => h(App),
}).$mount('#app')
