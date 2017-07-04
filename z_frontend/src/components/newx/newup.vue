<template lang="html">
<div class="">
  <h1>new的组件</h1>
  <mu-dialog :open="setting.open" :title="setting.title"  @close="">

		 
         <p>
                <input type="file"   />
        </p>

    <mu-flat-button slot="actions" primary @click="cancel" label="取消"/>
    <mu-flat-button slot="actions" primary @click.native="" label="确定"/>
  </mu-dialog>

</div>
</template>

<style lang="css">
  .mu-grid-tile-titlebar {
        display: none;
    }
</style>

<script>
export default{
	name:'newup',
    data(){
       return{
            open:this.setting.open,
	         title:this.setting.title
       }
    },
	props:{
      open:{
         type:Boolean,
         default:false
      },
      title:{
        type:String,
        default:'上传(=@__@=)哪'
      }
	},
	 
	computed:{
       setting(){
         return{ 
	         open:this.open,
	         title:this.title
         }
       }
	},
	methods:{
	   cancel(){
	     console.log(this.setting.title);
	     this.setting.title='头像上传没';
	    // this.setting.open=true;
	   }
	}
}
</script>