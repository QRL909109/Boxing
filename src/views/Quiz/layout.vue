<template>
  <div class="quiz-wapper height100">
    <!-- 头部 -->
    <div class="header">
      <add-money :money="user.money"/>
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
  import { mapState } from 'vuex'
  import addMoney from '@/components/AddMoney'
  export default {
    data () {
      return {
        headerList: [
        // {
        //   name: '首页',
        //   icon: 'icon-shouye',
        //   link: '/home'
        // },
          {
            name: '充值',
            icon: 'icon-chongzhi1',
            link: '/recharge'
          }, {
            name: '记录',
            icon: 'icon-jilu1',
            link: '/quiz/main/recording'
          }]
      }
    },
    methods: {
  
    },
    computed: {
      ...mapState({
        user: state => state.User
      })
    },
    components: {
      ViewBox,
      addMoney
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
    background-color: #161616
    color: #fdc72f
    
    .quiz-tab
      ul
        list-style: none
        display: flex
        padding: 0
        margin: 0
        li
          padding: 0.15rem 0.2rem
          .iconfont
            +font-dpr(16px)
            color: $orange-50
          .name
            color: $orange-50
</style>