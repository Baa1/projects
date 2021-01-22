import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import axios from 'axios'
import settings from './settings'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

require('@/store/subscriber');

axios.defaults.baseURL = settings.API_URL;

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

store.dispatch('ATTEMPT', localStorage.getItem('accessToken')).then(() => {
	new Vue({
		store, 
		router,
		render: h => h(App)
	}).$mount('#app');
});
