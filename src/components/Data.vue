<template>
  <div class="data block">
    <div class="data__title block-title">Мои данные</div>
    <form action="" class="data__form">
      <input
        type="text"
        class="data__input input"
        v-model="name"
        placeholder="Имя"
      />
      <input
        type="text"
        class="data__input input"
        placeholder="Фамилия"
        v-model="surname"
      />
      <input
        type="text"
        class="data__input input"
        placeholder="Email"
        v-model="email"
      />
      <input
        type="text"
        class="data__input input"
        placeholder="День рождения"
        v-model="birthday"
      />
      <input
        type="text"
        class="data__input input"
        placeholder="Город"
        v-model="city"
      />
      <div class="data__input data__select input">
        <div
          class="data__select-value"
          :class="[sexValue === '' ? '' : 'active']"
          @click="modal = true"
        >
          {{ sexValue === '' ? 'Пол' : sexValue }}
        </div>
        <ul class="data__select-list" :class="{active: modal}">
          <li
            class="data__select-list-item"
            @click="
              modal = false
              sexValue = 'Мужской'
            "
          >
            Мужской
          </li>
          <li
            class="data__select-list-item"
            @click="
              modal = false
              sexValue = 'Женский'
            "
          >
            Женский
          </li>
        </ul>
      </div>
      <input
        type="text"
        class="data__input data__input-small input"
        placeholder="Рост"
        v-model="height"
      />
      <input
        type="text"
        class="data__input data__input-small input"
        placeholder="Вес"
        v-model="weight"
      />
      <button class="data__button button">Сохранить</button>
    </form>
  </div>
</template>

<style lang="scss" scoped>
.data {
  &__select {
    position: relative;
    &-list {
      display: none;
      position: absolute;
      width: 100%;
      background-color: #fff;
      border-radius: 10px;
      border: 1px solid rgba(0, 0, 0, 0.08);
      &-item {
        padding: 10px;
        cursor: pointer;
      }
      &.active {
        display: block;
      }
    }
    &-value {
      color: rgba(0, 0, 0, 0.32);
      cursor: pointer;
      &.active {
        color: #000;
      }
    }
  }
  &__title {
    margin-bottom: 32px;
  }
  &__form {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  &__input {
    width: 100%;
    display: block;
    font-size: 14px;
    line-height: 17px;
    & + & {
      margin-top: 32px;
    }
    &-small {
      max-width: 148px;
    }
  }
  &__button {
    width: 100%;
    padding: 13px 0;
    background: rgba(0, 0, 0, 0.08);
    display: block;
    margin-top: 40px;
    box-shadow: none;
  }
}
</style>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'Data',
  data: function () {
    return {
      modal: false,
      sexValue: '',
      name: '',
      surname: '',
      email: '',
      birthday: Number,
      city: '',
      height: Number,
      weight: Number
    }
  },
  methods: {
    changeProfile() {
      this.$store.dispatch('changeProfile', {
        name: this.name + 'dfd',
        email: this.email,
        height: this.height,
        weight: this.weight
      })
    }
  },
  computed: {
    ...mapGetters(['USER_INFO'])
  },
  mounted() {
    this.name = this.USER_INFO.name
    this.surname = this.USER_INFO.surname
    this.email = this.USER_INFO.email
    this.birthday = this.USER_INFO.date_of_birth
    this.city = this.USER_INFO.city
    this.sexValue = this.USER_INFO.male ? 'Мужской' : 'Женский'
    this.height = this.USER_INFO.height
    this.weight = this.USER_INFO.weight

    this.changeProfile()
  }
}
</script>
