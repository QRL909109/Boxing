<!-- 首页布局 -->
<template>
  <div>
    头部显示首页
    <router-view/>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        msg: '头条'
      }
    }
  }
</script>