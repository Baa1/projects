<template>
  <div id="app">
    <VerificationCard/>
  </div>
</template>

<script>
import VerificationCard from './components/VerificationCard.vue'

export default {
  name: 'App',
  components: {
    VerificationCard
  }
}
</script>

<style>
body {
  background-color: cadetblue;
}
</style>
