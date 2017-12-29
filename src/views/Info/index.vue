<!-- 消息中心 -->
<template>
  <div>
    {{msg}}
    <router-view/>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        msg: '消息中心'
      }
    }
  }
</script>