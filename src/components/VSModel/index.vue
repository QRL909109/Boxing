<template>
  <div class="vs-model" :style="{backgroundColor: bgColor}">
    <router-link :to="data.link">
      <slot name="header"></slot>
      <div class="wrap">
        <div class="player">
          <img :src="data.palyer[0].img" class="img-radio" :alt="data.palyer[0].name">
          <div class="name">{{data.palyer[0].name}}</div>
        </div>
        <div class="center">
          <i class="iconfont icon-VS"></i>
          <slot name="time"> 
            <time class="time">{{ data.date }}</time>
          </slot>
          <div v-show="statusShow" class="status text-center" :class="{'active': data.status === 1}">{{ fiterStatus(data.status) }}</div>
        </div>
        <div class="player">
          <img :src="data.palyer[1].img" class="img-radio" :alt="data.palyer[1].name">
          <div class="name">{{data.palyer[1].name}}</div>
        </div>
      </div>
      <slot name="footer"></slot>
    </router-link>
  </div>
</template>
<script>
  import fiterStatus from '@/lib/utils/fiterStatus'
  export default {
    name: 'vsModel',
    data () {
      return {
  
      }
    },
    props: {
      data: {
        type: Object,
        default: {}
      },
      bgColor: {
        default: '#f5f5f5'
      },
      statusShow: {
        default: false
      }
    },
    methods: {
      fiterStatus
    }
  }
</script>
<style lang="sass">
@import '~assets/sass/color'
@import '~assets/sass/mixin'
.vs-model
  padding: 0.2rem
  background: $grey-100
  .wrap
    display: flex
    .player
      flex: 1
      text-align: center
      img
        width: 2rem
      .name
        +text-overflow
    .center
      display: flex
      flex-direction: column
      justify-content: center
      align-items: center
      margin: -0.4rem 0.1rem 0
      .time
        font-size: 14px
        font-family: Arial
      .iconfont
        font-size: 30px
        color: $red
      .status
        margin-top: 5px
        color: $grey-600
        &.active
          color: $red
</style>