<template>
  <div class="user-about block">
    <div class="user-about__item">
      <div class="user-about__item-title block-title">
        Ограничения по здоровью
      </div>
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        class="user-about__item-textarea"
        placeholder="Укажите хронические заболевания"
        v-model="restriction"
      ></textarea>
    </div>
    <div class="user-about__item">
      <div class="user-about__item-title block-title">Вредные привычки</div>
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        class="user-about__item-textarea"
        placeholder="Укажите вредные привычки"
        v-model="badFabist"
      ></textarea>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  textarea {
    width: 100%;
  }

  .user-about {
    max-width: 736px;

    &__item {
      & + & {
        margin-top: 20px;
      }

      &-title {
        margin-bottom: 12px;
      }
    }
  }
</style>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'UserAbout',
  data: function () {
    return {
      badFabist: '',
      restriction: ''
    }
  },
  computed: {
    ...mapGetters(['USER_INFO'])
  },
  mounted () {
    this.badFabist = this.USER_INFO.bad_fabist
    this.restriction = this.USER_INFO.restriction
  }
}
</script>
