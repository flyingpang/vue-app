<template>
  <ul>
    <li class="list-li" v-for="(item,index,key) in goodsMsg">
    <div class="list-li-left">
        <img class="list-img-show" v-bind:src="item.imgsrc"  alt="" />
    </div>
    <div class="list-li-right">
       <div class="list-li-title">{{item.title}}桃美人景天科、厚叶草属多肉植物，也称多浆植物，属被子植物</div>
       <div class="list-li-descripytion">日本产的婴儿床垫，硬度较高，保护新生儿的骨骼健康发育成长，尿湿了也十分方便打理。</div>
       <div class="list-li-price-wrap">
          <span class="list-li-price">￥</span>
          <span class="list-li-price-number">{{ item.price | priceFirst }}</span>
          <span class="list-li-price">{{ item.price | priceLast }}</span>
          <span v-on:click="shopclick(item.id)" class="list-li-add-shopcart"></span>
       </div>
    </div>


    </li>
  </ul>
</template>

  <script>
  module.exports = {
        props:['goodsMsg'],
      data:function () {
          return {

          };
      },
    methods:{
      shopclick:function(id){
        this.$emit('shopclick',id)
      }
    },
      filters:{
          priceFirst:function(value){
              var exg=value.toFixed(2).toString().match(/(\d*)\.(\d*)/);
              if(value){
                  return exg[1]+'.';
              }else{
                  return 0;
              }


          },
          priceLast:function(value){
              var exg=value.toFixed(2).toString().match(/(\d*)\.(\d{2})/);
              if(value){
                  return exg[2];
              }else{
                  return '';
              }
          }
      }
}
  </script>
  <style lang="scss">
    $itemBg:#e8e8e8;
    $itemshadow:#e8e8e8;

    .list-li{
      padding:.4rem .26rem .4rem .24rem;
      overflow:hidden;
      border-bottom:1px solid $itemBg;
      box-shadow:0rem 0.1rem 0.2rem $itemshadow;
    }
    .list-li-left{
        //display:-webkit-flex;
        //display:flex;
        align-items:center;
        float: left;
        width: 12.5rem;
    }
     .list-img-show{
      width:100%;
      //-webkit-flex:1;
      //flex:1;
    }
    .list-li-right{
      margin-left:12.5rem;
      padding-left: 0.5rem;
    }
    .list-li-title{
      height: 1.8rem;
      line-height: 1.8rem;
      font-size:1.5rem;
      margin-top: 0.4rem;
      color: #000;
      overflow: hidden;
      text-overflow: clip;
      word-break: no-break;
    }
    .list-li-descripytion{
      font-size:1.1rem;
      line-height:1.6rem;
      height:4.8rem;
      color:#999;
      text-overflow: ellipsis;
      overflow: hidden;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
    }
    .list-li-price-wrap{
      position:relative;
      overflow:hidden;
      color: #FC3A0E;
      padding-top:0.5rem;
      height:4rem;
    }
    .list-li-price{
        font-size:1.2rem;
    }
    .list-li-price-number{
        font-size:1.4rem;
    }
    .list-li-add-shopcart{
      position:absolute;
      width:2rem;
      height:2rem;
      background: url('../img/shopcart.png') center center no-repeat;
      background-size:cover;
      right:0.5rem;
      bottom:0.5rem;
    }
  </style>