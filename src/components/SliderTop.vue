<template>
  <div class="swiper-wrapper">
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide class="swiper-item"
                    v-for="(item, index) in swiperVal"
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
  .swiper-wrapper {
    position: relative;
  }

  .swiper-button-prev:after,
  .swiper-button-next:after {
    display: none;
  }

  .swiper-button-prev {
    left: -37px;
    width: auto;
    height: auto;
  }

  .swiper-button-next {
    right: -37px;
    width: auto;
    height: auto;
  }

  .swiper-item {
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
    },
    swiperVal () {
      if (this.slider === null) {
        return [{
          id: 'wgZbZuUyMp78jR1AAn4r',
          title: '__vue_devtool_undefined__',
          previewImage: {
            max: 'https://firebasestorage.googleapis.com/v0/b/fitplace-289115.appspot.com/o/users%2Fstories%2F1607675216231.jpg?alt=media&token=ff4421e9-6564-4bfb-996a-477680f35323',
            min: 'https://firebasestorage.googleapis.com/v0/b/fitplace-289115.appspot.com/o/users%2Fstories%2F1607675216231.jpg?alt=media&token=ff4421e9-6564-4bfb-996a-477680f35323'
          },
          image: [{
            max: 'https://firebasestorage.googleapis.com/v0/b/fitplace-289115.appspot.com/o/users%2Fstories%2F1607631951409.jpg?alt=media&token=0bf410bd-4242-4934-955e-72142928f8c4',
            min: 'https://firebasestorage.googleapis.com/v0/b/fitplace-289115.appspot.com/o/users%2Fstories%2F1607631951409.jpg?alt=media&token=0bf410bd-4242-4934-955e-72142928f8c4'
          }, {
            min: 'https://firebasestorage.googleapis.com/v0/b/fitplace-289115.appspot.com/o/users%2Fstories%2F1607631960626.jpg?alt=media&token=7248ac31-3d25-4bbd-ab70-8b98bb31d6c2',
            max: 'https://firebasestorage.googleapis.com/v0/b/fitplace-289115.appspot.com/o/users%2Fstories%2F1607631960626.jpg?alt=media&token=7248ac31-3d25-4bbd-ab70-8b98bb31d6c2'
          }, {
            max: 'https://firebasestorage.googleapis.com/v0/b/fitplace-289115.appspot.com/o/users%2Fstories%2F1607631968924.jpg?alt=media&token=38048f9b-1c67-447a-8f93-8be4f8cfe3b6',
            min: 'https://firebasestorage.googleapis.com/v0/b/fitplace-289115.appspot.com/o/users%2Fstories%2F1607631968924.jpg?alt=media&token=38048f9b-1c67-447a-8f93-8be4f8cfe3b6'
          }]
        }, {
          id: '49VzFtXpyoSGpDwBFLyb',
          title: '__vue_devtool_undefined__',
          previewImage: {
            max: 'https://firebasestorage.googleapis.com/v0/b/fitplace-289115.appspot.com/o/users%2Fstories%2F1607676126471.jpg?alt=media&token=58c8b276-1ca1-41b7-a05f-803a2263b98b',
            min: 'https://firebasestorage.googleapis.com/v0/b/fitplace-289115.appspot.com/o/users%2Fstories%2F1607676126471.jpg?alt=media&token=58c8b276-1ca1-41b7-a05f-803a2263b98b'
          },
          image: [{
            max: 'https://firebasestorage.googleapis.com/v0/b/fitplace-289115.appspot.com/o/users%2Fstories%2F1607632060755.jpg?alt=media&token=14c22ea1-1541-4d3d-82c9-3113f733080d',
            min: 'https://firebasestorage.googleapis.com/v0/b/fitplace-289115.appspot.com/o/users%2Fstories%2F1607632060755.jpg?alt=media&token=14c22ea1-1541-4d3d-82c9-3113f733080d'
          }, {
            min: 'https://firebasestorage.googleapis.com/v0/b/fitplace-289115.appspot.com/o/users%2Fstories%2F1607632067588.jpg?alt=media&token=cde62cf3-222d-4ea4-9026-9151dbabbb12',
            max: 'https://firebasestorage.googleapis.com/v0/b/fitplace-289115.appspot.com/o/users%2Fstories%2F1607632067588.jpg?alt=media&token=cde62cf3-222d-4ea4-9026-9151dbabbb12'
          }, {
            min: 'https://firebasestorage.googleapis.com/v0/b/fitplace-289115.appspot.com/o/users%2Fstories%2F1607632076338.jpg?alt=media&token=4bc078db-52b5-478f-a0e8-7157fadb12fb',
            max: 'https://firebasestorage.googleapis.com/v0/b/fitplace-289115.appspot.com/o/users%2Fstories%2F1607632076338.jpg?alt=media&token=4bc078db-52b5-478f-a0e8-7157fadb12fb'
          }, {
            min: 'https://firebasestorage.googleapis.com/v0/b/fitplace-289115.appspot.com/o/users%2Fstories%2F1607632082991.jpg?alt=media&token=6880b99d-bb82-49ca-a2d5-c7075bbcfebe',
            max: 'https://firebasestorage.googleapis.com/v0/b/fitplace-289115.appspot.com/o/users%2Fstories%2F1607632082991.jpg?alt=media&token=6880b99d-bb82-49ca-a2d5-c7075bbcfebe'
          }]
        }, {
          id: 'z5rQOyuGrTNhQwzrKgK1',
          title: '__vue_devtool_undefined__',
          previewImage: {
            min: 'https://firebasestorage.googleapis.com/v0/b/fitplace-289115.appspot.com/o/users%2Fstories%2F1607675100536.jpg?alt=media&token=7243fb21-44fd-4a1b-a975-a27788e2112b',
            max: 'https://firebasestorage.googleapis.com/v0/b/fitplace-289115.appspot.com/o/users%2Fstories%2F1607675100536.jpg?alt=media&token=7243fb21-44fd-4a1b-a975-a27788e2112b'
          },
          image: [{
            min: 'https://firebasestorage.googleapis.com/v0/b/fitplace-289115.appspot.com/o/users%2Fstories%2F1607675319337.jpg?alt=media&token=c77436bf-35d3-40d8-ac2c-bd97e8f1fc62',
            max: 'https://firebasestorage.googleapis.com/v0/b/fitplace-289115.appspot.com/o/users%2Fstories%2F1607675319337.jpg?alt=media&token=c77436bf-35d3-40d8-ac2c-bd97e8f1fc62'
          }, {
            min: 'https://firebasestorage.googleapis.com/v0/b/fitplace-289115.appspot.com/o/users%2Fstories%2F1607675327088.jpg?alt=media&token=de218c47-212c-4546-baa5-d57f8f333924',
            max: 'https://firebasestorage.googleapis.com/v0/b/fitplace-289115.appspot.com/o/users%2Fstories%2F1607675327088.jpg?alt=media&token=de218c47-212c-4546-baa5-d57f8f333924'
          }, {
            min: 'https://firebasestorage.googleapis.com/v0/b/fitplace-289115.appspot.com/o/users%2Fstories%2F1607675333903.jpg?alt=media&token=9ff77265-c36c-41d2-8c76-5c0f929a73f7',
            max: 'https://firebasestorage.googleapis.com/v0/b/fitplace-289115.appspot.com/o/users%2Fstories%2F1607675333903.jpg?alt=media&token=9ff77265-c36c-41d2-8c76-5c0f929a73f7'
          }]
        }, {
          id: 'rUswVQZ8xLcuR5StqhpC',
          title: '__vue_devtool_undefined__',
          previewImage: {
            max: 'https://firebasestorage.googleapis.com/v0/b/fitplace-289115.appspot.com/o/users%2Fstories%2F1607676136625.jpg?alt=media&token=6930d75c-47b9-4a68-870a-bcfac8ae9d51',
            min: 'https://firebasestorage.googleapis.com/v0/b/fitplace-289115.appspot.com/o/users%2Fstories%2F1607676136625.jpg?alt=media&token=6930d75c-47b9-4a68-870a-bcfac8ae9d51'
          },
          image: [{
            max: 'https://firebasestorage.googleapis.com/v0/b/fitplace-289115.appspot.com/o/users%2Fstories%2F1607675153091.jpg?alt=media&token=7d70c339-2f2c-4b19-a543-f629cc2a822c',
            min: 'https://firebasestorage.googleapis.com/v0/b/fitplace-289115.appspot.com/o/users%2Fstories%2F1607675153091.jpg?alt=media&token=7d70c339-2f2c-4b19-a543-f629cc2a822c'
          }, {
            max: 'https://firebasestorage.googleapis.com/v0/b/fitplace-289115.appspot.com/o/users%2Fstories%2F1607675164190.jpg?alt=media&token=08536ba2-ab28-45bd-a4f6-2ae5f5460f66',
            min: 'https://firebasestorage.googleapis.com/v0/b/fitplace-289115.appspot.com/o/users%2Fstories%2F1607675164190.jpg?alt=media&token=08536ba2-ab28-45bd-a4f6-2ae5f5460f66'
          }, {
            max: 'https://firebasestorage.googleapis.com/v0/b/fitplace-289115.appspot.com/o/users%2Fstories%2F1607675171674.jpg?alt=media&token=3fb397cb-dba9-4687-8375-8962a7997529',
            min: 'https://firebasestorage.googleapis.com/v0/b/fitplace-289115.appspot.com/o/users%2Fstories%2F1607675171674.jpg?alt=media&token=3fb397cb-dba9-4687-8375-8962a7997529'
          }, {
            min: 'https://firebasestorage.googleapis.com/v0/b/fitplace-289115.appspot.com/o/users%2Fstories%2F1607675179377.jpg?alt=media&token=ca4547e8-983e-433f-a79b-694453f313a0',
            max: 'https://firebasestorage.googleapis.com/v0/b/fitplace-289115.appspot.com/o/users%2Fstories%2F1607675179377.jpg?alt=media&token=ca4547e8-983e-433f-a79b-694453f313a0'
          }]
        }, {
          id: '60Dnac0nRTqYgmhK7E1e',
          title: '__vue_devtool_undefined__',
          previewImage: {
            min: 'https://firebasestorage.googleapis.com/v0/b/fitplace-289115.appspot.com/o/users%2Fstories%2F1607675237467.jpg?alt=media&token=3a4138e9-f1d2-4484-8a2d-f0312686d108',
            max: 'https://firebasestorage.googleapis.com/v0/b/fitplace-289115.appspot.com/o/users%2Fstories%2F1607675237467.jpg?alt=media&token=3a4138e9-f1d2-4484-8a2d-f0312686d108'
          },
          image: [{
            max: 'https://firebasestorage.googleapis.com/v0/b/fitplace-289115.appspot.com/o/users%2Fstories%2F1607603559081.jpg?alt=media&token=cb6b3bb6-3d57-42f3-a021-0a38b5cba9fd',
            min: 'https://firebasestorage.googleapis.com/v0/b/fitplace-289115.appspot.com/o/users%2Fstories%2F1607603559081.jpg?alt=media&token=cb6b3bb6-3d57-42f3-a021-0a38b5cba9fd'
          }, {
            min: 'https://firebasestorage.googleapis.com/v0/b/fitplace-289115.appspot.com/o/users%2Fstories%2F1607603568660.jpg?alt=media&token=96e0913a-fd19-488b-a15d-8f41eedf0701',
            max: 'https://firebasestorage.googleapis.com/v0/b/fitplace-289115.appspot.com/o/users%2Fstories%2F1607603568660.jpg?alt=media&token=96e0913a-fd19-488b-a15d-8f41eedf0701'
          }]
        }, {
          id: 'wgZbZuUyMp78jR1AAn4r',
          title: '__vue_devtool_undefined__',
          previewImage: {
            max: 'https://firebasestorage.googleapis.com/v0/b/fitplace-289115.appspot.com/o/users%2Fstories%2F1607675216231.jpg?alt=media&token=ff4421e9-6564-4bfb-996a-477680f35323',
            min: 'https://firebasestorage.googleapis.com/v0/b/fitplace-289115.appspot.com/o/users%2Fstories%2F1607675216231.jpg?alt=media&token=ff4421e9-6564-4bfb-996a-477680f35323'
          },
          image: [{
            max: 'https://firebasestorage.googleapis.com/v0/b/fitplace-289115.appspot.com/o/users%2Fstories%2F1607631951409.jpg?alt=media&token=0bf410bd-4242-4934-955e-72142928f8c4',
            min: 'https://firebasestorage.googleapis.com/v0/b/fitplace-289115.appspot.com/o/users%2Fstories%2F1607631951409.jpg?alt=media&token=0bf410bd-4242-4934-955e-72142928f8c4'
          }, {
            min: 'https://firebasestorage.googleapis.com/v0/b/fitplace-289115.appspot.com/o/users%2Fstories%2F1607631960626.jpg?alt=media&token=7248ac31-3d25-4bbd-ab70-8b98bb31d6c2',
            max: 'https://firebasestorage.googleapis.com/v0/b/fitplace-289115.appspot.com/o/users%2Fstories%2F1607631960626.jpg?alt=media&token=7248ac31-3d25-4bbd-ab70-8b98bb31d6c2'
          }, {
            max: 'https://firebasestorage.googleapis.com/v0/b/fitplace-289115.appspot.com/o/users%2Fstories%2F1607631968924.jpg?alt=media&token=38048f9b-1c67-447a-8f93-8be4f8cfe3b6',
            min: 'https://firebasestorage.googleapis.com/v0/b/fitplace-289115.appspot.com/o/users%2Fstories%2F1607631968924.jpg?alt=media&token=38048f9b-1c67-447a-8f93-8be4f8cfe3b6'
          }]
        }, {
          id: '49VzFtXpyoSGpDwBFLyb',
          title: '__vue_devtool_undefined__',
          previewImage: {
            max: 'https://firebasestorage.googleapis.com/v0/b/fitplace-289115.appspot.com/o/users%2Fstories%2F1607676126471.jpg?alt=media&token=58c8b276-1ca1-41b7-a05f-803a2263b98b',
            min: 'https://firebasestorage.googleapis.com/v0/b/fitplace-289115.appspot.com/o/users%2Fstories%2F1607676126471.jpg?alt=media&token=58c8b276-1ca1-41b7-a05f-803a2263b98b'
          },
          image: [{
            max: 'https://firebasestorage.googleapis.com/v0/b/fitplace-289115.appspot.com/o/users%2Fstories%2F1607632060755.jpg?alt=media&token=14c22ea1-1541-4d3d-82c9-3113f733080d',
            min: 'https://firebasestorage.googleapis.com/v0/b/fitplace-289115.appspot.com/o/users%2Fstories%2F1607632060755.jpg?alt=media&token=14c22ea1-1541-4d3d-82c9-3113f733080d'
          }, {
            min: 'https://firebasestorage.googleapis.com/v0/b/fitplace-289115.appspot.com/o/users%2Fstories%2F1607632067588.jpg?alt=media&token=cde62cf3-222d-4ea4-9026-9151dbabbb12',
            max: 'https://firebasestorage.googleapis.com/v0/b/fitplace-289115.appspot.com/o/users%2Fstories%2F1607632067588.jpg?alt=media&token=cde62cf3-222d-4ea4-9026-9151dbabbb12'
          }, {
            min: 'https://firebasestorage.googleapis.com/v0/b/fitplace-289115.appspot.com/o/users%2Fstories%2F1607632076338.jpg?alt=media&token=4bc078db-52b5-478f-a0e8-7157fadb12fb',
            max: 'https://firebasestorage.googleapis.com/v0/b/fitplace-289115.appspot.com/o/users%2Fstories%2F1607632076338.jpg?alt=media&token=4bc078db-52b5-478f-a0e8-7157fadb12fb'
          }, {
            min: 'https://firebasestorage.googleapis.com/v0/b/fitplace-289115.appspot.com/o/users%2Fstories%2F1607632082991.jpg?alt=media&token=6880b99d-bb82-49ca-a2d5-c7075bbcfebe',
            max: 'https://firebasestorage.googleapis.com/v0/b/fitplace-289115.appspot.com/o/users%2Fstories%2F1607632082991.jpg?alt=media&token=6880b99d-bb82-49ca-a2d5-c7075bbcfebe'
          }]
        }, {
          id: 'z5rQOyuGrTNhQwzrKgK1',
          title: '__vue_devtool_undefined__',
          previewImage: {
            min: 'https://firebasestorage.googleapis.com/v0/b/fitplace-289115.appspot.com/o/users%2Fstories%2F1607675100536.jpg?alt=media&token=7243fb21-44fd-4a1b-a975-a27788e2112b',
            max: 'https://firebasestorage.googleapis.com/v0/b/fitplace-289115.appspot.com/o/users%2Fstories%2F1607675100536.jpg?alt=media&token=7243fb21-44fd-4a1b-a975-a27788e2112b'
          },
          image: [{
            min: 'https://firebasestorage.googleapis.com/v0/b/fitplace-289115.appspot.com/o/users%2Fstories%2F1607675319337.jpg?alt=media&token=c77436bf-35d3-40d8-ac2c-bd97e8f1fc62',
            max: 'https://firebasestorage.googleapis.com/v0/b/fitplace-289115.appspot.com/o/users%2Fstories%2F1607675319337.jpg?alt=media&token=c77436bf-35d3-40d8-ac2c-bd97e8f1fc62'
          }, {
            min: 'https://firebasestorage.googleapis.com/v0/b/fitplace-289115.appspot.com/o/users%2Fstories%2F1607675327088.jpg?alt=media&token=de218c47-212c-4546-baa5-d57f8f333924',
            max: 'https://firebasestorage.googleapis.com/v0/b/fitplace-289115.appspot.com/o/users%2Fstories%2F1607675327088.jpg?alt=media&token=de218c47-212c-4546-baa5-d57f8f333924'
          }, {
            min: 'https://firebasestorage.googleapis.com/v0/b/fitplace-289115.appspot.com/o/users%2Fstories%2F1607675333903.jpg?alt=media&token=9ff77265-c36c-41d2-8c76-5c0f929a73f7',
            max: 'https://firebasestorage.googleapis.com/v0/b/fitplace-289115.appspot.com/o/users%2Fstories%2F1607675333903.jpg?alt=media&token=9ff77265-c36c-41d2-8c76-5c0f929a73f7'
          }]
        }, {
          id: 'rUswVQZ8xLcuR5StqhpC',
          title: '__vue_devtool_undefined__',
          previewImage: {
            max: 'https://firebasestorage.googleapis.com/v0/b/fitplace-289115.appspot.com/o/users%2Fstories%2F1607676136625.jpg?alt=media&token=6930d75c-47b9-4a68-870a-bcfac8ae9d51',
            min: 'https://firebasestorage.googleapis.com/v0/b/fitplace-289115.appspot.com/o/users%2Fstories%2F1607676136625.jpg?alt=media&token=6930d75c-47b9-4a68-870a-bcfac8ae9d51'
          },
          image: [{
            max: 'https://firebasestorage.googleapis.com/v0/b/fitplace-289115.appspot.com/o/users%2Fstories%2F1607675153091.jpg?alt=media&token=7d70c339-2f2c-4b19-a543-f629cc2a822c',
            min: 'https://firebasestorage.googleapis.com/v0/b/fitplace-289115.appspot.com/o/users%2Fstories%2F1607675153091.jpg?alt=media&token=7d70c339-2f2c-4b19-a543-f629cc2a822c'
          }, {
            max: 'https://firebasestorage.googleapis.com/v0/b/fitplace-289115.appspot.com/o/users%2Fstories%2F1607675164190.jpg?alt=media&token=08536ba2-ab28-45bd-a4f6-2ae5f5460f66',
            min: 'https://firebasestorage.googleapis.com/v0/b/fitplace-289115.appspot.com/o/users%2Fstories%2F1607675164190.jpg?alt=media&token=08536ba2-ab28-45bd-a4f6-2ae5f5460f66'
          }, {
            max: 'https://firebasestorage.googleapis.com/v0/b/fitplace-289115.appspot.com/o/users%2Fstories%2F1607675171674.jpg?alt=media&token=3fb397cb-dba9-4687-8375-8962a7997529',
            min: 'https://firebasestorage.googleapis.com/v0/b/fitplace-289115.appspot.com/o/users%2Fstories%2F1607675171674.jpg?alt=media&token=3fb397cb-dba9-4687-8375-8962a7997529'
          }, {
            min: 'https://firebasestorage.googleapis.com/v0/b/fitplace-289115.appspot.com/o/users%2Fstories%2F1607675179377.jpg?alt=media&token=ca4547e8-983e-433f-a79b-694453f313a0',
            max: 'https://firebasestorage.googleapis.com/v0/b/fitplace-289115.appspot.com/o/users%2Fstories%2F1607675179377.jpg?alt=media&token=ca4547e8-983e-433f-a79b-694453f313a0'
          }]
        }, {
          id: '60Dnac0nRTqYgmhK7E1e',
          title: '__vue_devtool_undefined__',
          previewImage: {
            min: 'https://firebasestorage.googleapis.com/v0/b/fitplace-289115.appspot.com/o/users%2Fstories%2F1607675237467.jpg?alt=media&token=3a4138e9-f1d2-4484-8a2d-f0312686d108',
            max: 'https://firebasestorage.googleapis.com/v0/b/fitplace-289115.appspot.com/o/users%2Fstories%2F1607675237467.jpg?alt=media&token=3a4138e9-f1d2-4484-8a2d-f0312686d108'
          },
          image: [{
            max: 'https://firebasestorage.googleapis.com/v0/b/fitplace-289115.appspot.com/o/users%2Fstories%2F1607603559081.jpg?alt=media&token=cb6b3bb6-3d57-42f3-a021-0a38b5cba9fd',
            min: 'https://firebasestorage.googleapis.com/v0/b/fitplace-289115.appspot.com/o/users%2Fstories%2F1607603559081.jpg?alt=media&token=cb6b3bb6-3d57-42f3-a021-0a38b5cba9fd'
          }, {
            min: 'https://firebasestorage.googleapis.com/v0/b/fitplace-289115.appspot.com/o/users%2Fstories%2F1607603568660.jpg?alt=media&token=96e0913a-fd19-488b-a15d-8f41eedf0701',
            max: 'https://firebasestorage.googleapis.com/v0/b/fitplace-289115.appspot.com/o/users%2Fstories%2F1607603568660.jpg?alt=media&token=96e0913a-fd19-488b-a15d-8f41eedf0701'
          }]
        }]
      }
      return this.slider
    }
  }
}
</script>
