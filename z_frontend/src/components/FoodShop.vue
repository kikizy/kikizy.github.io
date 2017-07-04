<template lang="html">
  <div class="">
    <mu-raised-button label="列表" class="demo-raised-button" :primary="focus=='list'" @click="click('list')" />
    <mu-raised-button label="添加" class="demo-raised-button" :primary="focus=='add'" @click="click('add')" />

    <div class="" v-if="focus=='list'">

      <mu-table>
        <mu-thead slot="header">
          <mu-tr>
            <mu-th tooltip="ID">ID</mu-th>
            <mu-th tooltip="名称">名称</mu-th>
            <mu-th tooltip="名称">电话</mu-th>
            <mu-th tooltip="状态">操作</mu-th>
          </mu-tr>
        </mu-thead>
        <mu-tbody>
          <mu-tr v-for="(list,index) in shopList">
            <mu-td>{{index+1}}</mu-td>
            <mu-td>{{list.name}}</mu-td>
            <mu-td>{{list.phone}}</mu-td>
             <mu-td>
              <mu-raised-button label="删除" class="demo-raised-button" secondary @click="deletefoodshop(list._id)" />

              <mu-raised-button label="上传" class="demo-raised-button" secondary @click="" />
            </mu-td>
          </mu-tr>

          <mu-raised-button label=" 批量删除" class="demo-raised-button" secondary @click="" />
        </mu-tbody>
      </mu-table>

    </div>
    <div class="" v-if="focus=='add'">
      <form>
        <h4>类别名称</h4>
        <p>
          <mu-text-field v-model="addFrom.name" label="请输入一个要添加的商家类别名称" labelFloat />

        </p>
        <h4>商家类型</h4>
        <p>
          <mu-select-field v-model="addFrom.type" label="要添加的商家类别" labelFloat>

          <mu-menu-item v-for="(list,index) in shopType" :key="index" :value="list._id" :title="list.name" />

          </mu-select-field>
        </p>

        <p>
          <mu-text-field v-model="addFrom.phone" label="请输入电话" labelFloat />
        </p>
        <p>
          <mu-text-field v-model="addFrom.address" label="请输入一个要添加的商家地址" labelFloat />
        </p>
         <p>
          <mu-text-field v-model="addFrom.description" label="简介" labelFloat />
        </p>
        <p>
          <mu-raised-button label="提交" class="demo-raised-button" secondary @click="addfoodShop" />
        </p>
      </form>
    </div>

    <mu-popup :position="popup.position" :overlay="popup.overlay" :popupClass="{'demo-popup-top': true, error: popup.error}" :open="popup.open">
            {{popup.message}}
        </mu-popup>
  </div>
</template>

<style>

.demo-popup-top {
  width: 100%;
  opacity: .8;
  height: 48px;
  line-height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 375px;
}
.error {
    background: red !important;
    color: white !important;
}
  .mu-grid-tile-titlebar {
        display: none;
    }
</style>

<script>


import {HOST} from '@/stores/API/API';
  export default {
    name:'foodshop',
    data: function() {
      return {
        host: HOST,
        focus: 'list',
        addFrom:{
             name:'',
             type:'',
             phone:'',
             address:'',
             description:''
        },
         popup: {
                open: false,
                position: 'top',
                overlay: false,
                message: '',
                error: true
            }
      }
    },
    created(){
        this.$store.dispatch('getShop',{
          $http:this.$http
        });
         this.$store.dispatch('getShopTypes',{
           $http:this.$http
        })
    },
  methods:{
    click(name){
      this.focus=name;
        this.$store.dispatch('getShop',{
           $http:this.$http
        })
    },
    addfoodShop(){
      //console.log(this.addFrom);
      this.$store.dispatch('addfood',{
         $http:this.$http,
         data: this.addFrom
      }).then((value) => {
        this.showPopup(false, '添加成功', 1000);
      }).catch((error) => {
        this.showPopup(true, error.message, 1000);
      });

    },
    deletefoodshop(id){
       this.$store.dispatch('deletefoodshop',{
         $http:this.$http,
         data:{id}
       }).then((response)=>
        {
          if(response.data.code){
             this.showPopup(true,response.data.message,3000);
          }else{
             this.showPopup(false, '删除成功', 1000);
                 this.$store.dispatch('getShop', {
                 $http: this.$http
             });
          }

        })

    },
    showPopup(type, message, time) {
        this.popup.error = type;
        this.popup.message = message;
        this.popup.open = true;
        setTimeout(() => {
            this.popup.open = false;
        }, time)
    }
  },
  computed: {
      shopList() {
        return this.$store.getters.APP_shop;
      }
       ,
      shopType(){
        return this.$store.getters.APP_shopType;
    }
  }

  }
</script>
