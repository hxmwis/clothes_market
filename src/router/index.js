import Vue from 'vue'
import VueRouter from 'vue-router'

const home = () => import('../views/home/Home.vue')
const category = () => import('../views/category/Category.vue')
const shopcart = () => import('../views/shopcart/Shopcart.vue')
const profile = () => import('../views/profile/Profile.vue')
const detail = () => import('../views/detail/Detail.vue')

//1.安装插件
Vue.use(VueRouter)

//2.创建router
const routes = [
  {
    path: '',
    component: home
  },
  {
    path: '/home',
    component :home
  },
  {
    path: '/category',
    component :category
  },
  {
    path: '/shopcart',
    component :shopcart
  },
  {
    path: '/profile',
    component :profile
  },
  {
    path: '/detail/:iid',
    component :detail 
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

//3.导出
export default router