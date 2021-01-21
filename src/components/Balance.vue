<template>
  <div class="balance block">
    <div class="balance__title block-title">
      <span>Ваш баланс</span>
      <span>{{ USER_INFO.balance }} руб</span>
    </div>
    <input
      type="number"
      class="balance__input block-text"
      placeholder="Сумма пополнения"
    />
    <button class="balance__btn button">Пополнить</button>
  </div>
</template>
<style scoped lang="scss">

.balance {
  &__title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 32px;
  }
  &__input {
    display: block;
    width: 100%;
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
    padding-bottom: 8px;
    text-align: center;
    margin-bottom: 32px;
  }
  &__btn {
    width: 100%;
    padding: 13px 0;
  }
}
</style>
<script>
import {mapGetters} from 'vuex'

export default {
  name: 'Balance',
  computed: {
    ...mapGetters(['USER_INFO'])
  }
}
</script>
