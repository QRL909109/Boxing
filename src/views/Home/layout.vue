<!-- 首页布局 -->
<template>
  <div class="home-wrap">
    <tab :line-width=2 active-color='#F44336' v-model="index">
      <tab-item class="vux-center" :selected="demo2 === item" v-for="(item, index) in list2" @click="demo2 = item" :key="index">{{item}}</tab-item>
    </tab>
    <router-view/>
  </div>
</template>
<script>
import { Tab, TabItem } from 'vux'
export default {
  data () {
    return {
      index: 0,
      list2: ['精选', '美食', '电影', '酒店', '外卖'],
      demo2: '美食'
    }
  },
  components: {
    Tab,
    TabItem
  }
}
</script>