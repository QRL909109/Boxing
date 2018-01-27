<!-- 竞猜记录 -->
<template>
  <div class="ranking-wrap height100">
    <view-box ref="viewBox">
      <tab :line-width=2 active-color='#F44336' slot="header">
        <tab-item class="vux-center" v-for="(item, index) in rankingTabList" :selected="currentIndex === index + 1" @on-item-click="handleLink(index + 1)" :key="index">
          {{item.name}}
        </tab-item>
      </tab>
      <div class="ranking__content" v-show="ranking.length > 0">
        <x-table :cell-bordered="false">
          <thead>
            <tr>
              <th>排行</th>
              <th>微信昵称</th>
              <th>总排行</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in ranking">
              <td>
                <span v-if="index <= 2" class="ranking__icon" :class="`icon_${index + 1}`"></span>
                <span v-else>{{index + 1}}</span>
              </td>
              <td class="nick-name">
                <div class="nick">
                  <img :src="item.avatar" alt="item.username" class="img-radio">
                  <span>{{item.username}}</span>
                </div>
              </td>
              <td>{{item.bet_amount || item.coin || item.total_amount || '0'}}金币</td>
            </tr>
          </tbody>
        </x-table>
      </div>
      <no-result desc="暂无记录" :show="ranking.length <= 0 "/>
    </view-box>
  </div>
</template>
<script>
  import { Tab, TabItem, ViewBox, XTable } from 'vux'
  import noResult from '@/components/Common/no-result'
  import home from '@/lib/api/home'
  const rankingTabList = [{
    name: '竞猜排行',
    index: 1
  }, {
    name: '盈利排行',
    index: 2
  }, {
    name: '财富排行',
    index: 3
  }]
  export default {
    data () {
      return {
        rankingTabList,
        currentIndex: 1,
        ranking: []
      }
    },
    methods: {
      // 点击获取数据
      handleLink (index) {
        this.currentIndex = index
        this.ranking = []
        this.$store.dispatch('updateLoadingStatus', {isLoading: true})
        switch (index) {
          case 1:
            this.handleGetBetRanking()
            break
          case 2:
            this.handleGetWinRanking()
            break
          case 3:
            this.handleGetCoinRanking()
            break
          default:
            this.handleGetBetRanking()
            break
        }
      },
      handleGetBetRanking () {
        home.GetRankBet({}).then(data => {
          this.ranking = data
          this.$store.dispatch('updateLoadingStatus', {isLoading: false})
        }).catch(_ => {
          this.$store.dispatch('updateLoadingStatus', {isLoading: false})
        })
      },
      handleGetWinRanking () {
        home.GetRankWin({}).then(data => {
          this.ranking = data
          this.$store.dispatch('updateLoadingStatus', {isLoading: false})
        }).catch(_ => {
          this.$store.dispatch('updateLoadingStatus', {isLoading: false})
        })
      },
      handleGetCoinRanking () {
        home.GetRankCoin({}).then(data => {
          this.ranking = data
          this.$store.dispatch('updateLoadingStatus', {isLoading: false})
        }).catch(_ => {
          this.$store.dispatch('updateLoadingStatus', {isLoading: false})
        })
      }
    },
    created () {
      this.handleLink(1)
    },
    components: {
      Tab,
      TabItem,
      ViewBox,
      XTable,
      noResult
    }
  }
</script>
<style lang="sass">
  @import '~assets/sass/mixin'
  @import '~assets/sass/color'
  .ranking-wrap
    .ranking__content
      background-color: $white
      margin-top: 0.4rem
      .nick-name
        text-align: left
        .nick
          width: 70%
          margin: 0 auto
          img
            width: 0.8rem
            vertical-align: middle
            margin-right: 0.2rem
      .ranking__icon
        display: inline-block
        vertical-align: top
        width: 2rem
        height: 40px
        background-size: 2rem 40px
        background-repeat: no-repeat
        &.icon_1
          background-image: url('../../assets/img/1000@2x.png')
        &.icon_2
          background-image: url('~assets/img/2000@2x.png')
        &.icon_3
          background-image: url('~assets/img/500@2x.png')
</style>