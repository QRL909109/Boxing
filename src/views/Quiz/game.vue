<!-- 具体选手比赛 -->
<template>
  <div class="quiz-game">
    <div class="game-title">
      <h2 class="title">
        城市英雄151大足站
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
        <p>冠军赛 - 大足站</p>
        <p>65kg自由搏击</p>
        <p>比赛时间: 1-12 12:00</p>
      </div>
      <div class="bule-rival rival-item">
        <img :src="bq" alt="" class="img-radio">
        <i class="iconfont icon-faqibisai bule-font"></i>
      </div>
    </div>
    <!-- 资料 -->
    <div class="analysis">
      <div class="name">
        <p class="peo">张智鹏</p>
        <p class="peo">播求</p>
      </div>
      <div class="data">
        <div class="progress" v-for="(item, index) in analysisList">
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
          截止时间: 2018-1-23 18:40
        </div>
      </div>
      <div class="result">
        <div class="btn text-center active" @click="handleGuess">
          <p>1.55</p>
          <p>张智鹏</p>
        </div>
        <div class="btn text-center">
          <p>1.65</p>
          <p>播求</p>
        </div>
      </div>
    </div>
    <!-- 竞猜投钱 -->
    <popup v-model="guessActive" position="bottom">
      <div class="guess-vertical-wrap">
        <div class="note">
          <section-title title="请选择金币"></section-title>
          <div class="red-font">*多次点击可重复参与</div>
        </div>
        <div class="monoey-list">
          <ul>
            <li v-for="(item, index) in moneyList" class="bin" @click="handleGuessMoney(item)">
              {{item}}
            </li>
          </ul>
        </div>
      </div>
    </popup>
  </div>
</template>
<script>
  import progressBar from '@/components/ProgressBar'
  import { Divider, Popup } from 'vux'
  import { moneyList } from '@/config/money'
  import sectionTitle from '@/components/section/title'
  // 待删除
  import bq from '@/assets/img/bq.jpg'
  import jdx from '@/assets/img/jdx.jpg'
  export default {
    data () {
      return {
        bq,
        jdx,
        guessActive: false,
        moneyList,
        analysisList: [{
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
      handleGuessMoney (num) {
        this.$vux.alert.show({
          title: '竞猜成功',
          content: `投注${num}`,
          onShow () {
            console.log('Plugin: I\'m show now')
          },
          onHide () {
            console.log('Plugin: I\'m hiding now')
          }
        })
      }
    },
    components: {
      progressBar,
      Divider,
      Popup,
      sectionTitle
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
.guess-vertical-wrap
  height: 1.5rem
  display: flex
  flex-direction: row
  padding: 0.3rem
  justify-content: space-between
  .monoey-list
    ul
      list-style: none
      display: flex
      padding: 0
      margin: 0
      li
        width: 1.5rem
        height: 1.5rem
        margin-left: 0.08rem
        border: 1px solid $orange
        border-radius: 50%
        line-height: 1.5rem
        text-align: center
        background: $orange
        color: $white
</style>