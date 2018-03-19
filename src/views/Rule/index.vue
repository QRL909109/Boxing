<!-- 规则 -->
<template>
  <div class="rule-wrap height100">
    <title-model title="游戏规则"></title-model>
     <view-box ref="articleViewBox">
       <!-- 文章详情 -->
        <article-wrap :data="articleData"/>
     </view-box>
  </div>
</template>
<script>
  import { ViewBox } from 'vux'
  import titleModel from '@/components/titleModel'
  import articleWrap from '@/components/ArticleWrap'
  import rule from '@/lib/api/rule'
  import { escape2Html } from '@/lib/filter'
  export default {
    data () {
      return {
        articleData: {}
      }
    },
    methods: {
      handleGetInfo () {
        rule.GetRule().then(data => {
          data.post_content = escape2Html(data.post_content)
          this.articleData = data
        })
      }
    },
    components: {
      titleModel,
      ViewBox,
      articleWrap
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