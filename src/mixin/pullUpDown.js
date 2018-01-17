import { Scroller } from 'vux'
export default{
  data () {
    return {
      scrollHeight: '500px',
      pullStatus: {
        pullupStatus: 'default',
        pulldownStatus: 'default'
      },
      pullDownConfig: {
        content: '下拉刷新',
        downContent: '下拉刷新',
        upContent: '释放后更新',
        loadingContent: '拼命加载中...'
      },
      pullUpConfig: {
        content: '上拉加载',
        upContent: '上拉加载更多',
        downContent: '释放后加载',
        loadingContent: '拼命加载中...'
      }
    }
  },
  components: {
    Scroller
  },
  mounted () {
    this.$nextTick(() => {
      this.$refs.scrollerUpDown.reset({top: 0})
    })
    // 充值头部 40， 开奖 44，底部 50
    this.scrollHeight = `${document.getElementById('app').clientHeight - 44 - 50}px`
  }
}
