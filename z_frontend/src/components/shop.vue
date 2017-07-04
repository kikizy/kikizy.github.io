<template>
  <div>
    <h1>商户</h1>
    <mu-raised-button label="列表" class="demo-raised-button" :primary="focus=='list'" @click="click('list')" />
    <mu-raised-button label="添加" class="demo-raised-button" :primary="focus=='add'" @click="click('add')" />

    <div class="" v-if="focus=='list'">

      <!--*添加？？？*-->
      <mu-table  enableSelectAll multiSelectable >
        <mu-thead slot="header">
          <mu-tr>
            <mu-th tooltip="ID">ID</mu-th>
            <mu-th tooltip="名称">封面</mu-th>
            <mu-th tooltip="名称">名称</mu-th>
            <mu-th tooltip="名称">商户类型</mu-th>
            <mu-th tooltip="状态">操作</mu-th>
          </mu-tr>
        </mu-thead>
        <mu-tbody>
          <mu-tr v-for="(list , index) in shop">
            <mu-td>{{index+1}}</mu-td>
            <mu-td></mu-td>
            <mu-td>{{list.name}}</mu-td>
            <mu-td>{{list.type.name}}</mu-td>
            <mu-td>
              <mu-raised-button label="删除" class="demo-raised-button" secondary @click="deleteShop(list._id)" />

              <mu-raised-button label="编辑" class="demo-raised-button" secondary @click="showEditShop(list)" />
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
          <mu-text-field v-model="AddFromshop.name"   label="请输入一个要添加的商家类别名称" labelFloat/>
        </p>
        <p>
          <mu-select-field v-model="AddFromshop.type"  label="要添加的商家名称" labelFloat>

            <mu-menu-item v-for="(list,index) in shopType" :key="index" :value="list._id" :title="list.name" />

          </mu-select-field>
        </p>
        <p>
          <mu-text-field  v-model="AddFromshop.phone" label="请输入电话" labelFloat />
        </p>
        <p>
          <mu-text-field  v-model="AddFromshop.address"   label="请输入一个要添加的商家地址" labelFloat />
        </p>
        <p>
          <mu-text-field v-model="AddFromshop.description"  label="简介" labelFloat />
        </p>
        <p>
          <mu-raised-button label="提交" @click="addshop" class="demo-raised-button" secondary  />
        </p>
      </form>
    </div>

    <mu-popup :position="popup.position" :overlay="popup.overlay" :popupClass="{'demo-popup-top': true, error: popup.error}" :open="popup.open">
      {{popup.message}}
    </mu-popup>


     <mu-dialog :open="dialog.open" :title="'修改 《'+editData.origin_name+'》'" @close="dialog.open=false">
            <form>
                <h4>类别名称</h4>
                <p>
                    <mu-text-field  v-model="editData.name"  label="请输入一个要添加的商家类别名称" labelFloat/>
                </p>
                <p>
                <!-- {{editData.shops&&editData.shop.name}} -->
                    <mu-text-field  v-model="editData.type.name"  label="请输入一个要添加的商家类别名称" labelFloat/>
                </p>
                 <!-- <p> 
                    <mu-text-field  v-model="editData.price"  label="请输入一个要添加的商家类别名称" labelFloat/>
                </p> -->
            </form>
            <mu-flat-button slot="actions" primary @click="editShop" label="确定"/>
        </mu-dialog>

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
    name:'shop',
    data: function() {
      return {
        host: HOST,
        focus: 'list',
        typename: '',
        popup: {
          open: false,
          position: 'top',
          overlay: false,
          message: '',
          error: true
        },
        AddFromshop:{
          name:'',
          type:'',
          phone:'',
          address:'',
          description:''
        } ,
        dialog: {
            open: false
        },
        editData:{
            id:'',
            name:'',
            type:'' 
            // price:''
        }
      }
    },
    created(){
      this.$store.dispatch('getShopTypes',{
        $http:this.$http
      }),
      this.$store.dispatch('getShop',{
        $http:this.$http
      })
    },
    computed:{
       shopType(){
         return this.$store.getters.APP_shopType
       },
       shop(){
        return this.$store.getters.APP_shop
       }
    },
    methods:{
      click(name) {
        this.focus = name;
        this.$store.dispatch('getShop', {
          $http: this.$http
        });
      },
      addshop(){
        this.$store.dispatch('addshop',{
           $http:this.$http,
           data:this.AddFromshop
        }).then((response)=> {

          this.showPopup(false, '添加成功', 1000);
        }).catch((error) => {
          this.showPopup(true, error.message, 1000);
        });
      },
      showPopup(type, message, time) {
          this.popup.error = type;
          this.popup.message = message;
          this.popup.open = true;
          setTimeout(() => {
            this.popup.open = false;
          }, time)  
      }, 
      deleteShop(id){
        this.$store.dispatch('deleteShop',{
          $http:this.$http,
          data:{id}
        }).then((response)=> {
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

        editShop(){
             if (this.editData.name == this.editData.origin_name) {
                this.showPopup(true, '未做任何修改', 1000);
                return;
             }
             // console.log(this.editData._id,this.editData.name);
            this.$store.dispatch('editShop',{
                $http:this.$http,
                data:{
                   id: this.editData._id,
                   name: this.editData.name, 
                   type:this.editData.type._id
                   // price:this.editData.price
                }
             }).then((response)=> {
                  // console.log(data);
                  if(response.data.code){
                    // if (response.data.code == 2) {
                    //     this.editData.name = this.editData.origin_name;
                    // }
                    this.showPopup(true,response.data.message,3000);
                  }else{
                    this.showPopup(false, '修改成', 1000);
                    this.$store.dispatch('getShop', {
                      $http: this.$http
                    }); 
                    this.dialog.open=false;
                  } 
            }) 
        },

       // 显示编辑的弹窗
        showEditShop(data) {
            // data.allowSelected = false;
            this.editData = data;
            this.editData.origin_name = data.name;
            this.editData.type=data.type;
            // this.editData.price=data.price;
            this.dialog.open = true;
        }


    }
  }
</script>
