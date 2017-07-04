<template>
  <div id="app">
      <router-view></router-view>
  </div>
</template>

<script>

import API from '@/components/API'

export default {
  name: 'app',
  components: {
     API
  },
  created(){
   //  console.log(document.cookie);
     let cookie=this.$cookie.get('userinfo');
     if(cookie){
        cookie=JSON.parse(cookie);
        this.$store.commit('updateUserInfo',response.data);
                 

     }
  } 
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
