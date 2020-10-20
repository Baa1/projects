<template>
  <div class="RegistrationForm">
    <form v-on:submit.prevent="registrationClicked">
      <input type="text" maxlength="30" v-model="login" placeholder="Login">
      <input type="password" maxlength="20" v-model="password" placeholder="Password">
      <button>Registrate</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'RegistrationForm',
  data() {
    return {
      login: "",
      password: ""
    }
  },
  methods: {
    ...mapActions([
      'REGISTRATION'
    ]),
    registrationClicked: function() {
      this.REGISTRATION({
        login: this.login, 
        password: this.password
      });
    }
  }
}
</script>

<style scoped>
  .RegistrationForm {
      display: flex;
      flex-direction: column;
      width: 200px;
      border: 1px dotted silver;
      margin: 5px auto;
  }
</style>