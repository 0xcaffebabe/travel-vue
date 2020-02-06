<template>
    <div>
        <div class="recommend-title">
            <img width="15px" src="http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png" alt="" style="margin-top: -5px">
            猜你喜欢
        </div>
        <ul>
            <li class="item" v-for="item in recommendList" :key="item.id">

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
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'HomeRecommend',
        data () {
            return {
                recommendList: [
                    {
                        id: '1',
                        imgUrl: 'http://img1.qunarzz.com/sight/p0/1801/5d/5d24bb249f8ca889a3.water.jpg_200x200_77551cb9.jpg',
                        title: '澳门水舞间演出',
                        desc: '9607条评论',
                        location: '澳门'
                    },
                    {
                        id: '2',
                        imgUrl: 'http://img1.qunarzz.com/sight/p0/1501/18/181cff1e8af11041.water.jpg_200x200_2e185c41.jpg',
                        title: '维多利亚海港',
                        desc: '667条评论',
                        location: '油尖旺'
                    },
                    {
                        id: '3',
                        imgUrl: 'http://img1.qunarzz.com/sight/p0/1801/5d/5d24bb249f8ca889a3.water.jpg_200x200_77551cb9.jpg',
                        title: '澳门水舞间演出',
                        desc: '9607条评论',
                        location: '澳门'
                    },
                    {
                        id: '4',
                        imgUrl: 'http://img1.qunarzz.com/sight/p0/1501/18/181cff1e8af11041.water.jpg_200x200_2e185c41.jpg',
                        title: '维多利亚海港',
                        desc: '667条评论',
                        location: '油尖旺'
                    }

                ]
            }
        }
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
