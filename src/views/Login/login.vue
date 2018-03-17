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
            <x-input type="text" required placeholder="请输入您的账号名称" class="input-text" v-model="account"></x-input>
          </div>

          <div class="input-item">
            <div class="input-name">
              密码
            </div>
            <x-input type="password" required :min='6' placeholder="请输入密码" class="input-text" v-model="password"></x-input>
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
      </div>
    </view-box>
  </div>
</template>
<script>
import { XButton, ViewBox, XInput } from 'vux'
import { mapState } from 'vuex'
export default {
  components: {
    XButton,
    ViewBox,
    XInput
  },
  data () {
    return {
      account: '',
      password: ''
    }
  },
  computed: {
    ...mapState({
      user: state => state.User
    })
  },
  methods: {
    handleLogin () {
      console.log('登陆', this.account, this.password, this.user.flowPath)
      this.$router.push(this.user.flowPath)
      this.$store.dispatch('updateFlowPath', {
        flowPath: '',
        isLogin: true
      })
    }
  }

}
</script>
<style lang="sass">
@import '~assets/sass/login'
</style>