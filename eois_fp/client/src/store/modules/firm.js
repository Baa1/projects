import axios from 'axios'
export default {
    state: {
        firms: [],
    },
    getters: {
        FIRMS(state) {
            return state.firms;
        }
    },
    mutations: {
        SET_FIRMS: (state, firms) => {
            state.firms = firms;
        }
    },
    actions: {
        async GET_FIRMS({ commit }, params) {
            let response = await axios.get('firms?' + 'session_id=' + params);
            commit('SET_FIRMS', response.data);
        },
        async ADD_FIRM(_, params) {
            await axios.post('firms', params);
        }
    }
}