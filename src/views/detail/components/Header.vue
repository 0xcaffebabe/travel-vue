<template>
    <div>
        <div class="header-abs" v-show="showAbs">
            <router-link tag="div" class="iconfont header-abs-back" to="/">
                &#xe676;
            </router-link>
        </div>
        <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
            <router-link tag="span" to="/" class="iconfont" style="color: white">
                &#xe676;
                景点详情
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'DetailHeader',
        data() {
            return {
                showAbs: true,
                opacityStyle: {
                    opacity: 0
                }
            }
        },
        methods: {
            handleScroll() {
                let top = document.documentElement.scrollTop
                if (top > 60) {
                    let opacity = top / 140
                    opacity = opacity > 1 ? 1 : opacity
                    this.opacityStyle = {opacity}
                    this.showAbs=false;
                } else {
                    this.showAbs = true
                }
            }
        },
        activated() {
            window.addEventListener('scroll', this.handleScroll)
        }
    }
</script>

<style lang="stylus" scoped>
    @import "~@/assets/styles/variables.styl"
    .header-abs
        position absolute
        left .2rem
        top .2rem
        width: .8rem
        height: .8rem
        line-height .8rem
        border-radius .4rem
        background-color: rgba(0, 0, 0, .8)

        .header-abs-back
            color #fff
            font-size .4rem

    .header-fixed
        position fixed
        top 0
        width: 100%
        height: .86rem
        line-height: .86rem
        left 0
        font-size .32rem
        color #fff
        background-color $bgc
</style>
