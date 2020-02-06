<template>
    <div>
        <div class="title">
            周末去哪儿
        </div>
        <ul>
            <li class="item" v-for="item in list" :key="item.id">
                <div class="item-img-wrapper">
                    <img class="item-img"
                         :src="item.imgUrl"
                         alt="">
                </div>

                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">

                        {{item.desc}}
                    </p>

                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'HomeWeekend',
        props: {
            list: Array
        }
    }
</script>

<style lang="stylus" scoped>
    .title
        line-height .8rem
        background #eee
        text-indent .2rem
        text-align left
    .item-img-wrapper
        overflow hidden
        height: 0
        padding-bottom 33.9%
        .item-img
            width: 100%
    .item-info
        padding .1rem
        text-align left
        .item-title
            line-height:.54rem
            font-size .32rem
        .item-desc
            line-height:.4rem
            font-size .24rem
            color black
        .item-button
            margin-top .2rem
            background #ff9300
            padding 0 .1rem
            border-radius .06rem
            color #fff
    .item-location
        position absolute
        bottom .2rem
        right .2rem
        font-size .26rem
</style>
