<!-- 金币记录 -->
<template>
  <div class="info-coin-wrap height100">
    <title-model title="金币记录"></title-model>
      <view-box ref="viewBox">
       <scroller lock-x :height="scrollHeight"
          ref="scrollerUpDown"
          :use-pulldown=true 
          :use-pullup=true
          :pulldown-config="pullDownConfig"
          :pullup-config="pullUpConfig"
          @on-pulldown-loading="onPullDown"  
          @on-pullup-loading="onPullUp">
        <group>
          <cell v-for="(item, index) in infoList" :key="index" :inline-desc="item.create_time * 1000 | dateFormat()">
            <span slot="title">{{item.opr_type | coinType}}</span>
            <div class="info-coin__money">
              <img src="./gold@2x.png" alt="">
              <span class="coin">{{item.opr_type | coinAddDes}} {{item.coin}}</span>
            </div>
          </cell>
        </group>
      </scroller>
    </view-box>
  </div>
</template>
<script>
  import { Group, Cell, ViewBox } from 'vux'
  import personal from '@/lib/api/personal'
  import titleModel from '@/components/titleModel'
  import pullUpDown from '@/mixin/pullUpDown'
  export default {
    data () {
      return {
        infoList: [],
        conditions: {
          page: 1,
          limit: 10
        }
      }
    },
    mixins: [pullUpDown],
    methods: {
      onPullDown () {
        this.conditions.page = 1
        this.handleGetCoin()
        setTimeout(() => {
          this.$refs.scrollerUpDown.donePulldown() // 加载完成
          this.$refs.scrollerUpDown.reset({top: 0}) // 重新上高地
          this.$refs.scrollerUpDown.enablePullup() // 重置上拉加载
        }, 500)
      },
      onPullUp () {
        this.conditions.page += 1
        this.handleGetCoin(false)
        this.$nextTick(() => {
          this.$refs.scrollerUpDown.donePullup()
          this.$refs.scrollerUpDown.reset()
        })
      },
      handleGetCoin (type = true) {
        let {page, limit} = this.conditions
        let queryData = {
          page,
          limit
        }
        personal.GetCoinMy(queryData).then(data => {
          // 判断是更新还是加载  默认更新
          if (type) {
            this.infoList = data
          } else {
            // 判断数据是否为空  禁止加载
            this.infoList.push(...data)
          }
          if (data.length === 0 || data.length < this.conditions.limit) {
            this.$refs.scrollerUpDown.disablePullup()
          }
        })
      }
    },
    created () {
      this.handleGetCoin()
    },
    components: {
      Group,
      Cell,
      titleModel,
      ViewBox
    }
  }
</script>
<style lang="sass">
  @import '~assets/sass/mixin'
  .info-coin-wrap
    .weui-cells
      margin-top: 0.25rem
      margin-bottom: 50px
      .weui-cell
        padding: 0.18rem 0.35rem
        .info-coin__money
          color: #333
          img
            width: 0.7rem
            vertical-align: bottom
        .vux-label-desc
          color: #999999
</style>
