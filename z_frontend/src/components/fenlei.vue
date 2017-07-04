<template>
<div>
 			<router-link to="">
              <mu-list-item title="手机注册" />
            </router-link>

            <router-link to="./APP">
              <mu-list-item title="管理平台" />
            </router-link> 
 
 
</div>
</template>

<style></style>

<script>

import APP from "./App";
export default{
	name:'fenlei',
	components:{
	   APP
	}
}
</script>