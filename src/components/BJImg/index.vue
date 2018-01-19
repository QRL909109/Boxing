<template>
  <div class="kz-img-wrap">
    <img :src="url" v-if="ready" />
    <img-loader v-else />
    <!-- <div class="loader" v-else></div> -->
  </div>
</template>

<script>
  import imgLoader from '../loader'
  import errorImg from '@/assets/img/errorImg'
  export default {
    name: 'HFH-img',
    props: {
      src: {
        type: String,
        required: true
      },
      imgHolder: {
        type: String,
        default: () => errorImg
      }
    },
    components: {
      imgLoader
    },
    data () {
      return {
        url: '',
        ready: false
      }
    },
    watch: {
      src () {
        this.load()
      }
    },
    methods: {
      load () {
        if (!this.src) {
          this.$emit('on-load-error')
        } else {
          let objImg = document.createElement('img')
          objImg.onload = (e) => {
            this.ready = true
            this.url = e.target.src
            objImg = null
          }
          objImg.onerror = () => {
            this.ready = true
            this.$emit('on-load-error')
            this.url = this.imgHolder
            objImg = null
          }
          objImg.src = this.src || this.imgHolder
        }
      }
    },
    mounted () {
      this.load()
    }
  }
</script>

<style lang="less" scoped>
  @import '~assets/less/mixin';
  .kz-img-wrap {
    display: flex;
    align-items: center;
    flex: 1;
    width: 100%;
    height: 100%;

    > img {
      max-width: 100%;
      max-height: 100%;
      flex: 0 0 auto;
    }
  }
  
</style>
