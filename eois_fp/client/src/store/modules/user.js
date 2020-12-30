import axios from 'axios'
import settings from '../../settings'
export default {
    state: {
        user: null,
        message: ''
    },
    getters: {
        USER_ID(state) {
            return state.user;
        },
        MESSAGE(state) {
            return state.message;
        }
    },
    mutations: {
        SET_USER: (state, user) => {
            state.user = user;
        },
        SET_MESSAGE: (state, message) => {
            state.message = message;
        }
    },
    actions: {
        async AUTHORIZATION({commit}, params) {
            let response = await axios.post(`${settings.API_URL}/users/authorization`, params);
            commit('SET_USER', response.data.user);
        },
        async REGISTRATION({commit}, params) {
            let response = await axios.post(`${settings.API_URL}/users/registration`, params);
            console.log(response.data);
            commit('SET_MESSAGE', response.data.message);
        }
    }
}