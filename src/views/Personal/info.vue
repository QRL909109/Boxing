<!-- 消息中心 -->
<template>
  <div class="info-center-wrap">
    <title-model title="消息记录"></title-model>
    <view-box ref="viewBox">
      <tab :line-width=2 active-color='#F44336' slot="header">
        <tab-item class="vux-center" v-for="(item, index) in infoTypeList" :selected="currentIndex === item.id" @on-item-click="handleLink(item)" :key="index">
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
         <group>
            <cell v-for="(item, index) in infoList" :key="index" :inline-desc="item.msg_content" :value="item.create_time * 1000 | dateFormat">
              <!-- <span slot="title">{{item.title}}</span> -->
            </cell>
          </group>
        </div>
      </scroller>
        <no-result desc="暂无记录" :show="infoList.length <= 0 "/>
    </view-box>
  </div>
</template>
<script>
 import { Group, Cell, ViewBox, Tab, TabItem } from 'vux'
 import info from '@/lib/api/info'
 import titleModel from '@/components/titleModel'
 import noResult from '@/components/Common/no-result'
 import pullUpDown from '@/mixin/pullUpDown'
 const infoTypeList = [{ // 1.全局消息2.轮播消息3.个人中奖消息
   name: '个人',
   id: 3
 }, {
   name: '全网',
   id: 1
 }]
 export default {
   data () {
     return {
       infoTypeList,
       infoList: [],
       currentIndex: 3,
       conditions: {
         page: 1,
         limit: 10,
         msg_type: 3
       }
     }
   },
   mixins: [pullUpDown],
   methods: {
     handleLink (item) {
       this.currentIndex = item.id
       this.conditions = Object.assign({}, {
         page: 1,
         limit: 10,
         msg_type: item.id
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
       let {page, limit, msg_type} = this.conditions
       let queryData = {
         page,
         limit,
         msg_type
       }
       this.$store.dispatch('updateLoadingStatus', {isLoading: true})
       info.GetMsgList(queryData).then(data => {
         if (type) {
           this.infoList = data
         } else {
            // 判断数据是否为空  禁止加载
           this.infoList.push(...data)
         }
         if (data.length === 0 || data.length < this.conditions.limit) {
           this.$refs.scrollerUpDown.disablePullup()
         }
         this.$store.dispatch('updateLoadingStatus', {isLoading: false})
       }).catch(_ => {
         this.$store.dispatch('updateLoadingStatus', {isLoading: false})
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
  .info-center-wrap
    margin-bottom: 50px
    .weui-cells
      margin-top: 0.25rem
      .weui-cell__ft
       +font-dpr(14px)
</style>
