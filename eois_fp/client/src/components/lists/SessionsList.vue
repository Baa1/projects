<template>
    <div>
        <b-list-group>
            <b-list-group-item v-for="session in SESSIONS" :key="session.id">
                {{session.date_start}} - {{session.date_end}}
            </b-list-group-item>
        </b-list-group>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    name: 'SessionsList',
    computed: {
        ...mapGetters([
            'SESSIONS'
        ])
    },
    methods: {
        ...mapActions([
            'GET_SESSIONS'
        ])
    },
    mounted() {
        this.GET_SESSIONS();
    }
}
</script>