<template>

    <div class="header">


                <router-link to="/" class="iconfont" style="color: white">
                &#xe676;
                </router-link>


        城市选择
    </div>
</template>

<script>
    export default {
        name: 'CityHeader'
    }
</script>

<style lang="stylus" scoped>
    @import "~@/assets/styles/variables.styl"
    .header

        overflow hidden
        height: .86rem
        line-height: .86rem
        text-align center
        color #fff
        background-color: $bgc
        .header-back
           flex 0.5
            width: .64rem
            font-size .4rem
            text-align center
            color #fff
</style>
