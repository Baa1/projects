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
        SET_FIRMS: (state, roles) => {
            state.roles = roles;
        }
    },
    actions: {
        async GET_FIRMS({ commit }) {
            let response = await axios.get('firms');
            commit('SET_FIRMS', response.data);
        },
        async ADD_FIRM(_, params) {
            await axios.post('firms', params);
        }
    }
}