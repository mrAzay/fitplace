<template>
    <section class="cash-now">
      <div class="container">
        <div class="wrapper-center">
          <div class="column-wrapper">
            <div class="balance">
              <div class="balance__header">
                <h3 class="balance__header-title">Баланс</h3>
                <p class="balance__header-number">353 руб</p>
              </div>
              <form class="balance__cash">
                <h4 class="balance__cash-title">
                  Электронный кошелек
                </h4>
                <input type="text" placeholder="Название кошелька" class="balance__cash-input">
                <input type="text" placeholder="Номер" class="balance__cash-input">
              </form>
            </div>
            <div class="history">
              <h3 class="history__title">
                История операций
              </h3>
              <div class="history__block" v-for="item in 20" :key="item">
                <img src="../assets/img/coach-img.png" alt="" class="history__block-img">
                <div class="history__block-block">
                  <h4 class="history__block-block-name">
                    Максим Соловьев
                  </h4>
                  <p class="history__block-block-text">
                    Тренер
                  </p>
                </div>
                <div class="history__block-block">
                  <h4 class="history__block-block-name text-align-end">
                    + 1 200 руб
                  </h4>
                  <p class="history__block-block-text text-align-end">
                    23.06.2020 - 16:35
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="column-wrapper">
            <cashmoney></cashmoney>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
import Cashmoney from '../components/cashmoney'

export default {
  name: 'Cash-now',
  components: {
    Cashmoney
  }
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
  max-height: 850px;
  & + &{
    margin-left: 32px;
  }
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

.balance{
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  background: #FFFFFF;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.15);
  border-radius: 12px;
  margin-bottom: 32px;
  &__header{
    padding: 20px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    &-title{
      font-weight: 600;
      font-size: 16px;
      line-height: 20px;
      color: #000000;
    }
    &-number{
      font-weight: 600;
      font-size: 16px;
      line-height: 20px;
      color: #000000;
    }
  }
  &__cash{
    padding: 20px;
    display: flex;
    flex-direction: column;
    &-title{
      font-weight: 500;
      font-size: 14px;
      line-height: 17px;
      color: #000000;
    }
    &-input{
      border: none;
      padding-bottom: 8px;
      width: 100%;
      border-bottom: 1px solid rgba(0, 0, 0, 0.08);
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 17px;
      color: rgba(0, 0, 0, 0.32);
      margin-top: 32px;
    }
  }
}

.history{
  width: 100%;
  height: auto;
  overflow-y: auto;
  display: flex;
  padding: 20px;
  flex-direction: column;
  background: #FFFFFF;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.15);
  border-radius: 12px;
  &__title{
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    color: #000000;
    margin-bottom: 12px;
  }
  &__block{
    display: flex;
    padding: 20px 0;
    justify-content: space-between;
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
    &-img{
      width: 32px;
      height: 32px;
      object-fit: cover;
      border-radius: 50%;
    }
    &-block{
      display: flex;
      flex-direction: column;
      &-name{
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        margin-bottom: 8px;
      }
      &-text{
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 130%;
      }
    }
  }
}
  .text-align-end{
    text-align: end !important;
  }
</style>
