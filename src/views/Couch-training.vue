<template>
  <section class="training">
    <div class="container">
      <div class="training__wrapper">
        <div class="training__content">
          <h2 class="training__content-title">
            Мои тренировки
          </h2>
          <div class="training__content-blocks">
            <div class="training-block" v-for="item in 12" :key="item.id">
              <div class="training-block__header">
                <h3 class="training-block__header-name">Авторский курс</h3>
                <p class="training-block__header-time">12:30 - 13:30</p>
              </div>
              <p class="training-block__descr">
                Курс по нутрициологии фитнеса.
                Вы научитесь работать с дневниками питания и рационом.
              </p>
              <div class="training-block__coach">
                <img src="../assets/img/coach-img.png" :alt="item" class="training-block__coach-img">
                <div class="training-block__coach-info">
                  <h4 class="training-block__coach-name">Карина Зворыгина</h4>
                  <p class="training-block__coach-position">Тренер</p>
                </div>
                <a href="#" class="training-block__coach-link"
                   @click.prevent="popupOpen = !popupOpen"
                   :style="{backgroundImage: 'url('+require('@/assets/img/group.svg')+')'}"
                ></a>
              </div>
            </div>
          </div>
        </div>
        <router-link to="/send-message" class="button button-add">
          Добавить занятие
        </router-link>
      </div>
    </div>
    <coucher-popup :is-opened.sync="popupOpen"/>
  </section>
</template>

<script>
import CoucherPopup from '../components/coucher-popup'

export default {
  name: 'Couch training',
  components: {
    CoucherPopup
  },
  data: () => ({
    popupOpen: false
  })
}
</script>

<style scoped lang="scss">
.training__content{
  display: flex;
  flex-direction: column;
  margin-bottom: 150px;
  &-title{
    margin-bottom: 20px;
  }
  &-blocks{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    .training-block{
      display: flex;
      flex-direction: column;
      flex: 1 1 30%;
      max-width: 355px;
      background: #FFFFFF;
      box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.15);
      border-radius: 12px;
      margin-bottom: 24px;
      padding: 16px 0;
      &__header{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 16px;
        margin-bottom: 12px;
        &-name{
          font-family: Montserrat;
          font-style: normal;
          font-weight: 600;
          font-size: 14px;
          line-height: 17px;
        }
        &-time{
          font-family: Montserrat;
          font-style: normal;
          font-weight: 600;
          font-size: 14px;
          line-height: 17px;
        }
      }
      &__descr{
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
      &__coach{
        display: flex;
        width: 100%;
        padding: 0 16px;
        &-img{
          object-fit: cover;
          width: 40px;
          height: 40px;
          border-radius: 50%;
        }
        &-info{
          margin-left: 8px;
        }
        &-name{
          font-family: Montserrat;
          font-style: normal;
          font-weight: 500;
          font-size: 14px;
          line-height: 17px;
          color: #000000;
          margin-bottom: 6px;
        }
        &-position{
          font-family: Montserrat;
          font-style: normal;
          font-weight: 500;
          font-size: 12px;
          line-height: 15px;
          color: rgba(0, 0, 0, 0.64);
        }
        &-link{
          margin-left: auto;
          margin-top: auto;
          width: 16px;
          height: 16px;
        }
      }
    }
  }
}
.button-add{
  padding: 13px 88px;
  width: fit-content;
  margin: 0 auto;
  display: flex;
}
</style>
