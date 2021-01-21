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
      <SliderTop :slider="STORIES"></SliderTop>
      <div class="shop__big-items">
        <a href="#" class="shop__big-item"
          ><img src="@/assets/img/shop-big1.png" alt=""
        /></a>
        <router-link :to="{name: 'Videocourses'}" class="shop__big-item">
          <img src="@/assets/img/shop-big2.png" alt="" />
        </router-link>
      </div>
      <div class="shop__items">
        <router-link
          :to="{name: 'ShopItem'}"
          class="shop__item block"
          v-for="(item, index) in 6"
          :key="index"
        >
          <!--          <img :src="item.image.max" alt="" class="shop__item-img" />-->
          <!--          <div class="shop__item-info">-->
          <!--            <div class="shop__item-title block-title">{{ item.title }}</div>-->
          <!--            <div class="shop__item-desc">-->
          <!--              {{ item.description }}-->
          <!--            </div>-->
          <!--            <div class="shop__item-price block-title">{{ item.price }} руб</div>-->
          <!--          </div>-->
          <img src="@/assets/img/shop.png" alt="" class="shop__item-img" />
          <div class="shop__item-info">
            <div class="shop__item-title block-title">СТЕП-ПЛАТФОРМА</div>
            <div class="shop__item-desc">
              Профессиональная степ-платформа REEBOK RSP-16150WH
            </div>
            <div class="shop__item-price block-title">11 200 руб</div>
          </div>
        </router-link>
        <pre>
          {{ PRODUCTS }}
        </pre>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.shop .container {
  max-width: 1120px;
  box-sizing: border-box;
  padding: 0 100px 0 calc(100px - 66px) !important;
}
.shop {
  &__big-items {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-top: 72px;
    margin-bottom: 40px;
  }
  &__big-item {
    font-size: 0;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.15);
    border-radius: 12px;
    flex: 0 0 calc(50% - 30px);
    img {
      width: 100%;
      display: block;
      max-height: 220px;
      border-radius: 12px;
    }
  }
  &__items {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-left: -32px;
    margin-bottom: -20px;
  }
  &__item {
    display: block;
    margin-bottom: 20px;
    margin-left: 32px;
    border-radius: 12px;
    padding: 0;
    flex: 0 0 calc(33.333% - 32px);

    &-img {
      width: 100%;
      height: 190px;
      border-top-left-radius: 12px;
      border-top-right-radius: 12px;
      object-fit: cover;
    }

    &:last-of-type {
      margin-right: auto;
    }
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

@media (max-width: 1100px) {
  .shop .shop__big-items .shop__big-item {
    flex: 0 0 calc(50% - 10px) !important;
  }
}

@media (max-width: 991px) {
  .shop {
    &__items {
      margin-left: -50px;
    }
    .shop__item {
      flex: 0 0 calc(50% - 50px);
      margin-left: 50px;
      max-width: unset;

      img {
        height: 220px;
      }
    }
  }

  .shop .container {
    padding: 0 80px 0 80px !important;
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
    ...mapGetters(['STORIES', 'PRODUCTS'])
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
