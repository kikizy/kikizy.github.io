<template>
  <div>

    <!--<div class="top"></div>-->
    <div class="serch"> <mt-search   placeholder="搜索">
    </mt-search></div>

    <div class="list">
      <ul>
        <li v-for="lis in list">
          <img :src="lis.img">
          <span>{{lis.name}}</span>
        </li>
      </ul>
    </div>
     <hr/>
    <div class="lbt">
      <mt-swipe :auto="4000">
        <mt-swipe-item><img src="static/img/5.jpg"></mt-swipe-item>
        <mt-swipe-item><img src="static/img/img1.jpg"></mt-swipe-item>
        <mt-swipe-item><img src="static/img/3.jpg"></mt-swipe-item>
      </mt-swipe>
    </div>
    <hr/>
    <div class="youhui">
       <ul>
         <li style="height: 130px; width: 33%;">
           <p>周四大优惠</p>
           <span>低至5-7折</span>
         </li>
         <li >
           <p>周四大优惠</p>
           <span>低至5-7折</span>
         </li>
         <li>
           <p>周四大优惠</p>
           <span>低至5-7折</span>
         </li>
         <li>
           <p>周四大优惠</p>
           <span>低至5-7折</span>
         </li>
         <li>
           <p>周四大优惠</p>
           <span>低至5-7折</span>
         </li>

       </ul>
    </div>
    <div>
      <ul class="listsli">
        <li>
          <img src="static/img/hd1.png">
          <div>
            <p><h2>乐家</h2></p>
            <p><span>起送 ￥15 | </span><span>配送 ￥5 </span></p>
            <hr/>
            <p style="background: #e3d2d2;">满减活动</p>
          </div>
        </li>
        <li>
          <img src="static/img/4.jpg">
          <div>
            <p><h2>乐家</h2></p>
            <p><span>起送 ￥15 | </span><span>配送 ￥5 </span></p>
            <hr/>
            <p style="background: #e3d2d2;">满减活动</p>
          </div>
        </li>
        <li>
          <img src="static/img/hd1.png">
          <div>
            <p><h2>乐家</h2></p>
            <p><span>起送 ￥15 | </span><span>配送 ￥5 </span></p>
            <hr/>
            <p style="background: #e3d2d2;">满减活动</p>
          </div>
        </li>
      </ul>
    </div>


   <div class="footer">
       <Bases></Bases>
   </div>

  </div>
</template>

<style scoped>
      *{
        padding: 0; 
        margin: 0;
      }
      .list{
        height: 200px;
        width: 100%;
      }
      .list li{
        float: left;
        list-style: none;
        line-height: 85px;
        height: 85px;
        width: 20%;
        margin: 2%;
      }
      .list li img{
        width: 100%;
        height: 55px;
        border-radius: 50%;
      }
     .list span,.youhui span{
        height: 25px;
        width: 100%;
        text-align: center;
        line-height: 25px;
      }
      span,img{
        float: left;
      }
      .serch{
        height: 50px;
        overflow: hidden;
      }
      .lbt{
        background: orangered;
        height: 200px;
        margin-top: 4px;
      }
      .lbt img{
        height: 200px;
        width: 100%;
      }
      .top{
        width: 100%;
        height: 70px;
        background: #0086b3;
      }
      .listsli{
        width: 100%;
      }
    .listsli img{
       width: 150px;
      height: 100px;
      float: left;
    }.listsli li{
         width: 100%;
         padding: 2%;
         overflow: hidden;
         border: 1px solid #0086b3;
     }
      .listsli div{
        float: left;
        margin: 5px;
      }
      .listsli p{
        width: 100%;
        margin-bottom: 5px;
        margin-top: 5px;
      }
      .listsli h2{
        text-align: left;
      }
      .footer{
        bottom: 0;
        position: fixed;
        width: 100%;
      }
      .youhui li {
        float: left;
        list-style: none;
        height:61px;
        width: 30%;
        background: red;
        margin: 1%;
      }
      .youhui li:nth-child(1){
        /*background: #0086b3;*/
       background-image: url("/static/img/hd1.png");
        /*background: url('static/img/hd1.png')*/
      }
</style>

<script>
  //搜索
  import Vue from 'vue';
  import { Search } from 'mint-ui';
  //轮播图
  import { Swipe, SwipeItem } from 'mint-ui';
  Vue.component(Swipe.name, Swipe);
  Vue.component(SwipeItem.name, SwipeItem);
  Vue.component(Search.name, Search);
  import Bases from '@/components/base'
  export default {
    name:'personal',
    data(){
        return {
          list: [
            {name: '美食',img:'static/img/li1.jpg'},
            {name: '甜品饮料',img:'static/img/li2.jpg'},
            {name: '晚餐',img:'static/img/li3.jpg'},
            {name: '果蔬生鲜',img:'static/img/li4.jpg'},
            {name: '新店特惠',img:'static/img/li5.jpg'},
            {name: '汉堡薯条',img:'static/img/li6.jpg'},
            {name: '鲜花蛋糕',img:'static/img/li7.jpg'},
            {name: '异国料理',img:'static/img/li8.png'}
          ]
        }
       },
     components:{
       Bases
     }
  }
</script>
