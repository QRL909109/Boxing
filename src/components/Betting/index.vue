<template>
  <popup :value="active" position="bottom" @on-hide="hidding">
    <div class="guess-vertical-wrap">
     <title-model title="请选择金币" :showBottomBorder=true>
      <span slot="right">*多次点击可重复参与</span>
        <div class="monoey-list">
          <ul>
            <li v-for="(item, index) in moneyList" class="bin" @click="handleGuessMoney(item.value)">
              <img :src="item.src" alt="">
            </li>
          </ul>
        </div>
     </title-model>
    </div>
  </popup>
</template>
<script>
  import { Popup } from 'vux'
  import titleModel from '@/components/titleModel'
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
        this.$emit('on-betting', num)
      },
      hidding () {
        this.$emit('on-hide')
      }
    },
    components: {
      Popup,
      titleModel
    }
  }
</script>
<style lang="sass">
@import '~assets/sass/color'
.guess-vertical-wrap
  .monoey-list
    padding: 0.5rem 0
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