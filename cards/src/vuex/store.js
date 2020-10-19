import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

let store = new Vuex.Store({
    state: {
        menuItems: [],
        userId: 0
    },
    getters: {
        MENU_ITEMS(state) {
            return state.menuItems;
        },
        USER_ID(state) {
            return state.userId;
        }
    },
    mutations: {
        SET_MENU_ITEMS: function (state, menuItems) {
            state.menuItems = menuItems;
        },
        SET_USER_ID: function (state, userId) {
            state.userId = userId;
        }
    },
    actions: {
        GET_MENU_ITEMS({commit}) {
            // axios.get("http://localhost:3000/users")
            // .then(function (responce) {
            //     commit('SET_MENU_ITEMS', responce.data)
            // })
            // .catch(function (error) {
            //     console.log(error);
            // });
        },
        AUTORIZATION({commit}) {
            let params = {
                
            };
            axios.post("http://localhost:3000/users/authorization")
            .then(function (response) {
                commit('SET_USER_ID', response.data)
            })
            .catch(function (error) {
                console.log(error);
            });
        }
    }
});

export default store;