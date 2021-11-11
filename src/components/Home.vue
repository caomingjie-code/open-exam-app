<template>
  <div class="hello">
    <router-view></router-view>
    <BottomNavigation></BottomNavigation>
  </div>
</template>

<script>
import BottomNavigation from './BottomNavigation'
export default {
  name: 'Home',
  components: {BottomNavigation},
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
