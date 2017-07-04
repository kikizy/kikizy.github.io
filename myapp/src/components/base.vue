<template>
  <div>
    <mt-tabbar >
      <mt-tab-item id="/index" @click.native="roterLink('/index')">
        <img slot="icon" src="../assets/logo.png">
        首页
      </mt-tab-item>
      <mt-tab-item id="发现">
        <img slot="icon" src="../assets/logo.png">
        发现
      </mt-tab-item>
      <mt-tab-item id="" @click.native="roterLink('/show')">
        <img slot="icon" src="../assets/logo.png">
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<style></style>

<script>
  import Vue from 'vue'
  import { Field,Toast } from 'mint-ui';

  Vue.component(Field.name, Field);
  export default {
    name:'base',
    methods:{
      roterLink(path){
         this.$router.push(path);
      }
    }
  }
</script>
