<template>
  <div>
    <div class="trainer-schedule">
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
    <Calendar />
  </div>
</template>

<style lang="scss">
.trainer-schedule {
  &__inner {
    display: flex;
    flex-wrap: wrap;
    margin-right: -30px;
  }

  .trainer-schedule__block {
    flex: 0 0 calc(33.33% - 30px);
    margin-right: 30px;
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

.trainer-schedule .container {
  padding: 0 100px !important;
}

@media (max-width: 1220px) {
  .trainer-schedule {
    &__inner {
      display: flex;
      flex-wrap: wrap;
      margin-right: -30px;
    }

    .trainer-schedule__block {
      flex: 0 0 calc(50% - 30px);
      margin-right: 30px;
      max-width: unset;
    }
  }
}

@media (max-width: 991px) {
  .trainer-schedule {
    padding-bottom: 70px;
    .container {
      padding-right: calc(100px - 66px) !important;
    }
  }
}
</style>

<script>
import Calendar from '@/components/Calendar'

export default {
  name: 'TrainingSchedule',
  components: {
    Calendar
  }
}
</script>
