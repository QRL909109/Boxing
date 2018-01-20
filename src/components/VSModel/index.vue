<template>
  <div class="vs-model" :style="{backgroundColor: bgColor}" @click="handleLink(data.info.id)">
      <slot name="header"></slot>
      <div class="wrap">
        <div class="player">
          <img :src="data.blue.avatar" class="img-radio" :alt="data.blue.name">
          <div class="vs-model__name">
            <img :src="data.blue.country_img" :alt="data.blue.country_name" class="icon-countries">
            <p class="player__name">{{data.blue.name}}</p>
          </div>
        </div>
        <div class="center">
          <!-- <i class="iconfont icon-VS"></i> -->
          <div class="vs-block_1" v-if="vsType == 1">VS</div>
          <div class="vs-block_2" v-if="vsType == 2">
            <span>V</span><span>S</span>
          </div>
          <slot name="time"> 
            <time class="time">{{ data.info.game_begin_time * 1000 | dateFormat('yyyy-MM-dd') }}</time>
          </slot>
          <div v-show="statusShow" class="status text-center" :class="{'active': data.info.status === 1}">{{ betStatus(data.info.status) }} 
            <span v-show="statusResult" :class="`${gameResult(data.info.winner).color}-font`"> {{gameResult(data.info.winner).type}}</span>
          </div>
          <slot name="footer"></slot>
        </div>
        <div class="player">
          <img :src="data.red.avatar" class="img-radio" :alt="data.red.name">
          <div class="vs-model__name">
            <img :src="data.red.country_img" :alt="data.red.country_name" class="icon-countries">
            <p class="player__name">{{data.red.name}}</p>
          </div>
        </div>
      </div>
  </div>
</template>
<script>
  import {betStatus, gameResult} from '@/lib/utils/fiterStatus'
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
        default: '#fff'
      },
      statusShow: {
        default: false
      },
      statusResult: {
        default: false
      },
      vsType: {
        default: 1
      },
      link: {
        default: ''
      }
    },
    methods: {
      betStatus,
      gameResult,
      handleLink (id) {
        console.log(2222, this.link)
        if (this.link !== '') {
          this.$router.push({
            path: `${this.link}?id=${id}`
          })
        }
      }
    }
  }
</script>
<style lang="sass">
@import '~assets/sass/color'
@import '~assets/sass/mixin'
.vs-model
  padding: 0.35rem 0.2rem
  background: $grey-100
  border-radius: 4px;
  border: 1px solid #E4E4E4
  .wrap
    display: flex
    .player
      flex: 1
      text-align: center
      .img-radio
        width: 2rem
        min-height: 2rem
      .vs-model__name
        display: flex
        justify-content: center
        align-items: center
        +text-overflow
        margin-top: 0.05rem
        .player__name
          margin-left: 0.15rem
    .center
      display: flex
      flex-direction: column
      justify-content: center
      align-items: center
      margin: 0 0.25rem 0
      min-width: 2rem
      .time
        font-size: 12px
        font-family: Arial
        color: #666
      .vs-block_1
        padding: 0.1rem 0.3rem
        border-radius: 2px
        background: $red
        color: $white
        +font-dpr(14px)
        font-weight: 600
        margin-bottom: 0.2rem
      .vs-block_2
        +font-dpr(24px)
        font-weight: 600
        span
          &:first-child
            color: $blue-600
          &:last-child
            color: $red
      .iconfont
        font-size: 30px
        color: $red
      .status
        margin-top: 5px
        margin-bottom: 0.5rem
        color: $grey-600
        &.active
          color: $red
</style>