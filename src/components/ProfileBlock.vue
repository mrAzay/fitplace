<template>
  <div class="block profile">
    <img :src="USER_INFO.photo_main_url.max" alt="" class="profile__img" />
    <div class="profile__name block-title">
      {{ USER_INFO.name }} {{ USER_INFO.surname }}
    </div>
    <div class="profile__info">
      г. {{ USER_INFO.city }}, {{ Math.round(USER_INFO.age / 31536000) }} лет
    </div>
    <div class="profile__links">
      <router-link to="/profile-user-info" class="profile__link"
        ><span>Мои данные</span>
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
      </router-link>
      <a href="" class="profile__link"
        ><span>Изменить номер</span>
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
      </a>
      <a href="" class="profile__link"
        ><span>Пригласить друга</span>
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
      </a>
      <a href="" :data-id="USER_INFO.id" class="profile__link"
        >Скопировать ID</a
      >
    </div>
    <a href="#" class="profile__log">
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.5 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V4.16667C2.5 3.72464 2.67559 3.30072 2.98816 2.98816C3.30072 2.67559 3.72464 2.5 4.16667 2.5H7.5M13.3333 14.1667L17.5 10M17.5 10L13.3333 5.83333M17.5 10H7.5"
          stroke="black"
          stroke-opacity="0.32"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <span> Выйти из аккаунта </span>
    </a>
  </div>
</template>
<style lang="scss" scoped>
.block {
  margin: 20px;
}
.profile {
  display: flex;
  flex-direction: column;
  min-height: 550px;
  align-items: center;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;

  &__img {
    margin-bottom: 16px;
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 50%;
  }
  &__name {
    margin-bottom: 8px;
  }
  &__info {
    margin-bottom: 20px;
    color: rgba(0, 0, 0, 0.64);
  }
  &__links {
    display: flex;
    padding-top: 20px;
    border-top: 1px solid rgba(0, 0, 0, 0.08);
    flex-direction: column;
    width: 100%;
    margin-bottom: auto;
  }
  &__link {
    display: flex;
    align-items: center;
    justify-content: space-between;
    & + & {
      margin-top: 32px;
    }
  }
  &__log {
    padding-top: 20px;
    border-top: 1px solid rgba(0, 0, 0, 0.08);
    color: rgba(0, 0, 0, 0.32);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    svg {
      margin-right: 12px;
    }
  }
}
</style>
<script>
import {mapGetters} from 'vuex'

export default {
  name: 'ProfileBlock',
  computed: {
    ...mapGetters(['USER_INFO'])
  }
}
</script>
