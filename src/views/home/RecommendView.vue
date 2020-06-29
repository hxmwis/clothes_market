<template>
  <div class="recommend">
    <div v-for="item in recommends">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecommendView',
  props: {
    recommends: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data(){
    return {}
  }
}
</script>

<style scoped>
.recommend {
  display: flex;
  width: 100%;
  font-size: 12px;
  text-align: center;
  padding: 15px 0 30px;
  border-bottom: 5px solid #eee;
}
.recommend div {
  flex: 1;
}
.recommend img {
  width: 75px;
  height: 75px;
  margin-bottom: 10px;
}
</style>
