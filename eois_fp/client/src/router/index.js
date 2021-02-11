import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'
//views
import About from '../components/views/About'
import Firm from '../components/views/Firm'
import Login from '../components/views/Login'
import Registration from '../components/views/Registration'
import Casting from '../components/views/Casting'
import Schedule from '../components/views/Schedule'
import Encouragement from '../components/views/Encouragement'
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
            name: 'encouragement', 
            path: '/encouragement', 
            component: Encouragement,
            children: [
                { path: 'best', component: FirmsList },
                { path: 'promotion', component: FirmsList },
                { path: 'salary', component: FirmsList },
                { path: 'sport', component: FirmsList },
                { path: 'penalty', component: FirmsList }
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
            component: Login ,
            beforeEnter: (to, from, next) => {
                if (store.getters['AUTHENTICATED']) {
                    return next({
                        name: 'about'
                    });
                }
                next();
            }
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
        },
        { 
            name: 'schedule', 
            path: '/schedule', 
            component: Schedule,
            beforeEnter: (to, from, next) => {
                if (!store.getters['AUTHENTICATED']) {
                    return next({
                        name: 'schedule'
                    });
                }
                next();
            }
        }
    ]
});

export default router;