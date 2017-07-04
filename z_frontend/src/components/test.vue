<template>
 <div class="">
<h2>测试页</h2>
        <mu-raised-button label="列表" class="demo-raised-button" :primary="focus=='list'" @click="click('list')"  />
        <mu-raised-button label="添加" class="demo-raised-button"  :primary="focus=='add'" @click="click('add')"  />

        <div class="" v-if="focus=='list'">
			  <mu-table  enableSelectAll multiSelectable>
                <mu-thead slot="header">
                    <mu-tr>
                        <mu-th tooltip="ID">ID</mu-th>
                        <mu-th tooltip="名称">名称</mu-th>
                        <mu-th tooltip="状态">操作</mu-th>
                    </mu-tr>
                </mu-thead> 
                  <mu-tbody>
                    <mu-tr >
                        <mu-td></mu-td>
                        <mu-td></mu-td>
                        <mu-td>
                          <mu-raised-button label="删除" class="demo-raised-button" secondary @click="" />

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
                    <mu-text-field v-model="typename" label="请输入一个要添加的商家类别名称" labelFloat/>
                </p>
                <p>
                    <mu-raised-button label="提交" class="demo-raised-button"   />
                </p>
            </form>
        </div>

</div>
</template>

<style></style>

<script>
export default{
	name:'new1',
	data:function(){
	   return{
	      focus:'list',
	      typename:''
	   }
	},
	methods:{
	   click(name){
	     this.focus=name;
	   }
	}
}
</script>