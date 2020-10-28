<template>
    <div class="MainContent">
    
        <router-link v-bind:to="{ name: 'authorization' }">
            Authorization
        </router-link>
        <router-link v-bind:to="{ name: 'registration' }">
            Registration
        </router-link>
        
        <CardsList/>
        <ItemSelector v-bind:items="SETS"/>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import CardsList from './CardsList'
import ItemSelector from './ItemSelector'

export default {
    name: 'MainContent',
    components: {
        CardsList,
        ItemSelector
    },
    computed: {
        ...mapGetters([
        'SETS'
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
