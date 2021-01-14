<template>
<div class="aboniment block">
  <img src="@/assets/img/aboniment1.jpg" alt="" class="aboniment__img">
  <div class="aboniment__prod">
    <div class="aboniment__prid-title block-title">Продлевать автоматически</div>
    <label class="aboniment__check">
      <input type="checkbox" class="check">
      <span class="castom-check"></span>
    </label>
    <div class="aboniment__prod-text">Согласен с условиями использования
      и политикой конфиденциальности</div>
  </div>
  <div class="aboniment__title block-title">Действует до 28.10.2020</div>
  <ul class="aboniment__list list">
    <li class="aboniment__list-item list__item">
      Библиотека видеокурсов от тренеров по топовым направлениям
    </li>
    <li class="aboniment__list-item list__item">
      150+ групповых занятий в месяц
    </li>
    <li class="aboniment__list-item list__item">
      Бесплатная персональная тренировка с тренером
    </li>
    <li class="aboniment__list-item list__item">
      Приоритетная поддержка сервиса
    </li>
  </ul>
  <a href="#" class="aboniment__link"></a>
  <button class="aboniment__button button"></button>
  <button class="aboniment__button button"></button>
  <button class="aboniment__button button"></button>
  <button class="aboniment__button button"></button>
  <a href="#" class="aboniment__down-link"></a>
</div>
</template>

<style lang="scss" scoped>
  .aboniment {
  }
</style>

<script>
export default {
  name: 'Aboniment'
}
</script>
