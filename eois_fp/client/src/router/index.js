import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Firm from '../views/Firm.vue'
import Login from '../views/Login.vue'
import Registration from '../views/Registration.vue'

Vue.use(Router);

let router = new Router({
    routes: [
        { 
            name: 'home', 
            path: '/', 
            component: Home 
        },
        { 
            name: 'about', 
            path: '/about', 
            component: About 
        },
        { 
            name: 'firm', 
            path: '/firm', 
            component: Firm 
        },
        { 
            name: 'login', 
            path: '/login', 
            component: Login 
        },
        { 
            name: 'registration', 
            path: '/registration', 
            component: Registration 
        }
    ]
});

export default router;