<template>
  <div class="container view">
    <div class="row">
      <div class="col-sm">
      </div>
      <div class="col-sm">
        <h3>Добро пожаловать в ЭОИС ФП</h3>
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
.view {
  margin-top: 50px;
}
</style>