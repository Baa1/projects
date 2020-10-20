<template>
  <div class="MainContent">
    
    <router-link v-bind:to="{ name: 'authorization' }">
        Authorization
    </router-link>
    <router-link v-bind:to="{ name: 'registration' }">
        Registration
    </router-link>
    
  </div>
</template>

<script>
export default {
    name: 'MainContent',
}
</script>

<style>

</style>
