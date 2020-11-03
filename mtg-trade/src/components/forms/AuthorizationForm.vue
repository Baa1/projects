<template>
  <div class="AuthorizationForm">
    <form v-on:submit.prevent="authorizationClicked">
      <input type="text" maxlength="30" v-model="login" placeholder="Login">
      <input type="password" maxlength="20" v-model="password" placeholder="Password">
      <p>{{AUTH_MESSAGE}}</p>
      <button>Log In</button>
    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'AuthorizationForm',
  data() {
    return {
      login: "",
      password: ""
    };
  },
  computed: {
    ...mapGetters([
      'AUTH_MESSAGE',
      'USER_ID'
    ])
  },
  methods: {
    ...mapActions([
      'AUTHORIZATION'
    ]),
    authorizationClicked: async function() {
      let result =  await this.AUTHORIZATION({
        login: this.login, 
        password: this.password
      });
      console.log(result);
      if (result === "") this.$router.push("/");
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