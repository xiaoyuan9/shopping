<template>
    <div>
        <Navbar bg="rgb(249, 73, 111)">
            <div slot="left"></div>
            <div slot="center" :style="{color:color}">购物街</div>
            <div slot="right"></div>
        </Navbar>
    </div>
</template>

<script>
    import Navbar from "../../../components/navbar/Navbar";
    export default {
        name: "HomeNavbar",
        components:{
            Navbar
        },
        props:{
            color:{
                type:String,
                default:'#000'
            }
        }
    }
</script>

<style scoped>

</style>