<template>
  <div class="home">
    <div class="container">
      <SliderTop :slider="STORIES"></SliderTop>
      <div class="home__inner">
        <h1 class="home__title title">Курсы и уроки</h1>
        <div class="home__items">
          <router-link
            class="home__item block"
            v-for="(item, index) in CARDS"
            :key="index"
            :to="{name: routeLinks[index]}"
            :style="{
              backgroundImage: 'url(' + item.image.min + ')',
              backgroundSize: 'cover'
            }"
          ></router-link>
        </div>
      </div>
    </div>
    <!-- модальное окно (авторизация) -->
    <div
      class="modal"
      :class="statusPopUp && childPopUp == 0 ? 'modal--active' : ''"
    >
      <form class="modal__form d-flex-column" @submit.prevent="push">
        <div class="modal__wrapper-header">
          <legend class="modal__title">Авторизация</legend>
          <button
            class="modal__btn-close"
            @click="closePopUp"
            type="button"
            aria-label="Закрыть модальное окно"
          >
            <span></span>
            <span></span>
          </button>
        </div>

        <div class="modal__wrapper-content d-flex-column">
          <validation-error
            v-if="validationErrors"
            :validation-errors="validationErrors"
          />
          <input
            type="email"
            class="modal__input"
            placeholder="Электронная почта"
            v-model="email"
          />
          <input
            type="password"
            class="modal__input"
            placeholder="Пароль"
            v-model="pass"
          />
          <button :disabled="isSubmitting" class="modal__btn" type="submit">
            Войти
          </button>
          <button
            type="button"
            class="modal__btn modal__btn--light"
            @click="raiseChildPopUp"
          >
            Войти по номеру телефона
          </button>
        </div>

        <div class="modal__agreement">
          <p class="modal__agreement-text">
            Авторизуясь, вы соглашаетесь с<br /><a href="#"
              >условиями использования политикой конфиденциальности</a
            >
          </p>
        </div>

        <div class="modal__nav-helpers">
          <a href="#">Хочу стать тренером</a>
          <a href="#">Нужна помощь</a>
        </div>
      </form>
    </div>

    <!-- Модальное окно для авторизаци по номеру телефона -->
    <div class="modal" :class="childPopUp == 1 ? 'modal--active' : ''">
      <form class="modal__form d-flex-column" @submit.prevent="pushPhone">
        <div class="modal__wrapper-header">
          <legend class="modal__title">Авторизация по номеру</legend>
          <button
            class="modal__btn-close"
            @click="closeChildPopUp"
            type="button"
            aria-label="Закрыть модальное окно"
          >
            <span></span>
            <span></span>
          </button>
        </div>

        <div class="modal__wrapper-content d-flex-column">
          <validation-error
            v-if="validationErrors"
            :validation-errors="validationErrors"
          />
          <input
            type="tel"
            class="modal__input"
            placeholder="Номер телефона"
            v-model="phone"
          />
          <!-- <code-input
            :loading="false"
            class="input"
            v-on:change="onChange"
            v-on:complete="onComplete"
          /> -->
          <div class="modal__agreement">
            <p class="modal__agreement-text">
              Введите номер мобильного телефона в формате: код страны и номер.
              Например: +71111111111
            </p>
          </div>
          <div style="display: flex" class="phone-btns__wrapper">
            <button :disabled="isSubmitting" class="modal__btn" type="submit">
              Войти
            </button>
            <button
              type="button"
              class="modal__btn modal__btn--light"
              @click="backToPrevPopUp"
            >
              Назад
            </button>
          </div>
          <div class="modal__agreement">
            <p class="modal__agreement-text">
              Авторизуясь, вы соглашаетесь с<br /><a href="#"
                >условиями использования политикой конфиденциальности</a
              >
            </p>
          </div>
        </div>

        <div class="modal__nav-helpers">
          <a href="#">Хочу стать тренером</a>
          <a href="#">Нужна помощь</a>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import SliderTop from '@/components/SliderTop'
import ValidationError from '@/components/ValidationError'
import {mapState, mapGetters, mapActions} from 'vuex'
// import CodeInput from 'vue-verification-code-input'

