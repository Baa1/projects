<template>
  <div class="LoginForm">
    <form v-on:submit.prevent="logInClicked"></form>
    <input type="text" maxlength="30" v-model="login" placeholder="Login">
    <input type="password" maxlength="20" v-model="password" placeholder="Password">
    <button v-on:click="logInClicked">Log In</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'LoginForm',
  data() {
    return {
      login: "",
      password: ""
    }
  },
  methods: {
    ...mapActions([
      'AUTORIZATION'
    ]),
    logInClicked: function() {
      this.AUTORIZATION({login, password});
    }
  }
}
</script>

<style scoped>
  .LoginForm {
      display: flex;
      flex-direction: column;
      width: 200px;
      border: 1px dotted silver;
      margin: 5px auto;
  }
</style>