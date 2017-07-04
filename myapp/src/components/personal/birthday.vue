<template>
  <div>
    <mt-header fixed title="生日">
      <router-link to="/info" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="show">
      <input type="button" value="btn" @click="closeOnClickModal"/>
      <mt-actionsheet
        :actions="actions"
        v-model="sheetVisible">
      </mt-actionsheet>
    </div>
  </div>
</template>

<style scoped>
  .show{
  margin-top: 110px;
  }
</style>

<script>
  import Vue from 'vue'
  import { Actionsheet } from 'mint-ui';
  Vue.component(Actionsheet.name, Actionsheet);
  export default {
    name:'brithday',
    data:function(){
       return{
//           actions:[
//             {
//               name:'显示',
//               method:()=>{
//                 {this.sex='男'}
//               }
//             }
//           ]
//         actionsheet:true,
       }
    } //,
//    methods:{
//      closeOnClickModal(){
//          console.log(actions.actionsheet)
//          actions.actionsheet=false
//      }
//    }
  }
</script>
