<template>
    <section class="send-message">
      <div class="container">
        <div class="wrapper-center">
          <div class="message-block p-20">
            <div class="message-block__header">
              <img src="../assets/img/coach-modal-img.png" alt="" class="message-block__header-img">
              <h2 class="mb-12 text-black">
                Валерия Белова
              </h2>
              <p class="text-gray">
                г. Нижний Новгород, 29 лет
              </p>
            </div>
            <div class="message-block__statistic">
              <div class="message-block__statistic-block" v-for="item in 3" :key="item">
                <h3 class="mb-12 text-black">
                  Пол
                </h3>
                <p class="text-gray">
                  Женский
                </p>
              </div>
            </div>
            <div class="message-block__info">
              <div class="message-block__info-block" v-for="item in 4" :key="item">
                <h3 class="mb-12 text-black">
                  Активность
                </h3>
                <p class="text-gray">
                  Тренировки 1-2 раза в неделю
                </p>
              </div>
            </div>
            <router-link to="/send-message" class="button button-message">
              Сообщение
            </router-link>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
export default {
  name: 'Send-message'
}
</script>

<style scoped lang="scss">
.p-20{
  padding: 20px;
}
.text-black{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
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
    align-items: center;
    justify-content: center;
  }
.message-block{
  display: flex;
  flex-direction: column;
  background: #FFFFFF;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.15);
  border-radius: 12px;
  max-width: 540px;
  width: 100%;
  &__header{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding-bottom: 20px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
    &-img{
      width: 104px;
      height: 104px;
      object-fit: cover;
      border-radius: 50%;
      margin-bottom: 16px;
    }
  }
  &__statistic{
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-around;
    padding: 20px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
    &-block{
      display: flex;
      align-items: flex-start;
      flex-direction: column;
    }
  }
  &__info{
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    padding: 20px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
    margin-bottom: 20px;
    &-block{
      &:not(:last-child){
        margin-bottom: 32px;
      }
    }
  }
}
  .button-message{
    padding: 13px 112px;
    width: fit-content;
    margin: 0 auto;
  }
</style>
