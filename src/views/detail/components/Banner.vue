<template>
    <div>
        <div class="banner" @click="handleBannerClick">
            <img class="banner-img"
                 src="http://img1.qunarzz.com/sight/p0/1801/5d/5d24bb249f8ca889a3.water.jpg_600x330_378727c0.jpg"
                 alt="">
            <div class="banner-info">
                <div class="banner-title">澳门水舞间演出</div>
                <div class="banner-number">
                    <span class="iconfont">&#xe662;</span>
                    45
                </div>
            </div>
        </div>
        <common-gallary :imgs="imgs" v-show="showGallary" @close="handleGallaryClose"/>
    </div>
</template>

<script>
    import CommonGallary from '@/common/gallary/Gallary'

    export default {
        name: 'Banner',
        data() {
          return {
              imgs: ["http://img1.qunarzz.com/sight/p0/1905/f7/f78db6b93d44170aa3.img.jpg_r_800x800_e4ae696b.jpg"
              ,"http://img1.qunarzz.com/sight/p0/1905/f7/f78db6b93d44170aa3.img.jpg_r_800x800_e4ae696b.jpg"],
              showGallary:false
          }
        },
        methods: {
            handleBannerClick() {
                this.showGallary = true
            },
            handleGallaryClose() {
                this.showGallary = false
            }
        },
        components: {CommonGallary}
    }
</script>

<style lang="stylus" scoped>
    .banner
        position relative
        overflow hidden
        height 0
        padding-bottom 55%
        color white

        .banner-img
            width: 100%

        .banner-info
            display flex
            position: absolute;
            left 0
            right 0
            bottom 0
            line-height .6rem
            background-image linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, .8))

            .banner-title
                flex 1
                text-align left
                font-size .32rem
                padding .2rem

            .banner-number
                padding 0 .4rem
                line-height: .32rem
                height .32rem
                margin-top .2rem
                border-radius .2rem
                background rgba(0, 0, 0, .4)
</style>
