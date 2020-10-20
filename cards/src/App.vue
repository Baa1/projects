<template>
  <div id="app">
    <RegistrationForm/>
    <AuthorizationForm/>
  </div>
</template>

<script>
import RegistrationForm from './components/RegistrationForm'
import AuthorizationForm from './components/AuthorizationForm'
export default {
  name: 'App',
  components: {
    RegistrationForm,
    AuthorizationForm
  }  
}
</script>

<style>

</style>
