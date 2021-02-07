import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import file from './modules/file'
import role from './modules/role'
import firm from './modules/firm'
import session from './modules/session'
import position from './modules/position'

Vue.use(Vuex);

let store = new Vuex.Store({
    modules: {
        user,
        file,
        role,
        firm,
        session,
        position
    }
});

export default store;