import axios from 'axios'
export default {
    state: {
        roles: [],
    },
    getters: {
        ROLES(state) {
            return state.roles;
        }
    },
    mutations: {
        SET_ROLES: (state, roles) => {
            state.roles = roles;
        }
    },
    actions: {
        async GET_ROLES({ commit }) {
            let response = await axios.get('roles');
            commit('SET_ROLES', response.data);
        }
    }
}