<template>
  <div class="history block">
    <div class="history__title block-title">История операций</div>
    <div class="history__wrapper">
      <div v-if="true" class="history__wrapper-blank block-text">
        Операций ещё не производилось
      </div>
      <div v-else class="history__wrapper-no-blank">
        <div class="history__item" v-for="(item, index) in 6" :key="index">
          <div class="history__item-title block-title">
            <span class="historu__item-title-value">Покупка видео</span>
            <span class="history__item-price">- 1 200 руб</span>
          </div>
          <div class="history__item-text block-text">
            Комплексное увеличение мышечной массы всего тела
          </div>
          <div class="history__item-data">23.06.2020 - 16:35</div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.block {
  margin: 20px;
}
.history {
  height: 627px;
  overflow: auto;
  display: flex;
  flex-direction: column;
  &__wrapper {
    flex-grow: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    &-blank {
      color: rgba(0, 0, 0, 0.32);
    }
  }
  &__title {
    margin-bottom: 32px;
  }
  &__item {
    & + & {
      padding-top: 20px;
      margin-top: 20px;
      border-top: 1px solid rgba(0, 0, 0, 0.08);
    }
    &-title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 12px;
    }
    &-text {
      margin-bottom: 8px;
      color: rgba(0, 0, 0, 0.8);
    }
    &-data {
      font-size: 12px;
      line-height: 15px;
      color: rgba(0, 0, 0, 0.64);
    }
  }
}
</style>
<script>
export default {
  name: 'History'
}
</script>
