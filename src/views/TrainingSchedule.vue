<template>
  <div class="trainer-schedule">
    <DatePicker class="calendar" color="orange" />
    <div class="container">
      <div class="trainer-schedule__inner">
        <div
          class="trainer-schedule__block block"
          v-for="(item, index) in 12"
          :key="index"
        >
          <div class="trainer-schedule__title block-title">
            <span>Персональная тренировка</span>
            <span>12:30 - 13:30</span>
          </div>
          <div class="trainer-schedule__text block-text">
            <span>Вы можете записаться на тренировку</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 8C9.65 8 11 6.65 11 5C11 3.35 9.65 2 8 2C6.35 2 5 3.35 5 5C5 6.65 6.35 8 8 8ZM8 8.75C4.925 8.75 2 10.7 2 12.5C2 14 8 14 8 14C8 14 14 14 14 12.5C14 10.7 11.075 8.75 8 8.75Z"
                fill="#4F4F4F"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.trainer-schedule {
  &__inner {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
  &__title {
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    padding: 16px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__block {
    padding: 0;
    margin-bottom: 24px;
  }
  &__text {
    color: rgba(0, 0, 0, 0.64);
    font-size: 14px;
    line-height: 17px;
    padding: 16px;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
  }
}

.trainer-schedule .calendar {
  .vc-pane {
    display: flex;
    align-items: center;
  }

  .vc-weeks {
    display: flex;
    .vc-weekday {
      display: none;
    }
  }

  .vc-header {
    transform: translate(15.5px, -3px);
  }

  .vc-arrows-container {
    width: 200px;
    z-index: 4;
  }
}

.vc-container {
  width: 100vh !important;
  position: fixed;
  left: -11.5%;
  top: 44%;
  transform: rotate(90deg);
  border-radius: 0;
}
</style>

<script>
import DatePicker from 'v-calendar/lib/components/date-picker.umd'
export default {
  name: 'TrainingSchedule',
  components: {
    DatePicker
  }
}
</script>
