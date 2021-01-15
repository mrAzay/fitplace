<template>
    <section class="profile-coach">
      <div class="container">
        <div class="wrapper">
          <div class="column-wrapper">
            <div class="profile-block profile-block-height p-20 mb-24">
              <div class="profile-block__header">
                <img class="profile-block__header-img" src="../assets/img/coach-modal-img.png" alt="">
                <h4 class="profile-block__header-name">
                  Дарья Крылова
                </h4>
              </div>
              <div class="information-block">
                <div class="information-block__text">
                  <h4 class="information-block__text-title text-black">
                    Баланс
                  </h4>
                </div>
                <div class="information-block__link coach-numb">
                  353 руб <a href="#"> ></a>
                </div>
              </div>
              <div class="information-block">
                <div class="information-block__text">
                  <h4 class="information-block__text-title text-black">
                    Продвижение
                  </h4>
                </div>
                <div class="information-block__link coach-numb text-gray">
                  >
                </div>
              </div>
              <div class="information-block">
                <div class="information-block__text">
                  <h4 class="information-block__text-title text-black">
                    Изменить номер
                  </h4>
                </div>
                <div class="information-block__link coach-numb text-gray">
                  >
                </div>
              </div>
              <div class="profile-block__bot">
                <div class="paraments__uved">
                  <div class="paraments__uved-text">Уведомления</div>
                  <label class="paraments__uved-check">
                    <input class="paraments__uved-check-input check" type="checkbox">
                    <span class="paraments__uved-check-input-castom castom-check"></span>
                  </label>
                </div>
                <a class="logout-block">
                  Выйти из аккаунта
                </a>
              </div>
            </div>
            <div class="profile-block">
              <router-link to="/couch-training" class="button button-add">
                Отправить прилашение
              </router-link>
              <router-link to="/send-message" class="button button-message">
                Сообщение
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
export default {
  name: 'Profile-user'
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
  font-weight: normal;
  font-size: 14px;
  line-height: 130%;
  color: rgba(0, 0, 0, 0.64);
  border: none;
}
.mb-24{
  margin-bottom: 24px;
}
  .wrapper{
    display: flex;
    width: 100%;
    justify-content: space-between;
    .column-wrapper{
      display: flex;
      flex-direction: column;
      max-width: 352px;
      width: 100%;
      .profile-block {
        width: 100%;
        height: auto;
        background: #FFFFFF;
        box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.15);
        border-radius: 12px;
        display: flex;
        flex-direction: column;
        padding: 20px;
        &__header{
          display: flex;
          align-items: center;
          flex-direction: column;
          border-bottom: 1px solid rgba(0, 0, 0, 0.08);
          margin-bottom: 20px;
          &-img{
            width: 88px;
            height: 88px;
            border-radius: 50%;
            object-fit: cover;
            margin-bottom: 16px;
          }
          &-name{
            padding-bottom: 20px;
            font-family: Montserrat;
            font-style: normal;
            font-weight: 600;
            font-size: 16px;
            line-height: 20px;
            color: #000000;
          }
        }
        &-height{
          height: 620px;
        }

        &__bot{
          margin-top: auto;
          display: flex;
          flex-direction: column;
        }
          .paraments__uved{
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 20px;
        }
      }
    }
  }
.information-block{
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 16px 0;
  align-items: center;
  &__text{
    display: flex;
    flex-direction: column;
    max-width: 240px;
    width: 100%;
    &-title{
      margin-bottom: 8px;
      font-family: Montserrat;
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 17px;
      color: #000000;
    }
    &-bot{
      font-family: Montserrat;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 17px;
      color: rgba(0, 0, 0, 0.64);
    }
  }
  &__link{
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    color: rgba(0, 0, 0, 0.64);
  }
}

  .logout-block{
    padding-top: 20px;
    margin-left: 32px;
    position: relative;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: rgba(0, 0, 0, 0.32);
    border-top: 1px solid rgba(0, 0, 0, 0.08);
  }
  .button-add{
    padding: 13px 65px;
    margin-bottom: 12px;
  }
  .button-message{
    background: #ffffff;
    padding: 13px 112px;
  }
</style>
