<template>
  <!-- <canvas id="qrcode" width="200" height="200"></canvas> -->
  <img src="./qcode.jpg" alt="" width="200" height="200">
</template>
<script>
import qrcode from './qcode.jpg'
export default {
  data () {
    return {
      qrcode
    }
  },
  methods: {
    drawCanvas () {
      let c = document.getElementById('qrcode')
      let ctx = c.getContext('2d')
      let img = new Image()
      img.onload = function () {
        ctx.drawImage(img, 0, 0)
      }
      img.src = this.qrcode
    }
  },
  mounted () {
    // this.drawCanvas()
  }
}
</script>