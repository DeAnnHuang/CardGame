<template>
  <div class="card" @click="handleCardClick(card.id)"
  v-bind:style="{ backgroundImage: 'url('+ img +')' }">
  
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Card",
  props: {
    card: Object
  },
  computed: {
    
    img: function() {
      let img;
      this.card.opened
        ? (img = require(`@/assets/img/${this.card.imgName}.jpg`))
        : (img = require(`@/assets/img/1.jpg`));
      return img;
    }
  },
  methods: {
    ...mapActions({ handleCardClick: "handleCardClick" })
  }
};
</script>

<style lang="sass" scoped>
@import '../assets/common'
.card
    width: 20vw
    height: 20vh
    margin: 1vmin
    border-radius: 10px

    display: inline-block
    cursor: pointer

    background-size: cover;
    background-position: center center;
    transition: all 0.6s

    @include Flex(center,center)
</style>
