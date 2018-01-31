<!-- 金币记录 -->
<template>
  <div class="info-coin-wrap height100">
    <title-model title="金币记录"></title-model>
      <view-box ref="viewBox">
        <div style="margin-top: 0.2rem">
         <scroller lock-x :height="scrollHeight"
            ref="scrollerUpDown"
            :use-pulldown=true 
            :use-pullup=true
            :pulldown-config="pullDownConfig"
            :pullup-config="pullUpConfig"
            @on-pulldown-loading="onPullDown"  
            @on-pullup-loading="onPullUp">
            <swipeout> 
              <swipeout-item :disabled="disabled" v-for="(item, index) in infoList" :key="index" transition-mode="follow">
                <div slot="right-menu">
                  <swipeout-button @click.native="onButtonClick('delete')" background-color="#D43C33">删除</swipeout-button>
                </div>
                <div slot="content" class="swipe-flex vux-1px-t">
                  <div class="info-coin__text">
                    <p>{{item.opr_type | coinType}}</p>
                    <p class="time_desc">{{item.create_time * 1000 | dateFormat('yyyy-MM-dd hh:mm:ss')}}</p>
                  </div>
                  <div class="info-coin__money">
                    <span class="coin" :style="{color: handleChangeColor(item.opr_type)}">{{item.opr_type | coinAddDes}} {{item.coin}}</span>
                    <img src="./gold@2x.png" alt="">
                  </div>
                </div>
              </swipeout-item>
            </swipeout>
        </scroller>
        </div>
    </view-box>
  </div>
</template>
<script>
  import { ViewBox, Swipeout, SwipeoutItem, SwipeoutButton } from 'vux'
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
        },
        disabled: true
      }
    },
    mixins: [pullUpDown],
    methods: {
      onButtonClick (type) {
        console.log('on button click ' + type)
      },
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
      handleChangeColor (type) {
        let color = 'grey'
        switch (type) {
          case 1:
            color = 'grey'
            break
          case 2:
            color = 'red'
            break
          case 3:
            color = 'red'
            break
          case 4:
            color = 'grey'
            break
          default: type = 'grey'
        }
        return color
      },
      handleGetCoin (type = true) {
        let {page, limit} = this.conditions
        let queryData = {
          page,
          limit
        }
        this.$store.dispatch('updateLoadingStatus', {isLoading: true})
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
          this.$store.dispatch('updateLoadingStatus', {isLoading: false})
        }).catch(_ => {
          this.$store.dispatch('updateLoadingStatus', {isLoading: false})
        })
      }
    },
    created () {
      this.handleGetCoin()
    },
    mounted () {
      this.scrollHeight = `${document.getElementById('app').clientHeight - 30 - 50}px`
    },
    components: {
      titleModel,
      ViewBox,
      Swipeout,
      SwipeoutItem,
      SwipeoutButton
    }
  }
</script>
<style lang="sass">
  @import '~assets/sass/mixin'
  .info-coin-wrap
    .swipe-flex
      display: flex
      justify-content: space-between
      padding: 0.25rem 0.5rem
      align-items: center
      .info-coin__text
        .time_desc
          color: #999
          margin-top: 0.25rem
      .info-coin__money
        color: #333
        img
          width: 0.7rem
          vertical-align: middle
</style>
