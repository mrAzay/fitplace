<template>
  <div class="time block">
    <div class="time__title block-title">Предпочитаемый режим занятий</div>
    <div class="time__item">
      <div class="time__item-title">Дни недели</div>
      <div class="time__item-checkboxs">
        <label class="time__item-checkbox-wrap">
          <input
            type="checkbox"
            class="time__item-checkbox check"
            :checked="days.includes(1)"
            value="1"
            v-model.number="days"
            @change="pushData"
          />
          <span class="time__item-checkbox-text">Пн</span>
        </label>
        <label class="time__item-checkbox-wrap">
          <input
            type="checkbox"
            class="time__item-checkbox check"
            :checked="days.includes(2)"
            value="2"
            v-model.number="days"
            @change="pushData"
          />
          <span class="time__item-checkbox-text">Вт</span>
        </label>
        <label class="time__item-checkbox-wrap">
          <input
            type="checkbox"
            class="time__item-checkbox check"
            :checked="days.includes(3)"
            value="3"
            v-model.number="days"
            @change="pushData"
          />
          <span class="time__item-checkbox-text">Ср</span>
        </label>
        <label class="time__item-checkbox-wrap">
          <input
            type="checkbox"
            class="time__item-checkbox check"
            :checked="days.includes(4)"
            value="4"
            v-model.number="days"
            @change="pushData"
          />
          <span class="time__item-checkbox-text">Чт</span>
        </label>
        <label class="time__item-checkbox-wrap">
          <input
            type="checkbox"
            class="time__item-checkbox check"
            :checked="days.includes(5)"
            value="5"
            v-model.number="days"
            @change="pushData"
          />
          <span class="time__item-checkbox-text">Пт</span>
        </label>
        <label class="time__item-checkbox-wrap">
          <input
            type="checkbox"
            class="time__item-checkbox check"
            :checked="days.includes(6)"
            value="6"
            v-model.number="days"
            @change="pushData"
          />
          <span class="time__item-checkbox-text">Сб</span>
        </label>
        <label class="time__item-checkbox-wrap">
          <input
            type="checkbox"
            class="time__item-checkbox check"
            :checked="days.includes(7)"
            :value="7"
            v-model="days"
            @change="pushData"
          />
          <span class="time__item-checkbox-text">Вс</span>
        </label>
      </div>
    </div>
    <div class="time__item">
      <div class="time__item-title">Время суток</div>
      <div class="time__item-checkboxs">
        <label class="time__item-checkbox-wrap">
          <input
            type="radio"
            name="vremia"
            class="time__item-checkbox check"
            :checked="USER_INFO.duration == 1 ? true : false"
            value="1"
            v-model.number="daytime"
            @change="pushData"
          />
          <span class="time__item-checkbox-text time__item-checkbox-long"
            >Утро</span
          >
        </label>
        <label class="time__item-checkbox-wrap">
          <input
            type="radio"
            name="vremia"
            class="time__item-checkbox check"
            :checked="USER_INFO.daytime == 2 ? true : false"
            value="2"
            v-model.number="daytime"
            @change="pushData"
          />
          <span class="time__item-checkbox-text time__item-checkbox-long"
            >День</span
          >
        </label>
        <label class="time__item-checkbox-wrap">
          <input
            type="radio"
            name="vremia"
            class="time__item-checkbox check"
            :checked="USER_INFO.daytime == 3 ? true : false"
            value="3"
            v-model.number="daytime"
            @change="pushData"
          />
          <span class="time__item-checkbox-text time__item-checkbox-long"
            >Вечер</span
          >
        </label>
      </div>
    </div>
    <div class="time__item">
      <div class="time__item-title">Время суток</div>
      <div class="time__item-checkboxs">
        <label class="time__item-checkbox-wrap">
          <input
            type="radio"
            name="time"
            class="time__item-checkbox check"
            :checked="USER_INFO.duration == 30"
            value="30"
            v-model.number="duration"
            @change="pushData"
          />
          <span class="time__item-checkbox-text time__item-checkbox-long"
            >30 мин</span
          >
        </label>
        <label class="time__item-checkbox-wrap">
          <input
            type="radio"
            name="time"
            class="time__item-checkbox check"
            :checked="USER_INFO.duration == 45"
            value="45"
            v-model.number="duration"
            @change="pushData"
          />
          <span class="time__item-checkbox-text time__item-checkbox-long"
            >45 мин</span
          >
        </label>
        <label class="time__item-checkbox-wrap">
          <input
            type="radio"
            name="time"
            class="time__item-checkbox check"
            :checked="USER_INFO.duration == 60"
            value="60"
            v-model.number="duration"
            @change="pushData"
          />
          <span class="time__item-checkbox-text time__item-checkbox-long"
            >60 мин</span
          >
        </label>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'Time',
  data() {
    return {
      days: [],
      daytime: null,
      duration: null
    }
  },
  computed: {
    ...mapGetters(['USER_INFO'])
  },
  methods: {
    pushData() {
      this.$store
        .dispatch('changeProfile', {
          days_of_the_week: this.days,
          days_of_the_weeks: this.days,
          duration: this.duration,
          daytime: this.daytime
        })
        .then((res) => {
          console.log(res)
          this.$store.dispatch('GET_USER_INFO')
        })
    }
  },
  mounted() {
    this.days = this.USER_INFO.days_of_the_weeks.sort()
    this.daytime = this.USER_INFO.daytime
    this.duration = this.USER_INFO.duration
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_vars.scss';
.time {
  &__title {
    margin-bottom: 32px;
  }
  &__item {
    & + & {
      margin-top: 24px;
    }
    &-title {
      font-size: 14px;
      line-height: 17px;
      margin-bottom: 12px;
    }
    &-checkboxs {
      display: flex;
    }
    &-checkbox {
      &:checked + &-text {
        background-color: $accent;
      }
      &-wrap {
        & + & {
          margin-left: 11px;
        }
      }
      &-text {
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
      &-long {
        width: 96px;
        border-radius: 18px;
      }
    }
  }
}

// .time__item-checkbox-wrap--active span {
//   background-color: $accent;
// }
</style>
