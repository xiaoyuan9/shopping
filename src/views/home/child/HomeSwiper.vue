<template>
    <div>
        <swiper ref="mySwiper" :options="swiperOptions">
            <swiper-slide v-for="(item,index) in swiperlist" class="swiper">
                <a :href="item.link">
                    <img :src="item.image" alt="">
                </a>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
    import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
    import 'swiper/css/swiper.css'
    export default {
        name: "HomeSwiper",
        props:{
            swiperlist:{
                type:Array,
                default:[]
            }
        },
        data(){
            return {
                swiperOptions: {
                    pagination: {
                        el: '.swiper-pagination'
                    },
                    autoplay: {
                        delay: 500
                    },
                    loop : true
                }
            }
        },
        components: {
            Swiper,
            SwiperSlide
        }
    }
</script>

<style scoped>
    .swiper img{
        width: 100%;
        height: 100%;
    }
    .swiper-container {
        --swiper-theme-color: #fff;
    }
</style>