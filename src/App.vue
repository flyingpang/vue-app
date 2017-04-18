<template>
  <div id="app">
  <div class="he">**商城</div>
  <list v-bind:goodsMsg="data1" v-on:shopclick="shopCartGoods"></list>
  <shopcart v-bind:shopData='shopcart'></shopcart>
  </div>
</template>

<script>
import list from './component/list.vue'
import shopcart from './component/shopcart.vue'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      goods:0,
      data1:[
      {id:1,title:'1',imgsrc:'./src/img/timg1.jpg',price:10},
      {id:2,title:'2',imgsrc:'./src/img/timg2.jpg',price:20},
      {id:3,title:'3',imgsrc:'./src/img/timg3.jpg',price:30},
      {id:4,title:'4',imgsrc:'./src/img/timg1.jpg',price:40},
      {id:5,title:'1',imgsrc:'./src/img/timg3.jpg',price:50},
      {id:6,title:'2',imgsrc:'./src/img/timg2.jpg',price:60},
      {id:7,title:'3',imgsrc:'./src/img/timg1.jpg',price:70},
      {id:8,title:'4',imgsrc:'./src/img/timg2.jpg',price:80},
      ],
      shopcart:[
        {id:1,title:'烟台大樱桃 大樱桃，也称西洋樱桃，南方区域一般称为“车厘子”',price:10.00,number:1},
        {id:1,title:'商品1',price:10.01,number:2},
        {id:1,title:'商品2',price:21.44,number:1},
        {id:1,title:'商品3',price:25.78,number:1},
        {id:1,title:'商品4',price:1.88,number:1},
        {id:1,title:'商品5',price:108.09,number:1},
      ]
    }
  },
  components:{
    list,
    shopcart,
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
