import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Firm from '../views/Firm.vue'
import Login from '../views/Login.vue'
import Registration from '../views/Registration.vue'
import store from '@/store'

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
            component: About,
            beforeEnter: (to, from, next) => {
                if (!store.getters['AUTHENTICATED']) {
                    return next({
                        name: 'login'
                    });
                }
                next();
            }
        },
        { 
            name: 'firm', 
            path: '/firm', 
            component: Firm,
            beforeEnter: (to, from, next) => {
                if (!store.getters['AUTHENTICATED']) {
                    return next({
                        name: 'login'
                    });
                }
                next();
            }
        },
        { 
            name: 'login', 
            path: '/login', 
            component: Login 
        },
        { 
            name: 'registration', 
            path: '/registration', 
            component: Registration,
            beforeEnter: (to, from, next) => {
                if (!store.getters['AUTHENTICATED']) {
                    return next({
                        name: 'login'
                    });
                }
                next();
            }
        }
    ]
});

export default router;