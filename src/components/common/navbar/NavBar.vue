<template>
  <div class="navbar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data(){
    return {}
  }
}
</script>

<style scoped>
.navbar {
  width: 100%;
  height: 44px;
  line-height: 44px;
  background-color: var(--color-tint);
  display: flex;
}
.left {
  flex: 1;
}
.center {
  width: 230px;
  text-align: center;
}
.right {
  flex: 1;
}
</style>
