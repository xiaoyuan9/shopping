<template>
    <div class="isTop">
        <div class="title">
            <span
                class="titleItem"
                @click="activeTab(index)"
                v-for="(item,index) in title"
                :class="{active:index==activetabindex,}"
                :style="{color:index==activetabindex?color:'#333'}">{{item}}
            </span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "IsTop",
        props:{
            activetabindex:{
                type:Number,
                default:0
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
        },
        methods:{
            //选中标签
            activeTab(index){
                this.$emit('click',index)
            }
        }
    }
</script>

<style scoped>
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