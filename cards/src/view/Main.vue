<template>
    <div class="Main">
    
        <router-link v-bind:to="{ name: 'authorization' }">
            Authorization
        </router-link>
        <router-link v-bind:to="{ name: 'registration' }">
            Registration
        </router-link>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
    name: 'Main',
    components: {
        
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
