import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

let store = new Vuex.Store({
    state: {
        menuItems: []
    },
    getters: {
        MENU_ITEMS(state) {
            return state.menuItems;
        }
    },
    mutations: {
        SET_MENU_ITEMS: function (state, menuItems) {
            state.menuItems = menuItems;
        }
    },
    actions: {
        GET_MENU_ITEMS({commit}) {
            axios.get("http://localhost:3000/users")
            .then(function (responce) {
                commit('SET_MENU_ITEMS', responce.data)
            })
            .catch(function (error) {
                console.log(error);
            });
        }
    }
});

export default store;