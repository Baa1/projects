import Vue from 'vue'
import Router from 'vue-router'
//views
import VerificationCard from '../components/VerificationCard'

Vue.use(Router);

let router = new Router({
    routes: [
        { 
            name: 'verification', 
            path: '/verification-profile', 
            component: VerificationCard,
        }
    ]
});

export default router;