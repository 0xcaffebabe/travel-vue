<template>

    <div class="list" ref="wrapper">
        <div>
            <div class="area">
                <div class="title border-topbottom">当前城市</div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button">{{this.$store.state.city}}</div>
                    </div>
                </div>

            </div>
            <div class="area">
                <div class="title border-topbottom">热门城市</div>
                <div class="button-list">
                    <div class="button-list">
                        <div class="button-wrapper" v-for="item in hot" :key="item.id" @click="handleCityClick(item.name)">
                            <div class="button">{{item.name}}</div>
                        </div>

                    </div>
                </div>
            </div>
            <div class="area" v-for="(item,key) in cities" :key="key" :ref="key">
                <div class="title border-topbottom">{{key}}</div>
                <div class="item-list">
                    <div class="item border-bottom" v-for="innerItem in item" :key="innerItem.id" @click="handleCityClick(innerItem.name)">
                        {{innerItem.name}}
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'

    export default {
        name: 'CityList',
        props: {
            cities: Object,
            hot: Array,
            letter: String
        },
        methods: {
            handleCityClick(city) {
                this.$store.commit('changeCity',city)
                this.$router.push('/')
            }
        },
        watch: {
            letter() {
                if (this.letter) {
                    const element = this.$refs[this.letter][0]

                    if (element){
                        this.scroll.scrollToElement(element)
                    }
                }

            }
        },
        mounted() {
            this.scroll = new BScroll(this.$refs.wrapper)
        }
    }
</script>

<style lang="stylus" scoped>
    @import "~@/assets/styles/variables.styl"
    .border-topbottom
        &:before
            border-color #ccc

        &:after
            border-color #ccc

    .border-bottom
        &:before
            border-color #ccc

        &:after
            border-color #ccc

    .list
        overflow hidden
        position absolute
        top 1.58rem
        left 0
        right 0
        bottom 0

        .title
            line-height: .54rem
            background: #eee
            padding-left .2rem
            color #666
            text-align left

        .button-list
            overflow hidden
            padding .1rem .6rem .1rem .1rem

            .button-wrapper
                float: left;
                width: 33.33%

                .button
                    padding .1rem 0
                    margin .1rem .1rem
                    border .02rem solid #ccc
                    border-radius .06rem

        .item-list
            .item
                line-height: .76rem
                color #666
                padding-left .2rem
                text-align left
</style>
