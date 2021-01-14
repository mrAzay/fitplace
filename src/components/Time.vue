<template>
    <div class="time block">
      <div class="time__title block-title">Предпочитаемый режим занятий</div>
      <div class="time__item">
        <div class="time__item-title">Дни недели</div>
        <div class="time__item-checkboxs">
          <label class="time__item-checkbox-wrap">
            <input type="checkbox" class="time__item-checkbox check">
            <span class="time__item-checkbox-text">Пн</span>
          </label>
          <label class="time__item-checkbox-wrap">
            <input type="checkbox" class="time__item-checkbox check">
            <span class="time__item-checkbox-text">Вт</span>
          </label>
          <label class="time__item-checkbox-wrap">
            <input type="checkbox" class="time__item-checkbox check">
            <span class="time__item-checkbox-text">Ср</span>
          </label>
          <label class="time__item-checkbox-wrap">
            <input type="checkbox" class="time__item-checkbox check">
            <span class="time__item-checkbox-text">Чт</span>
          </label>
          <label class="time__item-checkbox-wrap">
            <input type="checkbox" class="time__item-checkbox check">
            <span class="time__item-checkbox-text">Пт</span>
          </label>
          <label class="time__item-checkbox-wrap">
            <input type="checkbox" class="time__item-checkbox check">
            <span class="time__item-checkbox-text">Сб</span>
          </label>
          <label class="time__item-checkbox-wrap">
            <input type="checkbox" class="time__item-checkbox check">
            <span class="time__item-checkbox-text">Вс</span>
          </label>
        </div>
      </div>
      <div class="time__item">
        <div class="time__item-title">Время суток</div>
        <div class="time__item-checkboxs">
          <label class="time__item-checkbox-wrap">
            <input type="radio" name="vremia" class="time__item-checkbox check">
            <span class="time__item-checkbox-text time__item-checkbox-long">Утро</span>
          </label>
          <label class="time__item-checkbox-wrap">
            <input type="radio" name="vremia" class="time__item-checkbox check">
            <span class="time__item-checkbox-text time__item-checkbox-long">День</span>
          </label>
          <label class="time__item-checkbox-wrap">
            <input type="radio" name="vremia" class="time__item-checkbox check">
            <span class="time__item-checkbox-text time__item-checkbox-long">Вечер</span>
          </label>
        </div>
      </div>
      <div class="time__item">
        <div class="time__item-title">Время суток</div>
        <div class="time__item-checkboxs">
          <label class="time__item-checkbox-wrap">
            <input type="radio" name="time" class="time__item-checkbox check">
            <span class="time__item-checkbox-text time__item-checkbox-long">30 мин</span>
          </label>
          <label class="time__item-checkbox-wrap">
            <input type="radio" name="time" class="time__item-checkbox check">
            <span class="time__item-checkbox-text time__item-checkbox-long">45 мин</span>
          </label>
          <label class="time__item-checkbox-wrap">
            <input type="radio" name="time" class="time__item-checkbox check">
            <span class="time__item-checkbox-text time__item-checkbox-long">60 мин</span>
          </label>
        </div>
      </div>
    </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/_vars.scss';
.time {
  margin: 20px;
  &__title{
    margin-bottom: 32px;
  }
  &__item{
    &+&{
      margin-top: 24px;
    }
    &-title{
      font-size: 14px;
      line-height: 17px;
      margin-bottom: 12px;
    }
    &-checkboxs{
      display: flex;
    }
    &-checkbox{
      &:checked+&-text{
        background-color: $accent;
      }
      &-wrap{
        &+&{
          margin-left: 11px;
        }
      }
      &-text{
        font-weight: 600;
        font-size: 12px;
        line-height: 15px;
        background-color: rgba(0, 0, 0, 0.08);
        width: 35px;
        height: 35px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        cursor: pointer;
      }
      &-long{
        width: 96px;
        border-radius: 18px;
      }
    }
  }
}
</style>

<script>
export default {
  name: 'Time'
}
</script>
