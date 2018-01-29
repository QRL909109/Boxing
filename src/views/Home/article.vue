<template>
  <div class="home-article-wrap height100">
    <view-box ref="articleViewBox">
      <!-- 文章详情 -->
      <article-wrap :data="articleData"/>
      <give-like :portalId="$route.query.id" v-show="isShow" :like="isLike" :picList="picList" @change="handleGetLikeList"/>

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
  import { escape2Html } from '@/lib/filter'
  export default {
    data () {
      return {
        hotNewsList: [],
        articleData: {},
        picList: [],
        isShow: false, // 请求太慢
        isLike: false // 是否点赞了
      }
    },
    watch: {
      $route: {
        handler (val, old) {
          this.handleGetAll()
          this.$nextTick(() => {
            this.$refs.articleViewBox.scrollTo()
          })
        },
        immediate: true
      }
    },
    methods: {
      handleGetInfo () {
        return home.GetPortalInfo({
          portal_id: this.$route.query.id
        }).then(data => {
          data.portal.post_content = data.portal && escape2Html(data.portal.post_content)
          this.isLike = data.like
          this.isShow = true
          this.articleData = data.portal
        })
      },
      // 是否是回调的点赞 type 默认是false 除非点赞后的触发 才是true
      handleGetLikeList (type = false) {
        type && (this.isLike = true) // 是否是点赞后的
        return home.GetLikeList({
          portal_id: this.$route.query.id
        }).then(data => {
          this.picList = data.slice(0, 50).map(item => {
            let obj = {
              img: item.avatar
            }
            return obj
          })
        })
      },
      handleGetPortalHot () {
        return home.GetPortalPopular({}).then(data => {
          // 判断是更新还是加载  默认更新
          this.hotNewsList = data.map(item => {
            let obj = {
              name: '',
              intro: escape2Html(item.post_title),
              avatar: item.cover_pic,
              time: item.published_time,
              id: item.id
            }
            return obj
          })
        })
      },
      handleGetAll () {
        this.$store.dispatch('updateLoadingStatus', {isLoading: true})
        Promise.all([this.handleGetInfo(), this.handleGetLikeList(), this.handleGetPortalHot()])
        .then(_ => {
          this.$store.dispatch('updateLoadingStatus', {isLoading: false})
        })
        .catch(_ => {
          this.$store.dispatch('updateLoadingStatus', {isLoading: false})
        })
      }
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
    img
      display: block
      max-width: 100%
      height: auto
    .hot-news
      margin: 0.2rem 0
</style>