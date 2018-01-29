<!-- 资料库 -->
<template>
  <div class="info-wrap">
    <toast v-model="show" type="text" width="18em" :time="100000">资料库 功能暂未开放，敬请期待！</toast>
  </div>
</template>
<script>
  import { Toast } from 'vux'
  export default {
    data () {
      return {
        show: false
      }
    },
    created () {
      setTimeout(() => {
        this.show = true
      }, 300)
    },
    components: {
      Toast
    }
  }
</script>
<style lang="sass">
  .info-wrap
    margin: 50px 0
    font-size: 16px
</style>
