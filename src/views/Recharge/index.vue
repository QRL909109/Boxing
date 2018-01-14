<!-- 充值界面 -->
<template>
  <div class="recharge-wrap">
    <div class="recharge-header recharfe__modal">
      <div class="recharge__title">
        <span>我的积分：</span> 
        <img class="recharge__money" src="./gold@2x.png" alt=""> {{user.money}}
      </div>
    </div>

    <div class="recharge__select recharfe__modal">
      <p class="recharge__title">请选择充值金额</p>
      <div class="select-money-block">
        <flexbox :gutter="0" wrap="wrap">
            <flexbox-item v-for="(item,index) in rechargeMoneyList" :span="1/2" :key="index">
              <div class="flex-demo">
                <div class="recharge__money">
                  <img src="./gold@2x.png" alt=""> {{item.money * item.ratio}}
                </div>
                <div class="recharge__cache">￥{{item.money}}</div>
              </div>
            </flexbox-item>
        </flexbox>
      </div>
      <p class="recharge__title">其他充值金额 </input></p>
      <div>
        <input type="number">
        <span>元</span>
      </div>
       
    </div>

    <div class="recharge__pay recharfe__modal">
      <p class="recharge__title">请选择支付方式</p>
      <div class="pay__choose">
        <div class="choose" v-for="(item,index) in reChargeList" :key="index" @click="choosePay(item)" >
          <i class="iconfont pay-way" :class="item.icon"></i>
          <span class="desc">{{item.desc}}</span>
          <div class="check-box">
            <check-icon :value="item.payType"></check-icon>
          </div>
        </div>
      </div>
    </div>
    
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
  import { Divider, XDialog, Qrcode, CheckIcon, Flexbox, FlexboxItem } from 'vux'
  import { mapState } from 'vuex'
  import { rechargeMoneyList } from '@/config/rechargeMoney'
  export default {
    data () {
      return {
        showHideOnBlur: false,
        currentDes: '',
        rechargeMoneyList,
        reChargeList: [{
          icon: 'icon-alipay',
          link: '',
          desc: '支付宝支付'
        }, {
          icon: 'icon-weixin',
          link: '',
          desc: '微信支付'
        }]
      }
    },
    methods: {
      handleQrode (item) {
        console.log(222, item)
        this.currentDes = item.desc
        this.showHideOnBlur = true
      },
      choosePay (item) {
        // 设置全部取消
        this.reChargeList.forEach(charge => {
          this.$set(charge, 'payType', false)
        })
        this.$set(item, 'payType', true)
      }
    },
    computed: {
      ...mapState({
        user: state => state.User
      })
    },
    components: {
      Divider,
      XDialog,
      Qrcode,
      CheckIcon,
      Flexbox,
      FlexboxItem
    }
  }
</script>
<style lang="sass">
@import '~assets/sass/mixin'
@import '~assets/sass/color'
@import '~assets/sass/var'

.recharge-wrap
  font-size: 0.5rem
  .recharfe__modal
    padding: 0.25rem
    background: $white
    margin-bottom: 0.25rem
  .recharge-header
    .recharge__money
      width: 0.7rem
      height: 0.7rem
      vertical-align: middle
  .recharge__select
    .select-money-block
      .flex-demo
        text-align: center;
        border: 1px solid #c8c8c8
        border-radius: 4px;
        background-clip: padding-box;
        margin: 0.5rem 0.2rem 0 0.2rem
        padding: 0.2rem
        .recharge__money
          color: #FDC72F
          img
            width: 0.7rem
            height: 0.7rem
            vertical-align: middle
        .recharge__cache
          margin-top: 0.2rem
          color: #999999
    .recharge__title
      margin-top: 0.5rem
      margin-bottom: 0.2rem
  .recharge__pay
    .pay__choose
      margin-top: 0.2rem
      .choose
        position: relative
        padding: 0.5rem 0
        border-bottom: 1px solid #c8c8c8
        &:last-child
          border-bottom: none
        .check-box
          position: absolute
          top: 50%
          right: 0.2rem
          transform: translateY(-50%)
        .pay-way
          font-size: 1rem
          display: inline-block
          vertical-align: middle

  .icon-alipay
    color: #02a9f1
  .icon-weixin
    color: #07b906
</style>