<template>
    <div>
        <detail-banner/>
        <detail-header/>
        <detail-list :list="list"/>
        <div class="content"></div>
    </div>
</template>

<script>
    import DetailBanner from "./components/Banner";
    import DetailHeader from "./components/Header";
    import DetailList from "./components/List";

    export default {
        name: 'Detail',
        data() {
            return {
                list: [
                    {
                        title: '成人票',
                        children: [
                            {
                                title:"成人三",
                                children: [
                                    {
                                        title: '成人三三'
                                    }
                                ]
                            },
                            {
                                title:"成人四"
                            }
                        ]
                    }
                    , {title: '学生票'}, {title: '儿童票'}, {title: '特惠票'}
                ]
            }
        },
        components: {DetailList, DetailHeader, DetailBanner}
    }
</script>

<style lang="stylus" scoped>
    .content
        height: 50rem
</style>
