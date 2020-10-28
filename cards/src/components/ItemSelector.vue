<template>
  <div class="ItemSelector">
    <select>
        <option v-for="item in items" v-bind:key="item.id">{{item.name}}</option>
    </select>
  </div>
</template>

<script>

export default {
  name: 'ItemSelector',
  props: ['items']
}
</script>

<style>

</style>