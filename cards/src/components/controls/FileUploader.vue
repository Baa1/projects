<template>
  <div class="FileUploader">
    <input type="file" 
           name="fileUploader" 
           id="fileUploader" 
           ref="fileUploader"
           v-on:change="fileUploaded">
    <button v-on:click="sendFile">Upload</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'FileUploader',
  props: ['items', 'defaultOptionText'], 
  data() {
    return {
      file: {}
    };
  },
  methods: {
      ...mapActions([
        'UPLOAD_FILE'
      ]),
      fileUploaded: function() {
          this.file = this.$refs.fileUploader.files[0];
          console.log(this.file);
      },
      sendFile: function() {
          let formData = new FormData();
          formData.append('filedata', this.file);
          this.UPLOAD_FILE(formData);
      }
  }
}
</script>

<style>

</style>