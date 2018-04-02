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
    let num = 3
    let timer = setInterval(() => {
      if (weclome) {
        if (num === 0) {
          clearInterval(timer)
          weclome && (weclome.style.display = 'none')
        }
        weclome.children[0].innerText = num--
      } else {
        clearInterval(timer)
      }
    }, 1000)
  }
}
</script>

<style>

</style>
