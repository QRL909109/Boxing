<!--4 关于我们 -->
<template>
  <div class="about-wrap height100">
    <title-model title="关于我们"></title-model>
     <view-box ref="articleViewBox">
        <div class="about__content" v-html="content"></div>
     </view-box>
  </div>
</template>
<script>
  import { ViewBox } from 'vux'
  import titleModel from '@/components/titleModel'
  import personal from '@/lib/api/personal'
  import { escape2Html } from '@/lib/filter'
  export default {
    data () {
      return {
        content: ''
      }
    },
    methods: {
      handleGetInfo () {
        personal.GetPortalOwn({
          type: 4
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
  .about-wrap
    .about__content
      margin: 0.2rem 0 50px
      img
        max-width: 100%
        height: auto
</style>