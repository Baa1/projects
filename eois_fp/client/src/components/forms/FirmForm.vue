<template>
  <div>
    <b-form @submit.prevent="addFirm">
      <b-form-group
        label="Name:"
        label-for="nameField"
      >
        <b-form-input
          id="nameField"
          v-model="form.name"
          type="text"
          placeholder="Enter name"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        label="Tagline:"
        label-for="taglineField"
      >
        <b-form-input
          id="taglineField"
          v-model="form.tagline"
          type="text"
          placeholder="Enter tagline"
          required
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Add</b-button>
    </b-form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    name: 'FirmForm',
    data() {
        return {
            form: {
                name: '',
                tagline: ''
            }
        }
    },
    computed: {
      ...mapGetters([
        'CURRENT_SESSION'
      ])
    },
    methods: {
        ...mapActions([
            'ADD_FIRM',
            'GET_FIRMS'
         ]),
        async addFirm() {
            await this.ADD_FIRM({
                firm: this.form,
                sessionId: this.CURRENT_SESSION.id
              });
            this.form.name = '';
            this.form.tagline = '';
            await this.GET_FIRMS();
        }
    }
}
</script>

<style>

</style>