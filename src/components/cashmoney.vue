<template>
    <div class="cashmoney">
      <h3 class="cashmoney__title">
        Мои реквизиты
      </h3>
      <input type="text" v-for="item in 12" :placeholder="item + 'Наименование организации'" :key="item" class="cashmoney__input">
      <button class="button cashmoney__button">
        Сохранить
      </button>
    </div>

</template>

<script>
export default {
  name: 'cashmoney'
}
</script>

<style scoped lang="scss">
.cashmoney{
  max-width: 452px;
  height: auto;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  background: #FFFFFF;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.15);
  border-radius: 12px;
  padding: 20px;
  &__title{
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    color: #000000;
    margin-bottom: 32px;
  }
  &__input{
    border: none;
    padding-bottom: 8px;
    width: 100%;
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    color: rgba(0, 0, 0, 0.32);
    margin-bottom: 32px;
  }
  &__button{
    padding: 13px 116px;
    margin: 0 auto;
    margin-top: 14px;
  }
}
</style>
