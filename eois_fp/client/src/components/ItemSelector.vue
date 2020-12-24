<template>
    <div class="ItemSelector">
        <select>
            <option disabled value="" v-if="defaultOptionText">{{defaultOptionText}}</option>
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
    props: ['items', 'defaultOptionText']
}
</script>

<style>

</style>