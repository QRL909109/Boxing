<!-- 模板标题 -->
<template>
  <div class="title-model-wrap">
    <div @click="handleLink(path)">
      <cell-box>
        <div lass="title-model__left">
          <span class="title-model__title">{{title}}</span>
          <i class="iconfont icon-qianjin" v-show="path != ''"></i>
        </div>
        <div class="title-model__right">
          <slot name="right"></slot>
        </div>
      </cell-box>
    </div>
    <div class="title-model__content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
  import { CellBox } from 'vux'
  export default {
    props: {
      title: {},
      path: {
        default: ''
      }
    },
    methods: {
      handleLink (path) {
        if (path === '') {
          return
        }
        this.$router.push({
          path: path
        })
      }
    },
    components: {
      CellBox
    }
  }
</script>
<style lang="sass">
@import '~assets/sass/color'
@import '~assets/sass/mixin'
.title-model-wrap
  background: $white
  .weui-cell
    padding: 5px 0
    justify-content: space-between
  .title-model__title
    +font-dpr(16px)
    padding-left: 12px
    border-left: 2px solid $red
  .title-model__right
    color: #999
    margin-right: 0.4rem
</style>