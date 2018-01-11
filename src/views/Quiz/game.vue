<!-- 具体选手比赛 -->
<template>
  <div class="quiz-game">
    <div class="game-header">
      <flexbox class="header-content" :gutter="0">
        <flexbox-item :span="1/3">
          <div class="flex-demo">
            <div class="box left">
              <img class="header-img" :src="analysisList.opponent[1].img" alt="">
              <p>
                <span class="bule-font">蓝方</span>
                <span> | </span>
                <span>播求</span>
              </p>
              <img src="~/assets/img/china.jpg" alt="" class="icon-countries">
            </div>
          </div>
        </flexbox-item>
        <flexbox-item :span="1/3">
          <div class="flex-demo box-center">
            <div class="box">
              <p class="vs">VS</p>
              <p>冠军赛-大足站</p>
              <p>70KG自由搏击</p>
            </div>
          </div>
        </flexbox-item>
        <flexbox-item :span="1/3">
          <div class="flex-demo">
            <div class="box right">
              <img class="header-img" :src="analysisList.opponent[0].img" alt="">
              <p>
                <span class="red-font">红方</span>
                <span> | </span>
                <span>张志鹏</span>
              </p>
              <img src="~/assets/img/china.jpg" alt="" class="icon-countries">
            </div>
          </div>
        </flexbox-item>
      </flexbox>
    </div>
    <!-- 竞猜 -->
    <div class="guess-wrap">
      <title-model title="猜胜负" :showBottomBorder=true>
        <div class="bg">
          <div class="all-money">
            <img class="glod-icon" src="~/assets/img/gold@2x.png" alt="">
            <span class="money">325</span>
          </div>
          <div class="time">
            截止时间: {{analysisList.time}}
          </div>
        </div>
        <div class="result">
          <div class="btn text-center" v-for="item in analysisList.opponent" @click="handleGuess" 
          :class="[item.status === 0 ? 'red-50-bg' : 'bule-bg']">
            <p>{{item.magnification}}</p>
            <p>{{item.name}}</p>
          </div>
        </div>
      </title-model>
      
    </div>

    <!-- 数据 -->
    <div class="guess-wrap">
      <title-model title="数据" :showBottomBorder=true>
        <div class="analysis">
          <div class="data">
            <div class="progress" v-for="(item, index) in playerInfo">
              <progress-bar :data="item"/>
            </div>
          </div>
        </div>
      </title-model>
    </div>

    <!-- 竞猜投钱 -->
    <betting :active="guessActive" @on-hide="handleHideBetting"/>
  </div>
</template>
<script>
  import progressBar from '@/components/ProgressBar'
  import { Divider, Flexbox, FlexboxItem } from 'vux'
  import betting from '@/components/Betting'
  import titleModel from '@/components/titleModel'
  // 待删除
  import bq from '@/assets/img/bq.jpg'
  import jdx from '@/assets/img/jdx.jpg'
  export default {
    data () {
      return {
        bq,
        jdx,
        guessActive: false,
        analysisList: {
          articleTitle: '城市英雄151大足站',
          title: '冠军赛 - 大足站',
          type: '65kg自由搏击',
          time: '2018-1-12 12:00',
          opponent: [{
            name: '张志鹏',
            img: jdx,
            magnification: 1.67,
            status: 0
          }, {
            name: '播求',
            img: bq,
            magnification: 2.67,
            status: 1
          }]
        },
        playerInfo: [{
          man1: {
            name: '身高',
            value: 110
          },
          man2: {
            name: '身高',
            value: 178
          }
        }, {
          man1: {
            name: '体重',
            value: 176
          },
          man2: {
            name: '体重',
            value: 178
          }
        }, {
          man1: {
            name: '年龄',
            value: 20
          },
          man2: {
            name: '年龄',
            value: 26
          }
        }, {
          man1: {
            name: '获胜',
            value: 11
          },
          man2: {
            name: '获胜',
            value: 26
          }
        }, {
          man1: {
            name: '失败',
            value: 2
          },
          man2: {
            name: '失败',
            value: 2
          }
        }, {
          man1: {
            name: 'KO',
            value: 8
          },
          man2: {
            name: 'KO',
            value: 0
          }
        }]
      }
    },
    methods: {
      handleGuess () {
        this.guessActive = true
      },
      handleHideBetting () {
        this.guessActive = false
        console.log(33333, this.guessActive)
      },
      handleIntro () {
        this.$router.push({
          path: '/quiz/introduction'
        })
      }
    },
    components: {
      progressBar,
      Divider,
      titleModel,
      betting,
      Flexbox,
      FlexboxItem
    }
  }
</script>
<style lang="sass">
@import '~assets/sass/mixin'
@import '~assets/sass/color'
@import '~assets/sass/var'
.quiz-game
  .game-header
    width: 100%
    height: 5rem
    background-image: url("../../assets/img/quiz_bg@2x.png")
    background-size: 100% 5rem
    background-repeat: no-repeat
    .header-content
      height: 5rem
      line-height: 5rem
      .flex-demo
        text-align: center
        color: #fff
        border-radius: 4px
        background-clip: padding-box
        color: #fff
        .box
          line-height: 1.5
          .header-img
            width: 2.66rem
            height: 2.66rem
            border-radius: 50%
            vertical-align: middle
          span
            font-size: 0.4rem
            font-weight: 600
          .icon-countries
            margin-top: 0.2rem
            width: 30px
      .flex-demo.box-center
        .box>p:first-child
          font-size: 0.7rem
  .guess-wrap
    padding: 0.1rem 0 0.3rem 0
    margin-bottom: 0.4rem
    background-color: #fff
    .bg
      display: flex
      align-items: center
      +font-dpr(13px)
      .all-money
        +font-dpr(20px)
        margin-right: $spacing
        .glod-icon
          width: 20px
      .time
        color: $grey-600
    .result
      display: flex
      justify-content: center
      margin-top: $spacing
      margin-bottom: $spacing
      .btn
        width: 2rem
        color: $white
        padding: 0.3rem 0.7rem
        margin: 0 0.3rem
        border-radius: 4px
        +font-dpr(16px)
        line-height: 0.6rem
        &:first-child
          background-color: $blue-600
        &:last-child
          background-color: $red
        &.active
          background: $blue-grey-500
    .analysis
      padding: 0.2rem 0.3rem
      .data
        .progress
          margin-bottom: $spacing    
</style>