<template>
  <div id="app">
    <RegistrationForm/>
    <AuthorizationForm/>
  </div>
</template>

<script>
import RegistrationForm from './components/RegistrationForm.vue'
import AuthorizationForm from './components/AuthorizationForm.vue'

export default {
  name: 'App',
  components: {
    RegistrationForm,
    AuthorizationForm
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
