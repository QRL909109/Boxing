<!-- 竞猜记录 -->
<template>
  <div class="quiz-recording-wrap height100">
    <view-box ref="viewBox">
      <tab :line-width=2 active-color='#F44336' slot="header">
        <tab-item class="vux-center" v-for="(item, index) in recodingTabList" :selected="currentIndex === index" @on-item-click="handleLink(item, index)" :key="index">
          {{item.name}}
        </tab-item>
      </tab>
      <div class="content">
        <div class="box-shadow-model" v-for="(item, index) in recoding">
          <p class="name">
            {{item.name}}
          </p>
          <divider>竞猜信息</divider>
          <div class="info-wrap">
            <div class="info">
              <p>竞猜编号: {{item.id}}</p>
              <p>参与时间: {{item.time}}</p>
              <p>消耗金币: {{item.money}}</p>
              <p>竞猜选项: {{item.choose}}</p>
              <p>预计开奖: {{item.open}}</p>
            </div>
            <div class="status bule-font">
              {{item.status}}
            </div>
          </div>
        </div>
      </div>
    </view-box>
   
  </div>
</template>
<script>
  import { Tab, TabItem, ViewBox, Divider } from 'vux'
  const recodingTabList = [{
    name: '待开奖',
    index: 0
  }, {
    name: '中奖',
    index: 1
  }, {
    name: '未中奖',
    index: 2
  }]
  export default {
    data () {
      return {
        recodingTabList,
        currentIndex: 0,
        content: '待开奖',
        recoding: [{
          name: '播求 VS 张俊志',
          status: '待开奖',
          id: '28292829194045889993',
          time: '2017.12.19 12:28',
          money: '300',
          choose: '播求胜',
          open: '12月29日'
        }],
        recordingTempLits: {
          0: [{
            name: '播求 VS 张俊志',
            status: '待开奖',
            id: '28292829194045889993',
            time: '2017.12.19 12:28',
            money: '300',
            choose: '播求胜',
            open: '12月29日'
          }],
          1: [{
            name: '张俊志 VS 播求',
            status: '中奖了',
            id: '28292829194045889993',
            time: '2017.12.25 12:28',
            money: '500',
            choose: '张俊志胜',
            open: '12月25日'
          }],
          2: [{
            name: 'XXX VS qqqq',
            status: '未中奖',
            id: '28292829194045889993',
            time: '2017.12.25 12:28',
            money: '500',
            choose: '张俊志胜',
            open: '12月25日'
          }, {
            name: 'WWWW VS eeee',
            status: '未中奖',
            id: '28292829194045889993',
            time: '2017.12.25 12:28',
            money: '500',
            choose: '张俊志胜',
            open: '12月25日'
          }]
        } // 缓存数据
      }
    },
    methods: {
      handleLink (item, index) {
        this.currentIndex = index
        this.recoding = this.recordingTempLits[index]
        this.$router.push({
          path: item.link
        })
      }
    },
    components: {
      Tab,
      TabItem,
      ViewBox,
      Divider
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
</style>