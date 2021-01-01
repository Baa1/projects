<template>
  <div id="app">
    <Login/>
  </div>
</template>

<script>
import Login from './components/pages/Login.vue'

export default {
  name: 'App',
  components: {
    Login
  }
}
</script>

<style>
#app {
  display: flex;
  background-color: blueviolet;
  justify-content: center;
  margin: 0 auto;
}
</style>
