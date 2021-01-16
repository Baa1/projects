import axios from 'axios'
export default {
    state: {
        accessToken: '',
        refreshToken: '',
        message: '',
        userInfo: null
    },
    getters: {
        ACCESS_TOKEN(state) {
            return state.accessToken;
        },
        REFRESH_TOKEN(state) {
            return state.refreshToken;
        }
    },
    mutations: {
        SET_ACCESS_TOKEN: (state, accessToken) => {
            state.accessToken = accessToken;
        },
        SET_REFRESH_TOKEN: (state, refreshToken) => {
            state.refreshToken = refreshToken;
        },
        SET_MESSAGE: (state, message) => {
            state.message = message;
        },
        SET_USER_INFO: (state, userInfo) => {
            state.userInfo = userInfo;
        }
    },
    actions: {
        async LOGIN({ commit }, params) {
            let response = await axios.post('login', params);
            commit('SET_ACCESS_TOKEN', response.data.accessToken);
            commit('SET_REFRESH_TOKEN', response.data.refreshToken);
        },
        async REGISTRATION({ commit }, params) {
            let response = await axios.post('users/registration', params);
            commit('SET_MESSAGE', response.data.message);
        },
        async GET_USER_INFO({ commit }, params) {
            let response = await axios.get(`users/${params}`);
            commit('SET_USER_INFO', response.data);
        },
    }
}