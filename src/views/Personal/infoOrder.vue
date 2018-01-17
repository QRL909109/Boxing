<!-- 订单记录 -->
<template>
  <div class="info-order-wrap height100">
    <title-model title="订单记录"></title-model>
    <view-box ref="viewBox">
      <tab :line-width=2 active-color='#F44336' slot="header">
        <tab-item class="vux-center" v-for="(item, index) in orderTypeList" :selected="currentIndex === index + 1" @on-item-click="handleLink(item, index + 1)" :key="index">
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
          <div class="box-shadow-model" v-for="(item, index) in infoList">
            <div class="info-wrap">
              <div class="info">
                <p>编号: {{item.id}}</p>
                <p v-show="item.opr_type === 1">金币数量: {{item.coin_num}}</p>
                <p v-show="item.opr_type === 2">金额: {{item.amount}}</p>
                <p>操作时间: {{item.opr_time * 1000 | dateFormat('yyyy-mm-dd hh-mm')}}</p>
                <p v-show="item.status === 2">确认时间: {{item.confirm_time * 1000 | dateFormat('yyyy-mm-dd hh-mm')}}</p>
              </div>
              <div class="status bule-font">
                {{item.status | orderType}}
              </div>
            </div>
          </div>
        </div>
      </scroller>
        <no-result desc="暂无记录" :show="infoList.length <= 0 "/>
    </view-box>
    
  </div>
</template>
<script>
  import { Group, Cell, ViewBox, Tab, TabItem } from 'vux'
  import personal from '@/lib/api/personal'
  import titleModel from '@/components/titleModel'
  import noResult from '@/components/Common/no-result'
  import pullUpDown from '@/mixin/pullUpDown'
  const orderTypeList = [{
    name: '充值',
    index: 1
  }, {
    name: '提取',
    index: 2
  }]
  export default {
    data () {
      return {
        orderTypeList,
        infoList: [],
        currentIndex: 1,
        conditions: {
          page: 1,
          limit: 10,
          opr_type: 1
        }
      }
    },
    mixins: [pullUpDown],
    methods: {
      handleLink (item, index) {
        this.currentIndex = index
        this.conditions = Object.assign({}, {
          page: 1,
          limit: 10,
          opr_type: index
        })
        this.handleGetOrder()
      },
      onPullDown () {
        this.conditions.page = 1
        this.handleGetOrder()
        setTimeout(() => {
          this.$refs.scrollerUpDown.donePulldown() // 加载完成
          this.$refs.scrollerUpDown.reset({top: 0}) // 重新上高地
          this.$refs.scrollerUpDown.enablePullup() // 重置上拉加载
        }, 500)
      },
      onPullUp () {
        this.conditions.page += 1
        this.handleGetOrder(false)
        this.$nextTick(() => {
          this.$refs.scrollerUpDown.donePullup()
          this.$refs.scrollerUpDown.reset()
        })
      },
      handleGetOrder (type = true) {
        let {page, limit, opr_type} = this.conditions
        let queryData = {
          page,
          limit,
          opr_type
        }
        this.$vux.loading.show({ text: 'Loading' })
        personal.GetOrderMy(queryData).then(data => {
          if (type) {
            this.infoList = data
          } else {
            // 判断数据是否为空  禁止加载
            this.infoList.push(...data)
          }
          if (data.length === 0 || data.length < this.conditions.limit) {
            this.$refs.scrollerUpDown.disablePullup()
          }
          this.$vux.loading.hide()
        })
      }
    },
    created () {
      this.handleGetOrder()
    },
    mounted () {
      // 充值头部 40， 开奖 44，底部 50
      this.scrollHeight = `${document.getElementById('app').clientHeight - 40 - 44 - 50}px`
    },
    components: {
      Group,
      Cell,
      titleModel,
      ViewBox,
      Tab,
      TabItem,
      noResult
    }
  }
</script>
<style lang="sass">
  @import '~assets/sass/mixin'
  @import '~assets/sass/color'
  .info-order-wrap
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
