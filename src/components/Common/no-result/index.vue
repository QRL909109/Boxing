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
    margin: 100px 0;
  }
</style>

