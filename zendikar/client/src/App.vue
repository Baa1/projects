<template>
  <div id="app">
    <Header/>
    <MainPage/>
  </div>
</template>

<script>
import MainPage from './components/MainPage.vue'
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    MainPage,
    Header
  }
}
</script>

<style>
#app {
  background-color: darkred;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}
</style>
