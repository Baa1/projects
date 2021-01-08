<template>
  <div id="app">
    <router-nav/>
    <router-view/>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    components: {
    },
    methods: {
      ...mapActions([
        'GET_ROLES'
      ])
    },
    mounted: async () => {
      await this.GET_ROLES();
    }
}
</script>

<style>
  #app {
    background-color: yellow;
  }
</style>