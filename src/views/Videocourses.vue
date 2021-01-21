<template>
  <div class="videocourses">
    <div class="container">
      <div class="grid videocourses__inner">
        <div class="videocourses__big block">
          <div class="videocourses__big-video">
            <video controls="controls" :poster="course.data.preview_url.max">
              <source
                :src="course.data.preview_video_url"
                type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
              />
            </video>
          </div>
          <div class="videocourses__big-info">
            <div class="videocourses__big-title block-title">
              {{ course.data.name }}
            </div>
            <div class="videocourses__big-text block-text">
              {{ course.data.title }}
            </div>
            <div class="videocourses__big-bottom">
              <div class="videocourses__big-price">
                <span class="videocourses__big-price-title">Цена курса:</span>
                <span class="videocourses__big-price-value">
                  {{ course.data.price }}₽</span
                >
              </div>
              <router-link to="/" class="videocourses__big-link button"
                >Купить курс</router-link
              >
            </div>
          </div>
        </div>
        <div class="videocourses__items">
          <div
            class="videocourses__item block"
            v-for="(item, index) in course.data.videos"
            :key="index"
          >
            <img
              :src="item.preview_image_url.min"
              class="videocourses__item-img"
              alt=""
            />
            <div class="videocourses__item-info">
              <div class="videocourses__item-top">
                <div class="videocourses__item-title block-title">
                  {{ item.name }}
                </div>
                <div class="videocourses__item-time">{{ item.time }}</div>
              </div>
              <div class="videocourses__item-text block-text">
                У меня в json не пришел текст, как и заголовок урока...
              </div>
              <router-link to="/" class="videocourses__item-link">
                Перейти
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.25 10.5L8.75 7L5.25 3.5"
                    stroke="black"
                    stroke-opacity="0.32"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
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
  }

  &__item {
    max-width: 544px;
    padding: 0;
    display: flex;
    height: 172px;
    overflow: hidden;

    & + & {
      margin-top: 12px;
    }

    &-info {
      padding: 20px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }
}

.videocourses__item-top {
  display: flex;
  justify-content: space-between;
}

.videocourses__item-img {
  display: block;
  flex: 0 0 200px;
  width: 200px;
  max-width: unset;
  height: 100%;
  object-fit: cover;
}
@media (max-width: 1230px) {
  .grid {
    flex-direction: column;
    align-items: center;
  }
  .videocourses__big {
    margin-bottom: 24px;
  }
  .block {
    max-width: none;
  }
  .videocourses__items {
    width: 100%;
  }
}
</style>

<script>
import {mapState} from 'vuex'

export default {
  name: 'Videocourses',
  data() {
    return {
      items: {
        item1: {
          title: 'Power Training',
          text:
            'Занятие с элементами силового тренинга, направленное на развитие основных мышечных групп',
          img: 'videocourses1',
          time: '11 мин'
        },
        item2: {
          title: 'Power Training',
          text:
            'Занятие с элементами силового тренинга, направленное на развитие основных мышечных групп',
          img: 'videocourses2',
          time: '15 мин'
        },
        item3: {
          title: 'Power Training',
          text:
            'Занятие с элементами силового тренинга, направленное на развитие основных мышечных групп',
          img: 'videocourses3',
          time: '18 мин'
        }
      }
    }
  },
  props: ['itemID'],
  computed: {
    ...mapState({
      course: state => state.auth.dataCourse
    })
  },
  methods: {
    getCourse() {
      return this.$store.dispatch('getCouese', this.itemID)
    }
  },
  mounted() {
    this.getCourse()
  }
}
</script>

<style lang="scss">
.videocourses__big-video video {
  width: 100%;
}
</style>
