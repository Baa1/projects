<template>
    <div>
        <b-list-group>
            {{PARTICIPANTS}}
            <CastingListItem v-for="patricipant in PARTICIPANTS" :key="patricipant.user_id" :patricipant="patricipant">
            </CastingListItem>
        </b-list-group>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import CastingListItem from '../listItems/CastingListItem'
export default {
    name: 'CastingList',
    components: {
        CastingListItem
    },
    computed: {
        ...mapGetters([
            'PARTICIPANTS'
        ])
    },
    methods: {
        ...mapActions([
            'GET_PARTICIPANTS'
        ])
    },
    mounted() {
        this.GET_PARTICIPANTS();
    }
}
</script>