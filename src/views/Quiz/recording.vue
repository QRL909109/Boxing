<!-- 竞猜记录 -->
<template>
  <div class="quiz-recording-wrap height100">
    <view-box ref="viewBox">
      <tab :line-width=2 active-color='#F44336' slot="header">
        <tab-item class="vux-center" v-for="(item, index) in recodingTabList" :selected="currentIndex === index + 1" @on-item-click="handleLink(item, index + 1)" :key="index">
          {{item.name}}
        </tab-item>
      </tab>
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
        <no-result desc="暂无记录" :show="recoding.length <= 0 "/>
      </div>
    </view-box>
   
  </div>
</template>
<script>
  import { Tab, TabItem, ViewBox, Divider } from 'vux'
  import quiz from '@/lib/api/quiz'
  import noResult from '@/components/Common/no-result'
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
          limit: 10,
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
    methods: {
      turnStatus (status) {
        return recodingTabList.filter(item => item.index)[0].name
      },
      // 点击获取数据
      handleLink (item, index) {
        this.currentIndex = index
        this.recoding = []
        if (this.recordingTempLits[index].length === 0) {
          this.conditions = Object.assign({}, {
            page: 1,
            limit: 10,
            flag: index
          })
          this.handleGetBetRecord()
        } else {
          this.recoding = this.recordingTempLits[index]
        }
      },
      handleGetBetRecord () {
        let {page, limit, flag} = this.conditions
        let queryData = {
          page,
          limit,
          flag
        }
        this.$vux.loading.show({ text: 'Loading' })
        quiz.GetBetRecord(queryData).then(data => {
          this.recoding = data.map(item => {
            item.record.matchName = `${item.match_info.blue.name} VS ${item.match_info.red.name}`
            item.record.betTime = item.match_info.info.game_end_time
            return item.record
          })
          this.recordingTempLits[flag] = this.recoding
          this.$vux.loading.hide()
        })
      }
    },
    created () {
      this.handleGetBetRecord()
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
      margin-bottom: 50px
</style>