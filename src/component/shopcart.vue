<template>
<div class="sc-wrap" v-bind:class="{'sc-wrap-active':listShow}" @click="listShow=false">
    <div class="sc-list" v-bind:class="{'sc-list-active':listShow}">
        <div class="sc-list-headr" >
            <div class="sc-list-headr-title">已选商品</div>
            <div class="sc-list-headr-clear">
            <span class="sc-list-headr-clear-icon">
                <svg class="icon icon-bin"><use xlink:href="#icon-bin"></use></svg>
            </span>
                <span class="sc-list-headr-clear-text" @click.stop="clear">清空</span>
            </div>

        </div>
         <ul class="sc-list-ul">
             <li class="sc-list-li" v-for="(item,index) in shopData">
                <div class="fl sc-list-li-title">{{item.title}}</div>
                <div class="fl sc-list-li-price">￥{{item.price}}</div>
                <div class="fl sc-list-li-number">
                    <span class="sc-list-li-number-span number-reduce" @click.stop="sub(item.id,index)">-</span>
                    <span class="sc-list-li-number-span number-value">{{item.number}}</span>
                    <span class="sc-list-li-number-span number-add" @click.stop="add(item.id,index)">+</span>
                </div>
             </li>
        </ul>

    </div>


    <div style="display:none">
        <symbol id="icon-bin" viewBox="0 0 32 32">
<title>bin</title>
<path d="M4 10v20c0 1.1 0.9 2 2 2h18c1.1 0 2-0.9 2-2v-20h-22zM10 28h-2v-14h2v14zM14 28h-2v-14h2v14zM18 28h-2v-14h2v14zM22 28h-2v-14h2v14z"></path>
<path d="M26.5 4h-6.5v-2.5c0-0.825-0.675-1.5-1.5-1.5h-7c-0.825 0-1.5 0.675-1.5 1.5v2.5h-6.5c-0.825 0-1.5 0.675-1.5 1.5v2.5h26v-2.5c0-0.825-0.675-1.5-1.5-1.5zM18 4h-6v-1.975h6v1.975z"></path>
</symbol>
<symbol id="icon-cart" viewBox="0 0 32 32">
<title>cart</title>
<path d="M12 29c0 1.657-1.343 3-3 3s-3-1.343-3-3c0-1.657 1.343-3 3-3s3 1.343 3 3z"></path>
<path d="M32 29c0 1.657-1.343 3-3 3s-3-1.343-3-3c0-1.657 1.343-3 3-3s3 1.343 3 3z"></path>
<path d="M32 16v-12h-24c0-1.105-0.895-2-2-2h-6v2h4l1.502 12.877c-0.915 0.733-1.502 1.859-1.502 3.123 0 2.209 1.791 4 4 4h24v-2h-24c-1.105 0-2-0.895-2-2 0-0.007 0-0.014 0-0.020l26-3.98z"></path>
</symbol>
    </div>
    <div class="sc-btn-wrap" @click.stop="listShow=!listShow">
        <svg class="icon icon-cart"><use xlink:href="#icon-cart"></use></svg>立即支付
    </div>

</div>

</template>

<script>
module.exports={
    props:['shopData'],
    data:function(){
        return {
            list:[1,2,3,5,6,8,9,0],
            listShow:false,
        }
    },
    methods:{
        add:function(i,index){
            this.$emit('add',i,index)
        },
        sub:function(i,index){
            this.$emit('sub',i,index)
        },
        clear:function(){
            this.$emit('clear')
        }
    },
      watch: {
        listShowHeight:function(){

        }

      }

}
</script>
<style lang='scss'>
    $iconColor:#F56353;
    $border1:1px solid #ddd;
    $boxshow1:0.1rem 0.1rem 0.1rem #ddd;
    $bgwrap:rgba(0,0,0,0.5);
    $sc-btn-wrap-height:3rem;
    $clearTextColor:#666;
    $sclistbg:#f7f7f7;
    $priceColor:#FC3A0E;
    .icon {
      display: inline-block;
      width: 1em;
      height: 1em;
      stroke-width: 0;
      stroke: currentColor;
      fill: currentColor;
    }
    .fl{
        float:left;
    }
    .sc-wrap{
            background:rgba(0,0,0,0);
            position: fixed;
            height: 3rem;
            bottom: 0;
            left: 0;
            width: 100%;
            z-index: 998;
            transition: background-color  0.1s ease-out ;
            transition: height  0 ease-out 0.2s;
    }
    .sc-wrap-active{
        height:100%;
        background-color:$bgwrap;
    }
    .sc-list{
        position: absolute;
        bottom: 2rem;
        left: 0;
        width:100%;
        background:#fff;
        height:0;
        transition: height  0.3s ease-out ;

    }
    .sc-list-active{
            height:70%;
    }
    .sc-btn-wrap{
        height:$sc-btn-wrap-height;
         position: absolute;
        bottom: 0;
        left: 0;
        width:100%;
        border-top:  $border1;
        background:#fff;
    }
    .icon-bin{
        color:$clearTextColor;
        font-size: 1.8rem;
    }
    .icon-cart{
        font-size:2rem;
        color:$clearTextColor;
    }
    .sc-list-headr{
        background:$sclistbg;
            color: #999;
            font-size:1.6rem;
            height:3.6rem;

    }
    .sc-list-headr-title{
        position:relative;
        float:left;
        padding-left:1.5rem;
        line-height:3.6rem;

    }
    .sc-list-headr-title::before{
        content:'';
        position:absolute;
        left:0.3rem;
        top:0.8rem;
        height:1.8rem;
        width:0.4rem;
        background: $iconColor;
    }
    .sc-list-headr-clear{
        float:right;
        padding-right:1.5rem;
        font-size:1.6rem;
        line-height:3.6rem;
    }
    .sc-list-headr-clear-icon{
        display:inline-block;
        padding-top: 0.22rem;
    }
    .sc-list-headr-clear-text{
        padding-top:0;
        vertical-align: top;
        color:$clearTextColor;
    }
     .sc-list-ul{
        height:100%;
        width:100%;
        padding-bottom: 4rem;
        overflow: scroll;

     }
    .sc-list-li{
        border-bottom:  $border1;
        box-shadow: $boxshow1;
        height:6.3rem;
    }
    .sc-list-li-title{
        box-sizing:border-box;
        width:56%;
        font-size: 1.4rem;
        line-height:6.3rem;
        padding-left:0.5rem;
        overflow: hidden;
        text-overflow: ellipsis;
        text-wrap: nowrap;
        white-space: nowrap;
        color:#333;
    }
    .sc-list-li-price{
        width:18%;
        height:6.3rem;
        line-height:6.3rem;
        color:$priceColor;
        font-size:1.2rem;
        text-align: right;
        /* background:red; */
    }
    .sc-list-li-number{
        width:26%;
        height:6.3rem;
        /* background:#09c; */
    }
    .sc-list-li-number-span{
        display:inline-block;
        margin-top:2.15rem;
        float:left;
        text-align: center;
        line-height:1.7rem;
        width:2rem;
        height:2rem;
        font-size:1.6rem;
        border:0.1rem solid $priceColor;
        border-radius: 0.2rem;

    }
    .number-reduce{
        color:$priceColor;
        margin-left: 0.4rem;
    }
    .number-add{
        background:$priceColor;
        color:#fff;
    }
    .number-value{
        border:none;
        line-height:2rem;
        padding:0 0.2rem;
    }
</style>