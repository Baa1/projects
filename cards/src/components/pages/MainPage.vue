<template>
    <div class="MainPage">
    
        <router-link v-bind:to="{ name: 'authorization' }">
            Authorization
        </router-link>
        <router-link v-bind:to="{ name: 'registration' }">
            Registration
        </router-link>
        <div v-if="USER_ID != 0">
            <CardsList/>
            <ItemSelector v-bind:items="SETS"/>
            <ItemSelector v-bind:items="items"/>
            <FileUploader/>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import CardsList from '../controls/CardsList'
import ItemSelector from '../controls/ItemSelector'
import FileUploader from '../controls/FileUploader'

export default {
    name: 'MainContent',
    components: {
        CardsList,
        ItemSelector,
        FileUploader
    },
    data() {
        return {
            items: [
                {
                    id: 1,
                    name: '123'
                },
                {
                    id: 2,
                    name: '456'
                }
            ]
        }
    },
    computed: {
        ...mapGetters([
        'SETS',
        'USER_ID'
        ])
    },
    methods: {
        ...mapActions([
        'GET_SETS'
        ])
    },
    mounted: function() {
        this.GET_SETS();
    }
}
</script>

<style>

</style>
