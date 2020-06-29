<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <main-tab-bar></main-tab-bar>
    <swiper></swiper>
  </div>
</template>

<script>
import MainTabBar from 'components/content/mainTabBar'
import Swiper from 'components/common/swiper/Swiper'
export default {
  name: 'App',
  components: {
    MainTabBar,
    Swiper
  }
}
</script>

<style>
@import "assets/css/base.css"
</style>
  