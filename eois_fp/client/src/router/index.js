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
        { name: 'Домой', path: '/', component: Home },
        { name: 'О себе', path: '/about', component: About },
        { name: 'Фирма', path: '/firm', component: Firm },
        { name: 'Войти', path: '/login', component: Login },
        { name: 'Регистрация', path: '/registration', component: Registration }
    ]
});

export default router;