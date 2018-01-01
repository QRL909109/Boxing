<!-- 具体选手比赛 -->
<template>
  <div class="quiz-game">
    <div class="game-title">
      <h2 class="title">
        {{analysisList.articleTitle}}
      </h2>
      <div class="all-money">
        <i class="iconfont icon-jinbi jinbi"></i>
        <span class="money">325</span>
      </div>
    </div>
    <!-- 双方 -->
    <div class="rival">
      <div class="red-rival rival-item">
        <img :src="jdx" alt="" class="img-radio">
        <i class="iconfont icon-faqibisai red-font"></i>
      </div>
      <div class="intro text-center">
        <p> {{analysisList.title}} </p>
        <p> {{analysisList.type}} </p>
        <p>比赛时间: {{analysisList.time}}</p>
      </div>
      <div class="bule-rival rival-item">
        <img :src="bq" alt="" class="img-radio">
        <i class="iconfont icon-faqibisai bule-font"></i>
      </div>
    </div>
    <!-- 资料 -->
    <div class="analysis">
      <div class="name">
        <p class="peo" v-for="item in analysisList.opponent">{{item.name}}</p>
      </div>
      <div class="data">
        <div class="progress" v-for="(item, index) in playerInfo">
          <progress-bar :data="item"/>
        </div>
      </div>
    </div>
    <!-- 竞猜 -->
    <divider>竞猜</divider>
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
    <!-- 竞猜投钱 -->
    <betting :active="guessActive" @on-hide="handleHideBetting"/>
  </div>
</template>
<script>
  import progressBar from '@/components/ProgressBar'
  import { Divider } from 'vux'
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
            name: '张志鹏',
            img: jdx,
            magnification: 1.67
          }, {
            name: '播求',
            img: bq,
            magnification: 2.67
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
      }
    },
    components: {
      progressBar,
      Divider,
      sectionTitle,
      betting
    }
  }
</script>
<style lang="sass">
@import '~assets/sass/mixin'
@import '~assets/sass/color'
@import '~assets/sass/var'
.quiz-game
  .game-title
    display: flex
    justify-content: space-between
    align-items: center
    margin: $spacing
    .title
      color: $blue
    .all-money
      +font-dpr(20px)
      .jinbi
        +font-dpr(22px)
  .rival
    display: flex
    justify-content: space-between
    padding: 0.1rem 0.3rem
    margin-bottom: $spacing
    .rival-item
      position: relative
      img
        width: 2rem
      i
        position: absolute
        bottom: 0
        +font-dpr(20px)
    .intro
      +font-dpr(14px)
      line-height: 0.7rem
  .analysis
    padding: 0.2rem 0.3rem
    margin: 0.3rem
    box-shadow: $shadow-4db
    .name
      display: flex
      justify-content: space-between
      margin-bottom: $spacing
      .peo
        margin: 0 0.3rem
        +font-dpr(16px)
    .data
      .progress
        margin-bottom: $spacing
  .guess-wrap
    padding: 0.1rem 0.3rem
    margin-bottom: $spacing
    .title
      border-left: 0.1rem solid $orange
      padding-left: 0.2rem
      margin-bottom: $spacing
      +font-dpr(16px)
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
      .btn
        width: 2rem
        color: $white
        padding: 0.15rem $spacing
        background: rgba(0,0,0,.35)
        margin: 0 0.3rem
        border-radius: 0.2rem
        +font-dpr(16px)
        line-height: 0.6rem
        &.active
          background: $blue-grey-500

</style>