<template>
    <swiper :options="swiperOption">
        <!-- slides -->
        <swiper-slide v-for="item in swiperList" :key="item.id">
            <img class="swiper-img" :src="item.imgUrl" alt="">
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>

    </swiper>
</template>

<script>
   export default {
       name: 'HomeSwiper',
       data() {
           return {
               swiperOption: {
                   pagination: '.swiper-pagination', // 设置分页div
                   loop: true
               },
               swiperList: [
                   {id: '1',imgUrl:'http://img1.qunarzz.com/sight/p0/1705/c2/c2249cf7d5ae5b71a3.img.jpg_600x330_2dd75e54.jpg'},
                   {id: '2',imgUrl:'http://img1.qunarzz.com/sight/p0/1501/18/181cff1e8af11041.water.jpg_600x330_40b06d15.jpg'},
                   {id: '3',imgUrl:'http://img1.qunarzz.com/sight/p0/1505/97/97d57e2d8cee926d.water.jpg_600x330_7cfcc192.jpg'},
               ]
           }
       }
   }
</script>

<style lang="stylus" scoped>
    >>>.swiper-pagination-bullet-active
        background-color: white!important
    .swiper-img
        width: 100%
</style>
