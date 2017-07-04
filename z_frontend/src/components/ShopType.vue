<template lang="html">

    <div class="">
    <h1>商户类型</h1>
        <mu-raised-button label="列表" class="demo-raised-button" :primary="focus=='list'" @click="click('list')" />
        <mu-raised-button label="添加" class="demo-raised-button" :primary="focus=='add'" @click="click('add')" />

        <div class="" v-if="focus=='list'">
              
              <!--*添加？？？*-->
            <mu-table  enableSelectAll multiSelectable  @rowSelection="rowSelection">
                <mu-thead slot="header">
                    <mu-tr>
                        <mu-th tooltip="ID">ID</mu-th>
                        <mu-th tooltip="名称">名称</mu-th>
                        <mu-th tooltip="状态">操作</mu-th>
                    </mu-tr>
                </mu-thead>
                <mu-tbody>
                    <mu-tr v-for="(list , index) in dataList">
                        <mu-td>{{index+1}}</mu-td>
                        <mu-td>{{list.name}}</mu-td>
                        <mu-td>
                          <mu-raised-button label="删除" class="demo-raised-button" secondary @click="deleteShopType(list._id)" />

                          <mu-raised-button label="编辑" class="demo-raised-button" secondary @click="showEditShopType(list)" />
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
                    <mu-text-field v-model="typename" label="请输入一个要添加的商家类别名称" labelFloat/>
                </p>
                <p>
                    <mu-raised-button label="提交" class="demo-raised-button" secondary @click="addShopType" />
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
            
            </form>
            <mu-flat-button slot="actions" primary @click="editShopType" label="确定"/>
        </mu-dialog>

    </div>
</template>

<script>
export default {
    name: 'ShopType',
    data: function() {
        return {
            focus: 'list',
            typename: '',
            popup: {
                open: false,
                position: 'top',
                overlay: false,
                message: '',
                error: true
            },
            dialog: {
                open: false
            },
            editData:{
                id:'',
                name:'' 
            }
        }
    },
    created() {
        // let xhr = new XMLHttpRequest();
        // xhr.open('get', 'http://localhost:8888/shoptype', true);
        // xhr.onload = () => {
        //     this.$store.commit('update_APP_shopType', JSON.parse(xhr.responseText).data);
        // }
        // xhr.send();
        //this.$http.get('http://localhost:8888/shoptype').then((response) => {
            // console.log(response);
            //this.$store.commit('update_APP_shopType', response.data);
        //});

        this.$store.dispatch('getShopTypes', {
            $http: this.$http
        });

    },
    methods: {

       rowSelection(selectedRpwsIndex){
        this.batchAt=[]

      },

        click(name) {
            this.focus = name;
            this.$store.dispatch('getShopTypes', {
                $http: this.$http
            });
        },

        addShopType(){

            // this.popup.open = true;
            // setTimeout(() => {
            //     this.popup.open = false;
            // }, 2000);

            this.$store.dispatch('addShopType', {
                $http: this.$http,
                data: {
                    name: this.typename
                }
            }).then((value) => {
                this.showPopup(false, '添加成功', 1000);
            }).catch((error) => {
                this.showPopup(true, error.message, 1000);
            });

        },
        deleteShopType(id){
        this.$store.dispatch('deleteShopType', {
            $http: this.$http,
            data:{id}
        }).then((response)=>
        {
          if(response.data.code){
             this.showPopup(true,response.data.message,3000);
          }else{
             this.showPopup(false, '删除成功', 1000);
                 this.$store.dispatch('getShopTypes', {
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
        },

         editShopType(){
            // console.log(1);
             if (this.editData.name == this.editData.origin_name) {
                this.showPopup(true, '未做任何修改', 1000);
                return;
             }
             console.log(this.editData._id,this.editData.name);
            this.$store.dispatch('editShopType',{
                $http:this.$http,
                data:{
                   id: this.editData._id,
                   name: this.editData.name 
                }
             }).then((response)=> {
                  // console.log(response);
                  if(response.data.code){
                    // if (response.data.code == 2) {
                    //     this.editData.name = this.editData.origin_name;
                    // }
                    this.showPopup(true,response.data.message,3000);
                  }else{
                    this.showPopup(false, '修改成', 1000);
                    this.$store.dispatch('getShopTypes', {
                      $http: this.$http
                    }); 
                    this.dialog.open=false;
                  } 
            })
        },
         // 显示编辑的弹窗
        showEditShopType(data) {
            // data.allowSelected = false;
            this.editData = data;
            this.editData.origin_name = data.name; 
            this.dialog.open = true;
        }
        // ,
        // //编辑
        // editShopType(){
        //    // console.log(list.name);
        //  }
    },
    computed: {
        dataList() {
            return this.$store.getters.APP_shopType;
        }
    }
}
</script>

<style lang="css">
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
</style>
