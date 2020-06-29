<template>
  <nav-bar class="nav-bar">
    <div slot="left" @click="backClick"><img src="~assets/img/common/back.svg" alt=""></div>
    <div slot="center" class="center">
      <div v-for="(item, index) in titles" class="centerItem" 
      :class="{active: index === currentIndex}"
      @click="itemClick(index)" >{{item}}</div>
    </div>
  </nav-bar>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
export default {
  name: 'DetailNavBar',
  data(){
    return {
      titles: ['商品', '参数', '评论', '推荐'],
      currentIndex: 0
    }
  },
  components: {
    NavBar
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index
    },
    backClick() {
      this.$router.back()
    }
  }
}
</script>

<style scoped>
.nav-bar {
  background-color: #fff;
  color: #000;
}
.nav-bar img {
  height: 20px;
  width: 20px;
  margin-left: 20px;
  margin-top: 10px;
}
.center {
  display: flex;
  font-size: 14px;
}
.centerItem {
  flex: 1;
}
.active {
  color: var(--color-high-text);
}
</style>
