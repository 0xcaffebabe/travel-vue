<template>
    <div class="icons">
        <swiper :options="swiperOption">
            <swiper-slide v-for="(page,index) in pages" :key="index">
                <div class="icon" v-for="item in page" :key="item.id">
                    <div class="icon-img">
                        <img :src="item.imgUrl" alt="">
                        <p class="icon-title">{{item.desc}}</p>
                    </div>
                </div>
            </swiper-slide>


        </swiper>
    </div>

</template>

<script>
    export default {
        name: 'HomeIcons',
        props: {
            list: Array
        },
        data() {
            return {
                swiperOption: {

                    autoPlay: false
                }
            }
        },
        computed: {
            // 将iconList 每8个item分为一page
            pages() {
                const pages = []
                this.list.forEach((item, index) => {
                    const page = Math.floor(index / 8)
                    if (!pages[page]) {
                        pages[page]=[]
                    }
                    pages[page].push(item)
                })
                return pages
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .icons >>> .swiper-container
        height: 0
        padding-bottom 50%
    .icons
        overflow hidden
        height: 0
        padding-bottom 50%

        .icon
            position relative
            overflow hidden
            float left
            width: 25%

            padding-bottom 25%

            .icon-img
                position absolute
                top .1rem
                left 50%
                transform translateX(-50%)
                bottom .44rem

                img
                    height: 60%

                p
                    padding-top .1rem
</style>
