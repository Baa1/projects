import axios from 'axios'
import settings from '../../settings'
export default {
    state: {
        userId: 0,
        message: '',
        token: '',
        login: ''
    },
    getters: {
        USER_ID(state) {
            return state.userId;
        },
        MESSAGE(state) {
            return state.message;
        },
        TOKEN(state) {
            return state.token;
        },
        LOGIN(state) {
            return state.login;
        }
    },
    mutations: {
        SET_USER: (state, user) => {
            state.userId = user.id;
            state.login = user.login;
            state.token = user.token;
        },
        SET_MESSAGE: (state, message) => {
            state.message = message;
        }
    },
    actions: {
        async AUTHORIZATION({commit}, params) {
            let response = await axios.post(`${settings.API_URL}/users/authorization`, params);
            commit('SET_USER', response.data);
        },
        async REGISTRATION({commit}, params) {
            let response = await axios.post(`${settings.API_URL}/users/registration`, params);
            commit('SET_MESSAGE', response.data.message);
        }
    }
}