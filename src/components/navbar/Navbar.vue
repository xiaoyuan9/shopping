<template>
    <div class="navbar" :style="{background:bg}">
        <div class="left">
            <slot name="left"></slot>
        </div>
        <div class="center">
            <slot name="center"></slot>
        </div>
        <div class="right">
            <slot name="right"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Navbar",
       props:{
            bg:{
                type:String,
                default:'red'
            }
       }
    }
</script>

<style scoped>
    .navbar{
        width: 100vw;
        height: 50px;
        display: flex;
        text-align: center;
        line-height: 50px;
    }
    .navbar>.center{
        flex: 1;
    }
    .navbar>.left,.navbar>.right{
        width: 50px;
    }


</style>