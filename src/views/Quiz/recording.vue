<!-- 竞猜记录 -->
<template>
  <div class="quiz-recording-wrap height100">
    <view-box ref="viewBox">
      <tab :line-width=2 active-color='#F44336' slot="header">
        <tab-item class="vux-center" v-for="(item, index) in recodingTabList" :selected="currentIndex === index + 1" @on-item-click="handleLink(item, index + 1)" :key="index">
          {{item.name}}
        </tab-item>
      </tab>
        <scroller lock-x :height="scrollHeight"
          ref="scrollerUpDown"
          :use-pulldown=true 
          :use-pullup=true
          :pulldown-config="pullDownConfig"
          :pullup-config="pullUpConfig"
          @on-pulldown-loading="onPullDown"  
          @on-pullup-loading="onPullUp">
            <div class="content">
              <div class="box-shadow-model" v-for="(item, index) in recoding">
                <p class="name">
                  {{item.matchName}}
                </p>
                <divider>竞猜信息</divider>
                <div class="info-wrap">
                  <div class="info">
                    <p>竞猜编号: {{item.bet_record_id}}</p>
                    <p>参与时间: {{item.bet_time*1000 | dateFormat('yyyy-mm-dd hh-mm')}}</p>
                    <p>消耗金币: {{item.bet_amount}}</p>
                    <p>竞猜选项: {{item.bet_option | turnName}} 方胜</p>
                    <p>预计开奖: {{item.betTime*1000 | dateFormat('yyyy-mm-dd hh-mm')}}</p>
                  </div>
                  <div class="status bule-font">
                    {{turnStatus(item.winner_flag)}}
                  </div>
                </div>
              </div>
            </div>
        </scroller>
      <no-result desc="暂无记录" :show="recoding.length <= 0 "/>
    </view-box>
  </div>
</template>
<script>
  import { Tab, TabItem, ViewBox, Divider } from 'vux'
  import quiz from '@/lib/api/quiz'
  import noResult from '@/components/Common/no-result'
  import pullUpDown from '@/mixin/pullUpDown'
  const recodingTabList = [{
    name: '待开奖',
    index: 1
  }, {
    name: '中奖',
    index: 2
  }, {
    name: '未中奖',
    index: 3
  }]
  export default {
    data () {
      return {
        recodingTabList,
        currentIndex: 1,
        conditions: {
          page: 1,
          limit: 5,
          flag: 1
        },
        recoding: [],
        recordingTempLits: {
          1: [],
          2: [],
          3: []
        } // 缓存数据
      }
    },
    mixins: [pullUpDown],
    methods: {
      turnStatus (status) {
        return recodingTabList.filter(item => item.index === status)[0].name
      },
      onPullDown () {
        this.conditions.page = 1
        this.handleGetBetRecord()
        setTimeout(() => {
          this.$refs.scrollerUpDown.donePulldown() // 加载完成
          this.$refs.scrollerUpDown.reset({top: 0}) // 重新上高地
          this.$refs.scrollerUpDown.enablePullup() // 重置上拉加载
        }, 500)
      },
      onPullUp () {
        this.conditions.page += 1
        this.handleGetBetRecord(false)
        this.$nextTick(() => {
          this.$refs.scrollerUpDown.donePullup()
          this.$refs.scrollerUpDown.reset()
        })
      },
      // 点击获取数据
      handleLink (item, index) {
        this.currentIndex = index
        this.recoding = []
        this.conditions = Object.assign({}, {
          page: 1,
          limit: 10,
          flag: index
        })
        if (this.recordingTempLits[index].length === 0) {
          this.handleGetBetRecord()
        } else {
          this.recoding = this.recordingTempLits[index]
        }
      },
      handleGetBetRecord (type = true) {
        let {page, limit, flag} = this.conditions
        let queryData = {
          page,
          limit,
          flag
        }
        this.$store.dispatch('updateLoadingStatus', {isLoading: true})
        quiz.GetBetRecord(queryData).then(data => {
          let tempData = data.map(item => {
            item.record.matchName = `${item.match_info.blue.name} VS ${item.match_info.red.name}`
            item.record.betTime = item.match_info.info.game_end_time
            return item.record
          })

          if (type) {
            this.recoding = tempData
          } else {
            // 判断数据是否为空  禁止加载
            this.recoding.push(...tempData)
          }
          this.recordingTempLits[flag] = this.recoding
          if (tempData.length === 0 || tempData.length < this.conditions.limit) {
            this.$refs.scrollerUpDown.disablePullup()
          }
          this.$store.dispatch('updateLoadingStatus', {isLoading: false})
        }).catch(_ => {
          this.$store.dispatch('updateLoadingStatus', {isLoading: false})
        })
      }
    },
    created () {
      this.handleGetBetRecord()
    },
    mounted () {
      // 充值头部 40， 开奖 44，底部 50
      this.scrollHeight = `${document.getElementById('app').clientHeight - 40 - 44 - 50}px`
    },
    components: {
      Tab,
      TabItem,
      ViewBox,
      Divider,
      noResult
    }
  }
</script>
<style lang="sass">
  @import '~assets/sass/mixin'
  @import '~assets/sass/color'
  .quiz-recording-wrap
    .name
      +font-dpr(18px)
    .info-wrap
      display: flex
      justify-content: space-between
      align-items: center
      .info
        line-height: 0.5rem
      .status
    .content
      margin-bottom: 350px
</style>