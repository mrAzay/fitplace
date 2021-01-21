<template>
  <div class="info block">
    <div class="info__item">
      <div class="info__item-title block-title">Цель</div>
      <div class="info__item-value input">
        Увеличение мышечной массы
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.5 15L12.5 10L7.5 5"
            stroke="black"
            stroke-opacity="0.32"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
    <div class="info__item">
      <div class="info__item-title block-title">Активность</div>
      <div class="info__item-value input">
        Малоподвижный образ жизни
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.5 15L12.5 10L7.5 5"
            stroke="black"
            stroke-opacity="0.32"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.info {
  &__item {
    & + & {
      margin-top: 24px;
      padding-bottom: 7px;
    }
    &-title {
      margin-bottom: 12px;
    }
    &-value {
      color: rgba(0, 0, 0, 0.32);
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
}
</style>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'Info',
  computed: {
    ...mapGetters(['USER_INFO'])
  }
}
</script>
