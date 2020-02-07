<template>
    <div class="header">
        <div class="header-left">
            <span class="iconfont">&#xe676;</span>
        </div>
        <div class="header-input">
            <span class="iconfont">&#xe636;</span>
            输入城市/景点/游玩主题
        </div>

        <router-link to="/city">
            <div class="header-right">
                {{city}}
                <span class="iconfont">&#xe6aa;</span>
            </div>
        </router-link>
    </div>
</template>

<script>
    export default {
        props: {
            city: String
        },
        name: 'HomeHeader'
    }
</script>

<style lang="stylus" scoped>
    @import "~@/assets/styles/variables.styl"
    .header
        display flex
        height: .86rem
        line-height .86rem
        background-color $bgc
        color white
        .header-left
            float left
            width .64rem
            span
                font-size .48rem
        .header-input
            flex 1
            padding-left .2rem
            margin-top .12rem
            margin-left .2rem
            height .64rem
            line-height .64rem
            text-align left
            background-color #fff
            border-radius .1rem
            color #ccc
        .header-right
            float: right
            width: 1.24rem
            text-align center
            color white
</style>
