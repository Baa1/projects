import axios from 'axios'
export default {
    state: {
        accessToken: null,
        refreshToken: null,
        userInfo: null
    },
    getters: {
        ACCESS_TOKEN(state) {
            return state.accessToken;
        },
        REFRESH_TOKEN(state) {
            return state.refreshToken;
        },
        USER_INFO(state) {
            return state.userInfo;
        },
        AUTHENTICATED(state) {
            return state.accessToken && state.userInfo;
        }
    },
    mutations: {
        SET_ACCESS_TOKEN: (state, accessToken) => {
            state.accessToken = accessToken;
        },
        SET_REFRESH_TOKEN: (state, refreshToken) => {
            state.refreshToken = refreshToken;
        },
        SET_USER_INFO: (state, userInfo) => {
            state.userInfo = userInfo;
        },
        LOGOUT: (state) => {
            state.accessToken = '';
            state.refreshToken = '';
            state.userInfo = {
                id: 0,
                login: ''
            }
        }
    },
    actions: {
        async LOGIN({ commit }, params) {
            try {
                let response = await axios.post('login', params);
                commit('SET_ACCESS_TOKEN', response.data.accessToken);
                commit('SET_REFRESH_TOKEN', response.data.refreshToken);
                commit('SET_USER_INFO', response.data.userInfo);
            } catch (error) {
                commit('SET_ACCESS_TOKEN', null);
                commit('SET_REFRESH_TOKEN', null);
                commit('SET_USER_INFO', null);
            }
            
        },
        async LOGOUT({ commit }, params) {
            await axios.delete('logout', params);
            commit('LOGOUT');
        },
        async REGISTRATION(_, params) {
            await axios.post('users/registration', params);
        },
        async GET_USER_INFO({ commit }, params) {
            try {
                let response = await axios.get(`users/${params}`);
                commit('SET_USER_INFO', response.data);
            } catch (error) {
                commit('SET_USER_INFO', null);
            }
            
        },
    }
}