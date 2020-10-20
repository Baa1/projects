<template>
  <div id="app">
    <router-link v-bind:to="{ name: 'authorization' }">
      Authorization
    </router-link>
    <router-link v-bind:to="{ name: 'registration' }">
      Registration
    </router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',  
}
</script>

<style>

</style>
