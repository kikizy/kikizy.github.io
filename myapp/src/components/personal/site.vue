<template>
  <div>
    <mt-header fixed title="收货地址">
      <router-link to="/info" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="mian">
      <mt-field label="联系人" placeholder="姓名" ></mt-field>

    </div>
  </div>
</template>

<style scoped>
  .mian{
    margin-top: 60px;
  }
</style>

<script>


  import Vue from 'vue'
  import { Cell } from 'mint-ui';
  Vue.component(Cell.name, Cell);
  export default {
    name:'site'
  }
</script>
