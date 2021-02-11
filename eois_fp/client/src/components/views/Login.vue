<template>
  <div class="container view">
    <div class="row">
      <div class="col-sm">
      </div>
      <div class="col-sm">
        <h3>{{locale.EOIS_WELCOME}}</h3>
        <LoginForm/>
      </div>
      <div class="col-sm">
      </div>
    </div>
  </div>
</template>

<script>
import LoginForm from '../forms/LoginForm'
import locale from '../../locale'
export default {
  name: 'Login',
  components: {
    LoginForm
  },
  data() {
    return {
      locale
    }
  }
}
</script>

<style>
.view {
  margin-top: 50px;
}
</style>