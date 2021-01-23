<template>
  <div class="container">
    <div class="row">
      <div class="col-sm">
      </div>
      <div class="col-sm">
        <LoginForm/>
      </div>
      <div class="col-sm">
      </div>
    </div>
  </div>
</template>

<script>
import LoginForm from '../forms/LoginForm'
export default {
  name: 'Login',
  components: {
    LoginForm
  }
}
</script>

<style>
</style>