<template>
  <div class="self-money-wrap" @click="handleAddMoney">
    <img class="glod-icon" src="./gold@2x.png" alt="">
    <span class="money"> {{money | currency}}</span>
    <i class="iconfont icon-add_c add"></i>
  </div>
</template>
<script>
  export default {
    name: 'add-money',
    props: {
      money: {
        default: 0
      }
    },
    methods: {
      handleAddMoney () {
        this.$router.push({
          path: '/recharge'
        })
      }
    }
  }
</script>
<style lang="sass">
@import '~assets/sass/color'
@import '~assets/sass/mixin'
.self-money-wrap
  height: 0.7rem
  background-color: #000
  border-radius: 0.3rem
  margin-left: 0.1rem
  padding: 0 0.2rem
  display: inline-flex
  align-items: center
  .glod-icon
    width: 0.5rem
  .money
    margin-left: 0.1rem
    +font-dpr(18px)
  .add
    color: $orange-50
    margin-left: 0.1rem
    font-size: 12px
</style>