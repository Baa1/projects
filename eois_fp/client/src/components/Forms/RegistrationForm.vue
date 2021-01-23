<template>
  <div>
    <b-form @submit.prevent="registrationClicked">
        <b-form-group label="Login:" label-for="loginField">
            <b-form-input
            id="loginField"
            class="col-xs-2 col-sm-2 col-md-2"
            v-model="form.login"
            type="text"
            placeholder="Enter login"
            required
            ></b-form-input>
        </b-form-group>

        <b-form-group label="Password:" label-for="passwordField">
            <b-form-input
            id="passwordField"
            class="col-xs-2 col-sm-2 col-md-2"
            v-model="form.password"
            type="password"
            placeholder="Enter password"
            required
            ></b-form-input>
        </b-form-group>

        <b-form-group label="E-mail:" label-for="emailField">
            <b-form-input
            id="emailField"
            class="col-xs-2 col-sm-2 col-md-2"
            v-model="form.email"
            type="email"
            placeholder="Enter e-mail"
            ></b-form-input>
        </b-form-group>

        <b-form-group label="Name:" label-for="nameField">
            <b-form-input
            id="nameField"
            class="col-xs-2 col-sm-2 col-md-2"
            v-model="form.name"
            type="text"
            placeholder="Enter name"
            required
            ></b-form-input>
        </b-form-group>

        <b-form-group label="Patronymic:" label-for="patronymicField">
            <b-form-input
            id="patronymicField"
            class="col-xs-2 col-sm-2 col-md-2"
            v-model="form.patronymic"
            type="text"
            placeholder="Enter patronymic"
            ></b-form-input>
        </b-form-group>

        <b-form-group label="Surname:" label-for="surnameField">
            <b-form-input
            id="surnameField"
            class="col-xs-2 col-sm-2 col-md-2"
            v-model="form.surname"
            type="text"
            placeholder="Enter surname"
            required
            ></b-form-input>
        </b-form-group>

        <b-form-group label="Birthday:" label-for="birthdayField">
            <b-form-input
            id="birthdayField"
            class="col-xs-2 col-sm-2 col-md-2"
            v-model="form.birthday"
            type="date"
            placeholder="Enter birthday"
            ></b-form-input>
        </b-form-group>

        <b-form-group label="Role:" label-for="roleField">
            <b-form-select
            id="roleField"
            class="col-xs-2 col-sm-2 col-md-2"
            v-model="form.roleId"
            value-field="id"
            text-field="name"
            :options="ROLES"
            ></b-form-select>
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
            'REGISTRATION',
            'GET_ROLES'
        ]),
        async registrationClicked() {
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
    },
    mounted() {
        this.GET_ROLES();
    }
}
</script>

<style>

</style>