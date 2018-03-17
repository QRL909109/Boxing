<!-- 规则 -->
<template>
  <div class="rule-wrap height100">
    <title-model title="游戏规则"></title-model>
     <view-box ref="articleViewBox">
        <div class="about__content" v-html="content"></div>
     </view-box>
  </div>
</template>
<script>
  import { ViewBox } from 'vux'
  import titleModel from '@/components/titleModel'
  import rule from '@/lib/api/rule'
  import { escape2Html } from '@/lib/filter'
  export default {
    data () {
      return {
        content: ''
      }
    },
    methods: {
      handleGetInfo () {
        rule.GetRule({
          type: 2
        }).then(data => {
          this.content = escape2Html(data.post_content)
        })
      }
    },
    components: {
      titleModel,
      ViewBox
    },
    created () {
      this.handleGetInfo()
    }
  }
</script>
<style lang="sass">
  .rule-wrap
    .rule__content
      margin: 0.2rem 0 50px
      word-wrap: break-word
      overflow: hidden;
      img
        max-width: 100%
        height: auto
</style>