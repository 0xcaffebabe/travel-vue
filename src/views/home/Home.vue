<template>
    <div class="home">
        <home-header :city="city"/>
        <home-swiper :list="swiperList"/>
        <home-icons :list="iconList"/>
        <home-recommend :list="recommendList"/>
        <home-weekend :list="weekendList"/>
    </div>
</template>

<script>
    import axios from 'axios'
    import HomeHeader from './components/Header'
    import HomeSwiper from './components/Swiper'
    import HomeIcons from './components/Icons'
    import HomeRecommend from './components/Recommend'
    import HomeWeekend from './components/Weeken'

    export default {
        name: 'home',
        components: {
            HomeHeader,
            HomeSwiper,
            HomeIcons,
            HomeRecommend,
            HomeWeekend
        },
        data() {
            return {
                city: '',
                swiperList: [],
                iconList: [],
                recommendList:[],
                weekendList:[]
            }
        },
        mounted() {
            this.getHomeInfo()
        },
        methods: {
            getHomeInfo() {
                axios.get('/api/index.json')
                    .then(res => {
                        res = res.data;
                        if (res.ret && res.data) {
                          const data = res.data;
                          this.city = data.city;
                          this.swiperList = data.swiperList;
                          this.iconList = data.iconList;
                          this.recommendList = data.recommendList;
                          this.weekendList = data.weekendList;
                        }
                    })
            }
        }
    }
</script>
