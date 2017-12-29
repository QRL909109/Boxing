<!-- 基本布局-底部布局 -->
<template>
  <div class="app-wrapper">
    <!-- 展示主体界面 -->
    <router-view/>
    <footer-nav />
  </div>
</template>
<script>
import footerNav from '@/components/FooterNav'
export default {
  data () {
    return {
      msg: '头条'
    }
  },
  components: {
    footerNav
  }
}
</script>