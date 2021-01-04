import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import VueTreeNavigation from 'vue-tree-navigation';

Vue.use(VueTreeNavigation);

new Vue({
  store, 
  router,
  render: h => h(App)
}).$mount('#app')
