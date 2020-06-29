<template>
  <div id="home">
    <nav-bar class="navbar">
      <span slot="center">购物街</span>
    </nav-bar>
    <tab-control :titles="['流行', '新款', '精选']" 
    @tabClick="tabClick" 
    ref="tabControl2" v-show="isShow" :class="{fixed: isShow}" />
    <scroll class="content" 
    ref="scroll" 
    :probe-type="3"
    @getPosition="getPositionY"
    :pullUpLoad="true"
    @pullingUp="loadMore">
      <swiper>
        <swiper-item v-for="item in banners">
          <a :href="item.link">
            <img :src="item.image"  @load="imageLoad" />
          </a>
        </swiper-item>
      </swiper>
      <recommend-view :recommends="recommends" />
      <feature-view />
      <tab-control :titles="['流行', '新款', '精选']" @tabClick="tabClick" ref="tabControl1"  />
      <goods-list :goods="showGoods" />
    </scroll>
    <back-top @click.native="backClick" v-show="isBackTopShow" />
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import { getHomeMultidata, getHomeGoods } from "network/home";
import Swiper from "components/common/swiper/Swiper";
import SwiperItem from "components/common/swiper/SwiperItem";
import RecommendView from "views/home/RecommendView";
import FeatureView from "views/home/FeatureView";
import TabControl from "components/content/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import Scroll from "components/common/scroll/Scroll";
import BackTop from "components/content/backTop/BackTop"
export default {
  name: "Home",
  data() {
    return {
      // result: null
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: "pop",
      isBackTopShow: false,
      tabOffsetTop: 0,
      isLoad: false,
      isShow: false,
      saveY: 0
    };
  },
  components: {
    NavBar,
    Swiper,
    SwiperItem,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
  },
  created() {
    // 1.请求多个数据
    this.getHomeMultidata(),
    // 2.请求商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  mounted() {
    //  监听图片加载完成
    this.$bus.$on('itemImageLoad', () => {
      this.$refs.scroll.scroll.refresh()
    })
  },
  activated() {
    this.$refs.scroll.scroll.refresh()
    this.$refs.scroll.scroll.scrollTo(0, this.saveY, 0)
  },
  deactivated() {
    this.saveY = this.$refs.scroll.scroll.y
    // console.log(this.saveY);
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    }
  },
  methods: {
    // 监听swiper中的图片加载完成
    imageLoad() {
      if(!this.isLoad){
        this.tabOffsetTop = this.$refs.tabControl1.$el.offsetTop;
        // console.log(this.tabOffsetTop);
        this.isLoad = true
      }
    },
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      this.$refs.tabControl1.currentIndex = index
      this.$refs.tabControl2.currentIndex = index
    },
    backClick() {
      this.$refs.scroll.scroll.scrollTo(0, 0, 500)
    },
    getPositionY(position) {
      // console.log(position);
      // 判断是否显示backTop
      this.isBackTopShow = -position.y > 1000
      // 判断是否显示tabControl2
      this.isShow = -position.y > this.tabOffsetTop
    },
    loadMore(pullingUp){
      // console.log("上拉加载更多");
      this.getHomeGoods(this.currentType)
      // this.$refs.scroll.scroll.refresh()
    },
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        // console.log(res);
        // this.result = res
        this.banners = res.data.data.banner.list;
        this.recommends = res.data.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.data.list);
        this.goods[type].page += 1;

        this.$refs.scroll.scroll.finishPullUp()
      });
    }
  }
};
</script>

<style scoped>
.navbar {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 9;
  color: #fff;
}
#home {
  padding-top: 44px;
}
.content {
  /* overflow: hidden; */
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
.fixed {
  position: absolute;
  top: 44px;
  left: 0;
  z-index: 9;
}
</style>
