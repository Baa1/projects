<template>
  <div>
    <b-form @submit.prevent="authorizatoinClicked">
      <b-form-group label="Login:" label-for="loginField">
        <b-form-input
          id="loginField"
          v-model="form.login"
          type="text"
          placeholder="Enter login"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group label="Password:" label-for="passwordField">
        <b-form-input
          id="passwordField"
          v-model="form.password"
          type="password"
          placeholder="Enter password"
          required
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Log in</b-button>
    </b-form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'LoginForm',
  computed: {
      ...mapGetters([
          'AUTHENTICATED',
      ])
  },
  data() {
    return {
      form: {
        login: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions([
        'LOGIN'
    ]),
    async authorizatoinClicked() {
      await this.LOGIN(this.form);
      if (this.AUTHENTICATED) this.$router.replace({
        name: 'about'
      });
    }
  }
}
</script>

<style>

</style>