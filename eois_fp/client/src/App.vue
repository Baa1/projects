<template>
  <div id="app">
      <vue-tree-navigation :items="items" />
      <router-view></router-view>
  </div>
</template>

<script>
export default {
    data() {
        return {
            items: [{ 
                    name: 'Войти',
                    path: 'login' 
                },
                { 
                    name: 'Главная страница', 
                    path: 'main', 
                }
            ],
        }
    }
}
</script>

<style>
  #app {
    display: flex;
    justify-content: flex-start;
  }
</style>