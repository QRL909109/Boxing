<!-- 消息中心 -->
<template>
  <div>
    <div class="info-wrap">
      <div class="info-left"></div>
      <div class="info-right">
        <p>{{ msg1 }}</p>
        <p>{{ msg2 }}}</p>
        <span>{{ time }}</span>
      </div>
    </div>
    <router-view/>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        msg1: '消息中心',
        msg2: '来拳击队训练',
        time: '晚上8:00'
      }
    }
  }
</script>
<style scope lang="sass">
.info-wrap

</style>