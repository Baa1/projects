<template>
    <div class="MenuStrip">
        <ul class="MenuStripList">
            <li>Личный кабинет</li>
            <li>Фирма</li>
        </ul>
    </div>
</template>

<script>

export default {
  name: 'MenuStrip',

}
</script>

<style>
    .MenuStripList {
        display: flex;
        justify-content: flex-start;
    }
</style>