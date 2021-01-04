<template>
  <div id="app">
    <router-nav v-if="USER_ID > 0"/>
    <router-view/>
    <Login v-if="USER_ID === 0"/>
  </div>
</template>

<script>
import Login from './components/pages/Login.vue'
import { mapGetters } from 'vuex'
export default {
    components: {
      Login
    },
    computed: {
        ...mapGetters([
            'USER_ID'
        ])
    },
}
</script>

<style>
  #app {
    background-color: yellow;
  }
</style>