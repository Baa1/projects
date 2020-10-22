<template>
  <div class="AuthorizationForm">
    <form v-on:submit.prevent="authorizationClicked">
      <input type="text" maxlength="30" v-model="login" placeholder="Login">
      <input type="password" maxlength="20" v-model="password" placeholder="Password">
      <button>Log In</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'AuthorizationForm',
  data() {
    return {
      login: "",
      password: ""
    }
  },
  methods: {
    ...mapActions([
      'AUTHORIZATION'
    ]),
    authorizationClicked: function() {
      this.AUTHORIZATION({
        login: this.login, 
        password: this.password
      })
      .then(() => {
        this.$router.push({path:'/'})
      });
    }
  }
}
</script>

<style scoped>
  .AuthorizationForm {
      display: flex;
      flex-direction: column;
      width: 200px;
      border: 1px dotted silver;
      margin: 5px auto;
  }
</style>