<template>
<div>
<!--<h1 @click="showUploader" primary>上传</h1>
-->
<mu-raised-button label="上传" class="demo-raised-button" @click="showUploader" primary/>
<Newup :open="open" :title="'上传头像'" ></Newup>
 
</div>
</template>

<style></style>

<script>
 
import Test from './test';

import Newup from '@/components/newx/newup';
export default{
	name:'update',
    data() {
        return { 
            	open: false 
        }
    },
	methods:{
       showUploader(){ 
	          this.open = true;
	       }
	},
	components:{
	    Newup,
	    Test
	}
}
</script>