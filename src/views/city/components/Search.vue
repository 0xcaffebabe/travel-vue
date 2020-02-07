<template>
    <div>
        <div class="search">
            <input class="search-input" type="text" placeholder="输入城市名或拼音" v-model="keyword">
        </div>
        <div class="search-content" ref="search" v-show="keyword">
            <ul>
                <li class="search-item border-bottom"
                    v-for="item in list"
                    :key="item.id"
                    @click="handleCityClick(item.name)">{{item.name}}</li>
                <li class="search-item border-bottom" v-show="hasNoData">没有找到匹配数据</li>
            </ul>
        </div>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'
    export default {
        name: 'CitySearch',
        props: {
            cities: Object
        },
        data() {
            return {
                keyword: '',
                list: [],
                timer: null
            }
        },
        methods: {
            handleCityClick(city) {
                this.$store.commit('changeCity',city)
                this.$router.push('/')
            }
        },
        computed: {
          hasNoData() {
              return this.list.length === 0
          }
        },
        mounted() {
            this.scroll = new BScroll(this.$refs.search)
        },
        watch: {
            keyword() {
                if (this.timer) {
                    clearTimeout(this.timer);
                    this.timer = null
                }
                if (!this.keyword){
                    this.list = []
                    return
                }
                this.timer = setTimeout(() => {
                    const result = []
                    for (let i in this.cities) {
                        this.cities[i].forEach(v => {
                            if (v.spell.indexOf(this.keyword) > -1 || v.name.indexOf(this.keyword) > -1) {
                                result.push(v)
                            }
                        })
                    }
                    this.list = result

                }, 100)
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import "~@/assets/styles/variables.styl"
    .search
        height: .72rem
        padding 0 .1rem
        background-color: $bgc

        .search-input
            box-sizing border-box
            padding 0 .1rem
            height: .62rem
            line-height: .62rem
            width: 100%
            text-align center
            border-radius .06rem
            color #666

    .search-content
        overflow hidden
        position: absolute
        top 1.58rem
        left 0
        right 0
        bottom 0
        z-index 999
        background-color: #eee

        .search-item
            line-height: .62rem
            padding-left: .2rem
            color #666
</style>
