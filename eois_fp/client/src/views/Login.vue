<template>
  <div class="Login">
    <vue-form-generator :schema="schema" :model="model" :options="formOptions"></vue-form-generator>
  </div>
</template>

<script>
import VueFormGenerator from 'vue-form-generator'
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'Login',
  components: {
      "vue-form-generator": VueFormGenerator.component
  },
  computed: {
      ...mapGetters([
          'ACCESS_TOKEN',
          'REFRESH_TOKEN'
      ])
  },
  data () {
    return {
      model: {
        login: '',
        password: ''
      },
      schema: {
        fields: [
          {
            type: 'input',
            inputType: 'text',
            label: 'Логин',
            model: 'login',
            placeholder: 'login',
            featured: true,
            required: true
          },
          {
            type: 'input',
            inputType: 'password',
            label: 'Пароль',
            model: 'password',
            placeholder: 'password',
            featured: true,
            required: true
          },
          {
            type: 'submit',
            buttonText: 'Войти',
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
        'LOGIN'
    ]),
    authorizatoinClicked: async function() {
      await this.LOGIN(this.model);
      console.log(this.ACCESS_TOKEN);
      console.log(this.REFRESH_TOKEN);
    }
  }
}
</script>

<style>

</style>