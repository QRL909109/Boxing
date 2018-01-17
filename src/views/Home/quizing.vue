<!-- 竞猜 -->
<template>
  <div class="quiz-wrap">
    <scroller lock-x :height="scrollHeight"
      ref="scrollerUpDown"
      :use-pulldown=true 
      :use-pullup=true
      :pulldown-config="pullDownConfig"
      :pullup-config="pullUpConfig"
      @on-pulldown-loading="onPullDown"  
      @on-pullup-loading="onPullUp">
      <div class="content">
        <div class="quiz-model" v-for="(item, index) in quizList">
          <title-model :title="item.info.bet_end_time | dateFormat('yyyy-MM-dd')" path="/quiz/main/list">
            <div class="card-padding">
               <vs-model :data="item" :statusShow=true vsType="2" link="/quiz/main/game">
                <span slot="time"></span>
                 <div slot="footer" class="win-model">
                   <div class="deep-bule-bg bule">
                     <p>{{item.bet_infos[0].blue_odds}}</p>
                     <p>蓝胜</p>
                   </div>
                   <div class="red-bg red">
                     <p>{{item.bet_infos[0].red_odds}}</p>
                     <p>红胜</p>
                   </div>
                 </div>
               </vs-model>
            </div>
          </title-model>
        </div>
      </div>
      
    </scroller>
    <no-result desc="暂无赛事" :show="quizList.length <= 0 "/>
  </div>
</template>
<script>
  import { Card } from 'vux'
  import vsModel from '@/components/VSModel'
  import titleModel from '@/components/titleModel'
  import noResult from '@/components/Common/no-result'
  import pullUpDown from '@/mixin/pullUpDown'
  import home from '@/lib/api/home'
  export default {
    data () {
      return {
        quizList: [],
        conditions: {
          matchInfo: {
            page: 1,
            limit: 10,
            status: 1
          }
        }
      }
    },
    mixins: [pullUpDown],
    components: {
      Card,
      vsModel,
      titleModel,
      noResult
    },
    methods: {
      onPullDown () {
        this.conditions.matchInfo.page = 1
        this.handleGetMatchList()
        setTimeout(() => {
          this.$refs.scrollerUpDown.donePulldown() // 加载完成
          this.$refs.scrollerUpDown.reset({top: 0}) // 重新上高地
          this.$refs.scrollerUpDown.enablePullup() // 重置上拉加载
        }, 500)
      },
      onPullUp () {
        this.conditions.matchInfo.page += 1
        this.handleGetMatchList(false)
        this.$nextTick(() => {
          this.$refs.scrollerUpDown.donePullup()
          this.$refs.scrollerUpDown.reset()
        })
      },
      handleGetMatchList (type = true) {
        let {page, limit, status} = this.conditions.matchInfo
        const queryData = {
          page,
          limit,
          status
        }
        home.GetMatchList(queryData).then(data => {
          data = data || []
          // 判断是更新还是加载  默认更新
          if (type) {
            this.quizList = data
          } else {
            // 判断数据是否为空  禁止加载
            this.quizList.push(...data)
          }
          if (data.length === 0 || data.length < this.conditions.matchInfo.limit) {
            this.$refs.scrollerUpDown.disablePullup()
          }
        })
      }
    },
    created () {
      // 获取赛事信息
      this.handleGetMatchList()
    }
  }
</script>
<style lang="sass">
@import '~assets/sass/color'
.quiz-wrap
  padding-top: 0.4rem
  margin-bottom: 1rem
  .quiz-model
    margin-bottom: 0.3rem
    .win-model
      display: flex
      justify-content: center
      flex-direction: row
      color: #fff
      .deep-bule-bg
        background-color: $blue-600
      .bule, .red
        border-radius: 2px
        padding: 0.1rem 0.35rem
        margin-left: 0.2rem
        p
          margin-top: 0.05rem
    .weui-cell_link
      font-size: 12px
      text-align: center
</style>