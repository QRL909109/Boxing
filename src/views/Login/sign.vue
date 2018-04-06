<template>
  <div class="login-wrap login-bg height100">
    <view-box ref="viewBoxRecharge">
      <div class="login-main">
        <h4 class="login-header text-center">{{msg}}</h4>

        <div v-show="step == 1">
          <div class="login-input-wrap">
            <div class="input-item">
              <div class="input-name">
                账号
              </div>
              <x-input type="text" :min='4' :max="24" required placeholder="请输入您的账号名称" class="input-text" ref="account" v-model="account"></x-input>
            </div>
             <div class="input-item">
              <div class="input-name">
                手机号
              </div>
              <x-input type="tel" required placeholder="请输入手机号" class="input-text" v-model="phone" ref="phone" is-type="china-mobile"></x-input>
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
              <x-input type="password" required :min='4' :max="24" placeholder="请输入您的密码(4-24)" class="input-text" ref="password" v-model="password"></x-input>
            </div>
             <div class="input-item">
              <div class="input-name">
                密码确认
              </div>
              <x-input type="password" required :min='4' :max="24" placeholder="请再次输入密码确认" class="input-text" ref="rePassword" v-model="rePassword" :equal-with="password"></x-input>
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
    <toast v-model="totatVisi" :type="toastType" width="15em" :time="1800"  @on-hide="onHide">{{warnText}}</toast>
  </div>
</template>
<script>
import { XButton, ViewBox, Flexbox, FlexboxItem, XInput, Toast } from 'vux'
import login from '@/lib/api/login'
const MSG = ['欢迎注册辉煌搏击', '设置密码']
export default {
  components: {
    XButton,
    ViewBox,
    Flexbox,
    FlexboxItem,
    XInput,
    Toast
  },
  data () {
    return {
      step: 1,
      account: '',
      phone: '',
      password: '',
      rePassword: '',
      totatVisi: false,
      toastType: 'text',
      warnText: ''
    }
  },
  computed: {
    msg () {
      return MSG[this.step - 1]
    }
  },
  methods: {
    onHide () {
      if (this.toastType === 'success') {
        this.$router.push('/home')
      }
    },
    nextStep () {
      if (this.step === 1) {
        if (this.account === '') {
          this.totatVisi = true
          this.toastType = 'warn'
          this.warnText = '账号不能为空'
          return
        }
        if (this.account.length < 4) {
          this.warnText = '账号不能少于4位'
          this.totatVisi = true
          this.toastType = 'warn'
          return
        }
        if (this.phone === '') {
          this.totatVisi = true
          this.toastType = 'warn'
          this.warnText = '手机号不能为空'
          return
        }
        if (this.$refs.phone.hasErrors) {
          this.totatVisi = true
          this.toastType = 'warn'
          this.warnText = '请输入正确的手机号'
          return
        }
        this.step = 2
      } else if (this.step === 2) {
        this.step = 1
      }
    },
    handleSign () {
      if (this.password === '') {
        this.totatVisi = true
        this.toastType = 'warn'
        this.warnText = '密码不能为空'
        return
      }
      if (this.rePassword === '') {
        this.totatVisi = true
        this.toastType = 'warn'
        this.warnText = '确认密码不能为空'
        return
      }
      if (this.$refs.password.hasErrors) {
        this.totatVisi = true
        this.toastType = 'warn'
        this.warnText = '请填写正确的密码'
        return
      }
      if (this.rePassword !== this.password) {
        this.totatVisi = true
        this.toastType = 'warn'
        this.warnText = '密码与确认密码不一致'
        return
      }
      login.PostRegister({
        account: this.account,
        passw: this.password,
        phone: this.phone
      }).then(data => {
        this.totatVisi = true
        this.toastType = 'success'
        this.warnText = '注册成功！'
      })
    }
  }

}
</script>
<style lang="sass">
@import '~assets/sass/login'
.login-bg
  background: url(./bg.jpg) no-repeat !important
</style>