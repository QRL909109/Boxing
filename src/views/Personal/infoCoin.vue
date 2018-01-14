<!-- 金币记录 -->
<template>
  <div class="info-coin-wrap height100">
    <title-model title="金币记录"></title-model>
    <view-box ref="viewBox">
      <group>
        <cell v-for="(item, index) in infoList" :key="index" :inline-desc="item.create_time * 1000 | dateFormat()">
          <span slot="title">{{item.opr_type | coinType}}</span>
          <div class="info-coin__money">
            <img src="./gold@2x.png" alt="">
            <span class="coin">{{item.opr_type | coinAddDes}} {{item.coin}}</span>
          </div>
        </cell>
      </group>
    </view-box>
    
  </div>
</template>
<script>
  import { Group, Cell, ViewBox } from 'vux'
  import personal from '@/lib/api/personal'
  import titleModel from '@/components/titleModel'
  export default {
    data () {
      return {
        infoList: []
      }
    },
    methods: {
      handleGetCoin () {
        let queryData = {
          page: 1,
          limit: 50
        }
        personal.GetCoinMy(queryData).then(data => {
          console.log(223311, data)
          this.infoList = data
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
