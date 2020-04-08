<template>
  <div class="tabbar-item" @click="btnclick">
    <div>
      <slot name="item-img" v-if="!active"></slot>
      <slot name="item-img-active" v-else></slot>
    </div>
    <span :style="{color:active?activeColor:color}">
      <slot name="item-text"></slot>
    </span>
  </div>
</template>

<script>
  export default {
    name: "Tabbaritem",
    props: {
      path: {
        type: String
      }
    },
    data() {
      return {
        color: '#333',
        activeColor:'red'
      }
    },
    methods: {
      btnclick() {
        if (this.$route.path === this.path) {
          return
        }
        this.$router.push(this.path)
      }
    },
    computed: {
      active() {
        return this.$route.path === this.path
      }
    },
    created(){
      this.activeColor = sessionStorage.getItem('activeColor')
    }
  }
</script>

<style scoped>
  .tabbar-item {
    flex: 1;
  }

  .tabbar-item img {
    width: 22px;
    height: 22px;
    display: block;
    margin: 5px auto 0px;
  }
  .tabbar-item > span {
    font-size: 13px;
  }
</style>
