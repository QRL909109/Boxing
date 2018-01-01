<template>
  <div class="section-header" :class="{ border: border }" :style="{ 'border-width' : border + 'px' }">
    <div class="section-header--title">
      <slot>
        <h2>{{ title }}</h2>
      </slot>
    </div>
    <div class="section-header--side">
      <slot name="side">
        {{ text }}
      </slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'section-header',
    props: {
      title: {
        type: String,
        default: ''
      },
      text: {
        type: String,
        default: ''
      },
      border: {
        type: Number,
        default: 0
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "~assets/less/var";
  @import "~assets/less/mixin";
  @border-color: #DEE9F5;
  .section-header {
    position: relative;
    .display-flex;
    margin-bottom: @gap;
    // line-height: 36px;

    // .el-button.el-button--small {
    //   height: 28px;
    //   line-height: 12px;
    //   vertical-align: middle;
    // }

    &--title {
      flex: 1;
      .display-flex;
      .flex-item-center;
      margin-right: @gap;

      > h2 {
        .reset-heading;
        color: #3A434F
      }
    }

    &--side {
      .display-flex;
      .flex-item-center;
    }

    &.border {
      padding-bottom: 10px;
      border-bottom: 1px solid @border-color;
    }
  }
</style>
