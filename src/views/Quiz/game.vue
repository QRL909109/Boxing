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
                <span>蓝方</span>
                <span> | </span>
                <span>播求</span>
              </p>
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
                <span>红方</span>
                <span> | </span>
                <span>张志鹏</span>
              </p>
            </div>
          </div>
        </flexbox-item>
      </flexbox>
    </div>
    <!-- 竞猜 -->
    <div class="guess-wrap">
      <section-title title="猜胜负"></section-title>
      <div class="bg">
        <div class="all-money">
          <i class="iconfont icon-jinbi jinbi"></i>
          <span class="money">325</span>
        </div>
        <div class="time">
          截止时间: {{analysisList.time}}
        </div>
      </div>
      <div class="result">
        <div class="btn text-center" v-for="item in analysisList.opponent" @click="handleGuess">
          <p>{{item.magnification}}</p>
          <p>{{item.name}}</p>
        </div>
      </div>
    </div>

    <!-- 数据 -->
    <div class="guess-wrap">
      <section-title title="数据"></section-title>
        <div class="analysis">
          <!-- <div class="name">
            <p class="peo" v-for="item in analysisList.opponent">{{item.name}}</p>
          </div> -->
          <div class="data">
            <div class="progress" v-for="(item, index) in playerInfo">
              <progress-bar :data="item"/>
            </div>
          </div>
        </div>
    </div>

    <!-- 竞猜投钱 -->
    <betting :active="guessActive" @on-hide="handleHideBetting"/>
  </div>
</template>
<script>
  import progressBar from '@/components/ProgressBar'
  import { Divider, Flexbox, FlexboxItem } from 'vux'
  import sectionTitle from '@/components/section/title'
  import betting from '@/components/Betting'
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
            name: '播求',
            img: bq,
            magnification: 2.67
          }, {
            name: '张志鹏',
            img: jdx,
            magnification: 1.67
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
      sectionTitle,
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
          &.left
            color: $blue-600
          &.right
            color: $red
      .flex-demo.box-center
        .box>p:first-child
          font-size: 1.5rem
  .guess-wrap
    padding: 0.1rem 0.3rem
    margin-bottom: 0.4rem
    background-color: #fff
    .bg
      display: flex
      justify-content: space-between
      align-items: center
      +font-dpr(13px)
      .all-money
        +font-dpr(20px)
    .result
      display: flex
      justify-content: center
      margin-top: $spacing
      margin-bottom: $spacing
      .btn
        width: 2rem
        color: $white
        padding: 0.15rem $spacing
        margin: 0 0.3rem
        border-radius: 0.2rem
        +font-dpr(16px)
        line-height: 0.6rem
        &:first-child
          background-color: $blue-600
        &:last-child
          background-color: $red
        &.active
          background: $blue-grey-500
    .analysis
      .data
        .progress
          margin-bottom: $spacing    
</style>