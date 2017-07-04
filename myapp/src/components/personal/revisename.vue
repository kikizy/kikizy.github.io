<template>
  <div class="top">
    <mt-header fixed title="用户名">
      <router-link to="/info" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="main">
      <mt-field placeholder="请输入用户名" v-model="userInfo.username"></mt-field>
      <br/>
      <mt-button type="danger" size="large" @click="btn">确认修改</mt-button>

    </div>
  </div>
</template>

<style>
  .main{
    margin: 60px auto
  ;
    width: 80%;

  }
</style>

<script>
  import { Cell } from 'mint-ui';
  Vue.component(Cell.name, Cell);

  import Vue from 'vue'
  export default {
    name:'revisename',
    data:function(){
       return{
         name:''
       }
    },
    computed:{
      userInfo(){
        return this.$store.getters.userInfo
       }
    },
    methods:{
       btn(){
         this.$store.dispatch('loginUser',{
            $http:this.$http,
         }).then((response)=>{
            this.$router.push('/info')
        })
       }

  }
  }
</script>
