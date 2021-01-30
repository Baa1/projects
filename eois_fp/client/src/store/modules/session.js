import axios from 'axios'
export default {
    state: {
        session: null
    },
    getters: {
        SESSION(state) {
            return state.session;
        }
    },
    mutations: {
        SET_SESSION: (state, session) => {
            state.session = session;
        }
    },
    actions: {
        async GET_SESSION({ commit }) {
            let response = await axios.get('sessions/current_session');
            commit('SET_SESSION', response.data);
        }
    }
}