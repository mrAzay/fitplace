<template>
  <div class="home">
    <div class="container">
      <SliderTop :slider="STORIES"></SliderTop>
      <div class="home__inner">
        <h1 class="home__title title">Курсы и уроки</h1>
        <div class="home__items grid">
          <router-link
            class="home__item block"
            v-for="(item, index, n) in CARDS"
            :key="index"
            :to="{name: routeLinks[n]}"
            :style="{
              backgroundImage: 'url(' + item.image.min + ')',
              backgroundSize: 'cover'
            }"
          ></router-link>
        </div>
      </div>
    </div>
    <!-- модальное окно (авторизация) -->
    <div class="modal" :class="statusPopUp ? 'modal--active' : ''">
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
          <button class="modal__btn modal__btn--light">
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
  </div>
</template>

<style scoped lang="scss">
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
</style>

<script>
import SliderTop from '@/components/SliderTop'
import ValidationError from '@/components/ValidationError'
import {mapState, mapGetters, mapActions} from 'vuex'

export default {
  name: 'Home',
  components: {
    SliderTop,
    ValidationError
  },
  // eslint-disable-next-line space-before-function-paren
  data() {
    return {
      email: '',
      pass: '',
      routeLinks: [
        'Сategory',
        'FitnessCourses',
        'Search',
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
      statusPopUp: (state) => state.auth.statusPopUp
    }),
    ...mapGetters(['STORIES', 'CARDS'])
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
    closePopUp() {
      this.$store.commit('changeStatusPopUp')
    },
    ...mapActions(['GET_STORIES', 'GET_CARDS', 'GET_USER_INFO'])
  },
  mounted() {}
}
</script>
