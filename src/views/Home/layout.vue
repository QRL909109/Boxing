<!-- 首页布局 -->
<template>
  <div class="home-wrap height100"> 
    <view-box ref="viewBox">
      <tab :line-width=2 active-color='#D43C33' slot="header">
        <tab-item class="vux-center" v-for="(item, index) in topList" :selected="currentIndex === index" @on-item-click="handleLink(item, index)" :key="index">
          {{item.name}}
        </tab-item>
      </tab>
      <router-view/>
    </view-box>
  </div>
</template>
<script>
import { Tab, TabItem, ViewBox } from 'vux'
import { topList } from '@/config/homeTop'
export default {
  data () {
    return {
      topList,
      currentIndex: 0
    }
  },
  components: {
    Tab,
    TabItem,
    ViewBox
  },
  watch: {
    $route: {
      handler (val, old) {
        this.currentIndex = val.meta.index
      },
      immediate: true
    }
  },
  methods: {
    handleLink (item, index) {
      this.currentIndex = index
      this.$router.push({
        path: item.link
      })
    }
  }
}
</script>