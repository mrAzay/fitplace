<template>
  <div class="paraments block">
    <div class="paraments__title block-title">Параметры</div>
    <div class="paraments__uved">
      <div class="paraments__uved-text">Уведомления</div>
      <label class="paraments__uved-check">
        <input class="paraments__uved-check-input check" type="checkbox" />
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
          @click.passive="remindForDecrement"
          class="paraments__napomit-schet-btn paraments__napomit-chet-btn-minus schet-btn schet-btn-minus"
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
          {{ remindMinuteCount }}
        </div>
        <button
          @click.passive="remindForIncrement"
          class="paraments__napomit-schet-btn paraments__napomit-chet-btn-plus schet-btn schet-btn-plus"
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
.block {
  margin: 20px;
}
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
export default {
  name: 'Paraments',
  data() {
    return {
      remindMinuteCount: 0
    }
  },
  methods: {
    remindForDecrement() {
      this.remindMinuteCount--
    },
    remindForIncrement() {
      this.remindMinuteCount++
    }
  }
}
</script>
