<template>
  <div class="LoginForm">
    Login: <input type="text" maxlength="30" name="login">
    Password: <input type="password" maxlength="20" name="password">
    <button v-on:click="logInClicked">Log In</button>
  </div>
</template>

<script>

export default {
  name: 'LoginForm',
  components: {
      
  },
  props: {

  },
  methods: {
    logInClicked: function() {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .LoginForm {
      display: flex;
      border: 1px dotted silver;
  }
</style>