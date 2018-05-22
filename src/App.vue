<template>
  <div id="app">
      <cardList />
  </div>
</template>

<script>
import cardList from "./components/cardList";

export default {
  name: "app",
  components: {
    cardList
  }
};
</script>

<style lang="sass">
body 
  padding: 0
  margin: 0
#app 
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: linear-gradient(to top left, cyan,#f1f132, coral);
</style>
