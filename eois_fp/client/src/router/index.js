import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'
//views
import About from '../components/views/About'
import Login from '../components/views/Login'
import Casting from '../components/views/Casting'
import Schedule from '../components/views/Schedule'
import Encouragement from '../components/views/Encouragement'
import Admin from '../components/views/Admin'
//lists
import FirmsList from '../components/lists/FirmsList'
//cards
import SessionCard from '../components/cards/SessionCard'
import RegistrationCard from '../components/cards/RegistrationCard'
import FirmCard from '../components/cards/FirmCard'

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
            name: 'admin', 
            path: '/admin', 
            component: Admin,
            children: [
                { path: 'session', component: SessionCard },
                { path: 'registration', component: RegistrationCard },
                { path: 'firm', component: FirmCard },
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