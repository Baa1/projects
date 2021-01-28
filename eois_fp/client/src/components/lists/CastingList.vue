<template>
    <div>
        <b-list-group>
            <CastingListItem @click="userClicked" v-for="user in USERS" :key="user.id" :user="user">
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
            'USERS'
        ])
    },
    methods: {
        ...mapActions([
            'GET_USERS'
        ]),
        userClicked(event) {
            alert(event.target.value);
        }
    },
    mounted() {
        this.GET_USERS();
    }
}
</script>