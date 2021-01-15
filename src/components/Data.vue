<template>
  <div class="data block">
    <div class="data__title block-title">Мои данные</div>
      <form action="" class="data__form">
        <input type="text" class="data__input input" placeholder="Имя">
        <input type="text" class="data__input input" placeholder="Фамилия">
        <input type="text" class="data__input input" placeholder="Email">
        <input type="text" class="data__input input" placeholder="День рождения">
        <input type="text" class="data__input input" placeholder="Город">
        <div class="data__input data__select input">
          <div class="data__select-value" :class="[sexValue === '' ? '' : 'active']" @click="modal = true">{{sexValue === '' ? 'Пол' : sexValue}}</div>
          <ul class="data__select-list" :class="{active: modal}">
            <li class="data__select-list-item" @click="modal = false; sexValue = 'Мужской'">Мужской</li>
            <li class="data__select-list-item" @click="modal = false; sexValue = 'Женский'">Женский</li>
          </ul>
        </div>
        <input type="text" class="data__input data__input-small input" placeholder="Рост">
        <input type="text" class="data__input data__input-small input" placeholder="Вес">
        <button class="data__button button">Сохранить</button>
      </form>
    </div>
</template>

<style lang="scss" scoped>
  .data {
    margin: 20px;
    &__select{
      position: relative;
      &-list{
        display: none;
        position: absolute;
        width: 100%;
        background-color: #fff;
        border-radius: 10px;
        border: 1px solid rgba(0, 0, 0, 0.08);
        &-item{
          padding: 10px;
          cursor: pointer;
        }
        &.active{
          display: block;
        }
      }
      &-value{
        color: rgba(0, 0, 0, 0.32);
        cursor: pointer;
        &.active{
          color: #000;
        }
      }
    }
    &__title{
      margin-bottom: 32px;
    }
    &__form{
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
    &__input{
      width: 100%;
      display: block;
      font-size: 14px;
      line-height: 17px;
      &+&{
        margin-top: 32px;
      }
      &-small{
        max-width: 148px;
      }
    }
    &__button{
      width: 100%;
      padding: 13px 0;
      background: rgba(0, 0, 0, 0.08);
      display: block;
      margin-top: 40px;
      box-shadow: none;
    }
  }
</style>

<script>
export default {
  name: 'Data',
  data: function () {
    return {
      modal: false,
      sexValue: ''
    }
  }
}
</script>
