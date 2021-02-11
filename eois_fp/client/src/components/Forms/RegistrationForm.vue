<template>
  <div>
    <b-form @submit.prevent="registrationClicked">
        <b-form-group 
            label-size="sm" 
            label-cols="1" 
            content-cols-sm="2"
            :label="locale.LOGIN" 
            label-for="loginField"
        >
            <b-form-input
                id="loginField"
                size="sm"
                v-model="form.login"
                type="text"
                :placeholder="locale.LOGIN_PLACEHOLDER"
                required
            ></b-form-input>
        </b-form-group>

        <b-form-group 
            label-size="sm" 
            label-cols="1" 
            content-cols-sm="2"
            :label="locale.PASSWORD" 
            label-for="passwordField"
        >
            <b-form-input
                id="passwordField"
                size="sm"
                v-model="form.password"
                type="password"
                :placeholder="locale.PASSWORD_PLACEHOLDER"
                required
            ></b-form-input>
        </b-form-group>

        <b-form-group 
            label-size="sm" 
            label-cols="1" 
            content-cols-sm="2"
            :label="locale.EMAIL" 
            label-for="emailField"
        >
            <b-form-input
                id="emailField"
                size="sm"
                v-model="form.email"
                type="email"
                :placeholder="locale.EMAIL_PLACEHOLDER"
            ></b-form-input>
        </b-form-group>

        <b-form-group 
            label-size="sm" 
            label-cols="1" 
            content-cols-sm="2"
            :label="locale.NAME" 
            label-for="nameField"
        >
            <b-form-input
                id="nameField"
                size="sm"
                v-model="form.name"
                type="text"
                :placeholder="locale.NAME_PLACEHOLDER"
                required
            ></b-form-input>
        </b-form-group>

        <b-form-group 
            label-size="sm" 
            label-cols="1" 
            content-cols-sm="2"
            :label="locale.PATRONYMIC" 
            label-for="patronymicField"
        >
            <b-form-input
                id="patronymicField"
                size="sm"
                v-model="form.patronymic"
                type="text"
                :placeholder="locale.PATRONYMIC_PLACEHOLDER"
            ></b-form-input>
        </b-form-group>

        <b-form-group 
            label-size="sm" 
            label-cols="1" 
            content-cols-sm="2"
            :label="locale.SURNAME" 
            label-for="surnameField"
        >
            <b-form-input
                id="surnameField"
                size="sm"
                v-model="form.surname"
                type="text"
                :placeholder="locale.SURNAME_PLACEHOLDER"
                required
            ></b-form-input>
        </b-form-group>

        <b-form-group 
            label-size="sm" 
            label-cols="1" 
            content-cols-sm="2"
            :label="locale.BIRTHDAY" 
            label-for="birthdayField"
        >
            <b-form-input
                id="birthdayField"
                size="sm"
                v-model="form.birthday"
                type="date"
                placeholder="Enter birthday"
            ></b-form-input>
        </b-form-group>

        <b-form-group 
            label-size="sm" 
            label-cols="1" 
            content-cols-sm="2"
            :label="locale.ROLE" 
            label-for="roleField"
        >
            <b-form-select
                id="roleField"
                size="sm"
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
import locale from '../../locale'
export default {
    name: 'RegistrationForm',
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
            },
            locale
        }
    },
    computed: {
        ...mapGetters([
            'ROLES',
        ])
    },
    methods: {
        ...mapActions([
            'REGISTRATION',
            'GET_ROLES'
        ]),
        async registrationClicked() {
            await this.REGISTRATION(this.form);
        }
    },
    mounted() {
        this.GET_ROLES();
    }
}
</script>

<style>

</style>