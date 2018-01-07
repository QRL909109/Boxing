<!-- 精彩视频 -->
<template>
  <div class="super-wrap">
    <div class="box-shadow-model video" v-for="(item, index) in videoList">
      <div class="title">{{item.title}}</div>
      <img :src="item.img" alt="" class="img-responsive">
      <i class="iconfont icon-bofang"></i>
      <div class="time">
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
        videoList: [{
          title: '拳坛暴力美学，斯柯达拳坛暴力美学，斯2222柯达',
          img: pic1,
          time: '00:00:29'
        }, {
          title: 'XXX收官之战',
          img: pic2,
          time: '00:00:29'
        }]
      }
    }
  }
</script>
<style lang="sass">
  @import '~assets/sass/mixin'
  .super-wrap
    margin-bottom: 1.5rem
    .video
      position: relative
      color: #fff
      .title
        +font-dpr(16px)
        position: absolute
        top: 0.3rem
        padding: 0.2rem 0.3rem 0 0.2rem
        word-break: break-word
      img
        max-height: 200px
        overflow: hidden
      .iconfont
        position: absolute
        top: 50%
        left: 50%
        +font-dpr(35px)
        transform: translateX(-50%)
        transform: translateY(-50%)
      .time
        position: absolute
        bottom: 0.5rem
        right: 0.5rem
        background-color: rgba(0,0,0,0.4)
        border-radius: 0.3rem
        padding: 0.15rem

</style>