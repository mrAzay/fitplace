<template>
    <div class="aboniments container">
      <div class="aboniments__title title">Абонементы</div>
      <div class="aboniments__items grid">
        <div class="aboniments__item block" v-for="(item, index) in 6" :key="index">
          <img src="@/assets/img/aboniment1.jpg" alt="" class="aboniments__item-img">
          <div class="aboniments__item-title block-title">Абонемент Premium</div>
          <ul class="aboniments__item-list list">
            <li class="aboniments__item-list-item list__item">Библиотека видеокурсов от тренеров по топовым направлениям</li>
            <li class="aboniments__item-list-item list__item">150+ групповых занятий в месяц</li>
            <li class="aboniments__item-list-item list__item">Бесплатная персональная тренировка с тренером</li>
            <li class="aboniments__item-list-item list__item">Приоритетная поддержка сервиса</li>
          </ul>
          <div class="aboniments__item-select select">
            <button class="aboniments__item-select-value select__value">1 месяц 999 руб
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 9L12 15L18 9" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            </button>
            <ul class="aboniments__item-select-list select__list">
              <li class="aboniments__item-select-list-item select__list-item">
                <button>
                  1 месяц 9992 руб
                </button>
              </li>
              <li class="aboniments__item-select-list-item select__list-item">
                <button>
                  1 месяц 9993 руб
                </button>
              </li>
              <li class="aboniments__item-select-list-item select__list-item">
                <button>
                  1 месяц 9994 руб
                </button>
              </li>
              <li class="aboniments__item-select-list-item select__list-item">
                <button>
                  1 месяц 9995 руб
                </button>
              </li>
            </ul>
          </div>
          <a href="#" class="aboniments__item-button button">Купить абонемент</a>
        </div>
      </div>
    </div>
</template>

<style lang="scss" scoped>
.aboniments {
  margin-bottom: -24px;
  &__item{
    margin-bottom: 24px;
    &-img{
      box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.15);
      border-radius: 12px;
      margin-bottom: 20px;
    }
    &-title{
      margin-bottom: 20px;
    }
    &-list{
      margin-bottom: 40px;
    }
    &-select{
      margin-bottom: 16px;
    }
    &-button{
      width: 100%;
      padding: 13px 0;
      display: block;
      text-align: center;
    }
  }
}
</style>

<script>
export default {
  name: 'Aboniments'
}
</script>
