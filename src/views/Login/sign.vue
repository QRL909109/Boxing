<template>
  <div class="login-wrap height100">
    <view-box ref="viewBoxRecharge">
      <div class="login-main">
        <h4 class="login-header text-center">{{msg}}</h4>

        <div v-show="step == 1">
          <div class="login-input-wrap">
            <div class="input-item">
              <div class="input-name">
                账号
              </div>
              <x-input type="text" required placeholder="请输入您的账号名称" class="input-text" v-model="account"></x-input>
            </div>
             <div class="input-item">
              <div class="input-name">
                手机号
              </div>
              <x-input type="tel" required placeholder="请输入手机号" class="input-text" v-model="phone" is-type="china-mobile"></x-input>
            </div>
          </div>
          <div class="input-note">
            <span>请真实填写，用于密码找回时验证身份</span>
          </div>
          <div class="input-submit">
            <x-button type="warn" @click.native="nextStep">下一步</x-button>
          </div>
        </div>

        <div v-show="step == 2">
          <div class="login-input-wrap">
            <div class="input-item">
              <div class="input-name">
                密码
              </div>
              <x-input type="password" required :min='6' placeholder="请输入您的密码" class="input-text" v-model="password"></x-input>
            </div>
             <div class="input-item">
              <div class="input-name">
                密码确认
              </div>
              <x-input type="password" required :min='6' placeholder="请再次输入密码确认" class="input-text" v-model="rePassword" :equal-with="password"></x-input>
            </div>
          </div>
          <div class="input-submit">
            <flexbox>
              <flexbox-item>
                <x-button type="warn" @click.native="nextStep">上一步</x-button>
              </flexbox-item>
              <flexbox-item>
                <x-button type="warn" @click.native="handleSign">确定</x-button>
              </flexbox-item>
            </flexbox>
          </div>
        </div>
        
        <div class="fuwu-note text-center">
          注册即代表你同意辉煌搏击服务和隐私条款
        </div>
      </div>
    </view-box>
  </div>
</template>
<script>
import { XButton, ViewBox, Flexbox, FlexboxItem, XInput } from 'vux'
const MSG = ['欢迎注册辉煌搏击', '设置密码']
export default {
  components: {
    XButton,
    ViewBox,
    Flexbox,
    FlexboxItem,
    XInput
  },
  data () {
    return {
      step: 1,
      account: '',
      phone: null,
      password: '',
      rePassword: ''
    }
  },
  computed: {
    msg () {
      return MSG[this.step - 1]
    }
  },
  methods: {
    nextStep () {
      if (this.step === 1) {
        this.step = 2
      } else if (this.step === 2) {
        this.step = 1
      }
    },
    handleSign () {

    }
  }

}
</script>
<style lang="sass">
@import '~assets/sass/login'
</style>