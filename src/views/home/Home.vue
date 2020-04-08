<template>
    <div id="home">
<!--        header-->
    <HomeNavbar color="#fff"></HomeNavbar>
    <IsTop
            :title="['流行','新款','精选']"
            @click="tabclick"
            color="#faa"
            v-show="isTop"
            :activetabindex="activetabindex">
    </IsTop>
    <div class="main">
        <div class="content">
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
            :scroll="scroll"
            ref="TabControl"
            :isTop="isTop"
            :activetabindex="activetabindex">
        </Tab>
        </div>
    </div>
    <!-- 返回顶部-->
    <BackTop @click.native="backtop" v-show="showtop"></BackTop>
    </div>
</template>

<script>
    import IsTop from "./child/IsTop";
    import BScroll from 'better-scroll'
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
                showtop:false,
                scroll:null,
                swiperlist: [],
                recommendlist: [],
                goods:{
                    pop:{page:0,list:[]},
                    new:{page:0,list:[]},
                    sell:{page:0,list:[]}
                },
                producttype:'pop',
                isTop:false,
                activetabindex:0
            }
        },
        components:{
            HomeSwiper,HomeNavbar,HomeRecommend,Pop,Tab,BackTop,IsTop
        },
        created() {
            this.bannerAndremmand()
            this.productList('pop')
            this.productList('new')
            this.productList('sell')
        },
        mounted(){
            this.scrollEvent()
        },
        methods:{
            //处理滚动事件调用
            scrollEvent(){
                this.scroll =  new BScroll('.main',{
                    pullUpLoad:true,
                    click:true,
                    mouseWheel: true//pc端鼠标滚轮滑动
                })
                this.scroll.on('pullingUp',()=>{
                    //下拉加载更多商品
                    console.log("下拉加载")
                    this.scroll.finishPullUp()
                    this.productList(this.producttype)
                })

                this.isShowTop()
            },
            //是否显示返回顶部
            isShowTop(){
                this.scroll.on('scroll',(position)=>{
                    this.showtop = -position.y > 1000
                    //是否吸顶
                    this.isTop = -position.y - this.$refs.TabControl.$el.offsetTop>=0
                })
            },
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
                    //开启遮罩层
                    this.loadfail = true
                })
            },
            //流行新款推荐商品列表
            productList(type){
                let page = ++this.goods[type].page
                this.request({
                    method: 'get',
                    url: this.url.Homedata,
                    params:{
                        type:type,
                        page:page
                    }
                }).then(res => {
                    console.log(res)
                    this.goods[type].list = this.goods[type].list.concat(res.data.list)
                    this.scroll.finishPullUp()
                }, err => {
                    console.log(err)
                })
            },
            //指定点击商品类型
            tabclick(val){
                this.activetabindex = val
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
                this.scroll.scrollTo(0,0,500)
            }
        }

    }
</script>

<style scoped>
.main{
    height: calc(100vh - 105px);
    overflow: hidden;
}
</style>