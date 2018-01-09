<template>
  <div class="bj-progress">
    <div class="progress-left">{{data.man1.name}}</div>
    <div class="bj-progress__bar">
      <div class="bj-progress__inner-bar" :style="{width: handlePercentage(data)}"></div>
      <div class="position left">{{data.man1.value}}</div>
      <div class="position right">{{data.man2.value}}</div>
    </div>
    <div class="progress-right">{{data.man2.name}}</div>
</div>
</template>
<script>
  export default{
    data () {
      return {}
    },
    methods: {
      handlePercentage (data) {
        let percent = 0
        let arr = Object.keys(data).map(item => data[item].value)
        percent = parseInt((arr[0] / (arr[1] + arr[0])) * 100)
        return `${percent}%`
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
$radius: 0.1rem
.bj-progress
  display: flex
  align-items: center
  .progress-left, .progress-right
    min-width: 0.8rem
  .progress-left
    margin-right: 0.2rem
  .progress-right
    margin-left: 0.2rem
  .bj-progress__bar
    background-color: $red-50
    height: 0.6rem
    flex: 1
    border-radius: $radius
    position: relative
    .bj-progress__inner-bar
      height: 100%
      width: 0
      background-color: $blue-600
      border-radius: $radius
    .position
      position: absolute
      top: 0.1rem
      color: #fff
      &.left
        left: 0.2rem
      &.right
        right: 0.2rem
</style>