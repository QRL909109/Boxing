<!-- 互动 -->
<template>
  <div class="interactive-wrap">
    <toast v-model="show" type="text" width="18em" :time="10000" @on-hide="onHide">互动 功能暂未开放，敬请期待！</toast>
    <div class="text-center" v-show="textShow">
      互动 功能暂未开放，敬请期待！
    </div>
  </div>
</template>
<script>
  import { Toast } from 'vux'
  export default {
    data () {
      return {
        show: false,
        textShow: false
      }
    },
    created () {
      setTimeout(() => {
        this.show = true
      }, 300)
    },
    components: {
      Toast
    },
    methods: {
      onHide () {
        this.textShow = true
      }
    }
  }
</script>
<style lang="sass">
  .interactive-wrap
    margin: 150px 0
    font-size: 16px
</style>

