<!-- 默认首页头条 -->
<template>
  <div>
    {{msg}}新闻
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