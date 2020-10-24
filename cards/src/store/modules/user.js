import axios from 'axios'
export default {
    state: {
        userId: 0
    },
    getters: {
        USER_ID(state) {
            return state.userId;
        }
    },
    mutations: {
        SET_USER_ID: function (state, userId) {
            state.userId = userId;
        }
    },
    actions: {
        AUTHORIZATION({commit}, params) {
            axios.post("http://localhost:3000/users/authorization", params)
            .then(function (response) {
                commit('SET_USER_ID', response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
        },
        REGISTRATION({commit}, params) {
            axios.post("http://localhost:3000/users/registration", params)
            .then(function (response) {
                commit('SET_USER_ID', response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
        }
    }
}