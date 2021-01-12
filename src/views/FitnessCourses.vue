<template>
  <div class="fitness-courses">
    <div class="container">
      <div class="fitness-courses__inner">
        <div class="fitness-courses__title title">Курсы фитнеса</div>
        <div class="fitness-courses__items grid">
          <div class="fitness-courses__item block" v-for="(item, index) of 12" :key="index">
            <img class="fitness-courses__item-img" src="../assets/img/traini.png">
            <div class="fitness-courses__item-info">
              <div class="fitness-courses__item-title block-title">Персональный {{item}} тренер (очно)</div>
              <div class="fitness-courses__item-desc">
                <span>Длительность обучения: 6 месяцев</span>
                <span>Старт обучения: 20.05.2020</span>
              </div>
              <div class="fitness-courses__item-text block-text">
                Самый популярный и полный курс по специальности “Персональный тренер”
              </div>
              <div class="fitness-courses__item-price">
                54 000 руб
              </div>
              <button class="fitness-courses__item-btn-one button">Записаться на курс</button>
              <button class="fitness-courses__item-btn-two button">Подробнее о курсе</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .block {
    padding: 0;
    overflow: hidden;
  }

  .fitness-courses {
    &__item {
      margin-bottom: 24px;
      &-info {
        padding: 20px;
      }

      &-title {
        margin-bottom: 12px;
      }

      &-desc {
        font-weight: 500;
        font-size: 12px;
        line-height: 15px;
        margin-bottom: 16px;

        span {
          display: block;
          margin-top: 8px;
        }
      }

      &-text {
        margin-bottom: 16px;
      }

      &-price {
        font-weight: 600;
        font-size: 16px;
        line-height: 20px;
        margin-bottom: 44px;
      }

      button {
        width: 100%;
        padding: 13px 0;
      }

      &-btn-two {
        background-color: #fff;
        margin-top: 12px;
      }
    }
  }
</style>

<script>
export default {
  name: 'FitnessCourses',
  data () {
    return {
      items: {
        item1: '',
        item2: '',
        item3: '',
        item4: '',
        item5: '',
        item6: '',
        item7: ''
      }
    }
  }
}
</script>
