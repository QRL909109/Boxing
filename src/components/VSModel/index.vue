<template>
  <div class="vs-model">
    <router-link :to="data.link">
      <div class="wrap">
        <div class="player">
          <img :src="data.palyer[0].img" class="img-radio" :alt="data.palyer[0].name">
          <div class="name">{{data.palyer[0].name}}</div>
        </div>
        <div class="date">
          <i class="iconfont icon-VS"></i>
          <time class="time">{{ data.date }}</time>
        </div>
        <div class="player">
          <img :src="data.palyer[1].img" class="img-radio" :alt="data.palyer[1].name">
          <div class="name">{{data.palyer[1].name}}</div>
        </div>
      </div>
    </router-link>
  </div>
</template>
<script>
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
      }
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
      img
        width: 2rem
      .name
        text-align: center
        +text-overflow
    .date
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
</style>