<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="tab-bar-icon"></slot>
    </div>
    <div v-else>
      <slot name="tab-bar-icon-active"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="tab-bar-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabBarItem',
  props: {
    path: String,
    activeColor: {
      type: String,
      default: 'hotpink'
    }
  },
  data() {
    return {
      // isActive: false
    }
  },
  computed: {
    isActive() {
      //indexOf: 找到了path就不等于-1,返回true，没找到就等于-1，返回false
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle() {
      return this.isActive ? {color: this.activeColor} : {}
    }
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path).catch(err => {err})
    }
  }
}
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  font-size: 12px;
  margin-top: 6px;
}
.tab-bar-item img {
  width: 24px;
  height: 24px;
  vertical-align: middle;
}
</style>
