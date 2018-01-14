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
        <no-result desc="暂无记录" :show="infoList.length <= 0 "/>
      </div>
    </view-box>
    
  </div>
</template>
<script>
  import { Group, Cell, ViewBox, Tab, TabItem } from 'vux'
  import personal from '@/lib/api/personal'
  import titleModel from '@/components/titleModel'
  import noResult from '@/components/Common/no-result'
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
      handleGetOrder () {
        let {page, limit, opr_type} = this.conditions
        let queryData = {
          page,
          limit,
          opr_type
        }
        this.$vux.loading.show({ text: 'Loading' })
        personal.GetOrderMy(queryData).then(data => {
          console.log(223311, data)
          this.infoList = data
          this.$vux.loading.hide()
        })
      }
    },
    created () {
      this.handleGetOrder()
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
