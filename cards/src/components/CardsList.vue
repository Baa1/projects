<template>
  <div class="CardsList">
      <CardsListItem v-for="card in CARDS" v-bind:name="card.name" v-bind:key="card.id"/>
      <CardsListItem edit="true" v-on:cardAdded="refresh"/>
  </div>
</template>

<script>
import CardsListItem from './CardsListItem';
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'CardsList',
  components: {
    CardsListItem
  },
  computed: {
    ...mapGetters([
      'CARDS'
    ])
  },
  methods: {
    ...mapActions([
      'GET_CARDS'
    ]),
    refresh: function() {
      this.GET_CARDS();
    }
  },
  mounted: function() {
    this.GET_CARDS();
  }
}
</script>

<style>

</style>