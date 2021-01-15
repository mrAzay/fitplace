<template>
  <div class="cart">
    <div class="container">
      <div class="cart__inner">
        <div class="cart__items">
          <div class="cart__item block" v-for="(item, index) in 6" :key="index">
            <img alt="" src="../assets/img/shop.png" class="cart__item-img">
            <div class="cart__item-info">
              <div class="cart__item-title block-title">СТЕП-ПЛАТФОРМА</div>
              <div class="cart__item-desc">Профессиональная степ-платформа REEBOK RSP-16150WH</div>
              <div class="cart__item-bottom">
                <div class="cart__item-price block-title">11 200 руб</div>
                <div class="schet">
                  <button class="schet-btn schet-btn-minus">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3.75 9H14.25" stroke="black" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round"/>
                    </svg>
                  </button>
                  <div class="schet-value">
                    5
                  </div>
                  <button class="schet-btn schet-btn-plus">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 3.75V14.25" stroke="black" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round"/>
                      <path d="M3.75 9H14.25" stroke="black" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="cart__sum block">
            <div class="cart__sum-title block-title"><span>Сумма</span><span>25 555 руб</span></div>
            <input type="text" class="cart__sum-input input" placeholder="Промокод">
            <button class="cart__sum-button button">Применить промокод</button>
          </div>
          <div class="cart__data block">
            <div class="cart__data-title block-title"></div>
            <input type="text" class="cart__data-input input" placeholder="ФИО">
            <input type="text" class="cart__data-input input" placeholder="E-mail">
            <input type="text" class="cart__data-input input" placeholder="Адрес доставки">
            <div class="cart__data-dropp">
              <button class="cart__data-dropp-value">Способ доставки
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 9L12 15L18 9" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              </button>
              <ul class="cart__data-dropp-list">
                <li class="cart__data-dropp-list-item">
                  <button class="cart__data-dropp-list-item-btn">1</button>
                </li>
                <li class="cart__data-dropp-list-item">
                  <button class="cart__data-dropp-list-item-btn">1</button>
                </li>
                <li class="cart__data-dropp-list-item">
                  <button class="cart__data-dropp-list-item-btn">1</button>
                </li>
              </ul>
            </div>
            <button class="cart__data-button button">
              Оплатить
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .column{
    margin-left: 32px;
  }
  .cart {
    &__inner{
      display: flex;
      justify-content: flex-start;
    }
    &__item {
      display: flex;
      padding: 0;
      overflow: hidden;
      max-width: 544px;
      &+&{
        margin-top: 12px;
      }
      &-img{
        background: radial-gradient(51.18% 70.84% at 50% 49.81%, #FFFFFF 0%, #F8F9FC 100%);
        width: 150px;
        height: 160px;
        object-fit: contain;
      }
      &-info{
        padding: 20px;
      }
      &-title{
        margin-bottom: 12px;
      }
      &-desc{
        font-size: 14px;
        line-height: 130%;
        margin-bottom: 20px;
      }
      &-bottom{
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    }
    &__sum{
      margin-bottom: 24px;
      &-title{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 32px;
      }
      &-input{
        width: 100%;
        margin-bottom: 24px;
      }
      &-button{
        width: 100%;
        padding: 13px 0;
        background-color: #fff;
      }
    }
    &__data{
      &-title{
        margin-bottom: 32px;
      }
      &-input{
        display: block;
        width: 100%;
        &+&{
          margin-top: 32px;
        }
      }
      &-dropp{
        margin-top: 29px;
        position: relative;
        margin-bottom: 32px;
        font-size: 14px;
        line-height: 17px;
        &-value{
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 14px;
          line-height: 17px;
          border-bottom: 1px solid rgba(0, 0, 0, 0.08);
          padding-bottom: 8px;
        }
        &-list{
          position: absolute;
          background-color: #fff;
          width: 100%;
          border-radius: 10px;
          display: none;
          &.active{
            display: block;
          }
          &-item{
            padding: 10px;
            &+&{
              border-top: 1px solid rgba(0, 0, 0, 0.08);
            }
            &-btn{
              width: 100%;
              text-align: left;
            }
          }
        }
      }
      &-button{
        padding: 13px 0;
        display: block;
        width: 100%;
      }
    }
  }
</style>

<script>
export default {
  name: 'Cart'
}
</script>
