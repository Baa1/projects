<template>
  <div id="app">
    <RegistrationForm/>
    <AuthorizationForm/>
  </div>
</template>

<script>
import RegistrationForm from './components/forms/AuthorizationForm.vue'
import AuthorizationForm from './components/forms/RegistrationForm.vue'

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
