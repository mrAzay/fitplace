<template>
  <div class="videocourses">
    <div class="container">
      <div class="grid videocourses__inner">
        <div class="videocourses__big block">
          <div class="videocourses__big-video">
            <img src="@/assets/img/video.jpg" alt="">
          </div>
          <div class="videocourses__big-info">
            <div class="videocourses__big-title block-title">СТАЛЬНОЙ ПРЕСС</div>
            <div class="videocourses__big-text block-text">Наверное каждый мечтает о шести или восьми кубиках на своём
              животе.
              Простые скручивания по подходам здесь не работают. Ими вы просто укрепите свой пресс, но не прорисуете
              его.
              Пресс это такие же мышцы, как и все на вашем теле, и ему тоже нужны дополнительные нагрузки.
            </div>
            <div class="videocourses__big-bottom">
              <div class="videocourses__big-price">
                <span class="videocourses__big-price-title">Цена курса:</span>
                <span class="videocourses__big-price-value">11 200 руб</span>
              </div>
              <router-link to="/" class="videocourses__big-link button">Купить курс</router-link>
            </div>
          </div>
        </div>
        <div class="videocourses__items">
          <div class="videocourses__item block" v-for="(item, index) in items" :key="index">
            <img :src="require('@/assets/img/'+item.img+'.jpg')" class="videocourses__item-img" alt="">
            <div class="videocourses__item-info">
              <div class="videocourses__item-top">
                <div class="videocourses__item-title block-title">{{item.title}}</div>
                <div class="videocourses__item-time">{{item.time}}</div>
              </div>
              <div class="videocourses__item-text block-text">{{item.text}}</div>
              <router-link to="/" class="videocourses__item-link">
                Перейти
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.25 10.5L8.75 7L5.25 3.5" stroke="black" stroke-opacity="0.32" stroke-linecap="round"
                        stroke-linejoin="round"/>
                </svg>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  @import '@/assets/scss/_vars.scss';

  .videocourses {
    &__big {
      max-width: 544px;
      padding: 0;
      overflow: hidden;

      &-info {
        padding: 20px;
      }

      &-title {
        margin-bottom: 12px;
      }

      &-text {
        margin-bottom: 32px;
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

      img {
        width: 100%;
      }
    }

    &__item {
      max-width: 544px;
      padding: 0;
      display: flex;
      overflow: hidden;

      & + & {
        margin-top: 12px;
      }

      &-info {
        padding: 20px;
        display: flex;
        flex-direction: column;
      }
    }
  }

</style>

<script>
export default {
  name: 'Videocourses',
  data () {
    return {
      items: {
        item1: {
          title: 'Power Training',
          text: 'Занятие с элементами силового тренинга, направленное на развитие основных мышечных групп',
          img: 'videocourses1',
          time: '11 мин'
        },
        item2: {
          title: 'Power Training',
          text: 'Занятие с элементами силового тренинга, направленное на развитие основных мышечных групп',
          img: 'videocourses2',
          time: '15 мин'
        },
        item3: {
          title: 'Power Training',
          text: 'Занятие с элементами силового тренинга, направленное на развитие основных мышечных групп',
          img: 'videocourses3',
          time: '18 мин'
        }
      }
    }
  }
}
</script>
