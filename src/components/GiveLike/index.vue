<template>
  <div class="give-like-wrap">
    <div class="give__like">
      <div class="like__zan text-center">
        <i class="iconfont icon-zan disable" @click="dianLike"></i>
        <div class="like__num" v-if="picList.length <= 0">快点赞 抢沙发</div>
        <div class="like__num" v-else>{{picList.length}} 人已赞</div>
      </div>
    </div>
    <give-people :list="picList" />
  </div>
</template>
<script>
  import givePeople from '../GivePeople'
  import home from '@/lib/api/home'
  import { mapState } from 'vuex'
  export default {
    data () {
      return {
  
      }
    },
    props: {
      picList: {
        default: [],
        type: Array
      },
      portalId: {
        default: ''
      }
    },
    computed: {
      ...mapState({
        user: state => state.User
      })
    },
    methods: {
      dianLike () {
        home.GetLikeList({
          portal_id: this.portalId,
          user_id: this.user.Id
        }).then(data => {
          console.log(44444, data)
          this.$emit('change') // 触发一下更新头像
        })
      }
    },
    components: {
      givePeople
    }
  }
</script>
<style lang="sass">
@import '~assets/sass/color'
@import '~assets/sass/mixin'
.give-like-wrap
  background-color: $white
  .give__like
    padding: 0.5rem 0.8rem
    display: flex
    justify-content: center
    .icon-zan
      +font-dpr(33px)
      padding: 0.3rem
      background-color: $red
      border-radius: 50%
      color: $white
      &.disable
        background-color: $grey
    .like__num
      +font-dpr(16px)
      margin-top: 0.4rem
      color: $red
  
</style>