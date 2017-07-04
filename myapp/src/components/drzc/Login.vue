<template>
    <div class="register">
      <mt-header fixed >
        <router-link to="/" slot="left">
          <mt-button icon="back">返回</mt-button>
        </router-link>
      </mt-header>
      <h1>登入</h1>

      <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
      <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password" ></mt-field>
      <br/>
      <mt-button type="primary" size="large"  @click='loginUser'>登入</mt-button>
      <p>
        <router-link :to="{name: 'Register'}">有账号吗？没有就注册一个吧~</router-link>
      </p>
      <div class="footer"> <Bases></Bases></div>
    <Bases></Bases>
  </div>
</template>

<style scoped>
  .register{
    margin-top: 80px;
  }
</style>

<script>

  import Vue from 'vue'
  import { Field,Toast } from 'mint-ui';
  import Bases from '@/components/base'
  export default {
    name:'Login',
    data:function(){
      return {
         username:'',
         password:''
      }
    },
    //事件
    methods:{
      loginUser(){
      //   console.log(document.cookie) 
 

          this.$store.dispatch("loginUser",{
              $http:this.$http,
              data:{
                 username:this.username,
                 password:this.password
              }
          }).then((response)=>{
                 console.log(response)
                if(response.data.code){
                    let instace=Toast(response.data.message);
                    setTimeout(()=>{
                        instace.close();
                  },1000)
                }else{
                  let instace=Toast('登入成功');
                  this.$store.commit('updateUserInfo',response.data);
                  setTimeout(()=>{
                     this.$router.push('/show')
                  },1000)
                }
            })
      }
    },
    components:{
       Bases
    }
  }
</script>
