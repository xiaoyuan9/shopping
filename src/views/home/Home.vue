<template>
    <div id="home">
<!--        header-->
    <HomeNavbar color="#fff"></HomeNavbar>
    <div class="main" ref="main" @scroll="backtop">
        <!--        swiper-->
        <HomeSwiper :swiperlist="swiperlist"></HomeSwiper>
        <!--        推荐-->
        <HomeRecommend :recommendlist="recommendlist"></HomeRecommend>
        <!--        流行-->
        <Pop :poplink="recommendlist[0]"></Pop>
        <!--       tab切换-->
        <Tab></Tab>
    </div>
    <!--        返回顶部-->
    <BackTop
       :dom="$refs.main"
       :showtop="showtop"
       color="#333">
    </BackTop>
    </div>
</template>

<script>
    import HomeSwiper from "./child/HomeSwiper";
    import HomeNavbar from "./child/HomeNavbar";
    import HomeRecommend from "./child/HomeRecommend";
    import Tab from "./child/Tab";
    import Pop from "./child/Pop";
    import BackTop from "./child/BackTop";
    export default {
        name: "Home",
        data(){
            return {
                swiperlist: [],
                recommendlist: [],
                showtop:false
            }
        },
        components:{
            HomeSwiper,HomeNavbar,HomeRecommend,Pop,Tab,BackTop
        },
        created() {
            this.request({
                method: 'get',
                url: this.url.Multidata
            }).then(res => {
                console.log(res)
                this.swiperlist = res.data.banner.list
                this.recommendlist = res.data.recommend.list
            }, (err) => {
                if (err.message.indexOf('404')) {
                    this.line = '404 Not Found'
                }
                this.loadfail = true
            })

        },
        methods:{
            backtop(){
                if (this.$refs.main.scrollTop > 800) {
                    this.showtop=true
                } else {
                   this.showtop=false
                }
            }
        }

    }
</script>

<style scoped>
.main{
    height: calc(100vh - 105px);
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
}
</style>