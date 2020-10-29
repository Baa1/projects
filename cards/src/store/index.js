import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import card from './modules/card'
import file from './modules/file'

Vue.use(Vuex);

let store = new Vuex.Store({
    modules: {
        user,
        card,
        file
    }
});

export default store;