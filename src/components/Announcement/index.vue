<!-- 公告 -->
<template>
  <div class="announcement-wrap">
    <div class="flex-space">
      <div class="icon kuaibao"></div>
      <marquee :item-height=40>
        <marquee-item v-for="(item,index) in data" :key="index" class="note">
          {{item.name}}
        </marquee-item>
      </marquee>
    </div>
  </div> 
</template>
<script>
  import { Marquee, MarqueeItem } from 'vux'
  export default {
    data () {
      return {

      }
    },
    props: {
      data: {
        type: Array,
        default: [{
          name: '黄非红竞猜平台上线！！！'
        }]
      }
    },
    components: {
      Marquee,
      MarqueeItem
    }
  }
</script>
<style lang="sass">
@import '~assets/sass/color'
@import '~assets/sass/mixin'
.announcement-wrap
  background: $white
  .flex-space
    display: flex
    .icon
      display: inline-block
      vertical-align: top
      width: 100px
      height: 40px
      background-size: 80px 40px
      background-repeat: no-repeat
      &.kuaibao
        +bg-image('kuaibao')
    .vux-marquee
      margin-left: 5px
    .note
      text-align: center
      height: 40px
      line-height: 40px
      +font-dpr(13px)
      +text-overflow
</style>