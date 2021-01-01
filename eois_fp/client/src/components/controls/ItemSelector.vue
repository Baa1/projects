<template>
    <div class="ItemSelector">
        <select v-model="selectedItem" v-on:change="$emit('selected-item-changed', selectedItem)">
            <option v-bind:key="0"
                    disabled 
                    value="defaultOptionText" 
                    v-if="defaultOptionText" 
                    selected>
                    {{defaultOptionText}}
            </option>
            <option v-for="item in items" 
                    v-bind:key="item.id" 
                    v-bind:value="item">
                    {{item.name}}
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
            selectedItem: null
        }
    }
}
</script>

<style>

</style>