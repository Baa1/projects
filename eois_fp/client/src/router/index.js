import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'
//views
import About from '../components/views/About'
import Firm from '../components/views/Firm'
import Login from '../components/views/Login'
import Registration from '../components/views/Registration'
import Casting from '../components/views/Casting'
//forms
import AddFirmForm from '../components/forms/AddFirmForm'
//lists
import FirmsList from '../components/lists/FirmsList'

Vue.use(Router);

let router = new Router({
    routes: [
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
            path: '/', 
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
        },
        { 
            name: 'casting', 
            path: '/casting', 
            component: Casting,
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