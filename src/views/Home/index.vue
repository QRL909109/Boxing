<!-- 默认首页头条 -->
<template>
  <section class="home-index-wrap">
    <!-- 轮播图 -->
    <swiper :list="bannerList" 
      auto loop 
      :aspect-ratio="300/800" 
      height="160px" 
      ref="swiper1"
      dots-class="custom-bottom"/>

    <div class="mg-b-2" ref="announcement">
      <announcement :data="announcementList"/>
    </div>
    <div class="mg-b-2" ref="swiper2">
      <title-model title="赛事预告" path="/home">
        <swiper 
          auto 
          loop 
          height="120px"
          :interval=2500
          dots-class="bj-dots-vertical"
          direction="vertical" class="pd-l-2" 
          v-if="trailerList.length > 0">
          <swiper-item v-for="(item, index) in trailerList" :key="index">
            <vs-model 
              :data="item" 
              :statusShow=false
              :showTime=true
              showFootType="0"
              link="/quiz/main/game">
              </vs-model>
          </swiper-item>
         <!--  <div class="scroller-box" :style="{width: scrollerWidth + 'px'}">
            <div class="scroller-box-item" >
              
            </div>
          </div> -->
        </swiper>
        <div class="empty-text text-center" v-else>暂无赛事预告</div>
      </title-model>
    </div>
    
     <div class="mg-b-2">
      <title-model title="资讯头条" path="/home">
        <div class="man-wrap pd-l-2">
         <panel-model  
            :list="topList"
            path="/home/article"
            model=2
            type="left">
          </panel-model>
          <div class="empty-text text-center" v-show="topList.length === 0">
            暂无资讯
          </div>
          <!-- <scroller lock-x :height="scrollHeight" 
          ref="scrollerUpDown"
          :use-pulldown=true 
          :use-pullup=true
          :pulldown-config="pullDownConfig"
          :pullup-config="pullUpConfig"
          @on-pulldown-loading="onPullDown"  
          @on-pullup-loading="onPullUp">
           
          </scroller> -->
        </div>
      </title-model>
     </div>
  </div>
  </section>
