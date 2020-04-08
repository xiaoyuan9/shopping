<template>
    <div id="home">
<!--        header-->
    <HomeNavbar color="#fff"></HomeNavbar>
    <div class="main" ref="main" @scroll="backtop">
        <!--        swiper-->
        <HomeSwiper :swiperlist="swiperlist"></HomeSwiper>
        <!--        推荐-->
        <HomeRecommend :recommendlist="recommendlist"></HomeRecommend>
        <!--        本周流行-->
        <Pop :poplink="recommendlist[0]"></Pop>
        <!--       tab切换栏-->
        <Tab
            :title="['流行','新款','精选']"
            :goods="goods[producttype].list"
            @click="tabclick"
            color="#faa"
            activeColor="#aaf"
            :dom="$refs.main"></Tab>
    </div>
    <!-- 返回顶部-->
    <BackTop :dom="$refs.main" :showtop="showtop"></BackTop>
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
                goods:{
                    pop:{page:1,list:[]},
                    new:{page:1,list:[]},
                    sell:{page:1,list:[]}
                },
                producttype:'pop',
                showtop:false
            }
        },
        components:{
            HomeSwiper,HomeNavbar,HomeRecommend,Pop,Tab,BackTop
        },
        created() {
           this.bannerAndremmand()
           this.productList('pop')
           this.productList('new')
           this.productList('sell')
        },
        methods:{
            //轮播图和推荐
            bannerAndremmand(){
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
            //流行新款推荐商品列表
            productList(type){
                this.request({
                    method: 'get',
                    url: this.url.Homedata,
                    params:{
                        type:type,
                        page:1
                    }
                }).then(res => {
                    console.log(res)
                    this.goods[type].list = this.goods[type].list.concat(res.data.list)
                }, err => {
                    console.log(err)
                })
            },
            tabclick(val){
                switch (val) {
                    case 0:
                        this.producttype = 'pop'
                        break;
                    case 1:
                        this.producttype = 'new'
                        break;
                    case 2:
                        this.producttype = 'sell'
                        break;
                }
            },
            //返回顶部
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