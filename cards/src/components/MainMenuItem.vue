<template>
  <div class="MainMenuItem">
    <p>{{name}}</p>
  </div>
</template>

<script>
export default {
  name: 'MainMenuItem',
  components: {

  },
  props: ['name']
}
</script>

<style scoped>
  .MainMenuItem {
    height: 40px;
    border: 1px solid blue;
    margin: 5px;
  }
</style>
