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
        <span slot="right">sss</span>
        <scroller lock-y scrollbar-x class="pd-l-2">
          <div class="scroller-box" :style="{width: scrollerWidth + 'px'}">
            <div class="scroller-box-item" v-for="(item, index) in trailerList">
              <vs-model :data="item" ref="vsModel" :statusShow=false></vs-model>
            </div>
          </div>
        </scroller>
      </title-model>
    </div>
    
     <div class="mg-b-2">
      <title-model title="名人介绍" path="/info">
        <div class="man-wrap pd-l-2">
          <panel-model  
            :list="list"
            path="/quiz/introduction"
            type="left">
          </panel-model>
        </div>
      </title-model>
     </div>
  </div>
  </section>
</template>
<script>
import { Swiper, Scroller, Divider } from 'vux'
import vsModel from '@/components/VSModel'
import announcement from '@/components/Announcement'
import titleModel from '@/components/titleModel'
import panelModel from '@/components/panelModel'
// 测试图片 后面删除
import pic1 from '@/assets/img/1.jpeg'
import pic2 from '@/assets/img/2.png'
import pic3 from '@/assets/img/3.png'
import pic4 from '@/assets/img/4.jpeg'
import bq from '@/assets/img/bq.jpg'
import jdx from '@/assets/img/jdx.jpg'
import sbsda from '@/assets/img/sbsda.jpg'
import wjr from '@/assets/img/wjr.jpg'
import xczz from '@/assets/img/xczz.jpg'
import xjp from '@/assets/img/xjp.jpg'
export default {
  data () {
    return {
      scrollerWidth: 1300,
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
      trailerList: [{
        link: '',
        date: '2018-1-2',
        status: 1,
        palyer: [{
          name: '金东秀',
          img: jdx
        }, {
          name: '播求',
          img: bq
        }]
      }, {
        link: '',
        date: '2018-1-4',
        status: 0,
        palyer: [{
          name: '谢俊鹏',
          img: xjp
        }, {
          name: '维吉尔',
          img: wjr
        }]
      }, {
        link: '',
        date: '2018-1-12',
        status: 1,
        palyer: [{
          name: '西川智之',
          img: xczz
        }, {
          name: '塞巴斯蒂安',
          img: sbsda
        }]
      }, {
        link: '',
        date: '2018-1-20',
        status: 0,
        palyer: [{
          name: '金东秀',
          img: jdx
        }, {
          name: '塞巴斯蒂安',
          img: sbsda
        }]
      }, {
        link: '',
        status: 1,
        date: '2018-1-22',
        palyer: [{
          name: '维吉尔',
          img: wjr
        }, {
          name: '谢俊鹏',
          img: xjp
        }]
      }],
      list: [{
        src: bq,
        title: '播求',
        desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
        id: 123
      }, {
        src: sbsda,
        title: '播求',
        desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
        id: 234
      }, {
        src: wjr,
        title: '播求',
        desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
        id: 345
      }, {
        src: xjp,
        title: '谢俊鹏',
        desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
        id: 678
      }, {
        src: bq,
        fallbackSrc: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
        title: '播求',
        desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
        id: 567
      }]
    }
  },
  components: {
    Swiper,
    Scroller,
    vsModel,
    Divider,
    announcement,
    titleModel,
    panelModel
  },
  methods: {
    handleWidth () {
      this.scrollerWidth = this.$refs.vsModel.map(item => item.$el.clientWidth)
        .reduce((x, y) => x + y + 10)
    }
  },
  mounted () {
    this.handleWidth()
  }
}
</script>
<style lang="sass">
@import '~assets/sass/color'
.home-index-wrap
  margin-bottom: 50px
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
    position: relative
    .scroller-box-item
      height: 110px
      display: inline-block
      margin-left: 5px
      float: left
      &:first-child
        margin-left: 0
  .man-wrap
    height: 300px
    overflow-y: auto
</style>