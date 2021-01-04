import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/pages/Login.vue'
import Main from '../components/pages/Main.vue'

Vue.use(Router);

let router = new Router({
    routes: [
        { path: '/login', component: Login },
        { path: '/main', component: Main }
    ]
});

export default router;