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
        SET_USER_ID: (state, userId) => {
            state.userId = userId;
        }
    },
    actions: {
        AUTHORIZATION({commit}, params) {
            axios.post("http://94.73.253.155:3000/users/authorization", params)
            .then(response => {
                commit('SET_USER_ID', response.data);
            })
            .catch(error => {
                console.log(error);
            });
        },
        REGISTRATION({commit}, params) {
            axios.post("http://94.73.253.155:3000/users/registration", params)
            .then(response => {
                commit('SET_USER_ID', response.data);
            })
            .catch(error => {
                console.log(error);
            });
        }
    }
}