<template>
    <div>
        <city-header/>
        <city-search/>
        <city-list :cities="cities" :hot="hotCities" :letter="letter"/>
        <city-alphabet :cities="cities" @change="handleChange"/>
    </div>
</template>

<script>
    import axios from 'axios'
    import CityHeader from './components/Header'
    import CitySearch from './components/Search'
    import CityList from './components/List'
    import CityAlphabet from './components/Alphabet'

    export default {
        name: 'City',
        components: {
            CityHeader,
            CitySearch,
            CityList,
            CityAlphabet
        },
        data() {
            return {
                cities: {},
                hotCities: [],
                letter: ''
            }
        },
        methods: {
            getCityInfo() {
                axios.get('/api/city.json')
                    .then(res => {
                        res = res.data;
                        if (res.ret && res.data) {
                            const data = res.data;
                            this.cities = data.cities
                            this.hotCities = data.hotCities
                        }
                    })
            },
            handleChange(letter) {
              this.letter = letter;
            }
        },
        mounted() {
            this.getCityInfo();
        }
    }
</script>

<style lang="stylus" scoped>

</style>
