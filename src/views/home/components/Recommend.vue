<template>
    <div>
        <div class="recommend-title">
            <img width="15px" src="http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png" alt=""
                 style="margin-top: -5px">
            猜你喜欢
        </div>
        <ul>
            <router-link tag="li" class="item" v-for="item in list" :key="item.id" :to="'/detail/' + item.id">

                <img class="item-img"
                     :src="item.imgUrl"
                     alt="">

                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">
                        🔥
                        {{item.desc}}
                    </p>

                    <button class="item-button">查看详情</button>
                    <p class="item-location">{{item.location}}</p>
                </div>
            </router-link>
        </ul>
    </div>
</template>

<script>
    export default {
        props: {
            list: Array
        },
        name: 'HomeRecommend'
    }
</script>

<style lang="stylus" scoped>
    .recommend-title
        line-height .8rem
        background #eee
        text-indent .2rem
        text-align left

    .item
        position relative
        overflow hidden
        display flex
        height: 1.9rem

        .item-img
            height: 1.7rem
            padding .1rem

        .item-info
            flex 1
            padding .1rem
            text-align left

            .item-title
                line-height: .54rem
                font-size .32rem

            .item-desc
                line-height: .4rem
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
