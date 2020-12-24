<template>
  <div class="ItemSelector">
    <select v-model="selectedItem">
        <option disabled value="">{{defaultOptionText}}</option>
        <option v-for="item in items" 
                v-bind:key="item.id" 
                v-bind:value="item">{{item.name}}
        </option>
    </select>
  </div>
</template>

<script>

export default {
  name: 'ItemSelector',
  props: ['items', 'defaultOptionText'], 
  data() {
    return {
      selectedItem: {}
    };
  }
}
</script>

<style>

</style>