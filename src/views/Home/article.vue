<template>
  <div class="home-article-wrap height100">
    <view-box ref="viewBox">
      <!-- 文章详情 -->
      <article-wrap :data="articleData"/>
      <give-like :portalId="query.id" :picList="picList" @change="handleGetLikeList"/>

      <div class="hot-news" v-show="hotNewsList.length > 0">
        <title-model title="热门资讯">
          <div class="man-wrap pd-l-2">
            <panel-model  
              :list="hotNewsList"
              path="/home/article"
              model=2
              type="left">
            </panel-model>
          </div>
        </title-model>
      </div>
    </view-box>
  </div>
</template>
<script>
  import { ViewBox } from 'vux'
  import articleWrap from '@/components/ArticleWrap'
  import giveLike from '@/components/giveLike/index'
  import titleModel from '@/components/titleModel'
  import panelModel from '@/components/panelModel'
  import home from '@/lib/api/home'
  export default {
    data () {
      const query = this.$route.query
      return {
        query,
        hotNewsList: [],
        articleData: '',
        picList: []
      }
    },
    methods: {
      handleGetInfo () {
        home.GetPortalInfo({
          portal_id: this.query.id
        }).then(data => {
          console.log(11222, data)
        })
      },
      handleGetLikeList () {
        home.GetLikeList({
          portal_id: this.query.id
        }).then(data => {
          console.log(11222, data)
        })
      },
      handleGetPortalHot () {
        home.GetPortalPopular({}).then(data => {
          // 判断是更新还是加载  默认更新
          this.hotNewsList = data.map(item => {
            let obj = {
              name: '',
              intro: item.post_excerpt || item.post_content,
              avatar: item.cover_pic,
              time: item.published_time
            }
            return obj
          })
        })
      }
    },
    created () {
      this.handleGetInfo()
      this.handleGetLikeList()
      this.handleGetPortalHot()
    },
    components: {
      articleWrap,
      ViewBox,
      giveLike,
      titleModel,
      panelModel
    }
  }
</script>
<style lang="sass">
  .home-article-wrap
    margin-bottom: 50px
</style>