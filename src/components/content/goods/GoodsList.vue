<template>
  <div class="goods-list">
    <goods-list-item  v-for="item in goods" :item="item" />
  </div>
</template>

<script>
import GoodsListItem from 'components/content/goods/GoodsListItem'
export default {
  name: 'GoodsList',
  props: {
    goods: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data(){
    return {}
  },
  components: {
    GoodsListItem
  }
}
</script>

<style>
.goods-list {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
