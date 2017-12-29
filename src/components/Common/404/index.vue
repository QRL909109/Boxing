<template>
  <div class="not-found">
    <img :src="img" alt="404">
  </div>
</template>

<script>
  import './404.sass'
  import img from './error-404.png'
  export default {
    name: 'NotFound',
    data () {
      return {
        img
      }
    }
  }
</script>
