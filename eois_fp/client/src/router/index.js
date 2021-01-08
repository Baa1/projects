import Vue from 'vue'
import Router from 'vue-router'
import Main from '../components/pages/Main.vue'
import About from '../components/pages/About.vue'
import Firm from '../components/pages/Firm.vue'
import Login from '../components/pages/Login.vue'
import Registration from '../components/pages/Registration.vue'

Vue.use(Router);

let router = new Router({
    routes: [
        { name: 'Главная', path: '/main', component: Main },
        { name: 'О себе', path: '/about', component: About },
        { name: 'Фирма', path: '/firm', component: Firm },
        { name: 'Войти', path: '/login', component: Login },
        { name: 'Регистрация', path: '/registration', component: Registration }
    ]
});

export default router;