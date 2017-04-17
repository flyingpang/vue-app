<template>
  <div id="app">
  <div class="he">翁棋商城</div>
  <list v-bind:goodsMsg="data1" v-on:shopclick="shopCartGoods"></list>
  <div>结算、查看</div>
  </div>
</template>

<script>
import list from './component/list.vue'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      goods:0,
      data1:[
      {title:'1',imgsrc:'./src/img/timg.jpg'},
      {title:'2',imgsrc:'./src/img/timg.jpg'},
      {title:'3',imgsrc:'./src/img/timg.jpg'},
      {title:'4',imgsrc:'./src/img/timg.jpg'},
      {title:'1',imgsrc:'./src/img/timg.jpg'},
      {title:'2',imgsrc:'./src/img/timg.jpg'},
      {title:'3',imgsrc:'./src/img/timg.jpg'},
      {title:'4',imgsrc:'./src/img/timg.jpg'},
      ]
    }
  },
  components:{
  list,
  },
  methods:{
    shopCartGoods:function(){
      this.goods+=1;
      alert('加入购物车商品总数'+this.goods)
    }
  }
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
