<template>
    <div class="backtop"  v-show="showtop">
        <van-icon name="upgrade" :color="color" size="3em" @click="backtop"/>
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
            showtop:{},
            color:{
                type:String,
                default:'red'
            }
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
    .backtop {
        position: fixed;
        right: 10px;
        bottom: 80px;
    }
</style>