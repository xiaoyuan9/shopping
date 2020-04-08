<template>
    <div class="backtop">
        <div class="icon"></div>
    </div>
</template>

<script>
    export default {
        name: "BackTop"
    }
</script>

<style scoped>
    .icon::after{
        content: "";
        display: inline-block;
        width: 50px;
        height: 50px;
        background-image: url("~assets/img/common/top.png");
        background-size: 50px 50px;
        opacity: 0.7;
    }
    .backtop {
        position: fixed;
        right: 10px;
        bottom: 80px;
    }
</style>