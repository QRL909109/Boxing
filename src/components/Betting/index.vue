<template>
  <popup :value="active" position="bottom" @on-hide="hidding">
    <div class="guess-vertical-wrap">
      <div class="note">
        <section-title title="请选择金币" titleTip="*多次点击可重复参与"></section-title>
        <!-- <div class="red-font">*多次点击可重复参与</div> -->
      </div>
      <div class="monoey-list">
        <ul>
          <li v-for="(item, index) in moneyList" class="bin" @click="handleGuessMoney(item)">
            {{item}}
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
  height: 1.5rem
  padding: 0.3rem
  .monoey-list
    ul
      list-style: none
      display: flex
      padding: 0
      margin: 0
      li
        width: 1.5rem
        height: 1.5rem
        margin-left: 0.08rem
        border: 1px solid $orange
        border-radius: 50%
        line-height: 1.5rem
        text-align: center
        background: $orange
        color: $white
</style>