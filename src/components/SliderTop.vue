<template>
<div class="swiper-wrapper">
  <swiper ref="mySwiper" :options="swiperOptions">
    <swiper-slide class="swiper-item"
                  v-for="(item, index) in slider"
                  :key="index"
                  :style="{
                    backgroundImage: 'url('+item.previewImage.min+')',
                    backgroundSize: 'cover'
                  }">
      <a href="#">
        {{ item.title }}
      </a>
    </swiper-slide>
  </swiper>
  <div class="swiper-button-prev" slot="button-prev">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 6L9 12L15 18" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </div>
  <div class="swiper-button-next" slot="button-next">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 18L15 12L9 6" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </div>
</div>
</template>
<style>
  .swiper-wrapper{
    position: relative;
  }
  .swiper-button-prev:after,
  .swiper-button-next:after{
    display: none;
  }
  .swiper-button-prev{
    left: -37px;
    width: auto;
    height: auto;
  }
  .swiper-button-next{
    right: -37px;
    width: auto;
    height: auto;
  }
  .swiper-item{
    height: 180px;
    width: 160px;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 100%);
    filter: drop-shadow(0px 0px 8px rgba(0, 0, 0, 0.15));
    border-radius: 12px;
    padding: 16px;
    display: flex;
    align-items: flex-end;
    font-weight: bold;
    font-size: 12px;
    line-height: 15px;
    color: #FFFFFF;
  }
</style>
<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  data () {
    return {
      swiperOptions: {
        slidesPerView: 'auto',
        spaceBetween: 16,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  },
  props: {
    slider: null
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.$swiper
    },
    swiperLengh () {
      return Object.keys(this.slider).length - 1
    }
  }
}
</script>
