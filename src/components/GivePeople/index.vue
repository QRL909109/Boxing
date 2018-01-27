<!-- 点赞的人列表 -->
<template>
  <div class="give__people">
    <div class="people__item" v-for="(item, index) in list">
      <img :src="item.img" alt="点赞">
    </div>
  </div>
</template>
<script>
  export default {
    name: 'give-people',
    data () {
      return {

      }
    },
    props: {
      list: {
        default: () => ([]),
        type: Array
      }
    }
  }
</script>
<style lang="sass">
  .give__people
    padding: 0.3rem
    .people__item
      display: inline-block
      margin-left: 0.2rem
      img
        width: 0.9rem
        height: 0.9rem
        border-radius: 50%
</style>