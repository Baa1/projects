<template>
  <div class="CardsListItem">
    <input v-if="edit" v-model="cardName" type="text" name="cardName" id="cardName">
    <button v-if="edit" v-on:click="addCard">Add</button>
    <p>{{name}}</p>
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
      addCard: function() {
        this.ADD_CARD({
          name: this.cardName, 
        })
        .then(() => {
          this.$emit('cardAdded');
          this.cardName = "";
        });
      }
    }
}
</script>

<style>

</style>