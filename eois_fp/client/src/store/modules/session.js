import axios from 'axios'
export default {
    state: {
        current_session: null,
        sessions: []
    },
    getters: {
        CURRENT_SESSION(state) {
            return state.current_session;
        },
        SESSIONS(state) {
            return state.sessions;
        }
    },
    mutations: {
        SET_CURRENT_SESSION: (state, current_session) => {
            state.current_session = current_session;
        },
        SET_SESSIONS: (state, sessions) => {
            state.sessions = sessions;
        }
    },
    actions: {
        async GET_CURRENT_SESSION({ commit }) {
            let response = await axios.get('sessions/current_session');
            commit('SET_CURRENT_SESSION', response.data);
        },
        async ADD_SESSION(_, params) {
            await axios.post('sessions', params);
        },
        async GET_SESSIONS({ commit }) {
            let response = await axios.get('sessions');
            commit('SET_SESSIONS', response.data);
        },
    }
}