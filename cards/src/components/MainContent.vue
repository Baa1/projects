<template>
  <div class="MainContent">
    
    <router-link v-bind:to="{ name: 'authorization' }">
        Authorization
    </router-link>
    <router-link v-bind:to="{ name: 'registration' }">
        Registration
    </router-link>
    
    <CardsList/>
  </div>
</template>

<script>
import CardsList from './CardsList'
export default {
    name: 'MainContent',
    components: {
      CardsList
    }
}
</script>

<style>

</style>
