<template>
  <div class="login-wrap height100">
    <view-box ref="viewBoxRecharge">
      <div class="login-main">
        <h4 class="login-header text-center">找回密码</h4>
        <template v-if="!canFind">
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
              <x-input type="tel" required placeholder="请输入您注册时的手机号码" class="input-text" v-model="phone" is-type="china-mobile"></x-input>
            </div>
          </div>
        </template>
        
        <template v-else>
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
        </template>
        <div class="input-submit">
          <x-button type="warn" @click.native="submitBtn">确定</x-button>
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
export default {
  components: {
    XButton,
    ViewBox,
    XInput
  },
  data () {
    return {
      canFind: false,
      account: '',
      phone: null,
      password: '',
      rePassword: ''
    }
  },
  methods: {
    submitBtn () {
      if (!this.canFind) {
        // 请求是否找回
        this.canFind = true
      } else {
        console.log('你真棒')
      }
    }
  }

}
</script>
<style lang="sass">
@import '~assets/sass/login'
</style>