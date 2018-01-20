<!-- 具体选手比赛 -->
<template>
  <div class="quiz-game">
    <div class="game-header">
      <flexbox class="header-content" :gutter="0">
        <flexbox-item :span="1/3">
          <div class="flex-demo">
            <div class="box left">
              <router-link :to="`/quiz/main/introduction?id=${analysisInfo.blue.id}`">
                <img class="header-img" :src="analysisInfo.blue.avatar" :alt="analysisInfo.blue.name">
                <p>
                  <span class="bule-font">蓝方</span>
                  <span class="font-white"> | </span>
                  <span class="font-white">{{analysisInfo.blue.name}}</span>
                </p>
                <img :src="analysisInfo.blue.country_img" alt="analysisInfo.blue.country_name" class="icon-countries">
              </router-link>
            </div>
          </div>
        </flexbox-item>
        <flexbox-item :span="1/3">
          <div class="flex-demo box-center">
            <div class="box">
              <p class="vs">VS</p>
              <p>{{analysisInfo.info.station_name}}</p>
              <p>{{analysisInfo.info.kg_level}}KG搏击</p>
            </div>
          </div>
        </flexbox-item>
        <flexbox-item :span="1/3">
          <div class="flex-demo">
            <div class="box right">
              <router-link :to="`/quiz/main/introduction?id=${analysisInfo.red.id}`">
                <img class="header-img" :src="analysisInfo.red.avatar" :alt="analysisInfo.red.name">
                <p>
                  <span class="red-font">红方</span>
                  <span class="font-white"> | </span>
                  <span class="font-white">{{analysisInfo.red.name}}</span>
                </p>
                <img :src="analysisInfo.red.country_img" :alt="analysisInfo.red.country_name" class="icon-countries">
              </router-link>
            </div>
          </div>
        </flexbox-item>
      </flexbox>
    </div>
    <!-- 竞猜 -->
    <div class="guess-wrap">
      <title-model title="猜胜负" :showBottomBorder=true>
        <div class="bg">
          <div class="all-money">
            <img class="glod-icon" src="~/assets/img/gold@2x.png" alt="">
            <span class="money">{{ parseInt(analysisInfo.bet_info.blue_odds_amount + analysisInfo.bet_info.red_odds_amount) }}</span>
          </div>
          <div class="time">
            截止时间: {{analysisInfo.info.bet_end_time * 1000 | dateFormat('yyyy-mm-dd')}}
          </div>
        </div>
        <div class="result">
          <div class="btn text-center bule-bg" @click="handleGuess('blue', analysisInfo.blue.name)">
            <p>{{analysisInfo.bet_info.blue_odds}}</p>
            <p>{{analysisInfo.blue.name}}</p>
          </div>
          <div class="btn text-center red-50-bg" @click="handleGuess('red', analysisInfo.red.name)">
            <p>{{analysisInfo.bet_info.red_odds}}</p>
            <p>{{analysisInfo.red.name}}</p>
          </div>
        </div>
      </title-model>
    </div>
    <!-- 数据 -->
    <div class="guess-wrap">
      <title-model title="数据" :showBottomBorder=true>
        <div class="analysis">
          <div class="data">
            <div class="progress" v-for="(item, index) in playerInfo">
              <progress-bar :data="item"/>
            </div>
          </div>
        </div>
      </title-model>
    </div>

    <!-- 竞猜投钱 -->
    <betting :active="guessActive" @on-betting="handleBetting" @on-hide="handleHideBetting"/>
  </div>
