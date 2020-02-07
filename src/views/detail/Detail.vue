<template>
    <div>
        <detail-banner :sightName="sightName" :bannerImg="bannerImg" :gallaryImgs="gallaryImgs"/>
        <detail-header/>
        <detail-list :list="list"/>
        <div class="content"></div>
    </div>
</template>

<script>
    import DetailBanner from "./components/Banner";
    import DetailHeader from "./components/Header";
    import DetailList from "./components/List";
    import axios from 'axios'

    export default {
        name: 'Detail',
        data() {
            return {
                sightName: '',
                bannerImg: '',
                gallaryImgs: [],
                list: []
            }
        },
        components: {DetailList, DetailHeader, DetailBanner},
        mounted() {
            this.getDetailInfo()
        },
        methods: {
            getDetailInfo() {
                axios.get('/api/detail.json?id=', {
                    params: {
                        id: this.$route.params.id
                    }
                }).then(res => {
                    res = res.data
                    if (res.ret && res.data) {
                        const data = res.data
                        this.sightName = data.sightName
                        this.bannerImg = data.bannerImg
                        this.gallaryImgs = data.gallaryImgs
                        this.list = data.categoryList
                    }
                })
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .content
        height: 50rem
</style>
