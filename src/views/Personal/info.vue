<!-- 消息中心 -->
<template>
  <div class="info-center-wrap">
    <title-model title="消息记录"></title-model>
    <group>
      <cell v-for="(item, index) in infoList" :key="index" :inline-desc="item.desc" :value="item.date | timeAgo">
        <span slot="title">{{item.title}}<badge v-show="item.num > 0" :text="item.num"></badge></span>
      </cell>
    </group>
  </div>
</template>
<script>
  import { Group, Cell, Badge } from 'vux'
  import titleModel from '@/components/titleModel'
  export default {
    data () {
      return {
        infoList: [{
          title: '恭喜中奖啦！',
          desc: '恭喜您在XXX站投注红方选手播求，获得1000金币！',
          date: '1515916414',
          num: 1
        }, {
          title: '系统升级通知！',
          desc: '恭喜您在XXX站投注红方选手播求，获得1000金币！',
          date: '1515916414',
          num: 0
        }]
      }
    },
    components: {
      Group,
      Cell,
      titleModel,
      Badge
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
