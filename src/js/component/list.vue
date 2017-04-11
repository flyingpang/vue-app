<template>
  <div>
    <div v-for="item in msse">
      <img class="vimg" v-bind:src="item.imgsrc"  alt="" />
      <div>{{item.title}}</div>
    </div>
  </div>
</template>

  <script>
  module.exports = {
    props:['msse'],
  data () {
  return {
    msg: 'Welcome to Your Vue.js App'
  }
},
template: '<div>A custom component!</div>'
}
  </script>
  <style lang="scss">
    .vimg{
      width:50%;
      height:4rem;
    }
  </style>