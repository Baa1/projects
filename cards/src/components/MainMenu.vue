<template>
  <div class="MainMenu">
    <MainMenuItem v-for="item in MENU_ITEMS" v-bind:name="item.name" v-bind:key="item.id"/>
  </div>
</template>

<script>
import MainMenuItem from './MainMenuItem';
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'MainMenu',
  components: {
    MainMenuItem
  },
  data() {
    return {
      menuItems: []
    }
  },
  props: {

  },
  computed: {
    ...mapGetters([
      'MENU_ITEMS'
    ])
  },
  methods: {
    ...mapActions([
      'GET_MENU_ITEMS'
    ])
  },
  mounted: function() {
    this.GET_MENU_ITEMS();
  }
}
</script>

<style scoped>
  .MainMenu {
    border: 1px solid red;
    display: flex;
    flex-direction: column;
    align-content: space-between;
    width: 15%;
  }
</style>
