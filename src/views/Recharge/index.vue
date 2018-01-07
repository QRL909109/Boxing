<!-- 充值界面 -->
<template>
  <div class="recharge-wrap">
    <div class="recharge-header box-shadow-model">线下充值</div>
    <div class="media box-shadow-model">
      <div class="media-box media-box_text" v-for="(item,index) in reChargeList" @click="handleQrode(item)">
        <div class="media-box_appmsg">
          <div class="media-box__hd">
            <i class="iconfont" :class="item.icon"></i>
          </div> 
          <div class="media-box__bd">
            <p class="media-box__desc">{{item.desc}}
            </p>
          </div>
        </div> 
      </div>
    </div>
    <p class="note box-shadow-model">
      <i class="iconfont icon-zhuyi red-font"></i> 如在充值过程中遇到状况无法充值请联系在线客服，客服将为您解决各种充值难题，感谢您的支持!
    </p>
    <x-dialog v-model="showHideOnBlur" class="dialog-demo" hide-on-blur>
      <div class="img-box">
        <h2 class="text-center mgb20">长按向财务转账</h2>
        <qrcode value="https://vux.li?x-page=demo_qrcode" type="img"></qrcode>
        <p class="text-center mgb20">{{currentDes}}</p>
      </div>
      <div @click="showHideOnBlur=false">
        <span class="vux-close"></span>
      </div>
    </x-dialog>
  </div>
</template>
<script>
  import { Divider, XDialog, Qrcode } from 'vux'
  export default {
    data () {
      return {
        showHideOnBlur: false,
        currentDes: '',
        reChargeList: [{
          icon: 'icon-alipay',
          link: '',
          desc: '支付宝转账'
        }, {
          icon: 'icon-weixin',
          link: '',
          desc: '微信转账'
        }]
      }
    },
    methods: {
      handleQrode (item) {
        console.log(222, item)
        this.currentDes = item.desc
        this.showHideOnBlur = true
      }
    },
    components: {
      Divider,
      XDialog,
      Qrcode
    }
  }
</script>
<style lang="sass">
@import '~assets/sass/mixin'
@import '~assets/sass/color'
@import '~assets/sass/var'
.recharge-wrap
  .recharge-header
    +font-dpr(18px)
  .media 
    border-radius: 0.2rem
    .media-box
      padding: 15px
      position: relative
      &:before
        content: " "
        position: absolute
        left: 0
        top: 0
        right: 0
        height: 1px
        border-top: 1px solid #E5E5E5
        color: #E5E5E5
        -webkit-transform-origin: 0 0
        transform-origin: 0 0
        transform: scaleY(0.5)
        left: 15px
      &:first-child:before
        display: none
      .media-box_appmsg
        display: flex
        align-items: center
        .media-box__hd
          margin-right: .8em
          width: 60px
          height: 60px
          line-height: 60px
          text-align: center
        .media-box__bd
          flex: 1
          min-width: 0
          .media-box__desc
            color: $grey-900
            +font-dpr(16px)
            line-height: 1.2
            overflow: hidden
            text-overflow: ellipsis
            display: -webkit-box
            -webkit-box-orient: vertical
            -webkit-line-clamp: 2 
    .iconfont
      +font-dpr(66px)
    .icon-alipay
      color: #02a9f1
    .icon-weixin
      color: #07b906
  .note
    +font-dpr(16px)
  .img-box
    padding: 20px
  .mgb20
    margin: 0.25rem
</style>