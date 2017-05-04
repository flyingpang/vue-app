<template>
  <div id="app">
  <div class="he">**商城</div>
  <list v-bind:goodsMsg="dataGoods" v-on:shopclick="shopCartGoods"></list>
  <shopcart v-bind:shopData='shopcart' @add="addNum" @sub="subNum" @clear="clearGoods"></shopcart>
  </div>
</template>

<script>
import list from './component/list.vue'
import shopcart from './component/shopcart.vue'
import Vue from 'vue'
export default {
  name: 'app',
  data () {
    return {
      goods:0,
      dataGoods:[
      {id:1,title:'1',imgsrc:'./src/img/timg1.jpg',price:10.00},
      {id:2,title:'2',imgsrc:'./src/img/timg2.jpg',price:20.02},
      {id:3,title:'3',imgsrc:'./src/img/timg3.jpg',price:30.09},
      {id:4,title:'4',imgsrc:'./src/img/timg1.jpg',price:40.40},
      {id:5,title:'1',imgsrc:'./src/img/timg3.jpg',price:50.70},
      {id:6,title:'2',imgsrc:'./src/img/timg2.jpg',price:60.65},
      {id:7,title:'3',imgsrc:'./src/img/timg1.jpg',price:70.43},
      {id:8,title:'4',imgsrc:'./src/img/timg2.jpg',price:80.66},
      ],
      shopcart:[
        {id:11,title:'烟台大樱桃 大樱桃，也称西洋樱桃，南方区域一般称为“车厘子”',price:10.00,number:1},
        {id:12,title:'商品1',price:10.01,number:2},
        {id:13,title:'商品2',price:21.44,number:1},
        {id:14,title:'商品3',price:25.78,number:1},
        {id:15,title:'商品4',price:1.88,number:1},
        {id:16,title:'商品5',price:108.09,number:1},
      ]
    }
  },
  components:{
    list,
    shopcart,
  },
  methods:{
    shopCartGoods:function(id){
        var shopcart=this.shopcart;
        var dataGoods=this.dataGoods;
        var is_shopcart=false;
        var data='';
        var deepCopy= function(source) {
            var result={};
            for (var key in source) {
                result[key] = typeof source[key]==='object'? deepCoyp(source[key]): source[key];
            }
            return result;
        };
        for(let i=0;i<shopcart.length;i++){
            if(shopcart[i].id==id){
                var n=shopcart[i].number;
                this.$set(shopcart[i],'number',++n);
                is_shopcart=true;
                break
            }
        };
        if(!is_shopcart){
            for(let i=0;i<dataGoods.length;i++){
                if(dataGoods[i].id==id){
                    data=deepCopy(dataGoods[i]);
                    data.number=1;
                    break
                }
            };
            shopcart.push(data)
        }
    },
    addNum:function(id,index){
        this.shopcart[index].number++;
    },
    subNum:function(id,index){
      if(this.shopcart[index].number>1){
          this.shopcart[index].number--;
      }else if(this.shopcart[index].number=1){
        if(window.confirm('你确定要删除该商品吗？')){
                 this.shopcart.splice(index,1)
        }else{
        }
      }
    },
    clearGoods:function(){
      if(window.confirm('你确定要清空商品吗？')){
        var len=this.shopcart.length
        this.shopcart.splice(0,len)
          }else{
         }
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
  width:100%;
  height:2rem;
  background:#09c
}
</style>
