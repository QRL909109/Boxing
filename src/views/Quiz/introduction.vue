<!-- 选手信息 -->
<template>
  <div class="quiz-introduction height100">
    <div class="center">
      <img :src="info.avatar" :alt="info.name" class="intro__avatar">
      <div class="intro">
        <div class="item">
          <p class="left">姓名: </p>
          <p>{{info.name}}</p>
        </div>
        <div class="item">
          <p class="left">国籍: </p>
          <p>
            <img :src="info.country_img" :alt="info.country_name" class="intro__country">{{info.country_name}}
          </p>
        </div>
        <div class="item">
          <p class="left">性别: </p>
          <p>{{info.sex}}</p>
        </div>
        <div class="item">
          <p class="left">年龄: </p>
          <p>{{info.age}}岁</p>
        </div>
        <div class="item">
          <p class="left">生日: </p>
          <p>{{info.birthday * 1000 | dateFormat('yyyy-mm-dd')}}</p>
        </div>
        <div class="item">
          <p class="left">身高: </p>
          <p>{{info.height}}cm</p>
        </div>
        <div class="item">
          <p class="left">体重: </p>
          <p>{{info.weight}}KG</p>
        </div>
        <div class="item">
          <p class="left">KO: </p>
          <p>{{info.ko_times}} 场</p>
        </div>
        <div class="item">
          <p class="left">胜利: </p>
          <p>{{info.win_times}} 场</p>
        </div>
        <div class="item">
          <p class="left">失败: </p>
          <p>{{info.fail_times}} 场</p>
        </div>
        <div class="item">
          <p class="left">简介: </p>
          <p>{{info.intro}}</p>
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
        query,
        info: {
          avatar: '',
          age: '',
          birthday: '',
          fail_times: '',
          ko_times: '',
          win_times: '',
          height: '',
          intro: '',
          name: '',
          sex: '',
          weight: '',
          country_name: '',
          country_img: ''
        }
      }
    },
    methods: {
      handleGetDetail () {
        this.$store.dispatch('updateLoadingStatus', {isLoading: true})
        quiz.GetBoxerDetail({
          id: this.query.id
        }).then(data => {
          this.info = {...data}
          this.$store.dispatch('updateLoadingStatus', {isLoading: false})
        }).catch(_ => {
          this.$store.dispatch('updateLoadingStatus', {isLoading: false})
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
  
  .center
    padding: 1.5rem 0.5rem
    background-color: $grey-800
    color: #fff
    margin-bottom: 50px
    .intro__avatar
      width: 100px
      height: 100px
      border-radius: 50%
      border: 4px solid #ececec
    .intro__country
      width: 0.8rem
      max-height: 0.5rem
      margin-right: 0.2rem
      vertical-align: middle
  .intro
    margin-top: 0.5rem
    .item
      display: flex
      margin-bottom: 0.3rem
      +font-dpr(14px)
      line-height: 0.65rem
      .left
        margin-right: 0.2rem
        min-width: 1.15rem
</style>