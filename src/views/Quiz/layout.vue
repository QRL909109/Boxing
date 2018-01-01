<template>
  <div class="quiz-wapper height100">
    <!-- 头部 -->
    <div class="header">
      <div class="self-maony">
        <i class="iconfont icon-jinbi jinbi"></i> 
        <span class="money"> 325</span>
        <i class="iconfont icon-add_c add"></i>
      </div>
      <div class="quiz-tab">
        <ul>
          <li v-for="(item, index) in headerList">
            {{item}}
          </li>
        </ul>
      </div>
    </div>
    <view-box ref="viewBox">
      <router-view />
    </view-box>
  </div>
</template>
<script>
  import { ViewBox } from 'vux'
  export default {
    data () {
      return {
        headerList: ['首页', '充值', '记录']
      }
    },
    components: {
      ViewBox
    }
  }
</script>
<style lang="sass">
@import '~assets/sass/color'
@import '~assets/sass/mixin'
.quiz-wapper
  .header
    display: flex
    justify-content: space-between
    align-self: center
    margin: 0.4rem 0
    .self-maony
      height: 0.7rem
      background-color: rgba(0,0,0,.1)
      border-radius: 0.3rem
      margin-left: 0.8rem
      padding: 0 0.2rem
      display: flex
      align-items: center
      .money
        margin-left: 0.1rem
        +font-dpr(18px)
      .add
        color: $blue
        margin-left: 0.1rem
    .quiz-tab
      ul
        list-style: none
        display: flex
        padding: 0
        margin: 0
        li
          padding: 0.15rem 0.5rem
</style>