<template>
  <div>
    <h1>商品</h1>
    <mu-raised-button label="列表" class="demo-raised-button" :primary="focus=='list'" @click="click('list')" />
    <mu-raised-button label="添加" class="demo-raised-button" :primary="focus=='add'" @click="click('add')" />

    <div class="" v-if="focus=='list'"> 
      <!--*添加？？？*-->
       <mu-table  enableSelectAll multiSelectable >
        <mu-thead slot="header">
          <mu-tr>
            <mu-th tooltip="ID">ID</mu-th>
            <mu-th tooltip="名称">名称</mu-th>
            <mu-th tooltip="price">价格</mu-th>
            <mu-th tooltip="商户类型">商户类型</mu-th>
            <mu-th tooltip="状态">操作</mu-th>
          </mu-tr>
        </mu-thead>
        <mu-tbody>
          <mu-tr v-for="(food,index) in foods">
            <mu-td>{{index+1}}</mu-td>
            <mu-td>{{food.name}}</mu-td>
            <mu-td>{{food.price}}</mu-td>
            <mu-td>{{food.shop&&food.shop.name}}</mu-td>
            <mu-td>
               <mu-raised-button label="删除" class="demo-raised-button" secondary @click="deleteeatfood(food._id)" />
              <mu-raised-button label="编辑" class="demo-raised-button" secondary @click="showEditShopType(food)" />
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
          <mu-text-field v-model="Addshop.name"   label="请输入一个要添加的商家类别名称" labelFloat/>
        </p>
         <p>
          <mu-text-field v-model="Addshop.price"   label="请输入一个价格" labelFloat/>
        </p>
        <p>
          <mu-select-field v-model="Addshop.shop"  label="要添加的商家名称" labelFloat>
             <mu-menu-item v-for="(list,index) in shops" :key="index" :value="list._id" :title="list.name" />
          </mu-select-field>
        </p>      
        <p>
          <mu-raised-button label="提交" @click="addeatfood" class="demo-raised-button" secondary  />
        </p>
      </form>
    </div>

    <!-- 提交弹出窗 -->
    <mu-popup :position="popup.position" :overlay="popup.overlay" :popupClass="{'demo-popup-top': true, error: popup.error}" :open="popup.open">
      {{popup.message}}
    </mu-popup>

     <!-- 修改弹出窗 -->
    <mu-dialog :open="dialog.open" :title="'修改 《'+editData.origin_name+'》'" @close="dialog.open=false">
          <form>
              <h4>类别名称</h4>
              <p>
                  <mu-text-field  v-model="editData.name"  label="请输入一个要添加的商家类别名称" labelFloat/>
              </p>
               <p>
                  <mu-text-field  v-model="editData.price"  label="请输入一个要添加的商品价格" labelFloat/>
              </p>
              <p> 
                  <mu-text-field  v-model="editData.shop.name"  label="请输入一个要添加的商家类别名称" labelFloat/>
              </p> 
          </form>
          <mu-flat-button slot="actions" primary @click="editGoods" label="确定"/>
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
      name:'goods', 
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
            Addshop:{
              name:'',
              shop:'',
              price:'',
              gallery:'' 
            },
            dialog: {
                open: false
            },
            editData:{
                id:'',
                name:'',
                price:'',
                shop:''  
            }
        }
      },
      created(){
        this.$store.dispatch('getFood',{
          $http:this.$http
        }),
        this.$store.dispatch('getShop',{
          $http:this.$http
        })
      },
      computed:{
      	shops(){
         		 return this.$store.getters.APP_shop;
      	},
      	foods(){
         		 return this.$store.getters.APP_food;
      	}
      },
      methods:{
      	click(name){
      		this.focus=name;
      		this.$store.dispatch('getFood',{
      			$http:this.$http
      		})
      	},
        //添加
    		addeatfood(){  
    			this.$store.dispatch('addeatfood',{
    				$http:this.$http,
    				data: this.Addshop
    			}).then((value) => {
    				this.showPopup(false, '添加成功', 1000);
    			}).catch((error) => {
    				this.showPopup(true, error.message, 1000);
    			});  
  	    },
        //删除
  	    deleteeatfood(id){
    			this.$store.dispatch('deleteeatfood',{
    				$http:this.$http,
    				data:{id}
    	       }).then((response)=> {
    				if(response.data.code){
    					this.showPopup(true,response.data.message,3000);
    				}else{
    					this.showPopup(false, '删除成功', 1000);
    					this.$store.dispatch('getFood', {
    						$http: this.$http
    					});	
    				} 
  	        })
  	    },
        //修改
        editGoods(){
            if (this.editData.name == this.editData.origin_name) {
                this.showPopup(true, '未做任何修改', 1000);
                return;
            }
            console.log(this.editData._id,this.editData.shop._id);
            this.$store.dispatch('editGoods',{
                $http:this.$http,
                data:{
                   id: this.editData._id,
                   name: this.editData.name,
                   price:this.editData.price, 
                   shop:this.editData.shop._id 
                   //附属的id,字符串形式，不能为数组
                }
             }).then((response)=> { 
                  if(response.data.code){
                    // if (response.data.code == 2) {
                    //     this.editData.name = this.editData.origin_name;
                    // }
                    this.showPopup(true,response.data.message,3000);
                  }else{
                    this.showPopup(false, '修改成', 1000);
                    this.$store.dispatch('getFood', {
                      $http: this.$http
                    }); 
                    this.dialog.open=false;
                  } 
            })
        },
        //批量删除
        
        //添加成功弹出框
  	    showPopup(type, message, time) {
  	        this.popup.error = type;
  	        this.popup.message = message;
  	        this.popup.open = true;
  	        setTimeout(() => {
  	            this.popup.open = false;
  	        }, time)	
  	    } ,
         // 显示编辑的弹窗
        showEditShopType(data) {
            // data.allowSelected = false;
            this.editData = data;
            this.editData.origin_name = data.name;
            this.editData.shop=data.shop;
            this.editData.price=data.price;
            this.editData.price=data.price;
            this.dialog.open = true;
        }
   
      }
  }
</script>
