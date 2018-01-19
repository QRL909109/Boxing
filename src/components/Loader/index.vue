<template>
  <div class="loader__wrapper">
      <div class="loader">
      </div>
      <div class="loader-text">HFH</div>
  </div>
  
</template>

<script>
  export default {
    name: 'loader'
  }
</script>

<style lang="less" scoped>
.loader__wrapper {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}
.loader,
.loader:after {
  border-radius: 50%;
  width: 60px;
  height: 60px;
}
.loader {
  margin: 0 auto;
  font-size: 10px;
  position: relative;
  text-indent: -9999em;
  border-top: 2px solid rgba(36, 119, 199, 0.2);
  border-right: 2px solid rgba(36, 119, 199, 0.2);
  border-bottom: 2px solid rgba(36, 119, 199, 0.2);
  border-left: 2px solid #337CD4;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation: load8 1.1s infinite linear;
  animation: load8 1.1s infinite linear;
}
.loader-text {
  position: absolute;
  top: 50%;
  left: 50%;
  text-align: center;
  transform: translate(-50%, -50%);
  font-size: 12px;
  letter-spacing: 1px;
  color: #337CD4;
}
@-webkit-keyframes load8 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes load8 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>
