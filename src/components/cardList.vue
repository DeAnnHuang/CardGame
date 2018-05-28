<template>
 <div class="cardList">
   <div class="cardsWrap">
    <Card v-for="card in cards" :card="card" :key="card.id"/>
    </div>
    <p v-if="msg" @click="memoryTime">{{msg}}</p>
 </div>
</template>

<script>
import Card from "./card";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "cardList",
  components: {
    Card
  },
  data() {
    return {
      cards: null,
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
    memoryTime: function() {
      var time = 5;
      this.openAllCards();
      this.updateMsg(time);

      setTimeout(() => {
        this.closeAllCards();
        clearInterval(clock);
        this.updateMsg("Your Turn");
      }, 5000);

      var clock = setInterval(() => {
        this.updateMsg(time--);
      }, 1000);
    },
    ...mapActions(["openAllCards", "closeAllCards","updateMsg"])
  },
  computed: {
    ...mapGetters({ right_set: "getRightSet", msg: "getMsg" })
  },
  watch: {
    right_set: function(value) {
      if (value == 5) {
        this.openAllCards();
        this.updateMsg("mission accomplish!");
      }
    }
  }
};
</script>

<style lang="sass" scope>
@import '../assets/common'
.cardsWrap
  @include Flex(center, center)
  flex-wrap: wrap
  width: 90vw
  margin: 0 auto
p
  font-weight: bold
  font-size: 20px
  color: #222
  border: 5px #222 double
  padding: 10px 20px
  display: inline-block
  cursor: pointer
</style>
