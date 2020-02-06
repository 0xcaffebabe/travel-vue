<template>
  <div class="home">
    <HomeHeader/>
    <HomeSwiper/>
    hello world
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'

export default {
  name: 'home',
  components: {
    HomeHeader,
    HomeSwiper
  }
}
</script>