export default {
  name: 'Home',
  components: {
    SliderTop,
    ValidationError
    // CodeInput
  },
  // eslint-disable-next-line space-before-function-paren
  data() {
    return {
      email: '',
      pass: '',
      phone: '',
      childPopUp: '',
      routeLinks: [
        'Сategory',
        'Search',
        'FitnessCourses',
        'Videocourses',
        'Vebinar',
        'Couch Training'
      ],
      items: {
        item1: {
          img: 'home1'
        },
        item2: {
          img: 'home2'
        },
        item3: {
          img: 'home3'
        },
        item4: {
          img: 'home4'
        },
        item5: {
          img: 'home5'
        },
        item6: {
          img: 'home6'
        },
        item7: {
          img: 'home1'
        },
        item8: {
          img: 'home2'
        },
        item9: {
          img: 'home3'
        }
      }
    }
  },
  computed: {
    ...mapState({
      isSubmitting: (state) => state.auth.isSubmitting,
      validationErrors: (state) => state.auth.validationErrors,
      statusPopUp: (state) => state.auth.statusPopUp,
      token: (state) => state.auth.token
    }),
    ...mapGetters(['STORIES', 'CARDS', 'USER_INFO'])
  },
  methods: {
    // eslint-disable-next-line space-before-function-paren
    async push() {
      const formData = {
        email: this.email,
        password: this.pass
      }

      await this.$store.dispatch('login', formData)
      this.GET_STORIES()
      this.GET_CARDS()
      this.GET_USER_INFO()
    },
    pushPhone() {
      this.$store.dispatch('authPhone', this.phone)
    },
    closePopUp() {
      this.$store.commit('changeStatusPopUp')
    },
    onChange(v) {
      console.log('onChange ', v)
    },
    onComplete(v) {
      console.log('onComplete ', v)
    },
    ...mapActions(['GET_STORIES', 'GET_CARDS', 'GET_USER_INFO']),

    // вызов попапа авторизации следующего
    raiseChildPopUp() {
      this.childPopUp++
    },

    // Вернуться к прошлому попапу
    backToPrevPopUp() {
      this.childPopUp--
    },

    // закрытие попапа с номером телефона
    closeChildPopUp() {
      this.childPopUp = null
    }
  },
  mounted() {
    if (this.token) {
      this.GET_STORIES()
      this.GET_CARDS()
      this.GET_USER_INFO()
    } else {
      this.childPopUp = 0
    }
  }
}
</script>

<style scoped lang="scss">
.block {
  max-width: unset;
}

.swiper-wrapper {
  margin-bottom: 64px;
}
.home {
  &__items {
    margin-bottom: -24px;
  }
  &__item {
    display: block;
    height: 198px;
    margin-bottom: 24px;
  }
}

.modal {
  position: fixed;
  left: 50%;
  top: 50%;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
  pointer-events: none;
  background: rgba(0, 0, 0, 0);
  opacity: 0;
  transform: translate(-100%, -50%);
  transition: 0.3s transform, 0.4s background 0.3s, 0.4s opacity;
}

.modal.modal--active {
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.4);
  padding: 20px 0;
  opacity: 1;
  margin: auto;
  overflow-y: auto;
  pointer-events: all;
}

.modal__form {
  border-radius: 12px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.15);
  background: #fff;
  padding: 20px;
  flex: 0 1 352px;
  margin: auto 0;
}

.modal__wrapper-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 34px;
}

.modal__title {
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
}

.modal__input {
  width: 100%;
  font-size: 14px;
  line-height: 17px;
  padding: 0 5px 8px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  margin-bottom: 24px;
  transition: 0.3s border-color, 0.3s color;

  &:last-of-type {
    margin-bottom: 32px;
  }

  &::placeholder {
    color: rgba(0, 0, 0, 0.32);
  }

  &:hover,
  &:focus,
  &:hover::placeholder,
  &:focus::placeholder {
    color: rgba(0, 0, 0, 1);
  }
  &:hover,
  &:focus {
    border-bottom: 1px solid rgba(0, 0, 0, 0.6);
  }
}

.modal__btn {
  height: 44px;
  display: block;
  padding: 13px;
  line-height: 44px;
  color: #000;
  text-align: center;
  font-weight: 600;
  font-size: 14px;
  background: #ffef00;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.15);
  border-radius: 22px;
  padding: 0;
  margin-bottom: 12px;

  transition: 0.2s box-shadow, 0.2s background;

  &:hover,
  &:focus {
    box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.45);
    background: rgba(#ffef00, 0.8);
  }

  &:last-of-type {
    margin-bottom: 20px;
  }

  &.modal__btn--light {
    background: #fff;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.15);
  }

  &.modal__btn--light:hover,
  &.modal__btn--light:focus {
    box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.45);
    background: rgba(#fff, 0.8);
  }
}

.modal__agreement {
  margin-bottom: 20px;
}

.modal__agreement-text,
.modal__agreement-text a {
  font-size: 14px;
  line-height: 130%;
  text-align: center;
}

.modal__agreement-text a {
  text-decoration: underline;
  transition: 0.2s color;

  &:hover,
  &:focus {
    color: rgba(#000, 0.6);
  }
}

.modal__nav-helpers {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 20px 0 20px;
  border-top: 1px solid rgba(0, 0, 0, 0.08);
  margin: 0 -20px;

  a {
    font-size: 14px;
    transition: 0.2s color;

    &:hover,
    &:focus {
      text-decoration: underline;
      color: rgba(#000, 0.8);
    }
  }
}

.phone-btns__wrapper {
  justify-content: space-between;
}

.phone-btns__wrapper button {
  flex: 0 0 calc(50% - 5px);
}

// home items

.home__items {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-right: -32px;
}

.home__item {
  flex: 0 1 calc(33.3333% - 32px);
  margin-right: 32px;
}

.home__item:last-child {
  margin-right: auto;
}

@media (max-width: 1200px) {
  .home__items {
    margin-right: -10px;
  }

  .home__item {
    margin-right: 10px;
    flex: 0 1 calc(33.3333% - 10px);
  }
}

@media (max-width: 1100px) {
  .home__item {
    margin-right: 32px;
    flex: 0 0 calc(50% - 32px);
    max-width: unset;
    height: calc(170px + 70 * ((100vw - 768px) / (1100 - 768)));
  }

  .home__items {
    margin-right: -32px;
  }
}
</style>
