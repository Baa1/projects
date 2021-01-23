<template>
    <div>
        <b-list-group>
            <b-list-group-item v-for="firm in FIRMS" :key="firm.id">{{firm.name}}: {{firm.tagline}}</b-list-group-item>
        </b-list-group>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    name: 'FirmsList',
    computed: {
        ...mapGetters([
            'FIRMS'
        ])
    },
    methods: {
        ...mapActions([
            'GET_FIRMS'
        ])
    },
    mounted() {
        this.GET_FIRMS();
    }
}
</script>