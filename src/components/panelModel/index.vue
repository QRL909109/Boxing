<template>
  <div class="panel-model-wrap">
    <div class="panel-model" v-for="(item, index) in list" @click="handleClick(item)" :class="{reverse: type === 'left' ?  true : false}">
      <div class="panel-img">
        <img :src="item.avatar" :alt="item.name" class="img-responsive">
      </div>
      <div class="panel-desc">
        <p class="name">{{item.name}}</p>
        <p class="desc">{{item.intro| limitStrNum(60)}}</p>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {}
    },
    props: {
      list: {
        default: [],
        type: Array
      },
      type: {
        default: 'left'
      },
      path: {}
    },
    methods: {
      handleClick (item) {
        this.$router.push({
          path: `${this.path}?id=${item.id}`
        })
      }
    }
  }
</script>
<style lang="sass">
@import '~assets/sass/mixin'
.panel-model-wrap
  .panel-model
    display: flex
    border-top: 1px solid #e4e4e4
    &.reverse
      flex-direction: row-reverse
      .panel-img
        margin-right: 0
    .panel-img
      // width: 180px
      flex: 1
      max-height: 2.6rem
      margin-right: 5px
      min-height: 2.5rem
    .panel-desc
      flex: 3
      .name
        +font-dpr(16px)
        margin: 0.3rem 0 0.2rem
      .desc
        line-height: 15px
        color: #666
</style>