<template>
    <section class="upstatus">
      <div class="container">
        <div class="wrapper-center">
          <div class="column-wrapper">
            <div class="form p-20">
              <h3 class="form__title">
                Ваши данные
              </h3>
              <input type="text" v-for="item in 8" :placeholder="item + 'Номер телефона'" :key="item" class="form__input">
            </div>
            <div class="photo-block p-20">
              <h3 class="photo-block__title">
                Загрузите 3 фотографии
              </h3>
              <p class="photo-block__list" v-for="item in 3" :key="item">
                {{ item }}. Фото с разборчивым лицом.
              </p>
              <div class="photo-block__images">
                <img src="" alt="" v-for="item in 3" :key="item" class="photo-block__images-image">
              </div>
              <button class="photo-block__input button">Загрузить</button>
            </div>
          </div>
          <div class="info-block">
            <h3 class="info-block__title p-20">
              Хочу стать стренером
            </h3>
            <div class="info-block__cat p-20">
              <h3 class="info-block__cat-title">
                Выбор категории тренировок
              </h3>
              <div class="info-block__cat-tags">
                <button class="info-block__cat-tags-pluces text-black">+</button>
                <span class="info-block__cat-tags-text text-black">ТАЙ-БО</span>
                <span class="info-block__cat-tags-text text-black">КАРДИО</span>
                <span class="info-block__cat-tags-text info-block__cat-tags-text-active text-black">КАЛЛАНЕТИКА</span>
                <span class="info-block__cat-tags-text text-black">БОДИБИЛДИНГ</span>
                <span class="info-block__cat-tags-text text-black">АРМРЕСТЛИНГ</span>
              </div>
            </div>
            <div class="info-block__text p-20" v-for="item in 4" :key="item">
              <h3 class="info-block__text-title">
                {{ item }}. Опыт работы
              </h3>
              <textarea class="info-block__text-text" placeholder="Введите текст"></textarea>
            </div>
            <div class="info-block__accept p-20">
              <p class="info-block__accept-text">
                Нажимая кнопку отправить анкету, вы соглашаетесь с политикой конфиденциальности,договором оферты и условиями использования
              </p>
              <button class="button info-block__accept-button">
                Отправить анкету
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
export default {
  name: 'Coach-now'
}
</script>

<style scoped lang="scss">
.p-20{
  padding: 20px;
}
.column-wrapper {
  display: flex;
  flex-direction: column;
  max-width: 352px;
  width: 100%;
}
.text-black{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 130%;
  color: #000000;
}
.text-gray{
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: rgba(0, 0, 0, 0.64);
}
.mb-12{
  margin-bottom: 12px;
}
  .wrapper-center{
    display: flex;
    align-items: flex-start;
    justify-content: center;
  }
.message-block{
  display: flex;
  flex-direction: column;
  background: #FFFFFF;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.15);
  border-radius: 12px;
  max-width: 350px;
  width: 100%;
  height: 90vh;
  &__header{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    padding-bottom: 20px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
    .text-black{
      font-family: Montserrat;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 20px;
      color: #000000;
    }
  }
  &__info{
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
    &-block{
      padding: 20px 0;
      width: 100%;
      border-bottom: 1px solid rgba(0, 0, 0, 0.08);

    }
  }
}
  .button-message{
    padding: 13px 86px;
    width: fit-content;
    margin: 0 auto;
    margin-top: auto;
    display: flex;
  }
.paraments__uved{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  &-text{
    max-width: 250px;
  }
}
  .info-block{
    background: #FFFFFF;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.15);
    border-radius: 12px;
    max-width: 540px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    &__title{
      font-weight: 600;
      font-size: 16px;
      line-height: 20px;
      color: #000000;
      border-bottom: 1px solid rgba(0, 0, 0, 0.08);
    }
    &__cat{
      border-bottom: 1px solid rgba(0, 0, 0, 0.08);
      &-title{
        font-weight: 500;
        font-size: 16px;
        line-height: 20px;
        color: #000000;
        margin-bottom: 20px;
      }
      &-tags {
        display: flex;
        align-items: center;
        overflow: auto;

        &-pluces {
          width: 35px;
          height: 35px;
          padding: 10px;
          border-radius: 22px;
          background: #FFEF00;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: Montserrat;
          font-style: normal;
          font-weight: normal;
          font-size: 30px;
          line-height: 37px;
          text-align: center;
          color: #000000;
        }

        &-text {
          margin-left: 8px;
          padding: 10px 20px;
          background: #FFFFFF;
          border: 1px solid rgba(0, 0, 0, 0.08);
          border-radius: 22px;
          transition: background-color .5s ease;
          cursor: pointer;
          white-space: nowrap;

          &-active {
            background-color: #FFEF00;
          }
        }
      }
    }
    textarea{
      width: 100%;
      height: 74px;
      border: 1px solid rgba(0, 0, 0, 0.08);
      box-sizing: border-box;
      border-radius: 8px;
      font-size: 14px;
      line-height: 17px;
      color: rgba(0, 0, 0, 0.32);
    }
    &__text{
      padding: 20px 20px 0;
      &:nth-last-child(-n+2){
        padding: 20px;
      }
      &-title{
        margin-bottom: 12px;
        font-weight: 600;
        font-size: 16px;
        line-height: 20px;
        color: #000000;
      }
      &-text{
        font-weight: normal;
        font-size: 14px;
        line-height: 130%;
        color: rgba(0, 0, 0, 0.64);
      }
    }
    &__accept{
      border-top: 1px solid rgba(0, 0, 0, 0.08);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      &-text{
        text-align: center;
        margin-bottom: 16px;
        font-size: 12px;
        line-height: 130%;
        color: rgba(0, 0, 0, 0.64);
      }
      &-button{
        padding: 13px 88px;
      }
    }
  }

  .form{
    background: #FFFFFF;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.15);
    border-radius: 12px;
    max-width: 350px;
    height: 525px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    margin-bottom: 24px;
    &__title{
      font-weight: 600;
      font-size: 16px;
      line-height: 20px;
      color: #000000;
      margin-bottom: 24px;
    }
    &__input{
      border: none;
      padding: 8px 0;
      width: 100%;
      border-bottom: 1px solid rgba(0, 0, 0, 0.08);
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 17px;
      color: rgba(0, 0, 0, 0.32);
      &:not(:last-child){
        margin-bottom: 24px;
      }
    }
  }
  .photo-block{
    background: #FFFFFF;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.15);
    border-radius: 12px;
    max-width: 350px;
    height: 296px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    &__title{
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 20px;
       color: #000000;
      margin-bottom: 16px;
    }
    &__list{
      margin-bottom: 8px;
      font-weight: 500;
      font-size: 14px;
      line-height: 17px;
      color: rgba(0, 0, 0, 0.64);
    }
    &__images{
      margin: 16px 0;
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: space-between;
      &-image{
        width: 96px;
        height: 66px;
        object-fit: cover;
      }
    }
    &__input{
      padding: 13px 107px;
      background: #fff;
    }
  }
</style>
