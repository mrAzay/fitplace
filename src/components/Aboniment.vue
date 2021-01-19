<template>
  <div class="aboniment block">
    <div class="aboniment__col-wrapper">
      <img
        src="@/assets/img/aboniment1.jpg"
        alt=""
        class="aboniment__img"
        style="display:block;margin:0 auto 20px"
      />
      <a
        href="#"
        class="aboniment__link aboniment__link--media-1220"
        style="text-align:center"
        >Как получить абонемент?</a
      >
      <div class="aboniment__title aboniment__title--media-1220 block-title">
        Действует до {{ USER_INFO.abonement_valid_until }}
      </div>
      <ul class="aboniment__list aboniment__list--media-1220 list">
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
    </div>
    <div class="aboniment__col-wrapper">
      <div class="aboniment__prod-title aboniment__prod-title--media-1220">
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
      <div
        class="aboniment__prod-text aboniment__prod-text--media-1220 block-text"
      >
        Согласен с условиями использования и политикой конфиденциальности
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
.aboniment__col-wrapper:last-child {
  padding-bottom: 31px;
}

.aboniment__list--media-1220 {
  display: none;
}

.aboniment__title--media-1220 {
  display: none;
}

.aboniment__link--media-1220 {
  display: none;
}

.aboniment__prod-title--media-1220 {
  display: none;
}

.aboniment__prod-text--media-1220 {
  display: none;
}

@media (max-width: 1220px) {
  .aboniment {
    display: flex;
    padding-bottom: 0;
  }

  .aboniment__col-wrapper {
    flex: 0 0 50%;
    margin-top: -20px;
    padding-top: 20px;

    &:first-child {
      padding-right: 20px;
      margin-right: -1px;
    }

    &:last-child {
      padding-left: 20px;
      padding-bottom: 0;
      border-left: 1px solid #eee;
    }
  }

  .aboniment__down-link {
    position: absolute;
    bottom: 0;
    right: 0;
    left: unset;
    width: 50%;
  }

  .aboniment__list {
    display: none;
  }

  .aboniment__title {
    display: none;
  }

  .aboniment__link {
    display: none;
  }

  .aboniment__prod-title {
    display: none;
  }

  .aboniment__prod-text {
    display: none;
  }

  .aboniment__list--media-1220 {
    display: block;
    margin-top: 16px;
  }

  .aboniment__title--media-1220 {
    display: block;
    padding-top: 20px;
    padding-left: 20px;
    margin: 16px -20px 0;
    border-top: 1px solid #eee;
  }

  .aboniment__link--media-1220 {
    display: block;
  }

  .aboniment__prod-title--media-1220 {
    display: flex;
    margin-bottom: 13px;
  }

  .aboniment__prod-text--media-1220 {
    display: block;
    padding-bottom: 20px;
    border-bottom: 1px solid #eee;
    margin-bottom: 20px;
  }

  .aboniment__prod {
    border-bottom: none;
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
