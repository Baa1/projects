import axios from 'axios'
export default {
    state: {
        cards: []
    },
    getters: {
        CARDS(state) {
            return state.cards;
        }
    },
    mutations: {
        SET_CARDS: (state, cards) => {
            state.cards = cards;
        }
    },
    actions: {
        GET_CARDS({commit}) {
            axios.get('http://localhost:3000/cards/get')
            .then(responce => {
                commit('SET_CARDS', responce.data);
            })
            .catch(error => {
                console.log(error);
            });
        },
        ADD_CARD({commit}, params) {
            axios.post('http://localhost:3000/cards/add', params)
            .then(responce => {
                commit('SET_CARDS', responce.data);
            })
            .catch(error => {
                console.log(error);
            });
        }
    }
};