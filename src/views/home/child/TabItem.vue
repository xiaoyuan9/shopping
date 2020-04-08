<template>
    <div>
        <a :href="item.link"
           class="tabsitem" v-for="item in tabItem" :key="item.acm">
            <img :src="item.show.img" alt="">
            <p>{{item.props[0]}}</p>
            <div>￥<span class="price">{{item.price}}</span><span class="like">★{{item.cfav}}</span></div>
        </a>
    </div>
</template>

<script>
    export default {
        name: "TabItem",
        props:{
            tabItem:{
                type:Array,
                default(){
                    return []
                }
            }
        }
    }
</script>

<style scoped>
    .tabsitem .like{
        color: rgb(144,194,255);
    }
    .tabsitem > img {
        width: 100%;
        height: 316px;
    }
    .tabsitem .price {
        color: red;
        font-size: 18px;
        margin-right: 10px;
    }
    .tabsitem > p {
        color: rgb(60,60,60);
        font-family: 'Hiragino Sans GB';
        margin-left: 10px;
        margin-top:10px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
    }
    .tabsitem > div{
        margin-left: 10px;
        margin-top:8px;
        color: red;
    }
    .tabsitem {
        width: 50vw;
        float: left;
        overflow: hidden;
        height: 416px;
        background: #fff;
        box-shadow: 0 0 1px #e9e9e9;
    }
</style>