import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import file from './modules/file'
import role from './modules/role'
import firm from './modules/firm'

Vue.use(Vuex);

let store = new Vuex.Store({
    modules: {
        user,
        file,
        role,
        firm
    }
});

export default store;