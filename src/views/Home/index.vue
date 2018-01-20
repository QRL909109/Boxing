<!-- 默认首页头条 -->
<template>
  <section class="home-index-wrap">
    <!-- 轮播图 -->
    <swiper :list="swiperList" 
    auto loop 
    :aspect-ratio="300/800" 
    height="200px" 
    dots-class="custom-bottom"/>

    <div class="mg-b-2">
      <announcement :data="announcementList"/>
    </div>
    <div class="mg-b-2">
      <title-model title="赛事预告" path="/home">
        <scroller lock-y scrollbar-x class="pd-l-2" v-if="trailerList.length > 0">
          <div class="scroller-box" :style="{width: scrollerWidth + 'px'}">
            <div class="scroller-box-item" v-for="(item, index) in trailerList">
              <vs-model :data="item" ref="vsModel" :statusShow=false link="/home/main/quiz"></vs-model>
            </div>
          </div>
        </scroller>
        <div class="empty-text text-center" v-else>暂无赛事预告</div>
      </title-model>
    </div>
    
     <div class="mg-b-2">
      <title-model title="名人介绍" path="/info">
        <div class="man-wrap pd-l-2">
          <scroller lock-x height="300px" 
          ref="scrollerUpDown"
          :use-pulldown=true 
          :use-pullup=true
          :pulldown-config="pullDownConfig"
          :pullup-config="pullUpConfig"
          @on-pulldown-loading="onPullDown"  
          @on-pullup-loading="onPullUp">
            <panel-model  
              :list="playerList"
              path="/quiz/main/introduction"
              type="left">
            </panel-model>
          </scroller>
        </div>
      </title-model>
     </div>
  </div>
  </section>
</template>
<script>
import { Swiper, Divider } from 'vux'
import vsModel from '@/components/VSModel'
import announcement from '@/components/Announcement'
import titleModel from '@/components/titleModel'
import panelModel from '@/components/panelModel'
import home from '@/lib/api/home'
import info from '@/lib/api/info'
import pullUpDown from '@/mixin/pullUpDown'
// 测试图片 后面删除
import pic1 from '@/assets/img/1.jpeg'
import pic2 from '@/assets/img/2.png'
import pic3 from '@/assets/img/3.png'
import pic4 from '@/assets/img/4.jpeg'
export default {
  data () {
    return {
      scrollerWidth: 500,
      conditions: {
        playInfo: {
          page: 1,
          limit: 10
        },
        matchInfo: {
          page: 1,
          limit: 10,
          status: 0
        },
        msgInfo: {
          page: 1,
          limit: 30,
          msgType: 2 // 轮播信息
        }
      },
      swiperList: [{
        url: 'javascript:',
        img: pic1,
        title: '拳手赛前应该禁欲吗？'
      }, {
        url: 'javascript:',
        img: pic2,
        title: '专门狙杀世界冠军，KO安德雷击溃叶翔后，这个伊朗血魔欲制霸重量级'
      }, {
        url: 'javascript:',
        img: pic3,
        title: '美丽死神和穆塞在这算酱油，这家拳馆的历史让世界膜拜！'
      }, {
        url: 'javascript:',
        img: pic4,
        title: '擂台上“踹脸狂魔”,台下爱看悬疑小说,她是中国最有气势女拳手！'
      }],
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
      playerList: []
    }
  },
  mixins: [pullUpDown],
  components: {
    Swiper,
    vsModel,
    Divider,
    announcement,
    titleModel,
    panelModel
  },
  methods: {
    handleWidth () {
      this.scrollerWidth = this.$refs.vsModel && this.$refs.vsModel.map(item => item.$el.clientWidth)
        .reduce((x, y) => x + y + 10)
    },
    onPullDown () {
      this.conditions.playInfo.page = 1
      this.handleGetPlayInfo()
      setTimeout(() => {
        this.$refs.scrollerUpDown.donePulldown() // 加载完成
        this.$refs.scrollerUpDown.reset({top: 0}) // 重新上高地
        this.$refs.scrollerUpDown.enablePullup() // 重置上拉加载
      }, 500)
    },
    onPullUp () {
      this.conditions.playInfo.page += 1
      this.handleGetPlayInfo(false)
      this.$nextTick(() => {
        this.$refs.scrollerUpDown.donePullup()
        this.$refs.scrollerUpDown.reset()
      })
    },
    /**
     * [handleGetPlayInfo 获取选手信息]
     * @param  {Boolean} type [更新还是加载]
     * @return {[type]}       [description]
     */
    handleGetPlayInfo (type = true) {
      let {page, limit} = this.conditions.playInfo
      const queryData = {
        page,
        limit
      }
      return home.GetPlayerInfo(queryData).then(data => {
        // 判断是更新还是加载  默认更新
        if (type) {
          this.playerList = data
        } else {
          // 判断数据是否为空  禁止加载
          this.playerList.push(...data)
        }
        if (data.length === 0 || data.length < this.conditions.playInfo.limit) {
          this.$refs.scrollerUpDown.disablePullup()
        }
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
        this.trailerList = data
        this.$nextTick(() => {
          this.handleWidth()
        })
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
        console.log(3333, data)
      })
    },
    handleGetAllInfo () {
      this.$store.dispatch('updateLoadingStatus', {isLoading: true})
      Promise.all([this.handleGetPlayInfo(), this.handleGetMatchList(), this.handleGetMsgList()])
      .then(_ => {
        this.$store.dispatch('updateLoadingStatus', {isLoading: false})
      })
      .catch(_ => {
        this.$store.dispatch('updateLoadingStatus', {isLoading: false})
      })
    }
  },
  created () {
    this.handleGetAllInfo()
  }
}
</script>
<style lang="sass">
@import '~assets/sass/color'
.home-index-wrap
  margin-bottom: 50px
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
    padding: 0.2rem 0 0.2rem 0.2rem
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
</style>