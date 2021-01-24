<template>
  <div class="paraments block">
    <div class="paraments__title block-title">Параметры</div>
    <div class="paraments__uved">
      <div class="paraments__uved-text">Уведомления</div>
      <label class="paraments__uved-check">
        <input
          class="paraments__uved-check-input check"
          type="checkbox"
          :checked="USER_INFO.notification === 'true'"
          @click="changeNotification"
        />
        <span class="paraments__uved-check-input-castom castom-check"></span>
      </label>
    </div>
    <div class="paraments__napomit">
      <div class="paraments__napomit-text">
        Напомнить о <br />
        тренировке за
      </div>
      <div class="paraments__napomit-schet schet">
        <button
          class="paraments__napomit-schet-btn paraments__napomit-chet-btn-minus schet-btn schet-btn-minus"
          @click.prevent="remindForDecrement"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.75 9H14.25"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <div class="paraments__napomit-schet-value schet-value">
          {{ USER_INFO.workout_notification_for }}
        </div>
        <button
          class="paraments__napomit-schet-btn paraments__napomit-chet-btn-plus schet-btn schet-btn-plus"
          @click.prevent="remindForIncrement"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 3.75V14.25"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M3.75 9H14.25"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/scss/_vars.scss';

.paraments {
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  display: flex;
  flex-direction: column;
  &__title {
    margin-bottom: 32px;
  }

  &__uved {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 20px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
    margin-bottom: 20px;
  }
  &__napomit {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
<script>
import {mapGetters} from 'vuex'

export default {
  name: 'Paraments',
  computed: {
    ...mapGetters(['USER_INFO'])
  },
  methods: {
    remindForDecrement() {
      this.USER_INFO.workout_notification_for--
      this.$store
        .dispatch('changeProfile', {
          workout_notification_for: this.USER_INFO.workout_notification_for
        })
        .then((res) => {
          console.log(res)
          this.$store.dispatch('GET_USER_INFO')
        })
    },
    remindForIncrement() {
      this.USER_INFO.workout_notification_for++
      this.$store
        .dispatch('changeProfile', {
          workout_notification_for: this.USER_INFO.workout_notification_for
        })
        .then((res) => {
          console.log(res)
          this.$store.dispatch('GET_USER_INFO')
        })
    },
    changeNotification() {
      this.USER_INFO.notification =
        this.USER_INFO.notification === 'true' ? 'false' : 'true'
      console.log(this.USER_INFO.notification)
      this.$store
        .dispatch('changeProfile', {
          notification: this.USER_INFO.notification.toString()
        })
        .then((res) => {
          console.log(res)
          this.$store.dispatch('GET_USER_INFO')
          console.log(this.USER_INFO)
        })
    }
  },
  mounted() {
    this.$store.dispatch('GET_USER_INFO')
    console.log(this.USER_INFO)
  }
}
</script>
