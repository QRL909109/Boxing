<template>
  <div class="login-wrap height100">
    <view-box ref="viewBoxRecharge">
      <div class="login-main">
        <h4 class="login-header text-center">找回密码</h4>
        <div class="login-input-wrap">
          <div class="input-item">
            <div class="input-name">
              账号
            </div>
            <x-input type="text" required placeholder="请输入您的账号名称" class="input-text" v-model="account"></x-input>
          </div>
          <div class="input-item">
            <div class="input-name">
              手机号确认
            </div>
            <x-input type="tel" required placeholder="请输入您注册时的手机号码" class="input-text" v-model="phone" is-type="china-mobile" ref="phone"></x-input>
          </div>
          <div class="input-item">
            <div class="input-name">
              密码
            </div>
            <x-input type="password" required :min='4' :max='24' placeholder="请输入您的密码" class="input-text" v-model="password" ref="password"></x-input>
          </div>
          <div class="input-item">
            <div class="input-name">
              密码确认
            </div>
            <x-input type="password" required :min='4' :max='24' placeholder="请再次输入密码确认" class="input-text" v-model="rePassword" :equal-with="password"></x-input>
          </div>
        </div>
        <div class="input-submit">
          <x-button type="warn" @click.native="submitBtn">确定</x-button>
        </div>
       
        <div class="fuwu-note text-center">
          登录即代表你同意辉煌搏击服务和隐私条款
        </div>
         <toast v-model="totatVisi" :type="toastType" width="15em" :time="1800"  @on-hide="onHide">{{warnText}}</toast>
      </div>
    </view-box>
  </div>
</template>
<script>
import { XButton, ViewBox, XInput, Toast } from 'vux'
import login from '@/lib/api/login'
export default {
  components: {
    XButton,
    ViewBox,
    XInput,
    Toast
  },
  data () {
    return {
      account: '',
      phone: '',
      password: '',
      rePassword: '',
      totatVisi: false,
      toastType: 'text',
      warnText: ''
    }
  },
  methods: {
    onHide () {
      if (this.toastType === 'success') {
        this.$router.push('/home')
      }
    },
    submitBtn () {
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
      login.PostUpdatePass({
        account: this.account,
        phone: this.phone,
        new_passw: this.password
      }).then(data => {
        this.totatVisi = true
        this.toastType = 'success'
        this.warnText = '更改成功！'
      })
    }
  }

}
</script>
<style lang="sass">
@import '~assets/sass/login'
</style>