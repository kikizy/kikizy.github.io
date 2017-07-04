<template>
  <div class="login">
    <mt-header fixed >
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <h1>注册</h1>

    <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
    <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password" ></mt-field>
    <mt-field label="重复密码" placeholder="请输入密码" type="password" v-model="repassword" ></mt-field>
    <br/>
    <mt-button type="primary" size="large"  @click='register'>提交</mt-button>
    <p>
      <router-link :to="{name: 'Login'}">有账号，登入~</router-link>
    </p>
    <div class="footer"> <Bases></Bases></div>

  </div>
</template>

<style scoped>
  .login{
    margin-top: 80px;
  }
</style>

<script>

  import Vue from 'vue'
  import { Field,Toast } from 'mint-ui';

  Vue.component(Field.name, Field);
  import Bases from '@/components/base'
  export default {
    name:'Regiser',
    data:function(){
       return{
          username:'',
          password:'',
          repassword:''

       }
    },
    methods:{
      register(){
          this.$store.dispatch("register",{
            $http:this.$http,
            data:{
              username:this.username,
              password:this.password,
              repassword:this.repassword
            }
          }).then((response)=>{
            if(response.data.code){
              let instace=Toast(response.data.message);
              setTimeout(()=>{
                instace.close();
              },1000)
            }else{
              let instace=Toast('注册成功');
              this.$store.commit('updateUserInfo',response.data);
              setTimeout(()=>{
                this.$router.push('Login')
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
