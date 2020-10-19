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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .MainMenuItem {
    height: 40px;
    border: 1px solid blue;
    margin: 5px;
  }
</style>
