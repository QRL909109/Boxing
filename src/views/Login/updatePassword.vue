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
              <x-input type="password" required :min='4' :max='24' placeholder="请输入您的原密码" class="input-text" v-model="password"></x-input>
            </div>
            <div class="input-item">
              <div class="input-name">
                新密码
              </div>
              <x-input type="password" required :min='4' :max='24' placeholder="请输入您的新密码" class="input-text" v-model="newPassword"></x-input>
            </div>
             <div class="input-item">
              <div class="input-name">
                密码确认
              </div>
              <x-input type="password" required :min='4' :max='24' placeholder="请再次输入密码确认" class="input-text" v-model="reNewPassword" :equal-with="newPassword"></x-input>
            </div>
          </div>
        <div class="input-submit">
          <x-button type="warn" @click.native="submitBtn">确定</x-button>
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
      password: '',
      newPassword: '',
      reNewPassword: ''
    }
  },
  methods: {
    submitBtn () {}
  }
}
</script>
<style lang="sass">
@import '~assets/sass/login'
</style>