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
            {{user.account}}
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
        <!-- <group>
          <x-button v-show="!user.isLoagin" type="default" @click.native="loginOut">退出登录</x-button>
        </group> -->
      </div>
    </view-box>
  </div>
</template>
<script>
  import addMoney from '@/components/AddMoney'
  import { Cell, Group, Badge, ViewBox, XButton } from 'vux'
  import { mapState } from 'vuex'
  export default {
    data () {
      return {
        msg: '个人中心',
        cellList: [{
          name: '消息',
          newNum: 0,
          icon: 'icon-weibiaoti--5',
          link: '/personal/info'
        }, {
          name: '竞猜记录',
          newNum: 0,
          icon: 'icon-weibiaoti--6',
          link: '/quiz/main/recording'
        }, {
          name: '金币记录',
          newNum: 0,
          icon: 'icon-weibiaoti--7',
          link: '/personal/coin'
        }, {
          name: '订单记录',
          newNum: 0,
          icon: 'icon-weibiaoti--8',
          link: '/personal/order'
        }],
        cellList2: [{
          name: '帮助中心',
          newNum: 0,
          icon: 'icon-weibiaoti--9',
          link: '/personal/help'
        }, {
          name: '反馈信息',
          newNum: 0,
          icon: 'icon-weibiaoti--10',
          link: '/personal/advice'
        }, {
          name: '联系客服',
          newNum: 0,
          icon: 'icon-weibiaoti--11',
          link: '/personal/contact'
        }, {
          name: '关于我们',
          newNum: 0,
          icon: 'icon-weibiaoti--12',
          link: '/personal/about'
        }, {
          name: '密码管理',
          newNum: 0,
          icon: 'icon-mima',
          link: '/updatePassword'
        }]
      }
    },
    components: {
      Group,
      Cell,
      Badge,
      addMoney,
      ViewBox,
      XButton
    },
    computed: {
      ...mapState({
        user: state => state.User
      })
    },
    created () {
      this.$store.dispatch('updateUser')
    },
    methods: {
      onClick (item) {
        this.$router.push({
          path: item.link
        })
      },
      handleEditName () {

      },
      loginOut () {
        console.log('退出')
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
    padding-top: 0.8rem
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
  .weui-btn_default
    background-color: $white
</style>