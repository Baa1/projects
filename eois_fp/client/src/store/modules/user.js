import axios from 'axios'
export default {
    state: {
        accessToken: '',
        refreshToken: '',
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
        async LOGOUT(_, params) {
            await axios.delete('logout', params);
        },
        async REGISTRATION(_, params) {
            await axios.post('users/registration', params);
        },
        async GET_USER_INFO({ commit }, params) {
            let response = await axios.get(`users/${params}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + this.state.accessToken
                }
            });
            commit('SET_USER_INFO', response.data);
        },
    }
}