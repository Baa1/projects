import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'
//views
import Home from '../components/views/Home'
import About from '../components/views/About'
import Firm from '../components/views/Firm'
import Login from '../components/views/Login'
import Registration from '../components/views/Registration'
//forms
import AddFirmForm from '../components/forms/AddFirmForm'
//lists
import FirmsList from '../components/lists/FirmsList'

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
            children: [
                { path: 'add', component: AddFirmForm },
                { path: 'all', component: FirmsList }
            ],
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