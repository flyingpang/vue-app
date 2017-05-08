<template>
  <div id="app">
  <div class="he">**商城</div>
  <list v-bind:goodsMsg="dataGoods" v-on:shopclick="shopCartGoods"></list>
  <shopcart v-bind:shopData='shopcart' @add="addNum" @sub="subNum" @clear="clearGoods"></shopcart>
    <transition v-for="ball in balls" :key="ball.id" name="launch-ball" @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
      <div class="shop_ball_wrap" v-show="ball.show">

          <div class="shop_ball"   >

          </div>
      </div>
    </transition>
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
      ],
        balls:[
            {id:1,show:false},
            {id:2,show:false},
            {id:3,show:false},
        ],
        balls_id:0,
    }
  },
  components:{
    list,
    shopcart,
  },
  methods:{
      al(obj){
          console.log('ssss='+obj)
          console.log(obj.event.pageX)
          console.log(obj.event.pageY)

      },
    shopCartGoods(obj){
//          obj={id:id,event:event};
        this.launch (obj.event)
        var id=obj.id;
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
    addNum(id,index){
        this.shopcart[index].number++;
    },
    subNum(id,index){
      if(this.shopcart[index].number>1){
          this.shopcart[index].number--;
      }else if(this.shopcart[index].number=1){
        if(window.confirm('你确定要删除该商品吗？')){
                 this.shopcart.splice(index,1)
        }else{
        }
      }
    },
    clearGoods(){
      if(window.confirm('你确定要清空商品吗？')){
        var len=this.shopcart.length
        this.shopcart.splice(0,len)
          }else{
         }
    },
      launch (event) {
          for (let i = 0; i < this.balls.length; i++) {
              let ball = this.balls[i];
              if (!ball.show) {
                  ball.show = true;
                  ball.target = event.target;
                  return;
              }
          }
      },
      beforeEnter(el){
          let count = this.balls.length;
          while (count--) {
              let ball = this.balls[count];
              if (ball.show) {
                  let rect = ball.target.getBoundingClientRect();
                  let left = rect.left -40;
                  let top =rect.top - 120;
                  ball.time=0.2+(top/1000);
//                  let top = -(window.innerHeight - rect.top - 15);
                  el.style.display = 'block';
                  el.style.webkitTransforrm = `translate3d(0,${top}px,0)`;
                  el.style.transform = `translate3d(0,${top}px,0)`;
                  let inner = document.getElementsByClassName('shop_ball')[0];
                  inner.style.webkitTransform = `translate3d(${left}px,0,0)`;
                  inner.style.transform = `translate3d(${left}px,0,0)`;
              }
          }
      },
      enter (el, done) {
        /* eslint-disable no-unused-vars */
          let rect = el.getBoundingClientRect();
          let _top = window.innerHeight-rect.top;
          let time=0.5+Math.sqrt((_top/100)*2)/10;
          let refresh = el.offsetHeight;
          let button_bar=document.getElementsByClassName('sc-btn-wrap')[0].getBoundingClientRect();
          let top=window.innerHeight-button_bar.height-50;

          this.$nextTick(() => {

//              console.log(_top)
              el.style.display = 'block';
              el.style.webkitTransform = `translate3d(0,${top}px,0)`;
              el.style.transform = `translate3d(0,${top}px,0)`;
              el.style.webkitTransitionDuration = `${time}`;
              el.style.transitionDuration = `${time}`;
              let inner = document.getElementsByClassName('shop_ball')[0];
              inner.style.webkitTransform = 'translate3d(0,0,0)';
              inner.style.transform = 'translate3d(0,0,0)';
              inner.style.webkitTransitionDuration = `${time}`;
              inner.style.transitionDuration = `${time}`;
          });
          done();
      },
      afterEnter (el) {
          let ball = this.balls[0];
          ball.show = false;
          el.style.display = 'none';
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
.shop_ball_wrap{
  position: fixed;
  width: 3.5rem;
  height: 3.5rem;
  top:3rem;
  left:0px;
  float: left;
  z-index: 399;
  transition: all 0.6s cubic-bezier( 0.5,-0.5,0.7, 0.3 ) 0s,
}
  .shop_ball{
    color: #fff;
    font-weight: 700;
    background: blue;
    width: 3.5rem;
    border-radius: 50%;
    height: 3.5rem;
    z-index: 400;
    position: fixed;

    top:3rem;
    left:0px;
    transition: all 0.6s linear 0s,
    /*animation: parabola 2s ease-out forwards;*/
    /*transition:*/
            /*border-color .5s ease-in .1s,*/
  }
@keyframes parabola{
  0%{top:3rem;opacity:0;}
  50%{top:2rem;opacity:1;}
  70%{top:5rem;opacity:1;}
  100%{top:25rem;opacity:0;}
}
</style>
