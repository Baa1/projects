<template>
  <div id="app">
    <RegistrationForm/>
  </div>
</template>

<script>
import RegistrationForm from './components/RegistrationForm.vue'

export default {
  name: 'App',
  components: {
    RegistrationForm
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
