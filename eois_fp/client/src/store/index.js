import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import file from './modules/file'

Vue.use(Vuex);

let store = new Vuex.Store({
    modules: {
        user,
        file
    }
});

export default store;