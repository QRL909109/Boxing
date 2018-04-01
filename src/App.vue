<template>
  <div id="app">
    <router-view/>
    <loading v-model="isLoading"></loading>
  </div>
</template>

<script>
import { Loading } from 'vux'
import { mapState } from 'vuex'
// 全局引入基础样式
require('@/assets/sass/base.sass')
export default {
  name: 'app',
  data () {
    return {}
  },
  components: {
    Loading
  },
  computed: {
    ...mapState({
      isLoading: state => state.Loading.isLoading
    })
  },
  created () {
    let weclome = document.getElementById('welcome-page')
    setTimeout(() => {
      weclome && (weclome.style.opacity = 0.9)
    }, 100)
    setTimeout(() => {
      weclome && (weclome.style.display = 'none')
    }, 2000)
  }
}
</script>

<style>

</style>
