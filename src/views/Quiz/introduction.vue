<!-- 选手信息 -->
<template>
  <div class="quiz-introduction">
    <blur :blur-amount=40 :url="url" :height="height">
      <div class="center">
        <img :src="url">
        <div class="intro">
          <div class="item">
            <p class="left">姓名: </p>
            <p>播求</p>
          </div>
          <div class="item">
            <p class="left">身高: </p>
            <p>178cm</p>
          </div>
          <div class="item">
            <p class="left">体重: </p>
            <p>67KG</p>
          </div>
          <div class="item">
            <p class="left">KO: </p>
            <p>30</p>
          </div>
          <div class="item">
            <p class="left">简介: </p>
            <p>他是赛场上的英雄他是赛场上的英雄他是赛场上的英雄他是赛场上的英雄他是赛场上的英雄他是赛场上的英雄他是赛场上的英雄他是赛场上的英雄他是赛场上的英雄他是赛场上的英雄他是赛场上的英雄他是赛场上的英雄他是赛场上的英雄他是赛场上的英雄他是赛场上的英雄</p>
          </div>
        </div>
      </div>
    </blur>
  </div>
</template>
<script>
  import { Blur } from 'vux'
  // 待删除
  import bq from '@/assets/img/bq.jpg'
  export default {
    data () {
      return {
        url: bq,
        height: 200
      }
    },
    components: {
      Blur
    },
    mounted () {
      this.height = document.getElementById('app').clientHeight
    }
  }
</script>
<style lang="sass">
@import '~assets/sass/mixin'
.quiz-introduction
  .center
    padding: 1.5rem 0.5rem
    color: #fff
    img
      width: 100px
      height: 100px
      border-radius: 50%
      border: 4px solid #ececec
  .intro
    margin-top: 0.5rem
    .item
      display: flex
      margin-bottom: 0.3rem
      +font-dpr(15px)
      line-height: 0.5rem
      .left
        margin-right: 0.2rem
        min-width: 1rem
</style>