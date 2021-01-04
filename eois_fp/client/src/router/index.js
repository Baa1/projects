import Vue from 'vue'
import Router from 'vue-router'
import Registration from '../components/pages/Registration.vue'
import Main from '../components/pages/Main.vue'
import About from '../components/pages/About.vue'
import Firm from '../components/pages/Firm.vue'

Vue.use(Router);

let router = new Router({
    routes: [
        { name: 'Главная', path: '/main', component: Main },
        { name: 'О себе', path: '/about', component: About },
        { name: 'Фирма', path: '/firm', component: Firm },
        { path: '/registration', component: Registration }
    ]
});

export default router;