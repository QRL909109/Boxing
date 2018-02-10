<!-- 基本布局-底部布局 -->
<template>
  <div class="app-container height100">
    <!-- 展示主体界面 -->
      <router-view/>
      <footer-nav />
  </div>
</template>
<script>
import footerNav from '@/components/FooterNav'
import { mapState } from 'vuex'
export default {
  data () {
    return {
      details: {
        url: 'http://web.hfhboji.com'
      }
    }
  },
  components: {
    footerNav
  },
  computed: {
    ...mapState({
      wx: state => state.Weixin
    })
  },
  watch: {
    wx: {
      handler (val) {
        if (val.config && val.config.app_id !== '') {
          this.shard()
        }
      },
      immediate: true,
      deep: true
    }
  },
  methods: {
    shard () {
      this.$wechat.config({
        debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
        appId: this.wx.config.app_id, // 必填，公众号的唯一标识
        timestamp: this.wx.config.timestamp, // 必填，生成签名的时间戳
        nonceStr: this.wx.config.nonce_str, // 必填，生成签名的随机串
        signature: this.wx.config.signature, // 必填，签名，见附录1
        jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
      })
      this.$wechat.ready(() => {
        this.$wechat.onMenuShareTimeline({
          title: this.wx.msg.title, // 分享标题
          link: this.details.url, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
          imgUrl: this.wx.msg.img_url, // 分享图标
          success () {
            console.log('分享朋友圈成功')  // 用户确认分享后执行的回调函数
          },
          cancel () {
          // 用户取消分享后执行的回调函数
          }
        })

        this.$wechat.onMenuShareAppMessage({
          title: this.wx.msg.title, // 分享标题
          desc: this.wx.msg.desc, // 分享描述
          link: this.details.url, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
          imgUrl: this.wx.msg.img_url, // 分享图标
          type: 'link',
          dataUrl: '',
          success: function () {
            console.log('分享给朋友成功')
          // 用户确认分享后执行的回调函数
          },
          cancel: function () {
          // 用户取消分享后执行的回调函数
          }
        })
      })
    }
  }
}
</script>