<template>
  <div class="Registration">
    <vue-form-generator :schema="schema" :model="model" :options="formOptions"></vue-form-generator>
  </div>
</template>

<script>
import VueFormGenerator from 'vue-form-generator'
import { mapActions, mapGetters } from 'vuex'
export default {
    name: 'Registration',
    components: {
        "vue-form-generator": VueFormGenerator.component
    },
    computed: {
        ...mapGetters([
            'ROLES',
        ])
    },
    data () {
        return {
        model: {
            login: '',
            password: '',
            email: '',
            name: '',
            surname: '',
            patronymic: '',
            roleId: 0,
            birthday: ''
        },
        schema: {
            fields: [
                {
                    type: 'input',
                    inputType: 'text',
                    label: 'Логин',
                    model: 'login',
                    featured: true,
                    required: true
                },
                {
                    type: 'input',
                    inputType: 'password',
                    label: 'Пароль',
                    model: 'password',
                    featured: true,
                    required: true
                },
                {
                    type: 'input',
                    inputType: 'text',
                    label: 'Фамилия',
                    model: 'surname',
                    featured: true,
                    required: true
                },
                {
                    type: 'input',
                    inputType: 'text',
                    label: 'Имя',
                    model: 'name',
                    featured: true,
                    required: true
                },
                {
                    type: 'input',
                    inputType: 'text',
                    label: 'Отчество',
                    model: 'patronymic',
                    featured: true,
                    required: true
                },
                {
                    type: 'select',
                    label: 'Роль',
                    model: 'roleId',
                    values: this.ROLES(),
                    featured: true,
                    required: true
                },
                {
                    type: 'submit',
                    buttonText: 'Зарегистрировать',
                    onSubmit: this.authorizatoinClicked,
                    validateBeforeSubmit: true
                }
            ]
        },
        formOptions: {
                validateAfterLoad: true,
                validateAfterChanged: true,
                validateAsync: true
            }
        }
    },
    methods: {
        ...mapActions([
            'REGISTRATION'
        ]),
        registrationClicked: async () => {
            await this.REGISTRATION({
                login: this.model.login, 
                password: this.model.password,
                email: this.model.email,
                name: this.model.name,
                surname: this.model.surname,
                patronymic: this.model.patronymic,
                roleId: this.model.roleId,
                birthday: this.model.birthday
            });
        }
    }
}
</script>

<style>

</style>