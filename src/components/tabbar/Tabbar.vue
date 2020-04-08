<template>
<div class="tabbar">
<!--  <slot name="a" aaa="bbbb"></slot>-->
  <slot bbb="ccccd"></slot>
<!--  <slot name="c" ccc="dddd"></slot>-->
</div>
</template>

<script>
    export default {
      name: "tabbar",
      props: {
        activeColor: {
          type: String,
          default: "red"
        }
      },
      data(){
        return {
          user:{
            firstName:"zhang"
          }
        }
      },
      created(){
        sessionStorage.setItem('activeColor',this.activeColor)
      }
    }
</script>

<style scoped>
.tabbar{
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 55px;
  width: 100vw;
  display: flex;
  text-align: center;
  box-shadow: 0 -1px 0px #e9e9e9;
  z-index:10000;
  background: rgb(255,255,255);
}
</style>
