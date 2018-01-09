<template>
  <popup :value="active" position="bottom" @on-hide="hidding">
    <div class="guess-vertical-wrap">
      <div class="note">
        <section-title title="请选择金币" titleTip="*多次点击可重复参与"></section-title>
      </div>
      <div class="monoey-list">
        <ul>
          <li v-for="(item, index) in moneyList" class="bin" @click="handleGuessMoney(item)">
            <img :src="item.src" alt="">
          </li>
        </ul>
      </div>
    </div>
  </popup>
</template>
<script>
  import { Popup } from 'vux'
  import sectionTitle from '@/components/section/title'
  import { moneyList } from '@/config/money'
  export default {
    data () {
      return {
        moneyList
      }
    },
    props: {
      active: {
        default: false
      }
    },
    methods: {
      handleGuessMoney (num) {
        this.$vux.alert.show({
          title: '竞猜成功',
          content: `投注${num}`,
          onShow () {
            console.log('Plugin: I\'m show now')
          },
          onHide () {
            console.log('Plugin: I\'m hiding now')
          }
        })
      },
      hidding () {
        this.$emit('on-hide')
      }
    },
    components: {
      Popup,
      sectionTitle
    }
  }
</script>
<style lang="sass">
@import '~assets/sass/color'
.guess-vertical-wrap
  padding: 0.3rem
  .monoey-list
    ul
      list-style: none
      padding: 0
      margin: 0
      text-align: center
      li
        display: inline-block
        width: 2rem
        height: 2rem
        margin: 0 0.2rem
        border-radius: 50%
        background: $orange
        img
          width: 100%
          height: 100%
</style>