<!-- 个人中心 -->
<template>
  <div class="personal-info-wrap height100">
    <view-box ref="viewBox">
      <div class="person__info">
        <div class="person__tou">
          <img :src="user.avatar" alt="" class="img-tou">
        </div>
        <div class="person__name-money">
          <div class="money">
            <add-money :money="user.coin"/>
          </div>
          <div class="nick-name">
            {{user.username}}
            <!-- <i class="iconfont icon-bianji"></i> -->
          </div>
        </div>
      </div>
      <div class="person__list">
        <group>
          <template v-for="item in cellList">
            <cell  @click.native="onClick(item)" is-link>
              <span slot="title">
                <i class="iconfont" :class="item.icon"></i>
                <span class="name">{{item.name}}</span>
                <badge v-show="item.newNum" :text="item.newNum"></badge>
              </span>
            </cell>
          </template>
        </group>
        <group>
          <template v-for="item in cellList2">
            <cell  @click.native="onClick(item)" is-link>
              <span slot="title">
                <i class="iconfont" :class="item.icon"></i>
                <span class="name">{{item.name}}</span>
                <badge v-show="item.newNum" :text="item.newNum"></badge>
              </span>
            </cell>
          </template>
        </group>
      </div>
    </view-box>
  </div>
</template>
<script>
  import addMoney from '@/components/AddMoney'
  import { Cell, Group, Badge, ViewBox } from 'vux'
  import { mapState } from 'vuex'
  export default {
    data () {
      return {
        msg: '个人中心',
        cellList: [{
          name: '消息',
          newNum: 0,
          icon: 'icon-xinxi',
          link: '/personal/info'
        }, {
          name: '竞猜记录',
          newNum: 0,
          icon: 'icon-match',
          link: '/quiz/main/recording'
        }, {
          name: '金币记录',
          newNum: 0,
          icon: 'icon-chongzhi',
          link: '/personal/coin'
        }, {
          name: '订单记录',
          newNum: 0,
          icon: 'icon-dingdan',
          link: '/personal/order'
        }],
        cellList2: [{
          name: '帮助中心',
          newNum: 0,
          icon: 'icon-help',
          link: '/personal/help'
        }, {
          name: '反馈信息',
          newNum: 0,
          icon: 'icon-xinfeng',
          link: '/personal/advice'
        }, {
          name: '联系客服',
          newNum: 0,
          icon: 'icon-content',
          link: '/personal/contact'
        }, {
          name: '关于我们',
          newNum: 0,
          icon: 'icon-about',
          link: '/personal/about'
        }]
      }
    },
    components: {
      Group,
      Cell,
      Badge,
      addMoney,
      ViewBox
    },
    computed: {
      ...mapState({
        user: state => state.User
      })
    },
    methods: {
      onClick (item) {
        this.$router.push({
          path: item.link
        })
      },
      handleEditName () {

      }
    }
  }
</script>
<style lang="sass">
@import '~assets/sass/mixin'
@import '~assets/sass/color'
.personal-info-wrap
  .person__info
    display: flex
    flex-direction: column
    align-items: center
    background: $grey-800
    .person__tou
      justify-content: center
      padding: 1rem 0 0.5rem 0
      .img-tou
        width: 2.5rem
        border-radius: 50%
    .person__name-money
      display: inline-flex
      align-items: center
      padding-bottom: 0.5rem
      color: #dedede
      .nick-name
        margin-left: 1.2rem
        +font-dpr(16px)
  .person__list
    .name
      +font-dpr(14px)
    .iconfont
      +font-dpr(20px)
  .iconfont
    vertical-align: middle
</style>