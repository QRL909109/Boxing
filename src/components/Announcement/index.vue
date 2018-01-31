<!-- 公告 -->
<template>
  <div class="announcement-wrap">
    <div class="flex-space">
      <div class="kuaibao-icon kuaibao"></div>
      <marquee :item-height=40>
        <marquee-item v-for="(item,index) in data" :key="index" class="note">
          {{item.msg_content}}
        </marquee-item>
      </marquee>
        <x-button mini type="default" link="/home/ranking">
          排行榜
        </x-button>
    </div>
  </div> 
</template>
<script>
  import { Marquee, MarqueeItem, XButton } from 'vux'
  export default {
    data () {
      return {

      }
    },
    props: {
      data: {
        type: Array,
        default: [{
          msg_content: '黄非红竞猜平台上线！！！'
        }]
      }
    },
    components: {
      Marquee,
      MarqueeItem,
      XButton
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
    .kuaibao-icon
      display: inline-block
      vertical-align: top
      width: 3.3rem
      height: 40px
      background-size: 2.5rem 40px
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
    button.weui-btn_mini
      width: 2.3rem
      padding: 0
      margin: 0.1rem
</style>