<template>
  <div class="quiz-wapper height100">
    <!-- 头部 -->
    <div class="header">
      <div class="self-maony">
        <img class="glod-icon" src="../../assets/img/gold@2x.png" alt="">
        <span class="money"> 325</span>
        <i class="iconfont icon-add_c add" @click="handleAddMoney"></i>
      </div>
      <div class="quiz-tab">
        <ul>
          <li v-for="(item, index) in headerList" class="text-center">
            <router-link :to="item.link">
              <i class="iconfont" :class="item.icon"></i>
              <span class="name">
                {{item.name}}
              </span>
            </router-link>
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
        headerList: [{
          name: '首页',
          icon: 'icon-shouye',
          link: '/home'
        }, {
          name: '充值',
          icon: 'icon-chongzhi',
          link: '/recharge'
        }, {
          name: '记录',
          icon: 'icon-jilu',
          link: '/quiz/recording'
        }]
      }
    },
    methods: {
      handleAddMoney () {
        this.$router.push({
          path: '/recharge'
        })
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
    align-items: center
    height: 1.06rem
    background-color: #262626
    color: #fdc72f
    .self-maony
      height: 0.7rem
      background-color: #000
      border-radius: 0.3rem
      margin-left: 0.1rem
      padding: 0 0.2rem
      display: flex
      align-items: center
      .glod-icon
        width: 0.5rem
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
          .iconfont
            +font-dpr(18px)
          span
            color: #fdc72f
</style>