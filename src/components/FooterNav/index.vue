<!-- 底部导航 -->
<template>
  <tabbar slot="bottom">
    <template v-for="(item, index) in footerNav">
      <tabbar-item :link="item.link" :selected="index === currentIndex">
         <i slot="icon" class="iconfont" :class="item.iconClass"></i>
         <span slot="label">{{item.text}}</span>
      </tabbar-item>
    </template>
  </tabbar>
</template>
<script>
  import { Tabbar, TabbarItem } from 'vux'
  import { footerNav } from '@/config/footer'
  export default {
    data () {
      return {
        footerNav,
        currentIndex: 0
      }
    },
    components: {
      Tabbar,
      TabbarItem
    }
  }
</script>
<style lang="sass" scoped>
@import '~assets/sass/color'
.weui-tabbar__item
  &.weui-bar__item_on
    .weui-tabbar__icon
      > i
       color: $red
    .weui-tabbar__label
      span
        color: $red

</style>