<template>
  <div class="text-center no-result" v-show="show">
    <img :src="img" />
    <slot>
      <p>{{desc}}</p>
    </slot>
  </div>
</template>

<script>
  import img from './no-resources.png'
  export default {
    name: 'no-result',
    props: {
      show: {
        type: Boolean,
        default: () => (false)
      },
      desc: {
        defalt: '暂无内容'
      }
    },
    data () {
      return {
        img
      }
    }
  }
</script>

<style scoped>
  .no-result {
    position: fixed;
    top: 54px;
    left: 0;
    right: 0;
    bottom: 50px;
    margin: 30px 0;
    background-color: #f5f5f5;
  }
</style>

