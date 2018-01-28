<!-- 反馈信息 -->
<template>
  <div class="advice-wrap">
    <p>@黄非红搏击，我想反馈: </p>
    <group>
      <x-textarea placeholder="有什么想说的，尽管吐槽吧！" v-model="advice"></x-textarea>
    </group>
    <group>
      <x-input placeholder="请留下您的联系方式QQ/邮箱/手机号" required v-model="contact"></x-input>
    </group>
    <group>  
      <x-button type="primary" action-type="submit" @click.native="handlePostContact">提交反馈</x-button>
    </group>
  </div>
</template>
<script>
  import { XTextarea, Group, XInput, XButton } from 'vux'
  import personal from '@/lib/api/personal'
  export default {
    data () {
      return {
        advice: '',
        contact: ''
      }
    },
    methods: {
      handlePostContact () {
        if (this.advice === '') {
          this.$vux.alert.show({
            title: '请填写您的反馈'
          })
          return
        }
        if (this.contact === '') {
          this.$vux.alert.show({
            title: '请填写您的联系方式'
          })
          return
        }
        let queryData = {
          content: this.advice,
          contact: this.contact
        }
        personal.PostFeedBack(queryData).then(data => {
          let _this = this
          this.$vux.alert.show({
            title: '反馈成功',
            content: '谢谢您的宝贵意见，我们将会认真聆听！',
            onHide () {
              _this.$router.push({
                path: '/personal'
              })
            }
          })
        })
      }
    },
    components: {
      XTextarea,
      Group,
      XInput,
      XButton
    }
  }
</script>
<style lang="sass">
  @import '~assets/sass/mixin'
  .advice-wrap
    +font-dpr(15px)
    padding: 0.5rem
</style>