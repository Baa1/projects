import axios from 'axios'
export default {
    state: {
        accessToken: null,
        refreshToken: null,
        user: null,
        userInfo: null
    },
    getters: {
        ACCESS_TOKEN(state) {
            return state.accessToken;
        },
        REFRESH_TOKEN(state) {
            return state.refreshToken;
        },
        USER(state) {
            return state.user;
        },
        USER_INFO(state) {
            return state.userInfo;
        },
        AUTHENTICATED(state) {
            return state.accessToken && state.user;
        }
    },
    mutations: {
        SET_ACCESS_TOKEN: (state, accessToken) => {
            state.accessToken = accessToken;
        },
        SET_REFRESH_TOKEN: (state, refreshToken) => {
            state.refreshToken = refreshToken;
        },
        SET_USER: (state, user) => {
            state.user = user;
        },
        SET_USER_INFO: (state, userInfo) => {
            state.userInfo = userInfo;
        }
    },
    actions: {
        async LOGIN({ commit, dispatch }, params) {
            try {
                let response = await axios.post('login', params);
                commit('SET_REFRESH_TOKEN', response.data.refreshToken);
                return dispatch('ATTEMPT', response.data.accessToken);
            } catch (error) {
                commit('SET_REFRESH_TOKEN', null);
                commit('SET_ACCESS_TOKEN', null);
                return;
            }
        },
        async ATTEMPT({ commit }, accessToken) {
            if (accessToken) {
                commit('SET_ACCESS_TOKEN', accessToken);
            }
            if (!this.state.user.accessToken) {
                return;
            }
            try {
                let response = await axios.get('/attempt');
                commit('SET_USER', response.data);
            } catch (error) {
                commit('SET_USER', null);
                commit('SET_ACCESS_TOKEN', null);
                commit('SET_REFRESH_TOKEN', null);
            }
        },
        async LOGOUT({ commit }, params) {
            await axios.delete('logout', params);
            commit('SET_USER', null);
            commit('SET_USER_INFO', null);
            commit('SET_ACCESS_TOKEN', null);
            commit('SET_REFRESH_TOKEN', null);
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