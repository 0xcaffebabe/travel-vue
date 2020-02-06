<template>
  <div class="home">
    <HomeHeader/>
    <HomeSwiper/>
    <HomeIcons/>

  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
export default {
  name: 'home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons
  }
}
</script>
