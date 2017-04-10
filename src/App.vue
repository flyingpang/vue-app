<template>
  <div id="app">
  <div class="he">翁棋</div>
  <list></list>
  </div>
</template>

<script>
import list from './js/component/list.vue'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
  list,
  },
}
</script>

<style lang="scss">
@import './css/normalize.css';

body{
  margin:0;
  padding:0;
  font-size:10px;
}
.he{
  width:32rem;
  height:2rem;
  background:#09c
}
</style>
