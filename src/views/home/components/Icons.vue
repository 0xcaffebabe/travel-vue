<template>
    <div class="icons">
        <swiper>
            <swiper-slide v-for="(page,index) in pages" :key="index">
                <div class="icon" v-for="item in page" :key="item.id">
                    <div class="icon-img">
                        <img :src="item.imgUrl" alt="">
                        <p class="icon-title">{{item.title}}</p>
                    </div>
                </div>
            </swiper-slide>


        </swiper>
    </div>

</template>

<script>
    export default {
        name: 'HomeIcons',
        data() {
            return {
                iconList: [
                    {
                        id: '1',
                        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
                        title: '景点门票'
                    },
                    {id: '2', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png', title: '一日游'},
                    {id: '3', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/ab/6f7d6e44963c9302.png', title: '泡温泉'},
                    {
                        id: '5',
                        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
                        title: '景点门票'
                    },
                    {id: '7', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/ab/6f7d6e44963c9302.png', title: '泡温泉'},
                    {id: '4', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/67/9a1678221b8e0e02.png', title: '古镇'},
                    {id: '6', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png', title: '一日游'},
                    {id: '8', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/67/9a1678221b8e0e02.png', title: '古镇'},
                    {id: '9', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/ab/6f7d6e44963c9302.png', title: '泡温泉'}
                ]
            }
        },
        computed: {
            // 将iconList 每8个item分为一page
            pages() {
                const pages = []
                this.iconList.forEach((item, index) => {
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
                top 0
                left 0
                bottom .44rem

                img
                    height: 100%
</style>
