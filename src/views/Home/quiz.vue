<!-- 竞猜 -->
<template>
  <div class="quiz-wrap">
    <div class="quiz-model" v-for="(item, index) in quizList">
      <title-model :title="item.date" path="/quiz/main/list">
        <div class="card-padding">
           <vs-model :data="item" :statusShow=true vsType="2">
            <span slot="time"></span>
             <div slot="footer" class="win-model">
               <div class="deep-bule-bg bule">
                 <p>1.68</p>
                 <p>蓝胜</p>
               </div>
               <div class="red-bg red">
                 <p>1.89</p>
                 <p>红胜</p>
               </div>
             </div>
           </vs-model>
        </div>
      </title-model>
      
    </div>
  </div>
</template>
<script>
  import { Card } from 'vux'
  import vsModel from '@/components/VSModel'
  import titleModel from '@/components/titleModel'
  // 待删除
  import bq from '@/assets/img/bq.jpg'
  import jdx from '@/assets/img/jdx.jpg'
  export default {
    data () {
      return {
        quizList: [{
          title: '城市英雄赛',
          link: '/quiz/main/game',
          date: '2018-1-2',
          status: 1,
          palyer: [{
            name: '金东秀',
            img: jdx
          }, {
            name: '播求',
            img: bq
          }]
        }, {
          title: '城市英雄赛',
          link: '/quiz/main/game',
          date: '2018-1-2',
          status: 1,
          palyer: [{
            name: '金东秀',
            img: jdx
          }, {
            name: '播求',
            img: bq
          }]
        }, {
          title: '城市英雄赛',
          link: '/quiz/game',
          date: '2018-1-2',
          status: 1,
          palyer: [{
            name: '金东秀',
            img: jdx
          }, {
            name: '播求',
            img: bq
          }]
        }]
      }
    },
    components: {
      Card,
      vsModel,
      titleModel
    }
  }
</script>
<style lang="sass">
@import '~assets/sass/color'
.quiz-wrap
  padding-top: 0.4rem
  background-color: #fafafa
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