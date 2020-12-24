import axios from 'axios'
import settings from '../../settings'
export default {
    state: {
        userId: 0,
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
        async AUTHORIZATION({commit}, params) {
            let response = await axios.post(`${settings.API_URL}/users/authorization`, params);
            commit('SET_USER_ID', response.data.userId);
        },
        async REGISTRATION({commit}, params) {
            let response = await axios.post(`${settings.API_URL}/users/registration`, params);
            console.log(response.data);
            commit('SET_USER_ID', response.data.id);
        }
    }
}