<template>
    <div class="pop">
        <a :href="poplink.link">
            <img src="~assets/img/recommend_bg.jpg" alt="">
        </a>
    </div>
</template>

<script>
    export default {
        name: "Pop",
        props:{
            poplink:{
                type:Object,
                default(){
                    return {}
                }
            }
        }
    }
</script>

<style scoped>
.pop img{
    width: 100%;
}
</style>