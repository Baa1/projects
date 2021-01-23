<template>
  <div>
    <b-form @submit.prevent="registrationClicked">
      <b-form-group
        id="input-group-1"
        label="Login:"
        label-for="loginField"
      >
        <b-form-input
          id="loginField"
          v-model="form.login"
          type="text"
          placeholder="Enter login"
          required
          class="col-xs-2 col-sm-2 col-md-2"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Password:" label-for="passwordField">
        <b-form-input
          id="passwordField"
          v-model="form.password"
          type="password"
          placeholder="Enter password"
          required
          class="col-xs-2 col-sm-2 col-md-2"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Register</b-button>
    </b-form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    name: 'RegistrationForm',
    computed: {
        ...mapGetters([
            'ROLES',
        ])
    },
    data () {
        return {
            form: {
                login: '',
                password: '',
                email: '',
                name: '',
                surname: '',
                patronymic: '',
                roleId: 0,
                birthday: ''
            }
        }
    },
    methods: {
        ...mapActions([
            'REGISTRATION'
        ]),
        registrationClicked: async () => {
            await this.REGISTRATION({
                login: this.form.login, 
                password: this.form.password,
                email: this.form.email,
                name: this.form.name,
                surname: this.form.surname,
                patronymic: this.form.patronymic,
                roleId: this.form.roleId,
                birthday: this.form.birthday
            });
        }
    }
}
</script>

<style>

</style>