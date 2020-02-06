<template>
    <swiper :options="swiperOption" v-if="showSwipper">
        <!-- slides -->
        <swiper-slide v-for="item in list" :key="item.id">
            <img class="swiper-img" :src="item.imgUrl" alt="">
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>

    </swiper>
</template>

<script>
   export default {
       props: {
         list: Array
       },
       name: 'HomeSwiper',
       data() {
           return {
               swiperOption: {
                   pagination: '.swiper-pagination', // 设置分页div
                   loop: true
               }
           }
       },
       computed: {
           showSwipper() {
               return this.list.length;
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
