<template>
  <div class="vs-model" :style="{backgroundColor: bgColor}">
    <router-link :to="data.link">
      <slot name="header"></slot>
      <div class="wrap">
        <div class="player">
          <img :src="data.palyer[0].img" class="img-radio" :alt="data.palyer[0].name">
          <div class="vs-model__name">
            <img src="~/assets/img/china.jpg" alt="" class="icon-countries">
            <p class="player__name">{{data.palyer[0].name}}</p>
          </div>
        </div>
        <div class="center">
          <!-- <i class="iconfont icon-VS"></i> -->
          <div class="vs-block_1" v-if="vsType == 1">VS</div>
          <div class="vs-block_2" v-if="vsType == 2">
            <span>V</span><span>S</span>
          </div>
          <slot name="time"> 
            <time class="time">{{ data.date }}</time>
          </slot>
          <div v-show="statusShow" class="status text-center" :class="{'active': data.status === 1}">{{ fiterStatus(data.status) }}</div>
          <slot name="footer"></slot>
        </div>
        <div class="player">
          <img :src="data.palyer[1].img" class="img-radio" :alt="data.palyer[1].name">
          <div class="vs-model__name">
            <img src="~/assets/img/china.jpg" alt="" class="icon-countries">
            <p class="player__name">{{data.palyer[1].name}}</p>
          </div>
        </div>
      </div>
      
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
        default: '#fff'
      },
      statusShow: {
        default: false
      },
      vsType: {
        default: 1
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
</style>