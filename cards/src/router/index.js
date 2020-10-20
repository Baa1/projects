import Vue from 'vue'
import Router from 'vue-router'
import AuthorizationForm from '../components/AuthorizationForm'
import RegistrationForm from '../components/RegistrationForm'

Vue.use(Router);

let router = new Router({
    routes: [
        {
            path: "/authorization",
            name: "authorization",
            component: AuthorizationForm
        },
        {
            path: "/registration",
            name: "registration",
            component: RegistrationForm
        }
    ]
});

export default router;