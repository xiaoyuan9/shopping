<template>
  <div id="app">
    <router-view/>
    <mainbar></mainbar>
  </div>
</template>

<script>
  import Mainbar from "./components/tabbar/Mainbar";
  export default {
    name:"app",
    components:{
      Mainbar
    }
  }
</script>

<style>

</style>
