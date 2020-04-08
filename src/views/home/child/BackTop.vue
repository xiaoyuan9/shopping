<template>
    <div class="backtop"  v-show="showtop">
        <div @click="backtop" class="icon"></div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import {Icon} from 'vant';
    Vue.use(Icon);
    export default {
        name: "BackTop",
        props:{
            dom:{},
            showtop:{}
        },
        data(){
            return {
                topscroll: true
            }
        },
        methods:{
            backtop() {
                //返回顶部
                this.dom.scrollTop = 0;
            }
        }
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
    }
    .backtop {
        position: fixed;
        right: 10px;
        bottom: 80px;
    }
</style>