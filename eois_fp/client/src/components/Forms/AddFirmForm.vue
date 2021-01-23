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
          class="col-xs-2 col-sm-2 col-md-2"
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
          class="col-xs-2 col-sm-2 col-md-2"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Add</b-button>
    </b-form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name: 'AddFirmForm',
    data() {
        return {
            form: {
                name: '',
                tagline: ''
            }
        }
    },
    methods: {
        ...mapActions([
            'ADD_FIRM'
         ]),
        async addFirm() {
            await this.ADD_FIRM(this.form);
        }
    }
}
</script>

<style>

</style>