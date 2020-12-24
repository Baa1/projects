<template>
  <div class="RegistrationForm">
    <form v-on:submit.prevent="registrationClicked">
      <input type="login" maxlength="50" v-model="login" placeholder="login" required>
      <input type="password" maxlength="30" v-model="password" placeholder="Password" required>
      <input type="email" maxlength="100" v-model="email" placeholder="email">
      <input type="name" maxlength="50" v-model="name" placeholder="name" required>
      <input type="surname" maxlength="50" v-model="surname" placeholder="surname" required>
      <input type="patronymic" maxlength="50" v-model="patronymic" placeholder="patronymic">
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
            login: '',
            password: '',
            email: '',
            name: '',
            surname: '',
            patronymic: ''
        }
    },
    methods: {
    ...mapActions([
      'REGISTRATION'
    ]),
    registrationClicked: function() {
        this.REGISTRATION({
            login: this.login, 
            password: this.password,
            email: this.email,
            name: this.name,
            surname: this.surname,
            patronymic: this.patronymic
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