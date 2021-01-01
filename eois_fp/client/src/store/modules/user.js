import axios from 'axios'
import settings from '../../settings'
export default {
    state: {
        user: null,
        message: '',
        token: ''
    },
    getters: {
        USER(state) {
            return state.user;
        },
        MESSAGE(state) {
            return state.message;
        },
        TOKEN(state) {
            return state.token;
        }
    },
    mutations: {
        SET_USER: (state, user) => {
            state.user = user;
        },
        SET_MESSAGE: (state, message) => {
            state.message = message;
        },
        SET_TOKEN: (state, token) => {
            state.token = token;
        }
    },
    actions: {
        async AUTHORIZATION({commit}, params) {
            let config = {
                headers: { Authorization: `Bearer ${this.token}` }
            };
            let response = await axios.post(`${settings.API_URL}/users/authorization`, params, config);
            commit('SET_USER', response.data.user);
        },
        async REGISTRATION({commit}, params) {
            let response = await axios.post(`${settings.API_URL}/users/registration`, params);
            console.log(response.data);
            commit('SET_MESSAGE', response.data.message);
        }
    }
}