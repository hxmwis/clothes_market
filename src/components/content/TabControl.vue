<template>
  <div class="tab-control">
    <div v-for="(item, index) in titles" class="tab-control-item" @click="choose(index)">
      <span :class="{active:index === currentIndex}">{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabControl',
  props: {
    titles: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data(){
    return {
      currentIndex: 0
    }
  },
  methods: {
    choose(index) {
      this.currentIndex = index
      this.$emit("tabClick", index)
    }
  }
}
</script>

<style scoped>
.tab-control {
  width: 100%;
  display: flex;
  text-align: center;
  height: 34px;
  line-height: 34px;
  font-size: 15px;
  position: sticky;
  top: 44px;
  background-color: #fff;
}
.tab-control-item {
  flex: 1;
}
.tab-control-item span {
  padding: 6px;
}
.active {
  border-bottom: 3px solid var(--color-tint);
}
</style>
