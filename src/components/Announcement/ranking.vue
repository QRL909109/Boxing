<!-- 竞猜推荐 -->
<template>
  <div class="announcement-wrap">
    <div class="flex-space">
      <div class="icon betRanking"></div>
      <marquee :item-height=40>
        <marquee-item v-for="(item,index) in data" :key="index" class="note">
         <i class="iconfont icon-star"></i> {{item.msg}}
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
          msg: '黄非红竞猜平台上线！！！'
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
      width: 110px
      height: 20px
      background-size: 80px 20px
      background-repeat: no-repeat
      &.betRanking
        margin-top: 10px
        margin-left: 0.1rem
        +bg-image('betRanking')
    .vux-marquee
      margin-left: 5px
    .note
      text-align: center
      height: 40px
      line-height: 40px
      +font-dpr(13px)
      +text-overflow
</style>