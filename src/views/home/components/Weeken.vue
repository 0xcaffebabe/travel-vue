<template>
    <div>
        <div class="title">
            周末去哪儿
        </div>
        <ul>
            <li class="item" v-for="item in recommendList" :key="item.id">
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
        data () {
            return {
                recommendList: [
                    {
                        id: '1',
                        imgUrl: 'http://img1.qunarzz.com/sight/source/1811/ed/bf2bc72af591d5.jpg_r_640x214_f9f1bfcc.jpg',
                        title: '温泉必游',
                        desc: '为你量身打造绿色健康生活方式，远离都市的喧嚣，工作的烦恼。'
                    },
                    {
                        id: '2',
                        imgUrl: 'http://img1.qunarzz.com/sight/source/1812/ce/44203f8332865.jpg_r_640x214_ec49a2ca.jpg',
                        title: '苏州泡汤圣地',
                        desc: '解压之地，放松自己，来一段轻松的旅程。'
                    },
                    {
                        id: '3',
                        imgUrl: 'http://img1.qunarzz.com/sight/source/1811/ed/bf2bc72af591d5.jpg_r_640x214_f9f1bfcc.jpg',
                        title: '温泉必游',
                        desc: '为你量身打造绿色健康生活方式，远离都市的喧嚣，工作的烦恼。'
                    },
                    {
                        id: '4',
                        imgUrl: 'http://img1.qunarzz.com/sight/source/1812/ce/44203f8332865.jpg_r_640x214_ec49a2ca.jpg',
                        title: '苏州泡汤圣地',
                        desc: '解压之地，放松自己，来一段轻松的旅程。'
                    }

                ]
            }
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
