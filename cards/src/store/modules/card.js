import axios from 'axios'
export default {
    state: {
        cards: [],
        sets: []
    },
    getters: {
        CARDS(state) {
            return state.cards;
        },
        SETS(state) {
            return state.sets;
        }
    },
    mutations: {
        SET_CARDS: (state, cards) => {
            state.cards = cards;
        },
        SET_SETS: (state, sets) => {
            state.sets = sets;
        }
    },
    actions: {
        GET_CARDS({commit}) {
            axios.get('http://localhost:3000/cards/get_cards')
            .then(response => {
                commit('SET_CARDS', response.data);
            })
            .catch(error => {
                console.log(error);
            });
        },
        GET_SETS({commit}) {
            axios.get('http://localhost:3000/cards/get_sets')
            .then(response => {
                commit('SET_SETS', response.data);
            })
            .catch(error => {
                console.log(error);
            });
        },
        ADD_CARD({commit}, params) {
            axios.post('http://localhost:3000/cards/add', params)
            .then(response => {
                commit('SET_CARDS', response.data);
            })
            .catch(error => {
                console.log(error);
            });
        }
    }
};