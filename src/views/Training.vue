<template>
  <section class="training">
    <Calendar color="orange" />
    <div class="container">
      <div class="training__wrapper">
        <div class="training__top">
          <div
            class="training__top-block"
            v-for="(item, index) in statistic"
            :key="index"
          >
            <img
              class="training__top-block-icon"
              :src="require('@/assets/img/' + item.icon + '.svg')"
              :alt="item.name"
            />
            <div class="training__top-block-info">
              <h2 class="info-title">{{ item.name }}</h2>
              <p class="info-text">{{ item.number }}</p>
            </div>
          </div>
        </div>
        <div class="training__content">
          <h2 class="training__content-title">Мои тренировки</h2>
          <div class="training__content-blocks">
            <div class="training-block" v-for="item in 12" :key="item.id">
              <div class="training-block__header">
                <h3 class="training-block__header-name">Авторский курс</h3>
                <p class="training-block__header-time">12:30 - 13:30</p>
              </div>
              <p class="training-block__descr">
                Курс по нутрициологии фитнеса. Вы научитесь работать с
                дневниками питания и рационом.
              </p>
              <div class="training-block__coach">
                <router-link :to="{name: 'Couch Training'}">
                  <img
                    src="../assets/img/coach-img.png"
                    :alt="item"
                    class="training-block__coach-img"
                  />
                </router-link>
                <router-link
                  :to="{name: 'Couch Training'}"
                  class="training-block__coach-info"
                >
                  <h4 class="training-block__coach-name">Карина Зворыгина</h4>
                  <p class="training-block__coach-position">Тренер</p>
                </router-link>
                <a
                  href="#"
                  class="training-block__coach-link"
                  @click.prevent="popupOpen = !popupOpen"
                  :style="{
                    backgroundImage:
                      'url(' + require('@/assets/img/group.svg') + ')'
                  }"
                ></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <coucher-popup :is-opened.sync="popupOpen" />
  </section>
</template>

<script>
import CoucherPopup from '../components/coucher-popup'
import Calendar from '../components/Calendar'

export default {
  name: 'Training',
  components: {
    CoucherPopup,
    Calendar
  },
  data: () => ({
    statistic: [
      {
        name: 'Вес',
        number: '102 кг',
        icon: 'Vector'
      },
      {
        name: 'Вода',
        number: '3 250 / 2 000',
        icon: 'Vector-1'
      },
      {
        name: 'Калории',
        number: '600 / 6 800',
        icon: 'Vector-2'
      }
    ],
    popupOpen: false
  })
}
</script>

<style scoped lang="scss">
.training .container {
  padding: 0 100px !important;
}

.training__top {
  padding: 24px 47px;
  background: #ffffff;
  display: flex;
  width: fit-content;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.15);
  border-radius: 12px;
  margin-bottom: 64px;
  &-block {
    display: flex;

    &-icon {
      max-width: 48px;
      max-height: 48px;
      object-fit: contain;
    }
    &-info {
      margin-left: 12px;
      .info-title {
        font-family: Montserrat;
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 20px;
        color: #000000;
        margin-bottom: 6px;
      }
      .info-text {
        font-family: Montserrat;
        font-style: normal;
        font-weight: 600;
        font-size: 12px;
        line-height: 15px;
        color: #000000;
      }
    }
    & + & {
      margin-left: 40px;
    }
  }
}
.training__content {
  display: flex;
  flex-direction: column;
  &-title {
    margin-bottom: 20px;
  }
  &-blocks {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin-right: -30px;
    .training-block {
      display: flex;
      flex-direction: column;
      flex: 0 0 calc(33.333% - 30px);
      margin-right: 30px;
      background: #ffffff;
      box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.15);
      border-radius: 12px;
      margin-bottom: 24px;
      padding: 16px 0;
      &__header {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 16px;
        margin-bottom: 12px;
        &-name {
          font-family: Montserrat;
          font-style: normal;
          font-weight: 600;
          font-size: 14px;
          line-height: 17px;
        }
        &-time {
          font-family: Montserrat;
          font-style: normal;
          font-weight: 600;
          font-size: 14px;
          line-height: 17px;
        }
      }
      &__descr {
        padding: 0 16px 16px;
        margin-bottom: 16px;
        color: rgba(0, 0, 0, 0.64);
        font-family: Montserrat;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 130%;
        border-bottom: 1px solid rgba(0, 0, 0, 0.08);
      }
      &__coach {
        display: flex;
        width: 100%;
        padding: 0 16px;
        &-img {
          object-fit: cover;
          width: 40px;
          height: 40px;
          border-radius: 50%;
        }
        &-info {
          margin-left: 8px;
        }
        &-name {
          font-family: Montserrat;
          font-style: normal;
          font-weight: 500;
          font-size: 14px;
          line-height: 17px;
          color: #000000;
          margin-bottom: 6px;
        }
        &-position {
          font-family: Montserrat;
          font-style: normal;
          font-weight: 500;
          font-size: 12px;
          line-height: 15px;
          color: rgba(0, 0, 0, 0.64);
        }
        &-link {
          margin-left: auto;
          margin-top: auto;
          width: 16px;
          height: 16px;
        }
      }
    }
  }
}

@media (max-width: 1220px) {
  .training__content-blocks {
    margin-right: -10px;

    .training-block {
      flex: 0 0 calc(33.333% - 10px);
      margin-right: 10px;
    }
  }
}

@media (max-width: 1100px) {
  .training__content-blocks {
    margin-right: -20px;

    .training-block {
      flex: 0 0 calc(50% - 20px);
      margin-right: 20px;
    }
  }

  .training__top {
    width: 100%;
    justify-content: space-between;
  }

  .training__top-block {
    flex: 0 0 27%;
    margin: 0;
    justify-content: center;
  }

  .training__top-block + .training__top-block {
    margin: 0;
  }
}

@media (max-width: 991px) {
  .training {
    padding-top: 70px;
    padding-bottom: 60px;
  }

  .training .container {
    padding: 0 40px !important;
  }
}
</style>
