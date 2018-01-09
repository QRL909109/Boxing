<template>
  <div class="section-title" :class="{ border: border }">
    <div class="section-title--text">
      <slot>
        <h3>
          <span>{{ title }}</span>
          <span class="title-tip">{{titleTip}}</span>
        </h3>
      </slot>
    </div>
    <div class="section-title--side">
      <slot name="side">
        {{ text }}
      </slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'section-title',
    props: {
      title: {
        type: String,
        default: ''
      },
      titleTip: {
        tyep: String,
        default: ''
      },
      text: {
        type: String,
        default: ''
      },
      border: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style lang="less" scoped>
  .section-title {
    display: flex;
    margin-bottom: 8px;
    line-height: 36px;
    
    &.border {
      border-bottom: 1px solid #bfcad9;
    }

    &--text {
      position: relative;
      flex: 1;
      margin-right: 15px;
      padding-left: 15px;
      border-bottom: 1px solid #c8c8c8;

      &::before {
        position: absolute;
        content: '';
        margin-top: -8px;
        top: 50%;
        left: 0;
        width: 5px;
        height: 16px;
        background: #FF9800;
      }

      > h3 {
        margin: 0;
        padding: 0;
        font-weight: 500;
        color: #3A434F;
        .title-tip {
          float: right;
          font-size: 0.3rem;
        }
      }
    }
  }
</style>

<style>
  .section-title--side .el-button,
  .section-title--side .el-radio-group {
    vertical-align: middle;
  }
</style>

