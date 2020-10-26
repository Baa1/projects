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
        SET_CARDS: function (state, cards) {
            state.cards = cards;
        }
    },
    actions: {
        GET_CARDS({commit}) {
            axios.get('http://localhost:3000/cards/get')
            .then(function(response) {
                commit('SET_CARDS', response.data);
            })
            .catch(function(error) {
                console.log(error);
            });
        },
        ADD_CARD({commit}, params) {
            axios.post('http://localhost:3000/cards/add', params)
            .then(function() {
                commit();
            })
            .catch(function(error) {
                console.log(error);
            });
        }
    }
};