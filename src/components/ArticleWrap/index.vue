<!-- 文章详细页 -->
<template>
  <div class="article-wrap">
    <div class="article__header">
      <h1 class="article__title">{{data.post_title || '暂无内容'}}</h1>
      <p class="article__intro">{{data.published_time * 1000 | dateFormat('yyyy-MM-dd hh:mm')}} 来源：{{data.post_source}}</p>
    </div>
    <p class="article__content" v-html="data.post_content"></p>
  </div>
</template>
<script>
  export default {
    data () {
      return {
      }
    },
    props: {
      data: {
        default: {
          post_title: '暂无内容',
          published_time: new Date(),
          post_content: ''
        }
      }
    }
  }
</script>
<style lang="sass">
@import '~assets/sass/color'
.article-wrap
  background-color: $white
  padding: 0.3rem
  .article__header h1 
    font-size: 0.58rem
    line-height: 0.9rem
    font-weight: 600 
    margin-top: 0.5rem
    color: #474747
    text-align: center
  .article__header .header h3 
    font-size: 0.30rem
    line-height: 0.5rem
    margin: 0.2rem 0
    color: #9a9a9a
  .article__content 
    line-height: 0.6rem
    color: #343434
    margin-top: 0.2rem
    word-wrap: break-word
    overflow: hidden
</style>