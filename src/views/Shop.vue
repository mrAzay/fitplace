/* eslint-disable object-curly-spacing */ /* eslint-disable object-curly-spacing
*/
<template>
  <div class="shop">
    <div class="container">
      <div class="shop__title">
        <span class="title">Магазин</span>
        <router-link to="/cart" class="shop__cart">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M15.1934 7.51646H8.80658V6.14302C8.80658 4.61067 10.2288 3.38479 11.9934 3.38479C13.7712 3.38479 15.1934 4.61067 15.1934 6.14302V7.51646ZM16.8 7.51646V6.14302C16.8 3.85017 14.6535 2 11.9934 2C9.3465 2 7.2 3.85017 7.2 6.14302V7.51646C5.44856 7.51646 4 8.75369 4 10.2747C4 11.9659 4.98765 16.5176 5.63292 19.6163C5.86996 20.9784 7.18683 22 8.80658 22H15.1934C16.8132 22 18.13 20.9784 18.3671 19.6163C19.0123 16.5176 20 11.9659 20 10.2747C20 8.75369 18.5514 7.51646 16.8 7.51646ZM15.1934 9.58229C15.1934 9.20772 15.549 8.8899 15.9967 8.8899C16.4313 8.8899 16.8 9.20772 16.8 9.58229C16.8 9.96822 16.4313 10.2747 15.9967 10.2747C15.549 10.2747 15.1934 9.96822 15.1934 9.58229ZM8.80658 9.58229C8.80658 9.96822 8.43786 10.2747 8.00329 10.2747C7.55556 10.2747 7.2 9.96822 7.2 9.58229C7.2 9.20772 7.55556 8.8899 8.00329 8.8899C8.43786 8.8899 8.80658 9.20772 8.80658 9.58229Z"
              fill="#333333"
            />
          </svg>
          0
        </router-link>
      </div>
      <div class="shop__top">
        <button class="shop__top-drop">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.4444 9.93787H3.11111C2.81643 9.93787 2.53381 10.0576 2.32544 10.2706C2.11706 10.4837 2 10.7727 2 11.074V11.926C2 12.2273 2.11706 12.5163 2.32544 12.7294C2.53381 12.9424 2.81643 13.0621 3.11111 13.0621H16.4444C16.7391 13.0621 17.0217 12.9424 17.2301 12.7294C17.4385 12.5163 17.5556 12.2273 17.5556 11.926V11.074C17.5556 10.7727 17.4385 10.4837 17.2301 10.2706C17.0217 10.0576 16.7391 9.93787 16.4444 9.93787ZM12 15.8757H3.11111C2.81643 15.8757 2.53381 15.9954 2.32544 16.2085C2.11706 16.4216 2 16.7105 2 17.0118V17.8639C2 18.1652 2.11706 18.4542 2.32544 18.6672C2.53381 18.8803 2.81643 19 3.11111 19H12C12.2947 19 12.5773 18.8803 12.7857 18.6672C12.994 18.4542 13.1111 18.1652 13.1111 17.8639V17.0118C13.1111 16.7105 12.994 16.4216 12.7857 16.2085C12.5773 15.9954 12.2947 15.8757 12 15.8757ZM20.8889 4H3.11111C2.81643 4 2.53381 4.1197 2.32544 4.33275C2.11706 4.54581 2 4.83478 2 5.13609V5.98817C2 6.28948 2.11706 6.57845 2.32544 6.79151C2.53381 7.00457 2.81643 7.12426 3.11111 7.12426H20.8889C21.1836 7.12426 21.4662 7.00457 21.6746 6.79151C21.8829 6.57845 22 6.28948 22 5.98817V5.13609C22 4.83478 21.8829 4.54581 21.6746 4.33275C21.4662 4.1197 21.1836 4 20.8889 4Z"
              fill="#4F4F4F"
            />
          </svg>
        </button>
        <button class="shop__top-item">Одежда</button>
        <button class="shop__top-item">Инвентарь</button>
        <button class="shop__top-item">Аксессуары</button>
        <button class="shop__top-item">Питание</button>
        <button class="shop__top-item">Гаджеты</button>
      </div>
      <SliderTop :slider="STORIES"></SliderTop>
      <div class="shop__big-items">
        <a href="#" class="shop__big-item"
          ><img src="@/assets/img/shop-big1.png" alt=""
        /></a>
        <a href="#" class="shop__big-item">
          <img src="@/assets/img/shop-big2.png" alt="" />
        </a>
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
  &__title{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__cart{
    background: #FFFFFF;
    border: 1px solid rgba(0, 0, 0, 0.08);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px 12px;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #333;
    svg {
      margin-right: 8px;
    }
  }
  &__top{
    background: #FFFFFF;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.15);
    border-radius: 12px;
    display: flex;
    align-items: center;
    font-size: 14px;
    line-height: 17px;
    margin-bottom: 40px;

    &-drop{
      padding: 12px 20px;
      border-right: 1px solid rgba(0, 0, 0, 0.08);
      margin-right: 20px;
    }
    &-item+&-item{
      margin-left: 32px;
    }
  }
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
      display: flex;
      align-items: center;
      margin-bottom: 40px;
      &-drop {
        padding: 12px 20px;
        display: flex;
        border-right: 1px solid rgba(0, 0, 0, 0.08);
        margin-right: 20px;
      }
      &-item {
        & + & {
          margin-left: 32px;
        }
      }
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

    &__cart {
      background: #ffffff;
      border: 1px solid rgba(0, 0, 0, 0.08);
      border-radius: 8px;
      padding: 8px 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 500;
      font-size: 14px;
      line-height: 17px;
      cursor: pointer;

      svg {
        margin-right: 8px;
      }
    }

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
      border-radius: 12px;
      height: 220px;

      img {
        max-width: 544px;
        height: 100%;
        object-fit: cover;
        width: 100%;
        border-radius: 12px;
      }
    }

    &__items {
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      flex-wrap: wrap;
      margin-left: -32px;
      margin-bottom: -20px;
    }

    &__item {
      display: block;
      margin-bottom: 20px;
      margin-left: 32px;
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

  @media (max-width: 1100px) {
    .shop .shop__big-items .shop__big-item {
      flex: 0 0 calc(50% - 10px) !important;
    }
  }
}

.shop__big-item img {
  height: 100%;
  max-height: unset;
  margin-bottom: 0;
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
