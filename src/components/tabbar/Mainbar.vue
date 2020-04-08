<template>
    <div>
      <Tabbar activeColor="#39a9ed">
        <template>
        <Tabbaritem path="/home">
          <img src="~assets/img/tabbar/home.svg" alt="" slot="item-img">
          <img src="~assets/img/tabbar/home_active.svg" alt="" slot="item-img-active">
          <span slot="item-text">首页</span>
        </Tabbaritem>
        <Tabbaritem path="/cart">
          <img src="~assets/img/tabbar/cart.svg" alt="" slot="item-img">
          <img src="~assets/img/tabbar/cart_active.svg" alt="" slot="item-img-active">
          <span slot="item-text">购物车</span>
        </Tabbaritem>
        <Tabbaritem path="/category">
          <img src="~assets/img/tabbar/category.svg" alt="" slot="item-img">
          <img src="~assets/img/tabbar/category_active.svg" alt="" slot="item-img-active">
          <span slot="item-text">分类</span>
        </Tabbaritem>
        <Tabbaritem path="/user">
          <img src="~assets/img/tabbar/profile.svg" alt="" slot="item-img">
          <img src="~assets/img/tabbar/profile_active.svg" alt="" slot="item-img-active">
          <span slot="item-text">我的</span>
        </Tabbaritem>
        </template>
      </Tabbar>

    </div>
</template>

<script>
  import Tabbar from "./Tabbar";
  import Tabbaritem from "./Tabbaritem";
    export default {
      name: "Mainbar",
      data(){
        return {
        }
      },
      components: {
        Tabbar,Tabbaritem
      }
    }
</script>

<style scoped>

</style>
