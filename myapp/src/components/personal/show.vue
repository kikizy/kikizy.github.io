<template>
  <div id="main">

    <div id="header">
    <div class="logo" @click="">
      <img src="../../assets/logo.png"></div>
      <div class="onane">
        <router-link to="/info">
          <p>
            <span class="names" >{{userInfo.username}}</span>
          </p>
        </router-link>

      </div>

    </div>
    <div>
      <mt-cell title="我的订单"  is-link value=""></mt-cell>
      <mt-cell title="我的点评"  is-link value=""></mt-cell>
      <mt-cell title="我的收藏"  is-link value=""></mt-cell>
      <mt-cell title="我的订单"  is-link value=""></mt-cell>
      <mt-cell title="设置"  to="/info" is-link value=""></mt-cell>
      <br/>
      <br/>
      <mt-button type="danger" size="large" @click="logout" >退出</mt-button>
    </div>
    <div class="footer">
      <Bases></Bases>
    </div>
  </div>

</template>

<style>
  #header{
    height: 140px;
    width: 100%;
    background:red;
    margin-bottom: 20px;
    padding-top: 20px;

  }
  .logo{
    width: 100px;
    height: 100px;
    margin-left:20px ;
    padding-top: 10px;;
    border-radius: 50%;
    background: #efebe9;
    overflow: hidden;
    float: left;
  }
  .logo img{
    width: 100px;
    height: 100px;
    margin: 2px;
  }
  .logo p span{
    float: left;
    line-height: 20px;
    height: 20px;
    display: inline-block;}
  .onane{
    float: left;
    margin-left: 50px;
    font-size: 28px;
  }
  .names{
    color: #000011;
  }
  .mint-cell-title{
    text-align: left !important;
  }
</style>

<script>
  import Vue from 'vue'
  import { Cell } from 'mint-ui';
  Vue.component(Cell.name, Cell);

  import { Popup } from 'mint-ui';
  Vue.component(Popup.name, Popup);

  import { Toast } from 'mint-ui';
  import Bases from '@/components/base'
  export default {
    name:'show',
    data:function(){
      return{

      }
    },
    created(){
    //     this.$store.commit('updateUserInfo',response.data);
         console.log(this.userinfo._id)
         if(!this.userInfo._id){
             this.$router.push('/Login')
         }
    },
    computed:{
       userInfo(){
        return this.$store.getters.userInfo
      }
    },
    methods:{
      logout(){
        this.$store.dispatch("logout",{
          $http:this.$http
        }).then((response)=>{
          let instace=Toast('退出成功');
          this.$store.commit('updateUserInfo',{_id:'',username:''});

            this.$router.push('Login')

      });
     }
    },
    components:{
      Bases
    }
  }
</script>
