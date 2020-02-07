<template>
    <ul class="list">
        <li class="item" v-for="item in letters" :key="item" :ref="item"
            @click="handleClick"
            @touchstart="handleTouchStart"
            @touchend="handleTouchEnd"
            @touchmove="handleTouchMove"
        >
            {{item}}
        </li>
    </ul>
</template>

<script>

    export default {
        name: 'CityAlphabet',
        props: {
            cities: Object
        },
        data() {
            return {
                touchState: false,
                startY: 0
            }
        },
        updated() {
            this.startY = this.$refs['A'][0].offsetTop
        },
        computed: {
            letters() {
                const letters = []
                for (let i in this.cities) {
                    letters.push(i)
                }
                return letters
            }
        },
        methods: {
            handleClick(e) {
                this.$emit('change', e.target.innerText)
            },
            handleTouchStart() {
                this.touchState = true
            },
            handleTouchMove(e) {
                if (this.touchState) {

                    const touchY = e.touches[0].clientY
                    const index = Math.ceil((touchY - this.startY) / this.$refs['A'][0].clientHeight) - 4

                    if (index >=0 && index< this.letters.length){
                        this.$emit('change',this.letters[index])
                    }
                }
            },
            handleTouchEnd() {
                this.touchState = false
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import "~@/assets/styles/variables.styl"
    .list
        display flex
        flex-direction column
        justify-content center
        position absolute
        top 1.58rem
        right 0
        bottom 0

        .item
            line-height: .44rem
            color $bgc
</style>
