/* eslint-disable object-curly-spacing */ /* eslint-disable object-curly-spacing
*/
<template>
  <div class="shop">
    <div class="container">
      <div class="shop__title">
        <span></span>
        <div class="shop__cart"></div>
      </div>
      <div class="shop__top">
        <div class="shop__top-drop"></div>
        <div class="shop__top-item"></div>
        <div class="shop__top-item"></div>
        <div class="shop__top-item"></div>
        <div class="shop__top-item"></div>
        <div class="shop__top-item"></div>
      </div>
      <SliderTop :slider="SHOP_STORIES"></SliderTop>
      <div class="shop__big-items">
        <a href="#" class="shop__big-item"
          ><img src="@/assets/img/shop-big1.png" alt=""
        /></a>
        <a href="#" class="shop__big-item"
          ><img src="@/assets/img/shop-big2.png" alt=""
        /></a>
      </div>
      <div class="shop__items">
        <router-link
          :to="{name: 'ShopItem'}"
          class="shop__item block"
          v-for="(item, index) in PRODUCTS"
          :key="index"
        >
          <img :src="item.image.max" alt="" class="shop__item-img" />
          <div class="shop__item-info">
            <div class="shop__item-title block-title">{{ item.title }}</div>
            <div class="shop__item-desc">
              {{ item.description }}
            </div>
            <div class="shop__item-price block-title">{{ item.price }} руб</div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.shop {
  &__big-items {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-top: 72px;
    margin-bottom: 40px;
  }
  &__big-item {
    display: block;
    font-size: 0;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.15);
    img {
      max-width: 544px;
      width: 100%;
      max-height: 220px;
    }
  }
  &__items {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin-left: -20px;
    margin-bottom: -20px;
  }
  &__item {
    display: block;
    margin-bottom: 20px;
    margin-left: 20px;
    padding: 0;
    overflow: hidden;
    max-width: 256px;
    &-info {
      padding: 20px;
    }
    &-title {
      margin-bottom: 12px;
    }
    &-desc {
      font-size: 14px;
      line-height: 130%;
      margin-bottom: 24px;
    }
  }
}
</style>

<script>
import SliderTop from '../components/SliderTop'
import {mapGetters, mapActions} from 'vuex'
export default {
  name: 'Shop',
  // eslint-disable-next-line object-curly-spacing
  components: {SliderTop},
  computed: {
    ...mapGetters(['SHOP_STORIES', 'PRODUCTS'])
  },
  methods: {
    ...mapActions(['GET_SHOP_STORIES', 'GET_PRODUCT'])
  },
  mounted() {
    this.GET_SHOP_STORIES()
    this.GET_PRODUCT()
  }
}
</script>
