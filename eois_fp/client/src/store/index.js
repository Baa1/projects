import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import file from './modules/file'
import role from './modules/role'

Vue.use(Vuex);

let store = new Vuex.Store({
    modules: {
        user,
        file,
        role
    }
});

export default store;