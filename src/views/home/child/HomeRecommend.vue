<template>
    <div class="recommend">
        <a :href="item.link" v-for="(item,index) in recommendlist">
            <img :src="item.image" alt="">
            <div  class="title">{{item.title}}</div>
        </a>
    </div>
</template>

<script>
    export default {
        name: "HomeRecommend",
        props:{
            recommendlist:{
                type:Array,
                default:[]
            }
        }
    }
</script>

<style scoped>
    .recommend{
        width: 100vw;
        display: flex;
        text-align: center;
        margin-top:10px;
        padding-bottom: 10px;
        border-bottom: solid 10px rgba(0,0,0,.1);
    }
    .recommend img{
        width: 80%;
    }
    .recommend .title{
        font-size: 13px;
        color:#666;
    }
</style>