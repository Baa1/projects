import axios from 'axios'
export default {
    state: {
        positions: [],
    },
    getters: {
        POSITIONS(state) {
            return state.positions;
        }
    },
    mutations: {
        SET_POSITIONS: (state, positions) => {
            state.positions = positions;
        }
    },
    actions: {
        async GET_POSITIONS({ commit }) {
            let response = await axios.get('positions');
            commit('SET_POSITIONS', response.data);
        }
    }
}