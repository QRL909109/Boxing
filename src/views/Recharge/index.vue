<!-- 充值界面 -->
<template>
  <div class="recharge-wrap">
    <div class="recharge-header recharfe__modal">
      <p class="recharge__title">我的积分： 
        <div class="recharge__money">
          <img src="./gold@2x.png" alt=""> {{user.coin}}
        </div>
      </p>
    </div>

    <div class="recharge__select recharfe__modal">
      <p class="recharge__title">请选择充值金额</p>
      <div class="select-money-block">
        <div v-for="item in rechargeMoneyList" class="select-item">
          <div>
            <div class="recharge__money">
              <img src="./gold@2x.png" alt=""> {{item.money * item.ratio}}
            </div>
            <div class="recharge__cache">￥{{item.money}}</div>
          </div>
        </div>
      </div>
      <p class="recharge__title">其他充值金额 <input type="number" placeholder="元"></input></p>
       
    </div>

    <div class="recharge__pay recharfe__modal">
      <p class="recharge__title">请选择支付方式</p>
      <div class="pay__choose">
        <div class="choose" v-for="item in reChargeList" @click="choosePay(item)">
          <i class="iconfont" :class="item.icon"></i>
          <p class="desc">{{item.desc}}
            </p>
          <check-icon :value="item.payType"></check-icon>
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
  import { Divider, XDialog, Qrcode, CheckIcon } from 'vux'
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
      CheckIcon
    }
  }
</script>
<style lang="sass">
@import '~assets/sass/mixin'
@import '~assets/sass/color'
@import '~assets/sass/var'
.recharge-wrap
  .recharfe__modal
    padding: 0.25rem
    background: $white
    margin-bottom: 0.25rem
  .recharge-header
  .icon-alipay
    color: #02a9f1
  .icon-weixin
    color: #07b906
</style>