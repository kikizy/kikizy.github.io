<template>
  <div>
    <div class="header"></div>
    <div class="left">
      <ul>
        <li>套餐1</li>
        <li>套餐1</li>
        <li>套餐1</li>
      </ul>
    </div>
    <div class="right"></div>
  </div>

</template>

<style scoped>
  *{
    margin: 0;
    padding: 0;
  }
  .left li{
    width: 100%;
    height: 50px;
    background: #0086b3;
    list-style: none;
    border: 1px solid #0000ed;
  }
  .left ul{
    float: left;
    width: 30%;
  }
  .right{
    width: 70%;
    height: 500px;
    background: #e57373;
    float: left;
  }
</style>
<script>
  export default {
    name:'xq'
  }
</script>
