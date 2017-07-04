<template>
    <div class="">
    <h1>食物</h1>
        <mu-raised-button label="列表" class="demo-raised-button" :primary="focus=='list'" @click="click('list')" />
        <mu-raised-button label="添加" class="demo-raised-button"  :primary="focus=='add'"  @click="click('add')" />

        <div class="" v-if="focus=='list'"> 
            <mu-table  enableSelectAll multiSelectable  @rowSelection="">
                <mu-thead slot="header">
                    <mu-tr>
                        <mu-th tooltip="ID">ID</mu-th>
                        <mu-th tooltip="名称">名称</mu-th>
                        <mu-th tooltip="状态">属于</mu-th>
                        <mu-th tooltip="状态">操作</mu-th>
                    </mu-tr>
                </mu-thead>
                <mu-tbody>
                    <mu-tr v-for='(food,index) in foods' >
                        <mu-td>{{index+1}}</mu-td>
                        <mu-td>{{food.name}}</mu-td>
                        <mu-td>{{food.shop.name}}</mu-td>
                        <mu-td>
                          <mu-raised-button label="删除" class="demo-raised-button" secondary @click="deleteeatfood(food._id)" />

                          <mu-raised-button label="编辑" class="demo-raised-button" secondary @click="" />
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
                    <mu-text-field v-model="addfoodfrom.name" label="请输入一个要添加的商家类别名称" labelFloat/>
                </p>
                 <h4>商家类型</h4>
                <p>
                  <mu-select-field v-model="addfoodfrom.shop" label="要添加的商家类别" labelFloat>
                 
                  <mu-menu-item v-for="(list,index) in shop" :key="index" :value="list._id" :title="list.name" />

                  </mu-select-field>
                </p>
                <p>
                    <mu-raised-button label="提交" class="demo-raised-button" @click="addeatfood"  />
                </p>
            </form>
        </div>
       <mu-popup :position="popup.position" :overlay="popup.overlay" :popupClass="{'demo-popup-top': true, error: popup.error}" :open="popup.open">
                  {{popup.message}}
              </mu-popup>
        </div>
</template>

<script>

import {HOST} from '@/stores/API/API';
export default {
  name: 'Shop',
  data:function(){
     return{  
       host: HOST,       
       focus:'list', 
       addfoodfrom:{          
          name:'',
          shop:''
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
  methods:{
     click(name){
        this.focus=name;
        this.$store.dispatch('getfood',{
           $http:this.$http
        })
     },
     addeatfood(){
        //console.log(this.addfoodfrom.shop,10);

        this.$store.dispatch('addeatfood',{
          $http:this.$http,
          data:this.addfoodfrom
    /*      name:this.addfoodfrom.name,
          shop:this.addfoodfrom.shop  */
        }).then((value)=>{
            this.showPopup(true,'添加成功',2000)
        }).catch((error)=>{
            this.showPopup(false,error.message,2000)
        });
     },
     deleteeatfood(id){
         this.$store.dispatch('deleteeatfood',{
            $http:this.$http,
            data:{id}
         }).then((response)=>{
         if(response.data.code){
            this.showPopup(true,response.data.message,2000)
         }else{ 
            this.showPopup(false,'删除成功',2000),
            this.$store.dispatch('getfood',{
              $http:this.$http
            })
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
  //打开触发的事件
  created(){
     this.$store.dispatch('getfood',{
        $http:this.$http  
     }),
     this.$store.dispatch('getShop',{
        $http:this.$http  
     })
  },
   computed: {
      foods(){
         return this.$store.getters.APP_food;
      },

      shop(){
         return this.$store.getters.APP_shop;
      }
    }

}
</script>


