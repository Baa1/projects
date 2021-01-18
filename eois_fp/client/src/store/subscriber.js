import store from '@/store'
import axios from 'axios'

store.subscribe((mutation) => {
    switch (mutation.type) {
        case 'SET_ACCESS_TOKEN':
            if (mutation.payload) {
                axios.defaults.headers.common['Authorization'] = `Bearer ${mutation.payload}`
            }

            break;
    
        default:
            break;
    }
})