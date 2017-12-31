<template>
  <div id="app">
    <loading v-model="isLoading"></loading>
    <router-view/>
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
  }
}
</script>

<style>

</style>
