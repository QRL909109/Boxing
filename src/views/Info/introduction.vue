<!-- 选手信息 -->
<template>
  <div class="quiz-introduction height100">
    <view-box ref="viewBox">
      <div class="intro__info" ref="introInfo">
        <div class="intro__tou">
          <img :src="info.avatar" alt="" class="img-tou">
        </div>
        <div class="intro__mark">
          <img :src="info.country_img" :alt="info.country_name" class="intro__mark__icon">
          <span class="intro__mark__name">{{info.name}}</span>
          <span>{{info.weight}} KG</span>
        </div>
      </div>
      <!-- 介绍 历史比赛 简介-->
      <div class="intro__tab">
        <tab :line-width=2 active-color='#D43C33' slot="header">
          <tab-item class="vux-center" v-for="(item, index) in introList" :selected="currentIndex === index" @on-item-click="handleLink(item, index)" :key="index">
            {{item.name}} 
          </tab-item>
        </tab>
      </div>
      <!-- 内容 -->
     
        <div class="intro__result">
          <div class="intro__histroy" v-if="currentIndex === 0">
            <scroller lock-x :height="scrollHeight"
            ref="scrollerUpDown"
            :use-pulldown=true 
            :use-pullup=true
            :pulldown-config="pullDownConfig"
            :pullup-config="pullUpConfig"
            @on-pulldown-loading="onPullDown"  
            @on-pullup-loading="onPullUp"> 
            <div class="content">
              <div class="quiz-model intro__histroy__model mgt2" v-for="(item, index) in resultList">
                <title-model :title="item.info.bet_end_time * 1000 | dateFormat('yyyy-MM-dd hh:mm')" path="/home/main/quized">
                  <div class="card-padding">
                     <vs-model 
                       :data="item" 
                       :statusShow=true
                       :showTime=false 
                       vsType="2" 
                       showFootType="1"
                       link="/quiz/main/game">
                     </vs-model>
                  </div>
                </title-model>
              </div>
              <div class="empty-text text-center" v-show="resultList.length <= 0">暂无历史比赛</div>
            </div>
            </scroller>
            
          </div>
          <div class="intro__resume" v-if="currentIndex === 1">
            <title-model title="战绩" :showBottomBorder=true class="mgt2">
              <div class="intro__record">
                <div class="intro__record__times">
                  <span class="record__time__grey">
                    总场次: {{info.win_times + info.fail_times}}
                  </span>
                  <span class="record__time__grey">
                    胜: {{info.win_times}}
                  </span>
                  <span class="record__time__grey">
                    负: {{info.fail_times}}
                  </span>
                  <span class="record__time__grey">
                    KO: {{info.ko_times}}
                  </span>
                </div>
                <div class="intro__record__ratio">
                  <div class="intro__ratio">
                    <x-circle :percent="Number(`${info.win_times / (info.win_times + info.fail_times) * 100}`)" :stroke-width="6" :trail-width="6" stroke-color="#2196F3" trail-color="#ececec">
                      <span >{{(info.win_times / (info.win_times + info.fail_times) * 100).toFixed(1)}}%</span>
                    </x-circle>
                    <div>胜率</div>
                  </div>
                  <div class="intro__ratio">
                    <x-circle :percent="Number(`${info.ko_times / info.win_times * 100}`)" :stroke-width="6" :trail-width="6" stroke-color="#f00" trail-color="#ececec">
                      <span >{{(info.ko_times / info.win_times * 100).toFixed(1)}}%</span>
                    </x-circle>
                    <span>KO率</span>
                  </div>
                </div>
              </div>
            </title-model>
              <title-model title="基本资料" :showBottomBorder=true class="mgt2">
                <div class="intro__base">
                  <flexbox>
                    <flexbox-item>
                      <div class="intro__base__item">
                        <span><strong>姓名: </strong></span>
                        <span>{{info.name}}</span>
                      </div>
                    </flexbox-item>
                    <flexbox-item>
                      <div class="intro__base__item">
                        <span><strong>性别: </strong></span>
                        <span>{{info.sex}}</span>
                      </div>
                    </flexbox-item>
                    <flexbox-item>
                      <div class="intro__base__item">
                        <span><strong>国籍: </strong></span>
                        <span>{{info.country_name}}</span>
                      </div>
                    </flexbox-item>
                  </flexbox>
                  <flexbox>
                    <flexbox-item>
                      <div class="intro__base__item">
                        <span><strong>年龄: </strong></span>
                        <span>{{info.age}}岁</span>
                      </div>
                    </flexbox-item>
                    <flexbox-item>
                      <div class="intro__base__item">
                        <span><strong>身高: </strong></span>
                        <span>{{info.height}}cm</span>
                      </div>
                    </flexbox-item>
                    <flexbox-item>
                      <div class="intro__base__item">
                        <span><strong>体重: </strong></span>
                        <span>{{info.weight}}KG</span>
                      </div>
                    </flexbox-item>
                  </flexbox>
                </div>
              </title-model>
            <title-model title="个人介绍" :showBottomBorder=true class="mgt2">
              <p class="intro_self_man">
                {{info.intro}}
              </p>
            </title-model>
          </div>
        </div>
    </view-box>
  </div>
