<template>

    <div class="list" ref="wrapper">
        <div>
            <div class="area">
                <div class="title border-topbottom">当前城市</div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button">漳州</div>
                    </div>
                    <div class="button-wrapper">
                        <div class="button">漳州</div>
                    </div>
                    <div class="button-wrapper">
                        <div class="button">漳州</div>
                    </div>
                    <div class="button-wrapper">
                        <div class="button">漳州</div>
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">热门城市</div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button">漳州</div>
                    </div>
                    <div class="button-wrapper">
                        <div class="button">漳州</div>
                    </div>
                    <div class="button-wrapper">
                        <div class="button">漳州</div>
                    </div>
                    <div class="button-wrapper">
                        <div class="button">漳州</div>
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">A</div>
                <div class="item-list">
                    <div class="item border-bottom">
                        阿拉尔
                    </div>
                    <div class="item border-bottom">
                        阿拉善
                    </div>
                    <div class="item border-bottom">
                        阿尔巴
                    </div>

                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">A</div>
                <div class="item-list">
                    <div class="item border-bottom">
                        阿拉尔
                    </div>
                    <div class="item border-bottom">
                        阿拉善
                    </div>
                    <div class="item border-bottom">
                        阿尔巴
                    </div>

                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">A</div>
                <div class="item-list">
                    <div class="item border-bottom">
                        阿拉尔
                    </div>
                    <div class="item border-bottom">
                        阿拉善
                    </div>
                    <div class="item border-bottom">
                        阿尔巴
                    </div>

                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">A</div>
                <div class="item-list">
                    <div class="item border-bottom">
                        阿拉尔
                    </div>
                    <div class="item border-bottom">
                        阿拉善
                    </div>
                    <div class="item border-bottom">
                        阿尔巴
                    </div>

                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">A</div>
                <div class="item-list">
                    <div class="item border-bottom">
                        阿拉尔
                    </div>
                    <div class="item border-bottom">
                        阿拉善
                    </div>
                    <div class="item border-bottom">
                        阿尔巴
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