</template>
<script>
import { Swiper, Divider, SwiperItem } from 'vux'
import vsModel from '@/components/VSModel'
import announcement from '@/components/Announcement'
import titleModel from '@/components/titleModel'
import panelModel from '@/components/panelModel'
import home from '@/lib/api/home'
import info from '@/lib/api/info'
import { escape2Html } from '@/lib/filter'
// import pullUpDown from '@/mixin/pullUpDown'
export default {
  data () {
    return {
      conditions: {
        portalTop: {
          page: 1,
          limit: 10
        },
        matchInfo: {
          page: 1,
          limit: 10,
          status: 1
        },
        msgInfo: {
          page: 1,
          limit: 30,
          msgType: 2 // 轮播信息
        }
      },
      bannerList: [],
      announcementList: [{
        name: '恭喜会员求真相竞猜中奖，获得20W现金！'
      }, {
        name: '恭喜会员裏XX竞猜中奖，获得20W现金！'
      }, {
        name: '恭喜会员ppW竞猜中奖，获得20W现金，5万竞猜币！5万竞猜币！'
      }, {
        name: '恭喜会员求真相竞猜中奖，获得20W现金！'
      }, {
        name: '恭喜会员求真相竞猜中奖，获得20W现金！'
      }],
      trailerList: [],
      topList: []
    }
  },
  // mixins: [pullUpDown],
  components: {
    Swiper,
    vsModel,
    Divider,
    announcement,
    titleModel,
    panelModel,
    SwiperItem
  },
  methods: {
    onPullDown () {
      this.conditions.portalTop.page = 1
      this.handleGetPortalTop()
      setTimeout(() => {
        this.$refs.scrollerUpDown.donePulldown() // 加载完成
        this.$refs.scrollerUpDown.reset({top: 0}) // 重新上高地
        this.$refs.scrollerUpDown.enablePullup() // 重置上拉加载
      }, 500)
    },
    onPullUp () {
      this.conditions.portalTop.page += 1
      this.handleGetPortalTop(false)
      this.$nextTick(() => {
        this.$refs.scrollerUpDown.donePullup()
        this.$refs.scrollerUpDown.reset()
      })
    },
    /**
     * [handleGetPortalTop 获取頭條信息]
     * @param  {Boolean} type [更新还是加载]
     * @return {[type]}       [description]
     */
    handleGetPortalTop (type = true) {
     /* 预留分页 let {page, limit} = this.conditions.portalTop
      const queryData = {
        page,
        limit
      } */
      return home.GetPortalTop({}).then(data => {
        // 判断是更新还是加载  默认更新
        this.topList = data.map(item => {
          let obj = {
            name: '',
            intro: escape2Html(item.post_excerpt) || escape2Html(item.post_content),
            avatar: item.cover_pic,
            time: item.published_time
          }
          return obj
        })
        // if (type) {
        //   this.topList = data
        // } else {
        //   // 判断数据是否为空  禁止加载
        //   this.topList.push(...data)
        // }
        // if (data.length === 0 || data.length < this.conditions.portalTop.limit) {
        //   this.$refs.scrollerUpDown.disablePullup()
        // }
      })
    },
    /**
     * [handleGetMatchList 获取赛事信息]
     * @return {[type]} [description]
     */
    handleGetMatchList () {
      let {page, limit, status} = this.conditions.matchInfo
      const queryData = {
        page,
        limit,
        status
      }
      return home.GetMatchList(queryData).then(data => {
        data = data.map(item => {
          item.bet_info = item.bet_infos.filter(bet => +bet.bet_type === 1)[0]
          return item
        })
        this.trailerList = data
      })
    },
    /**
     * [handleGetMsgList 获取轮播信息]
     * @return {[type]} [description]
     */
    handleGetMsgList () {
      let { page, limit, msgType: msg_type } = this.conditions.msgInfo
      const queryData = {
        page,
        limit,
        msg_type
      }
      return info.GetMsgList(queryData).then(data => {
        this.announcementList = data
      })
    },
    /**
     * [handleGetbanner 获取首页banner]
     * @return {[type]} [description]
     */
    handleGetbanner () {
      return home.GetPortalBanner({}).then(data => {
        this.bannerList = data.map(item => {
          let obj = {
            url: `/home/article?id=${item.id}`,
            title: item.post_title,
            img: item.cover_pic
          }
          return obj
        })
      })
    },
    handleGetAllInfo () {
      this.$store.dispatch('updateLoadingStatus', {isLoading: true})
      Promise.all([this.handleGetPortalTop(), this.handleGetMatchList(), this.handleGetMsgList(), this.handleGetbanner()])
      .then(_ => {
        this.$store.dispatch('updateLoadingStatus', {isLoading: false})
      })
      .catch(_ => {
        this.$store.dispatch('updateLoadingStatus', {isLoading: false})
      })
    },
    handleGetTopHeight () {
      let swiper1 = this.$refs.swiper1.$el.offsetHeight
      let swiper2 = this.$refs.swiper2.clientHeight
      let announcement = this.$refs.announcement.clientHeight
      this.scrollHeight = `${document.getElementById('app').clientHeight - swiper1 - swiper2 - announcement}px`
    }
  },
  mounted () {

  },
  created () {
    this.handleGetAllInfo()
  }
}
</script>
<style lang="sass">
@import '~assets/sass/color'
.home-index-wrap
  .empty-text
    padding: 0.8rem
  .vux-slider 
    .vux-indicator-right 
      > a 
        > .vux-icon-dot.active
          background-color: $red
  .mg-b-2
    margin-bottom: 0.2rem
  .pd-l-2
    padding: 0.2rem
  .scroller-box
    height: 110px
    padding-bottom: 0.4rem
    position: relative
    .scroller-box-item
      height: 110px
      display: inline-block
      margin-left: 5px
      float: left
      &:first-child
        margin-left: 0
  .bj-dots-vertical
    &.vux-indicator
      top: 50%
      transform: translateY(-50%)
      left: 0.25rem
      bottom: auto
      a
        display: block
        float: none
  .man-wrap
    margin-bottom: 45px
</style>