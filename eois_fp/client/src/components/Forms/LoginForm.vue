<template>
  <div>
    <b-form @submit.prevent="authorizatoinClicked">
      <b-form-group :label="locale.LOGIN" label-for="loginField">
        <b-form-input
          id="loginField"
          v-model="form.login"
          type="text"
          :placeholder="LOGIN_PLACEHOLDER"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group :label="locale.PASSWORD" label-for="passwordField">
        <b-form-input
          id="passwordField"
          v-model="form.password"
          type="password"
          :placeholder="locale.PASSWORD_PLACEHOLDER"
          required
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">{{locale.LOG_IN}}</b-button>
    </b-form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import locale from '../../locale'
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
      },
      locale
    }
  },
  methods: {
    ...mapActions([
        'LOGIN',
        'GET_SESSION'
    ]),
    async authorizatoinClicked() {
      await this.LOGIN(this.form);
      if (this.AUTHENTICATED) {
        this.$router.replace({
          name: 'about'
        });
        await this.GET_SESSION();
      }
    }
  }
}
</script>

<style>

</style>