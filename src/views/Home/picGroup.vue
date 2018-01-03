<!-- 图集 -->
<template>
  <div class="pic-group-wrap">
    <div class="box-shadow-model pic-group" v-for="(item, index) in picList">
      <div class="title">{{item.title}}</div>
      <img :src="item.img" alt="" class="img-responsive">
      <div class="time text-right">
        <time>{{item.time}}</time>
      </div>
    </div>
  </div>
</template>
<script>
  import pic1 from '@/assets/img/1.jpeg'
  import pic2 from '@/assets/img/2.png'
  export default {
    data () {
      return {
        picList: [{
          title: '拳坛暴力美学，斯柯达拳坛暴力美学，斯2222柯达',
          img: pic2,
          time: '2018-01-02'
        }, {
          title: 'XXX收官之战',
          img: pic1,
          time: '2018-01-02'
        }]
      }
    }
  }
</script>
<style lang="sass">
  @import '~assets/sass/mixin'
  @import '~assets/sass/color'
  .pic-group-wrap
    .pic-group
      img
        max-height: 200px
        overflow: hidden
      .title
        +font-dpr(16px)
        padding-bottom: 0.15rem
      .time
        +font-dpr(14px)
        padding-top: 0.2rem
        color: $grey-500

</style>