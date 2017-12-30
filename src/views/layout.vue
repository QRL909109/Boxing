<!-- 基本布局-底部布局 -->
<template>
  <view-box ref="viewBox">
    <!-- 展示主体界面 -->
    <router-view/>
    <footer-nav />
  </view-box>
</template>
<script>
import footerNav from '@/components/FooterNav'
import { ViewBox } from 'vux'
export default {
  data () {
    return {
      msg: '头条'
    }
  },
  components: {
    footerNav,
    ViewBox
  }
}
</script>