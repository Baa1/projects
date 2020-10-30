import axios from 'axios'
export default {
    state: {
        file: {}
    },
    getters: {
        
    },
    mutations: {
        EPMTY: (state, data) => {
            state.file = data
        }
    },
    actions: {
        UPLOAD_FILE({commit}, formData) {
            axios.post('http://94.73.253.155:3000/files/upload', 
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                })
                .then(response => {
                    console.log(response.data);
                    commit('EPMTY', response.data);
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }
}