</template>
<script>
  import quiz from '@/lib/api/quiz'
  import info from '@/lib/api/info'
  import titleModel from '@/components/titleModel'
  import pullUpDown from '@/mixin/pullUpDown'
  import vsModel from '@/components/VSModel'
  import { Flexbox, FlexboxItem, Tab, TabItem, ViewBox, XCircle } from 'vux'

  const introList = [{
    name: '历史比赛',
    index: 0
  }, {
    name: '简介',
    index: 1
  }]
  export default {
    data () {
      const query = this.$route.query
      return {
        currentIndex: 0,
        introList,
        query,
        resultList: [],
        conditions: {
          page: 1,
          limit: 10
        },
        info: {
          avatar: '',
          age: '',
          birthday: '',
          fail_times: '',
          ko_times: '',
          win_times: '',
          height: '',
          intro: '',
          name: '',
          sex: '',
          weight: '',
          country_name: '',
          country_img: ''
        }
      }
    },
    mixins: [pullUpDown],
    methods: {
      onPullDown () {
        this.conditions.page = 1
        this.handleGetHistory()
        setTimeout(() => {
          this.$refs.scrollerUpDown.donePulldown() // 加载完成
          this.$refs.scrollerUpDown.reset({top: 0}) // 重新上高地
          this.$refs.scrollerUpDown.enablePullup() // 重置上拉加载
        }, 500)
      },
      onPullUp () {
        this.conditions.page += 1
        this.handleGetHistory(false)
        this.$nextTick(() => {
          this.$refs.scrollerUpDown.donePullup()
          this.$refs.scrollerUpDown.reset()
        })
      },
      handleGetDetail () {
        quiz.GetBoxerDetail({
          id: this.query.id
        }).then(data => {
          this.info = {...data}
        })
      },
      handleGetHistory (type = true) {
        this.$store.dispatch('updateLoadingStatus', {isLoading: true})
        let {page, limit} = this.conditions
        let queryData = {
          page,
          limit,
          id: this.query.id
        }
        info.GetBoxerHistory(queryData).then(data => {
          data = data.map(item => {
            item.bet_info = item.bet_infos.filter(bet => +bet.bet_type === 1)[0]
            return item
          })
          if (type) {
            this.resultList = data
          } else {
            // 判断数据是否为空  禁止加载
            this.resultList.push(...data)
          }
          if (data.length === 0 || data.length < this.conditions.limit) {
            this.$refs.scrollerUpDown.disablePullup()
          }
          this.$store.dispatch('updateLoadingStatus', {isLoading: false})
        }).catch(_ => {
          this.$store.dispatch('updateLoadingStatus', {isLoading: false})
        })
      },
      handleLink (item, index) {
        this.currentIndex = index
      }
    },
    components: {
      Flexbox,
      FlexboxItem,
      Tab,
      TabItem,
      titleModel,
      ViewBox,
      XCircle,
      vsModel
    },
    created () {
      this.handleGetHistory()
      this.handleGetDetail()
    },
    mounted () {
      this.scrollHeight = `${document.getElementById('app').clientHeight - this.$refs.introInfo.clientHeight - 44 - 50}px`
    }
  }
</script>
<style lang="sass">
@import '~assets/sass/mixin'
@import '~assets/sass/color'
.quiz-introduction
  .mgt2
    margin-top: 0.2rem
  .intro__info
    display: flex
    flex-direction: row
    justify-content: center
    align-items: center
    background: $grey-800
    .intro__tou
      justify-content: center
      padding: 0.6rem 0
      .img-tou
        width: 2.5rem
        border-radius: 50%
    .intro__mark
      display: flex
      flex-direction: column
      align-items: center
      margin-left: 0.5rem
      color: $white
      &__icon
        width: 0.6rem
        margin-bottom: 0.15rem
      &__name
        +font-dpr(17px)
        margin-bottom: 0.15rem
  .intro__resume
    height: 100%
    .intro__base
      padding: 0.25rem
      .intro__base__item
        padding: 0.15rem
  .intro_self_man
    padding: 0.25rem
    line-height: 0.6rem
    +font-dpr(13px)
    text-indent: 2em
  .intro__record
    padding: 0.25rem
    .intro__record__times
      margin-bottom: 0.2rem
      display: flex
      justify-content: space-around
      .record__time__grey
        background: $grey-300
        padding: 0.15rem
    .intro__record__ratio
      display: flex
      justify-content: center
      align-items: center
      text-align: center
      .intro__ratio
        width: 2rem
        margin-left: 0.2rem 
</style>