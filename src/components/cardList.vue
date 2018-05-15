<template>
 <div class="cardList">
    <Card v-for="card in cards" :card="card" :key="card.id"/>
 </div>
</template>

<script>
import Card from "./card";
export default {
  name: "cardList",
  components: {
    Card
  },
  data() {
    return {
      cards: null
    };
  },
  mounted() {
    var list = this.$store.getters.getCardsList;
    this.cards = this.random(list);
  },
  methods: {
    random: function(array) {
      var currentIndex = array.length,
        temporaryValue,
        randomIndex;

      // While there remain elements to shuffle...
      while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }
      return array;
    },
  }
};
</script>

<style lang="sass" scope>
@import '../assets/common'
.cardList
    @include Flex(center, center)
    flex-wrap: wrap
</style>
