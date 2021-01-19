import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import VueFormGenerator from 'vue-form-generator'
import axios from 'axios'
import settings from './settings'

require('@/store/subscriber');

axios.defaults.baseURL = settings.API_URL;

Vue.use(VueFormGenerator);

store.dispatch('ATTEMPT', localStorage.getItem('accessToken')).then(() => {
  new Vue({
    store, 
    router,
    render: h => h(App)
  }).$mount('#app');
});
