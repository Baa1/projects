import axios from 'axios'
import settings from '../../settings'
export default {
    state: {
        userId: 0,
        message: '',
        token: '',
        login: '',
        userInfo: null
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
        },
        USER_INFO(state) {
            return state.userInfo;
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
        },
        SET_USER_INFO: (state, userInfo) => {
            state.userInfo = userInfo;
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
        },
        async GET_USER_INFO({commit}, params) {
            let response = await axios.get(`${settings.API_URL}/users/${params}`);
            commit('SET_USER_INFO', response.data);
        },
    }
}