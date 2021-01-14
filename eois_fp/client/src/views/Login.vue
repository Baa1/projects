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
          'USER_ID',
          'LOGIN',
          'TOKEN'
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
        'AUTHORIZATION'
    ]),
    authorizatoinClicked: async function() {
      console.log('submitted');
    }
  }
}
</script>

<style>

</style>