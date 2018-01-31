<template>
  <div class="panel-model-wrap">
    <div class="panel-model" v-for="(item, index) in list" @click="handleClick(item)" :class="{reverse: type === 'left' ?  true : false}">
      <div class="panel-img">
        <img :src="item.avatar" :alt="item.name" class="img-responsive obj-contain">
      </div>
      <div class="panel-desc" v-if="model == 1">
        <p class="name">{{item.name}}</p>
        <p class="desc">{{item.intro | limitStrNum(50)}}</p>
      </div>
      <div class="panel-desc-2" v-if="model == 2">
        <p class="desc">{{item.intro | limitStrNum(50)}}</p>
        <p class="time-watch">
          <time class="time">{{item.time * 1000 | dateFormat('yyyy-MM-dd hh:mm')}}</time>
         <!--  <span class="watch-num">
            <i class="iconfont icon-yanjing"></i> 
            1234
          </span> -->
        </p>
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
      path: {},
      model: {}
    },
    methods: {
      handleClick (item) {
        console.log(1111, item)
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
      min-height: 2.3rem
      .panel-img
        margin-right: 0
    .panel-img
      width: 30%
      margin-right: 5px
      overflow: hidden
      .obj-contain
        height: 100%
        width: 100%
        object-fit: contain
    .panel-desc,.panel-desc-2
      width: 69%
      position: relative
      margin-left: 1%
      .name
        +font-dpr(16px)
        margin: 0.2rem 0 0.2rem
      .desc
        line-height: 15px
        color: #666
      .time-watch
        position: absolute
        margin-top: 0.1rem
        bottom: 0.15rem
        color: #666
    .panel-desc-2
      .desc
        margin: 0.2rem 0 0.2rem
        line-height: 0.53rem
        +font-dpr(14px)
        color: #000
</style>