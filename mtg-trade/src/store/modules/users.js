import axios from 'axios'
export default {
  state: {
      userId: 0,
      message: ""
  },
  getters: {
      USER_ID(state) {
          return state.userId;
      },
      AUTH_MESSAGE(state) {
          return state.message;
      }
  },
  mutations: {
      SET_USER_ID: (state, userId) => {
          state.userId = userId;
      },
      SET_MESSAGE: (state, message) => {
          state.message = message;
      }
  },
  actions: {
    async AUTHORIZATION({commit}, params) {
        let response = await axios.post("http://localhost:3000/users/authorization", params);
        commit('SET_USER_ID', response.data.userId);
        commit('SET_MESSAGE', response.data.message);
        return response.data.message;
    },
    REGISTRATION({commit}, params) {
      axios.post("http://localhost:3000/users/registration", params)
      .then(response => {
          commit('SET_USER_ID', response.data.userId);
          commit('SET_MESSAGE', response.data.message);
      })
      .catch(error => {
          console.log(error);
      });
    }
  }
}