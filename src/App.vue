<template>
  <div id="app">
<!--    <keep-alive include="Home">-->
      <router-view/>
<!--    </keep-alive>-->
    <mainbar></mainbar>
  </div>
</template>

<script>
  import Mainbar from "components/tabbar/Mainbar";
  export default {
    name:"app",
    components:{
      Mainbar
    }
  }
</script>

<style>
@import 'assets/css/base.css'
</style>
