import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import card from './modules/card'

Vue.use(Vuex);

let store = new Vuex.Store({
    modules: {
        user,
        card
    }
});

export default store;