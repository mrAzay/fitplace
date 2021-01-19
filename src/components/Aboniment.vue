<template>
  <div class="aboniment block">
    <img src="@/assets/img/aboniment1.jpg" alt="" class="aboniment__img" />
    <div class="aboniment__prod">
      <div class="aboniment__prod-title">
        <span>Продлевать автоматически</span>
        <label class="aboniment__check">
          <input
            type="checkbox"
            class="check"
            :checked="USER_INFO.abonement_recurring"
          />
          <span class="castom-check"></span>
        </label>
      </div>

      <div class="aboniment__prod-text block-text">
        Согласен с условиями использования и политикой конфиденциальности
      </div>
    </div>
    <div class="aboniment__title block-title">
      Действует до {{ USER_INFO.abonement_valid_until }}
    </div>
    <ul class="aboniment__list list">
      <li class="aboniment__list-item list__item">
        Библиотека видеокурсов от тренеров по топовым направлениям
      </li>
      <li class="aboniment__list-item list__item">
        150+ групповых занятий в месяц
      </li>
      <li class="aboniment__list-item list__item">
        Бесплатная персональная тренировка с тренером
      </li>
      <li class="aboniment__list-item list__item">
        Приоритетная поддержка сервиса
      </li>
    </ul>
    <a href="#" class="aboniment__link">Как получить абонемент?</a>
    <a href="#" class="aboniment__button aboniment__button-first button"
      >Пробный период 3 дня</a
    >
    <a href="#" class="aboniment__button button">1 месяц 999 руб</a>
    <a href="#" class="aboniment__button button">3 месяца 2 499 руб</a>
    <a href="#" class="aboniment__button button">6 месяцев 4 999 руб</a>
    <a href="#" v-if="false" class="aboniment__button button"
      >1 год 7 990 руб</a
    >

    <router-link
      class="aboniment__down-link block-title"
      :to="{name: 'Aboniments'}"
    >
      Смотреть все абонементы<svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.5 15L12.5 10L7.5 5"
          stroke="black"
          stroke-opacity="0.32"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/_vars.scss';
.block {
  margin: 20px;
}
.aboniment {
  padding-bottom: 44px;
  position: relative;
  overflow: hidden;
  &__img {
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.15);
    border-radius: 12px;
    margin-bottom: 20px;
  }
  &__prod {
    padding-bottom: 20px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
    margin-bottom: 20px;
    &-title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-weight: 500;
      font-size: 14px;
      line-height: 17px;
      margin-bottom: 9px;
    }
  }
  &__title {
    margin-bottom: 20px;
  }
  &__list {
    font-weight: 500;
    font-size: 14px;
    line-height: 130%;
    color: #111111;
    margin-bottom: 32px;
  }
  &__link {
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    text-decoration-line: underline;
    color: rgba(0, 0, 0, 0.64);
    margin-bottom: 24px;
    display: block;
  }
  &__button {
    display: block;
    width: 100%;
    padding: 13px 0;
    background-color: #fff;
    text-align: center;
    & + & {
      margin-top: 10px;
    }
    &-first {
      background-color: $accent;
    }
  }
  &__down-link {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: #fff;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid rgba(0, 0, 0, 0.08);
  }
}
</style>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'Aboniment',
  computed: {
    ...mapGetters(['USER_INFO'])
  }
}
</script>
