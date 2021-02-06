<template>
    <div>
        <b-table :items="PARTICIPANTS" :fields="fields"></b-table>
        <b-button variant="success" v-b-modal.modal-1>Add participant</b-button>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    name: 'CastingTable',
    data() {
        return {
            fields: [
                {
                    key: 'username',
                    label: 'Имя'
                },
                {
                    key: 'surname',
                    label: 'Фамилия'
                }
            ]
        }
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