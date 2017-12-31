<!-- 消息中心 -->
<template>
  <div>
    <group>
      <cell :title="msg1" inline-desc="来自拳击队训练" value="昨天">
        <i slot="icon" class="iconfont icon-xinxi"></i>
      </cell>
      <cell :title="msg2" inline-desc="恭喜您获奖了" value="早上9:00">
        <i slot="icon" class="iconfont icon-geren"></i>
      </cell>
    </group>
    <router-view/>
  </div>
</template>
<script>
  import { Group, Cell } from 'vux'
  export default {
    data () {
      return {
        msg1: '消息中心',
        msg2: '会员中心'
      }
    },
    components: {
      Group,
      Cell
    }
  }
</script>
<style scoped>
i {
  font-size: 31px;
  color: #fdae2d;
}
  
</style>
