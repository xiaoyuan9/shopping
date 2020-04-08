<template>
    <div>
    <van-tabs
      title-active-color="rgb(249, 73, 111)"
      color="rgb(249, 73, 111)"
      swipeable
      sticky
      offset-top=49
      animated
      @click="aaa">
        <van-tab title="流行">
            <TabItem :tabItem="pop"></TabItem>
        </van-tab>
        <van-tab title="新款">
            <TabItem :tab-item="newk"></TabItem>
        </van-tab>
        <van-tab title="精选">
            <TabItem :tabItem="sell"></TabItem>
        </van-tab>
    </van-tabs>
    </div>
</template>

<script>
    import Vue from 'vue';
    import { Tab, Tabs } from 'vant';
    import TabItem from "./TabItem";

    Vue.use(Tab);
    Vue.use(Tabs);
    export default {
        name: "Tab",
        data(){
          return {
              pop:[],
              newk:[],
              sell:[],
              newkflag:false,
              sellflag:false
          }
        },
        created(){
            this.request({
                method: 'get',
                url: this.url.Homedata+'?type=pop&page=' + 50
            }).then(res => {
                console.log(res)
                this.pop = res.data.list
            }, err => {
                console.log(err)
            })
        },
        methods:{
          aaa(index,title){
              if(title==='新款'){
                  if(this.newkflag){
                      return
                  }
                  this.request({
                      method: 'get',
                      url: this.url.Homedata+'?type=new&page=' + 50
                  }).then(res => {
                      console.log(res)
                      this.newk = res.data.list
                  }, err => {
                      console.log(err)
                  })
                  this.newkflag = true
              }
              if(title==='精选'){
                  if(this.sellflag){
                      return
                  }
                  this.request({
                      method: 'get',
                      url: this.url.Homedata+'?type=sell&page=' + 1
                  }).then(res => {
                      console.log(res)
                      this.sell = res.data.list
                  }, err => {
                      console.log(err)
                  })
                  this.sellflag = true
              }
          }
        },
        components:{
            TabItem
        }
    }
</script>

<style scoped>
</style>