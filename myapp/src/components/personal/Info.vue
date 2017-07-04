<template>
  <div class="top">
    <mt-header fixed title="个人信息">
      <router-link to="/show" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="show">
      <mt-cell title="用户名" to="/revisename" v-model="userInfo.username" value="userInfo.username" ></mt-cell>

      <mt-cell title="性别" value="账号"></mt-cell>
      <mt-cell title="生日" to="/birthday"  value="1992.11" ></mt-cell>

      <!--<mt-field label="生 日" placeholder="请输入生日" type="date" @click="brithod"></mt-field>-->
      <mt-cell title="收货地址" to="/site"></mt-cell>
    </div>
    <!--<mt-datetime-picker-->
      <!--v-model="pickerVisible"-->
      <!--type="date" true-->
      <!--year-format="{value} 年"-->
      <!--month-format="{value} 月"-->
      <!--date-format="{value} 日">-->
    <!--</mt-datetime-picker>-->
      <!--<mt-datetime-picker-->
        <!--ref="picker"-->
        <!--type="time"-->
        <!--v-model="pickerValue">-->
      <!--</mt-datetime-picker>-->
   </div>
</template>

<style scoped>
*,html{
  margin: 0;
  padding: 0;
}
  .show{
    margin-top: 110px;
  }
.show div span{
    float: left !important;
  }
  .mint-cell-title{
    text-align: left !important;
  }
</style>

<script>
  import { Cell } from 'mint-ui';
  Vue.component(Cell.name, Cell);

  import Vue from 'vue'
//  import { DatetimePicker } from 'mint-ui';
//
//  Vue.component(DatetimePicker.name, DatetimePicker);
  export default {
    name:'info',
    methods: {
      openPicker() {
//            this.$refs.picker.open();
       }
  },
   computed:{
     userInfo(){
       return this.$store.getters.userInfo
     }
   },
   methods:{
     brithod(){
       console.log(1)
     }
   }
  }
</script>
