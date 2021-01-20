<template>
  <div class="vebinar">
    <div class="container">
      <div class="vebinar__inner">
        <div class="vebinar__block block">
          <img class="vebinar__block-img" src="@/assets/img/video.jpg">
          <div class="vebinar__block-info">
            <div class="vebinar__block-title block-title">ОСНОВЫ СТРЕТЧИНГА И ГИБКОСТИ</div>
            <ul class="vebinar__block-list list">
              <li class="vebinar__block-list-item list__item" v-for="(item, index) of items" :key="index">
                {{item}}
              </li>
            </ul>
            <div class="vebinar__block-bottom">
              <div class="vebinar__block-price">
                <span class="vebinar__block-price-title">Цена за вебинар:</span>
                <span class="vebinar__block-price-value">3 500 руб</span>
              </div>
              <router-link to="/" class="vebinar__block-link button">Записаться</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import '@/assets/scss/_vars.scss';

  .vebinar{
    &__inner{
      display: flex;
      align-items: flex-start;
      justify-content: center;
    }
    &__block{
      max-width: 544px;
      padding: 0;
      overflow: hidden;
      &-title{
        margin-bottom: 24px;
      }
      &-list{
        margin-bottom: 32px;
        &-item{
          font-size: 14px;
          line-height: 17px;
        }
      }
      &-info{
        padding: 20px;
      }
      &-bottom {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      &-link {
        padding: 13px 77px;
      }

      &-price {
        display: flex;
        flex-direction: column;

        &-title {
          margin-bottom: 8px;
          font-weight: 500;
          font-size: 14px;
          line-height: 17px;
          color: $text-opacite-two;
        }

        &-value {
          font-weight: bold;
          font-size: 18px;
          line-height: 22px;
        }
      }
    }

  }
  @media (max-width: 991px) {
    .block{
      max-width: none;
    }
    .vebinar__block-img{
      width: 100%;
    }
  }
</style>

<script>
export default {
  name: 'Vebinar',
  data () {
    return {
      items: {
        item1: 'Проблематика и актуальность стретчинга как методики растяжки. Польза и вред растяжки. Мифы о растяжке;',
        item2: 'Цель занятия стретчингом;',
        item3: 'Внешние и внутренние факторы, влияющие на гибкость. Стретч-рефлекс;',
        item4: 'Формы и методы растяжки для тренировки гибкости. Примеры упражнений;',
        item5: 'Проблематика и актуальность стретчинга как методики растяжки. Польза и вред растяжки. Мифы о растяжке;'
      }
    }
  }
}
</script>
