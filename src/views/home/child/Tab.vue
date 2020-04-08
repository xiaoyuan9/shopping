<template>
    <div class="tab">
        <div class="title" v-show="!isTop">
            <span
                class="titleItem"
                @click="activeTab(index)"
                v-for="(item,index) in title"
                :class="{active:index==activetabindex,}"
                :style="{color:index==activetabindex?color:'#333'}">{{item}}
            </span>
        </div>
        <div class="goods">
            <a class="goodsItem" v-for="(item,index) in goods" :href="item.link">
                <img :src="item.show.img" alt="" @load="imgLoad">
                <div class="content">
                    <p class="descript">{{item.title}}</p>
                    <span class="price">￥<span>{{item.price | filterLike}}</span></span>
                    <span class="like">{{item.cfav | filterLike}}</span>
                </div>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Tab",
        props:{
            activetabindex:{
                type:Number,
                default:0
            },
            isTop:{
                type:Boolean,
                default:true
            },
            scroll:{
                type:Object,
                default(){
                    return {}
                }
            },
            color:{
                type:String,
                default:'red'
            },
            title:{
                type:Array,
                default(){
                    return ['流行','新款','精选']
                }
            },
            goods:{
                type:Array,
                default(){
                    return []
                }
            }
        },
        methods:{
            //图片加载
            imgLoad(){
                this.scroll.refresh()
            },
            //选中标签
            activeTab(index){
                this.$emit('click',index)
            }
        },
        filters:{
            filterLike(val){
                return val>10000?(val/1000).toFixed(2)+"万":val
            }
        }
    }
</script>

<style scoped>
    .goodsItem .like::before{
        content: "";
        display: inline-block;
        width: 16px;
        height: 16px;
        background-image: url("~assets/img/common/collect.svg");
        background-size: 16px 16px;
        background-position: 0 1px;
        background-repeat: no-repeat;
    }
    .goodsItem .price>span{
        font-size: 18px;
    }
    .goodsItem .price{
        color: red;
        margin-left: 30px;
        margin-right: 10px;
    }
    .goodsItem .descript{
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        padding-left: 5px;
        box-sizing: border-box;
        margin-bottom: 5px;
        color: #666;
    }
    .goodsItem img{
        width: 100%;
    }
    .goodsItem .content{
        width: 100%;
        position: absolute;
        bottom: 20px;
    }
    .goodsItem{
        width: 48%;
        border:solid 2px #eee;
        padding-bottom: 80px;
        position: relative;
        margin-bottom: 10px;
    }
    .goods{
        display: flex;
        justify-content:space-around;
        flex-wrap:wrap;
    }
    .active{
        border-bottom: solid 3px #ffaaaa;
    }
    .title .titleItem{
        flex: 1;
        margin: 0 25px;
        font-size: 13px;
    }
    .title{
        display: flex;
        text-align: center;
        height: 40px;
        line-height: 40px;
        padding: 0 10px;
        margin-bottom: 5px;
        box-sizing: border-box;
    }
</style>