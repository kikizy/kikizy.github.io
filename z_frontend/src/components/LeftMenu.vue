<template lang="html">
    <div class="">
        <h2>商家</h2>
        <mu-drawer :open="UI_open">
          <mu-appbar title="大众点评管理平台"/>
          <mu-list>

         <!--    <router-link to="/">
              <mu-list-item title="首页" />
            </router-link> -->

            <router-link to="/">
              <mu-list-item title="商家分类管理" />
            </router-link>


            <router-link to="/shop">
              <mu-list-item title="商家" />
            </router-link>

            <router-link to="/goods">
              <mu-list-item title="食品管理" />
            </router-link>

            <router-link to="/update">
              <mu-list-item title="上传" />
            </router-link>

            <router-link to="/">
              <mu-list-item title="管理" />
            </router-link>
          </mu-list>
        </mu-drawer>
    </div>
</template>

<script>
export default {
    name: "LeftMenu",
    computed: {
        UI_open() {
            return this.$store.getters.UI_open;
        }
    }
}
</script>

<style lang="css">
</style>
