<template>
  <div class="home">
    <div class="container">
      <SliderTop></SliderTop>
      <div class="home__inner">
        <h1 class="home__title title">Курсы и уроки</h1>
        <div class="home__items grid">
          <a href="#" class="home__item block" v-for="(item, index) in items" :key="index" :style="{backgroundImage: 'url('+require('@/assets/img/'+item.img+'.jpg')+')'}">
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .swiper-wrapper{
    margin-bottom: 64px;
  }
  .home{
    &__items{
      margin-bottom: -24px;
    }
    &__item{
      display: block;
      height: 198px;
      margin-bottom: 24px;
    }
  }
</style>

<script>
import SliderTop from '@/components/SliderTop'

export default {
  name: 'Home',
  components: {
    SliderTop
  },
  data () {
    return {
      items: {
        item1: {
          img: 'home1'
        },
        item2: {
          img: 'home2'
        },
        item3: {
          img: 'home3'
        },
        item4: {
          img: 'home4'
        },
        item5: {
          img: 'home5'
        },
        item6: {
          img: 'home6'
        },
        item7: {
          img: 'home1'
        },
        item8: {
          img: 'home2'
        },
        item9: {
          img: 'home3'
        }
      }
    }
  }
}
</script>
