import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import VueTreeNavigation from 'vue-tree-navigation';
import RouterNav from 'vue-router-nav'

Vue.use(VueTreeNavigation);
Vue.use(RouterNav);

new Vue({
  store, 
  router,
  render: h => h(App)
}).$mount('#app')
