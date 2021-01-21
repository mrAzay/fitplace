<template>
  <div class="shop-item">
    <div class="container">
      <div class="shop-item__inner">
        <div class="shop-item__swiper-wrap">
          <div class="shop-item__swiper-nav">
            <img
              @click="sliderIndex = index + 1"
              :class="[sliderIndex === index + 1 ? 'active' : '']"
              :src="require(`@/assets/img/shop-item-mini${index + 1}.png`)"
              alt=""
              class="shop-item__swiper-nav-item"
              v-for="(item, index) of 2"
              :key="index"
            />
          </div>
          <div class="shop-item__swiper">
            <img
              :src="require(`@/assets/img/shop-item${sliderIndex}.png`)"
              class="shop-item__swiper-item"
              alt=""
            />
          </div>
        </div>
        <div class="column">
          <div class="shop-item__info block">
            <div class="shop-item__info-top">
              <div class="shop-item__info-name block-title">
                <span>СТЕП-ПЛАТФОРМА</span>
                <span class="shop-item__info-colvo">Есть в наличии 7 шт</span>
              </div>
              <div class="shop-item__info-art">Арт. STP539420</div>
            </div>
            <ul class="shop-item__info-list list">
              <li class="shop-item__info-list-item list__item">
                Поверхность с нескользящей структурой.
              </li>
              <li class="shop-item__info-list-item list__item">
                Выдерживает нагрузку до 300кг.
              </li>
              <li class="shop-item__info-list-item list__item">
                Универсальное оборудование для различных видов тренинга.
              </li>
              <li class="shop-item__info-list-item list__item">
                Компактное хранение и экономия места в фитнес-зале - можно
                хранить друг на друге.
              </li>
              <li class="shop-item__info-list-item list__item">
                Является базовым оборудованием для аэробики, можно использовать
                с дополнительными аксессуарами.
              </li>
              <li class="shop-item__info-list-item list__item">
                Три уровня высоты (15 см / 20 см / 25 см)
              </li>
            </ul>
          </div>
          <div class="shop-item__price block">
            <div class="shop-item__price-top">
              <div class="shop-item__price-value block-title">11 200 руб</div>
              <div class="schet">
                <button class="schet-btn schet-btn-minus">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.75 9H14.25"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
                <div class="schet-value">
                  5
                </div>
                <button class="schet-btn schet-btn-plus">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 3.75V14.25"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M3.75 9H14.25"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <button class="shop-item__price-button button">
              Добавить в корзину
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.shop-item .container {
  max-width: 1120px;
  box-sizing: border-box;
  padding: 0 100px 0 calc(100px - 66px) !important;
}
.column {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.shop-item {
  &__inner {
    display: flex;
    justify-content: space-between;
  }

  .column {
    flex: 0 0 calc(50% - 30px);
    margin-left: 30px;
  }

  &__swiper {
    font-size: 0;
    &-nav {
      width: 80px;
      margin-right: 16px;
    }
    &-nav-item {
      max-width: 80px;
      max-height: 61px;
      filter: drop-shadow(10px 10px 20px rgba(0, 0, 0, 0.15));
      border-radius: 8px;
      border: 1px solid rgba(0, 0, 0, 0);
      cursor: pointer;
      & + & {
        margin-top: 8px;
      }
      &.active {
        border: 1px solid rgba(0, 0, 0, 0.08);
      }
    }
    &-wrap {
      flex: 0 0 calc(50% - 30px);
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
    }

    &-item {
      max-width: 448px;
      max-height: 541px;
      filter: drop-shadow(0px 0px 8px rgba(0, 0, 0, 0.15));
      border-radius: 8px;
    }
  }

  &__info {
    max-width: 544px;
    &-colvo {
      font-size: 12px;
      line-height: 15px;
      color: rgba(0, 0, 0, 0.64);
    }
    &-name {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 8px;
    }

    &-art {
      margin-bottom: 16px;
      font-size: 14px;
      line-height: 17px;
    }

    &-list {
      padding-top: 20px;
      border-top: 1px solid rgba(0, 0, 0, 0.08);
    }
  }

  &__price {
    max-width: 544px;

    &-top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 24px;
    }

    &-button {
      padding: 13px 0;
      text-align: center;
      max-width: 310px;
      width: 100%;
      margin: 0 auto;
      display: block;
    }
  }
}

@media (max-width: 1210px) {
  div {
    .shop-item {
      .shop-item__inner {
        flex-wrap: wrap;
        flex-direction: column;
        margin-left: 0;
      }
      .column {
        margin-left: 0;
        flex: 0 0 100%;
        justify-content: center;
        display: flex;
        flex-direction: column;

        .shop-item__info,
        .shop-item__price {
          margin: 20px auto 0;
        }
      }
      .shop-item__swiper-wrap {
        flex: 0 0 100%;
        justify-content: center;
      }
    }
  }
}

@media (max-width: 991px) {
  .shop-item .container {
    padding-bottom: 90px !important;
  }
}
</style>

<script>
export default {
  name: 'ShopItem',
  data() {
    return {
      sliderIndex: 1
    }
  }
}
</script>
