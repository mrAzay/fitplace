<template>
    <div class="coucher-popup" :class="{'active-popup': isOpened}" @click.self="$emit('update:is-opened', false)">
      <div class="coucher-popup__wrapper">
        <button @click.prevent="$emit('update:is-opened', false)" class="coucher-popup__wrapper-close"></button>
        <div class="coucher-popup__header">
          <img src="../assets/img/coach-modal-img.png" alt="" class="coucher-popup__header-img">
          <h3 class="coucher-popup__header-name">Арсений Головин</h3>
          <h4 class="coucher-popup__header-position">Тренер</h4>
          <p class="coucher-popup__header-info">г. Москва, 30 лет</p>
        </div>
        <div class="coucher-popup__static">
          <div class="static__block">
            <h4 class="static__block-number">5.0</h4>
            <div class="static__block-text">Рейтинг</div>
          </div>
          <div class="static__block">
            <h4 class="static__block-number">10 лет</h4>
            <div class="static__block-text">Стаж работы</div>
          </div>
          <span class="coucher-popup__static-pro">
            PRO
          </span>
        </div>
        <div class="coucher-popup__info">
          <div class="coucher-popup__info-block">
            <div class="info-block__header">
              <h4 class="info-block__header-title popup-black">
                Калланетика
              </h4>
              <p class="info-block__header-time popup-black">
                12:00 - 12:30
              </p>
            </div>
            <p class="info-block__text popup-gray">
              Занятие с элементами силового тренинга, направленное на развитие основных мышечных групп
            </p>
          </div>
          <div class="coucher-popup__info-block">
            <div class="info-block__header">
              <h4 class="info-block__header-title popup-black">
                Каллории
              </h4>
              <p class="info-block__header-time popup-black">
                -700
              </p>
            </div>
          </div>
          <div class="coucher-popup__info-block">
            <div class="info-block__header">
              <h4 class="info-block__header-title popup-black">
                Стоимость
              </h4>
              <p class="info-block__header-time popup-black">
                1 300 руб
              </p>
            </div>
          </div>
          <div class="coucher-popup__info-block">
            <div class="info-block__header">
              <h4 class="info-block__header-title popup-black">
                Калланетика
              </h4>
            </div>
            <input class="popup-gray" type="text" placeholder="Привести себя в форму после недельной силовой тренировки">
          </div>
        </div>
        <div class="coucher-popup__info-block">
          <div class="info-block__header">
            <h4 class="info-block__header-title popup-black">
              Участники
            </h4>
            <p class="info-block__header-time popup-black">
              1
            </p>
          </div>
        </div>
        <div class="coucher-popup__buttons">
          <button class="button button-start">Начать тренировку</button>
          <button class="button button-cancel">Отменить тренировку</button>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'coucher-popup',
  props: {
    isOpened: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped lang="scss">
.coucher-popup{
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  top: 0;
  left: 0;
  z-index: -1000;
  opacity: 0;
  transition: all 0.5s ease-in;
  display: flex;
  align-items: center;
  justify-content: center;
  &.active-popup{
    z-index: 1000;
    opacity: 1;
  }
  &__wrapper{
    padding: 20px;
    width: 544px;
    height: auto;
    background: #FFFFFF;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.15);
    border-radius: 12px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    &-close{
      position: absolute;
      top: 20px;
      right: 20px;
      width: 24px;
      height: 24px;
      background: url("../assets/img/close.svg") center no-repeat;
    }
  }
  &__header{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
    &-img{
      width: 104px;
      height: 104px;
      object-fit: cover;
      margin-bottom: 16px;
    }
    &-name{
      font-family: Montserrat;
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 20px;
      color: #000000;
      margin-bottom: 8px;
    }
    &-position{
      font-family: Montserrat;
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 17px;
      color: #000000;
      margin-bottom: 12px;
    }
    &-info{
      font-family: Montserrat;
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 17px;
      color: rgba(0, 0, 0, 0.64);
    }
  }
  &__static{
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 20px 0;
    margin-bottom: 20px;
    border-top: 1px solid rgba(0, 0, 0, 0.08);
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
    .static__block{
      display: flex;
      flex-direction: column;
      &-number{
        font-family: Montserrat;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 20px;
        color: #000000;
        margin-bottom: 8px;
      }
      &-text{
        font-family: Montserrat;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 15px;
        color: rgba(0, 0, 0, 0.64);
      }
    }
    &-pro{
      font-family: Montserrat;
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      line-height: 17px;
      color: #000000;
      padding: 7px 17px;
      background: #FFEF00;
      border-radius: 16px;
    }
  }
  &__info-block{
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 32px;
    .info-block__header{
      display: flex;
      width: 100%;
      justify-content: space-between;
      margin-bottom: 12px;
    }
  }
  &__buttons{
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
}

  .button-start{
    padding: 13px 49px;
  }
  .button-cancel{
    padding: 13px 39px;
    background: #fff;
  }

  .popup-black{
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #000000;
  }
.popup-gray{
  font-family: Montserrat;
  font-weight: normal;
  font-size: 14px;
  line-height: 130%;
  color: rgba(0, 0, 0, 0.64);
  border: none;
}
</style>
