<template>
  <div class="login-wrap height100">
    <view-box ref="viewBoxRecharge">
      <div class="login-main">
        <h4 class="login-header text-center">辉煌搏击登录</h4>
        <div class="login-input-wrap">
          <div class="input-item">
            <div class="input-name">
              账号
            </div>
            <x-input type="text" required :min='4' :max="24" placeholder="请输入您的账号名称" class="input-text" v-model="account" ref="account"></x-input>
          </div>

          <div class="input-item">
            <div class="input-name">
              密码
            </div>
            <x-input type="password" required :min='4' :max='24' placeholder="请输入密码" class="input-text" v-model="password" ref="password"></x-input>
          </div>
        </div>
        <div class="input-note">
          <span>
            <router-link to="/sign">快速注册</router-link>
          </span>
          <span>
            <router-link to="/findPassword">忘记密码?</router-link>
          </span>
        </div>
        <div class="input-submit">
          <x-button type="warn" @click.native="handleLogin">确定</x-button>
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
import { mapState } from 'vuex'
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
      password: '',
      totatVisi: false,
      toastType: 'text',
      warnText: ''
    }
  },
  computed: {
    ...mapState({
      user: state => state.User
    })
  },
  methods: {
    onHide () {
      if (this.toastType === 'success') {
        this.$router.push(this.user.flowPath || '/')
        this.$store.dispatch('updateFlowPath', {
          flowPath: '',
          isLogin: true
        })
      }
    },
    handleLogin () {
      if (this.account === '') {
        this.totatVisi = true
        this.toastType = 'warn'
        this.warnText = '账号不能为空'
        return
      }
      if (this.account.length < 4) {
        this.totatVisi = true
        this.toastType = 'warn'
        this.warnText = '账号不能少于4位'
        return
      }
      if (this.password === '') {
        this.totatVisi = true
        this.toastType = 'warn'
        this.warnText = '密码不能为空'
        return
      }
      if (this.$refs.password.hasErrors) {
        this.totatVisi = true
        this.toastType = 'warn'
        this.warnText = '请填写正确的密码'
        return
      }
      login.PostLogin({
        account: this.account,
        passw: this.password
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
</style>