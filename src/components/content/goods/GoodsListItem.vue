<template>
  <div class="goods-item" @click="itemClick">
    <img :src="item.show.img" alt class="item-img" @load="imageLoad" />
    <div>
      <p class="title">{{item.title}}</p>
      <span class="price">{{item.price}}</span>
      <span class="collect">
        <img src="~assets/img/common/collect.svg" alt />
        {{item.cfav}}
      </span>
    </div> 
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    item: {
      type: Object,
      default() {
        return [];
      }
    }
  },
  methods: {
    imageLoad() {
      this.$bus.$emit("itemImageLoad");
    },
    itemClick() {
      this.$router.push('/detail/' + this.item.iid)
    }
  },
  data() {
    return {};
  }
};
</script>

<style>
.goods-item {
  width: 48%;
  padding: 5px 0 5px;
  text-align: center;
  font-size: 14px;
  margin-bottom: 5px;
}
.item-img {
  border-radius: 5px;
  width: 100%;
  height: 88%;
}
.title {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: 2px 2px;
}
.price {
  color: var(--color-high-text);
}
.collect > img {
  width: 14px;
  height: 14px;
}
</style>
