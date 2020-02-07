<template>
    <ul class="list">
        <li class="item" v-for="(item,key) in cities" :key="key">
            {{key}}
        </li>

    </ul>
</template>

<script>

    export default {
        name: 'CityAlphabet',
        props: {
            cities: Object
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
