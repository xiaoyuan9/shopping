import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const Home = () => import("../views/home/Home")
const Cart = () => import("../views/cart/Cart")
const User = () => import("../views/user/User")
const Category = () => import("../views/category/Category")
const routes = [
  {
    path: '/category',
    name: 'Category',
    component: Category,
    meta:{
      title:"分类"
    }
  },
  {
    path: '/user',
    name: 'User',
    component: User,
    meta:{
      title:"我的"
    }
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart,
    meta:{
      title:"购物车"
    }

  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta:{
      title:"首页"
    }
  },
  {
    path: '/',
    redirect: '/home'
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
