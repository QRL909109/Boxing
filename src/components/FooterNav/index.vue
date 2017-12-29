<!-- 底部导航 -->
<template>
  <nav class="bottom-footer">
    <dl v-for="(item, index) in footerNav">
      <router-link :to="item.link">
        <dt class="iconfont" :class="item.iconClass">
        </dt>
        <dd>{{item.text}}</dd>
      </router-link>
    </dl>
  </nav>
</template>
<script>
  import { footerNav } from '@/config/footer'
  export default {
    data () {
      return {
        footerNav
      }
    }
  }
</script>