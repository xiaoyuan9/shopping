<template>
    <div class="tab" ref="tab" v-show="a">
        <div class="title">
            <span
                class="titleItem"
                @click="activeTab(index)"
                v-for="(item,index) in title"
                :class="{active:index==activeindex,}"
                :style="{color:index==activeindex?color:'#333'}">{{item}}
            </span>
        </div>
        <div class="goods">
            <div class="goodsItem" v-for="(item,index) in goods">
                <img :src="item.show.img" alt="">
                <p class="descript">{{item.title}}</p>
                <span class="price">￥<span>{{item.price | filterLike}}</span></span>
                <span class="like">{{item.cfav | filterLike}}</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Tab",
        props:{
            dom:{},
            color:{
                type:String,
                defautl:'red'
            },
            title:{
                type:Array,
                defautl(){
                    return ['流行','新款','精选']
                }
            },
            goods:{
                type:Array,
                defautl(){
                    return []
                }
            }
        },
        data(){
            return{
                activeindex:0,
                offsettop:0
            }
        },
        created(){

        },
        computed:{
            a(){
                console.log(this.$refs.tab)
                return true
                // if(this.$refs.tab.offsetTop-this.dom.scrollTop<50){
                //     return true
                // }
            }
        },
        methods:{
            activeTab(index){
                this.activeindex = index
                this.$emit('click',index)
            }
        },
        filters:{
            filterLike(val){
                return val>10000?val/1000+"万":val
            }
        }
    }
</script>

<style scoped>
    .goodsItem .like::before{
        content: "";
        display: inline-block;
        width: 14px;
        height: 14px;
        background-image: url("~assets/img/common/collect.svg");
        background-size: 14px 14px;
    }
    .goodsItem .like{

    }
    .goodsItem .price>span{
        font-size: 18px;
    }
    .goodsItem .price{
        color: red;
    }
    .goodsItem .descript{
       white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .goodsItem img{
        width: 100%;
    }
    .goodsItem{
        width: 40%;
    }
    .goods{
        display: flex;
        justify-content: space-around;
        flex-wrap:wrap;
    }
    .active{
        border-bottom: solid 3px red;
    }
    .title .titleItem{
        flex: 1;
        margin: 0 25px;
    }
    .title{
        display: flex;
        text-align: center;
        height: 50px;
        line-height: 50px;
        padding: 0 10px;
        margin-bottom: 5px;
        box-sizing: border-box;
    }
</style>