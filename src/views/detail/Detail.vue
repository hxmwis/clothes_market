<template>
  <detail-nav-bar />
</template>

<script>
import DetailNavBar from 'components/content/detailNavBar/DetailNavBar'
export default {
  name: 'Detail',
  data(){
    return {
      iid: null
    }
  },
  created() {
    this.iid = this.$route.params.iid
  },
  components: {
    DetailNavBar
  }
}
</script>

<style scoped>
</style>
