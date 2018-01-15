<!-- 选手信息 -->
<template>
  <div class="quiz-introduction height100">
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
  </div>
</template>
<script>
  // 待删除
  import quiz from '@/lib/api/quiz'
  export default {
    data () {
      const query = this.$route.query
      return {
        query
      }
    },
    methods: {
      handleGetDetail () {
        quiz.GetBoxerDetail({
          id: this.query.id
        }).then(data => {
          console.log(3333, data)
        })
      }
    },
    created () {
      this.handleGetDetail()
    }
  }
</script>
<style lang="sass">
@import '~assets/sass/mixin'
@import '~assets/sass/color'
.quiz-introduction
  background-color: $grey-800
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
      +font-dpr(14px)
      line-height: 0.5rem
      .left
        margin-right: 0.2rem
        min-width: 1rem
</style>