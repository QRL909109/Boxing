<template>
  <div class="login-wrap height100">
    <view-box ref="viewBoxRecharge">
      <div class="login-main">
        <h4 class="login-header text-center">更改密码</h4>
        <div class="login-input-wrap">
            <div class="input-item">
              <div class="input-name">
                原密码
              </div>
              <x-input type="password" required :min='4' :max='24' placeholder="请输入您的原密码(4-24)" class="input-text" v-model="password"></x-input>
            </div>
            <div class="input-item">
              <div class="input-name">
                新密码
              </div>
              <x-input type="password" required :min='4' :max='24' placeholder="请输入您的新密码(4-24)" class="input-text" v-model="newPassword"></x-input>
            </div>
             <div class="input-item">
              <div class="input-name">
                密码确认
              </div>
              <x-input type="password" required :min='4' :max='24' placeholder="请再次输入密码确认(4-24)" class="input-text" v-model="reNewPassword" :equal-with="newPassword"></x-input>
            </div>
          </div>
        <div class="input-submit">
          <x-button type="warn" @click.native="submitBtn">确定</x-button>
        </div>
      </div>
       <toast v-model="totatVisi" :type="toastType" width="17em" :time="1800"  @on-hide="onHide">{{warnText}}</toast>
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
      password: '',
      newPassword: '',
      reNewPassword: '',
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
      if (this.password === '') {
        this.totatVisi = true
        this.toastType = 'warn'
        this.warnText = '原密码不能为空'
        return
      }
      if (this.newPassword === '') {
        this.totatVisi = true
        this.toastType = 'warn'
        this.warnText = '新密码不能为空'
        return
      }
      if (this.reNewPassword === '') {
        this.totatVisi = true
        this.toastType = 'warn'
        this.warnText = '确认密码不能为空'
        return
      }
      if (this.password.length < 4 || this.newPassword.length < 4 || this.reNewPassword.length < 4) {
        this.totatVisi = true
        this.toastType = 'warn'
        this.warnText = '密码不能小于4位'
        return
      }
      if (this.newPassword !== this.reNewPassword) {
        this.totatVisi = true
        this.toastType = 'warn'
        this.warnText = '新密码与确认密码不一致'
        return
      }
      login.PostEditPass({
        old_passw: this.password,
        new_passw: this.newPassword
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