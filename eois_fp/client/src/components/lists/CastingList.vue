<template>
    <div>
        <b-list-group>
            <b-list-group-item v-for="user in USERS" :key="user.id">
                {{user.name}} {{user.surname}}
                <b-button>Edit</b-button>
            </b-list-group-item>
        </b-list-group>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    name: 'CastingList',
    computed: {
        ...mapGetters([
            'USERS'
        ])
    },
    methods: {
        ...mapActions([
            'GET_USERS'
        ])
    },
    mounted() {
        this.GET_USERS();
    }
}
</script>