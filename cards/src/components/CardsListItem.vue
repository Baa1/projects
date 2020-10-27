<template>
  <div class="CardsListItem">
    <input v-if="edit" v-model="cardName" type="text" name="cardName" id="cardName">
    <button v-if="edit" v-on:click="addCard">Add</button>
    <a v-else v-bind:href="'https://starcitygames.com/search/?card_name=' + name"><p>{{name.replace("%25c%25", ",")}}</p></a>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name: 'CardsListItem',
    data() {
      return {
        cardName: ""
      };
    },
    props: ['name', 'edit'],
    methods: {
      ...mapActions([
        'ADD_CARD'
      ]),
      addCard: function(event) {
        console.log(event.target);
        event.target.value = "";
        this.ADD_CARD({
          name: this.cardName, 
        });
      }
    }
}
</script>

<style>

</style>