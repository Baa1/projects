import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import VueTreeNavigation from 'vue-tree-navigation'
import RouterNav from 'vue-router-nav'
import VueFormGenerator from 'vue-form-generator'
import axios from 'axios'
import settings from './settings'

require('@/store/subscriber');

axios.defaults.baseURL = settings.API_URL;

Vue.use(VueTreeNavigation);
Vue.use(RouterNav);
Vue.use(VueFormGenerator);

new Vue({
  store, 
  router,
  render: h => h(App)
}).$mount('#app')