</template>
<script>
  import progressBar from '@/components/ProgressBar'
  import { Divider, Flexbox, FlexboxItem } from 'vux'
  import betting from '@/components/Betting'
  import titleModel from '@/components/titleModel'
  import { mapState } from 'vuex'
  import quiz from '@/lib/api/quiz'
  // 待删除
  import bq from '@/assets/img/bq.jpg'
  import jdx from '@/assets/img/jdx.jpg'
  export default {
    data () {
      const query = this.$route.query
      return {
        bq,
        jdx,
        query,
        guessActive: false,
        analysisInfo: {
          blue: {},
          red: {},
          info: {},
          bet_info: {}
        },
        playerInfo: [],
        bettingInfo: {} // 投注信息
      }
    },
    methods: {
      handleGuess (type, name) {
        this.bettingInfo = Object.assign(this.bettingInfo, {
          type,
          name
        })
        this.guessActive = true
      },
      handleHideBetting () {
        this.guessActive = false
      },
      handleIntro () {
        this.$router.push({
          path: '/quiz/introduction'
        })
      },
      /**
       * [handleGetMatchList 获得数据进行拼接]
       * @return {[type]} [description]
       */
      handleGetMatchList () {
        const queryData = {
          id: this.query.id
        }
        this.$store.dispatch('updateLoadingStatus', {isLoading: true})
        quiz.GetMatchDetail(queryData).then(data => {
          this.playerInfo = []
          this.analysisInfo = data
          this.analysisInfo.bet_info = data.bet_infos.filter(item => item.bet_type === 1)[0]
          this.playerInfo.push({
            red: {
              name: '身高',
              value: data.red.height
            },
            blue: {
              name: '身高',
              value: data.blue.height
            }
          }, {
            red: {
              name: '体重',
              value: data.red.weight
            },
            blue: {
              name: '体重',
              value: data.blue.weight
            }
          }, {
            red: {
              name: '年龄',
              value: data.red.age
            },
            blue: {
              name: '年龄',
              value: data.blue.age
            }
          }, {
            red: {
              name: '获胜',
              value: data.red.win_times
            },
            blue: {
              name: '获胜',
              value: data.blue.win_times
            }
          }, {
            red: {
              name: 'KO',
              value: data.red.ko_times
            },
            blue: {
              name: 'KO',
              value: data.blue.ko_times
            }
          }, {
            red: {
              name: '失败',
              value: data.red.fail_times
            },
            blue: {
              name: '失败',
              value: data.blue.fail_times
            }
          })
          this.$store.dispatch('updateLoadingStatus', {isLoading: false})
        }).catch(_ => {
          this.$store.dispatch('updateLoadingStatus', {isLoading: false})
        })
      },
      /**
       * [handleSuccessBetting 调用投注接口]
       * @return {[type]} [description]
       */
      handleSuccessBetting () {
        let queryData = {
          game_id: this.query.id,
          guess: this.bettingInfo.type,
          coin: this.bettingInfo.coin,
          bet_type: 1
        }
        let _this = this
        quiz.PostBetGame(queryData).then(data => {
          this.$vux.alert.show({
            title: '投注成功',
            content: `<p>投注: ${_this.bettingInfo.name} ${this.bettingInfo.coin} 金币</p>`
          })
        })
      },
      /**
       * [进行投注之前的判断金币]
       * @param  {[type]} num [金币]
       * @return {[type]}     [description]
       */
      handleBetting (num) {
        let _this = this
        if (this.user.coin < num) {
          this.$vux.alert.show({
            title: '金币不足，请及时充值！',
            content: `投注${num}`,
            onHide () {
              _this.$router.push({
                path: '/recharge'
              })
            }
          })
        } else {
          this.bettingInfo.coin = num // 投注金币
          this.handleSuccessBetting()
        }
      }
    },
    computed: {
      ...mapState({
        user: state => state.User
      })
    },
    created () {
      // 获取赛事信息
      this.handleGetMatchList()
    },
    components: {
      progressBar,
      Divider,
      titleModel,
      betting,
      Flexbox,
      FlexboxItem
    }
  }
</script>
<style lang="sass">
@import '~assets/sass/mixin'
@import '~assets/sass/color'
@import '~assets/sass/var'
.quiz-game
  .game-header
    width: 100%
    height: 5rem
    background-image: url("../../assets/img/quiz_bg@2x.jpg")
    background-size: 100% 5rem
    background-repeat: no-repeat
    .header-content
      height: 5rem
      line-height: 5rem
      .flex-demo
        text-align: center
        color: #fff
        border-radius: 4px
        background-clip: padding-box
        .box
          line-height: 1.5
          .header-img
            width: 2.66rem
            height: 2.66rem
            border-radius: 50%
            vertical-align: middle
          span
            font-size: 0.4rem
            font-weight: 600
          .font-white
            color: #fff
          .icon-countries
            margin-top: 0.2rem
            width: 30px
      .flex-demo.box-center
        .box>p:first-child
          font-size: 0.7rem
  .guess-wrap
    padding: 0.1rem 0 0.3rem 0
    margin-bottom: 0.4rem
    background-color: #fff
    .bg
      display: flex
      align-items: center
      +font-dpr(13px)
      .all-money
        +font-dpr(20px)
        margin-right: $spacing
        .glod-icon
          width: 20px
      .time
        color: $grey-600
    .result
      display: flex
      justify-content: center
      margin-top: $spacing
      margin-bottom: $spacing
      .btn
        width: 2rem
        color: $white
        padding: 0.3rem 0.7rem
        margin: 0 0.3rem
        border-radius: 4px
        +font-dpr(16px)
        line-height: 0.6rem
        &:first-child
          background-color: $blue-600
        &:last-child
          background-color: $red
        &.active
          background: $blue-grey-500
    .analysis
      padding: 0.2rem 0.3rem
      .data
        .progress
          margin-bottom: $spacing    
</style>