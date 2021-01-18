<template>
    <div class="user-about block">
      <div class="user-about__item">
        <div class="user-about__item-title block-title">Ограничения по здоровью</div>
        <textarea name="" id="" cols="30" rows="10" class="user-about__item-textarea" placeholder="Укажите хронические заболевания"></textarea>
      </div>
      <div class="user-about__item">
        <div class="user-about__item-title block-title">Вредные привычки</div>
        <textarea name="" id="" cols="30" rows="10" class="user-about__item-textarea" placeholder="Укажите вредные привычки"></textarea>
      </div>
    </div>
</template>

<style lang="scss" scoped>
    .user-about {
      margin: 20px;
      max-width: 736px;
      &__item{
        &+&{
          margin-top: 20px;
        }
        &-title{
          margin-bottom: 12px;
        }
      }
    }
</style>

<script>
export default {
  name: 'UserAbout'
}
</script>
