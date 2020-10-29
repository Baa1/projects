import Vue from 'vue'
import Router from 'vue-router'
import MainContent from '../components/pages/MainContent'
import AuthorizationForm from '../components/forms/AuthorizationForm'
import RegistrationForm from '../components/forms/RegistrationForm'

Vue.use(Router);

let router = new Router({
    routes: [
        {
            path: "/",
            name: "main",
            component: MainContent
        },
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