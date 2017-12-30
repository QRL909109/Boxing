<!-- 首页布局 -->
<template>
  <div class="home-wrap">
    <tab :line-width=2 active-color='#F44336' v-model="index">
      <tab-item class="vux-center" :selected="demo2 === item" v-for="(item, index) in list2" @click="demo2 = item" :key="index">{{item}}</tab-item>
    </tab>
    <swiper v-model="index" height="100px" :show-dots="false">
      <swiper-item>
        <router-view/>
      </swiper-item>
    </swiper>
  </div>
</template>
<script>
import { Tab, TabItem, Swiper, SwiperItem } from 'vux'
import { list2 } from '../../config/homeList.js'
export default {
  data () {
    return {
      index: 0,
      list2,
      demo2: '头条'
    }
  },
  components: {
    Tab,
    TabItem,
    Swiper,
    SwiperItem
  }
}
</script>