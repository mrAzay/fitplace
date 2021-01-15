<template>
    <section class="upstatus">
      <div class="container">
        <div class="wrapper-center">
          <div class="message-block p-20">
            <div class="message-block__header">
              <h2 class="mb-12 text-black">
                Экспертность в фитнесе
              </h2>
              <textarea placeholder="Введите текст"></textarea>
            </div>
            <div class="message-block__info">
              <div class="message-block__info-block" v-for="item in 4" :key="item">
                <div class="paraments__uved">
                  <div class="paraments__uved-text text-black">Готовность к групповым тренировкам</div>
                  <label class="paraments__uved-check">
                    <input class="paraments__uved-check-input check" type="checkbox">
                    <span class="paraments__uved-check-input-castom castom-check"></span>
                  </label>
                </div>
              </div>
            </div>
            <router-link to="/send-message" class="button button-message">
              Отправить заявку
            </router-link>
          </div>
          <div class="info-block p-20">
            <div class="info-block__text" v-for="item in 5" :key="item">
              <h3 class="info-block__text-title">
                {{ item }}. Требования по повышению статуса
              </h3>
              <p class="info-block__text-text">
                Восприятие дает объект. Все это побудило нас обратить внимание на то, что воспитание просветляет закон. Анима спонтанно осознаёт гендер. Бессознательное недоступно вызывает аутотренинг. По их почти единодушному мнению, рефлексия фундаментально отражает аутотренинг.
                <br>
                Онтогенез речи, согласно традиционным представлениям, осознаёт экспериментальный гештальт. Как было показано выше, инсайт отталкивает сублимированный филогенез, хотя этот факт нуждается в дальнейшей проверке наблюдением. Самонаблюдение начинает психоз. Как мы уже знаем, анима просветляет латентный интеллект.
                <br>
                Самонаблюдение, в представлении Морено, абсурдно осознаёт код. Бессознательное, в представлении Морено, стабильно. Чувство однородно просветляет эмпирический эриксоновский гипноз.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
export default {
  name: 'Upstatus'
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
    align-items: center;
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
textarea{
    width: 312px;
    height: 150px;
    border: 1px solid rgba(0, 0, 0, 0.08);
    box-sizing: border-box;
    border-radius: 8px;
    font-size: 14px;
    line-height: 17px;
    color: rgba(0, 0, 0, 0.32);
  }

  .info-block{
    background: #FFFFFF;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.15);
    border-radius: 12px;
    max-width: 540px;
    height: 90vh;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    &__text{
      margin-bottom: 20px;
      &-title{
        margin-bottom: 20px;
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
  }
</style>
