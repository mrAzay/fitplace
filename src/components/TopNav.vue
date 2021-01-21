<template>
  <div class="top-nav" v-if="$route.path !== '/chat'">
    <div class="container container-top-nav">
      <div class="top-nav__inner">
        <router-link class="top-nav__back" :to="`/${path.link}`" v-if="path">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.5 5L7.5 10L12.5 15"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          {{ path.text }}
        </router-link>
        <router-link to="/" class="top-nav__link">
          <svg
            width="100"
            height="32"
            viewBox="0 0 100 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M63.151 4.65559C56.6851 -1.51469 46.1637 -1.55908 39.6515 4.56681C33.0235 10.7815 32.9772 20.9691 39.5125 27.2726C42.6643 30.2911 46.7431 31.8448 50.8682 31.9558C51.2159 31.978 51.5403 31.978 51.8647 31.9558L67.1371 31.9336C67.5774 31.9336 67.9482 31.6006 67.9482 31.1567L68.0177 16.8408C68.064 16.3081 68.064 15.7976 68.0409 15.2649C67.8555 11.403 66.2332 7.58537 63.151 4.65559ZM58.6782 23.0555C54.5994 26.9174 48.0177 26.8953 43.9853 22.9889C39.9296 19.0825 39.976 12.7791 44.0316 8.91708C48.1104 5.05511 54.6921 5.0773 58.7245 8.98367C62.7802 12.8678 62.7338 19.1713 58.6782 23.0555Z"
              fill="#FFEF00"
            />
            <path
              d="M5.21437 4.18923V6.71949H11.6338V10.4705H5.21437V15.1981H0V0.438232H12.5377V4.18923H5.21437ZM14.2063 0.438232H19.3975V15.1981H14.2063V0.438232ZM25.2607 4.30021H20.7416V0.438232H34.9942V4.30021H30.4751V15.1981H25.2607V4.30021ZM23.5921 22.4781C23.5921 25.8962 20.8575 28.0491 16.5469 28.0491H14.3221V31.667H9.13094V16.8849H16.5469C20.8575 16.8849 23.5921 19.0379 23.5921 22.4781ZM18.3314 22.4781C18.3314 21.3906 17.6593 20.7469 16.2225 20.7469H14.3221V24.2094H16.2225C17.6593 24.2094 18.3314 23.5435 18.3314 22.4781ZM25.2839 16.8849H30.4751V27.805H37.4508V31.667H25.2839V16.8849ZM70.1506 24.2759C70.1506 19.7481 73.7891 16.552 78.7486 16.552C81.7613 16.552 84.1483 17.6174 85.6779 19.504L82.387 22.3228C81.4832 21.213 80.394 20.5915 79.0035 20.5915C76.8482 20.5915 75.3882 22.0342 75.3882 24.2759C75.3882 26.5399 76.8482 27.9825 79.0035 27.9825C80.394 27.9825 81.4832 27.3389 82.387 26.2513L85.6779 29.0479C84.1483 30.9567 81.7613 31.9999 78.7486 31.9999C73.7891 31.9999 70.1506 28.826 70.1506 24.2759ZM100 27.916V31.667H87.1611V16.8849H99.6987V20.6581H92.2827V22.3893H98.7949V25.9628H92.2827V27.916H100Z"
              fill="#111111"
            />
          </svg>
        </router-link>

        <router-link
          v-if="authorizated"
          :to="{name: 'Profile'}"
          class="right-nav__profile"
        >
          <img
            style="width: 45px; height: 45px;"
            :src="USER_INFO.photo_main_url.min"
            alt=""
          />
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.top-nav__back {
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  svg {
    margin-right: 8px;
  }
}
.top-nav {
  padding: 20px 0 20px;

  &__inner {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &__link {
    display: block;
  }
}

.top-nav__inner {
  display: flex;
  justify-content: center;
  align-items: center;
}

.right-nav__profile {
  position: absolute;
  display: none;
  right: 20px;
  top: 50%;
  transform: translate(0, -50%);
  img {
    border-radius: 50%;
  }
}

@media (max-width: 991px) {
  .right-nav__profile {
    display: block;
  }

  .top-nav {
    background: #fff;
    height: 74px;
    margin-bottom: 34px;
  }
}
</style>

<script>
import {mapState, mapGetters} from 'vuex'

export default {
  name: 'TopNav',
  computed: {
    path() {
      if (this.$route.path === '/category') {
        return {
          text: 'Видеобиблиотека',
          link: ''
        }
      } else if (this.$route.path === '/videocourses') {
        return {
          text: 'Видеокурсы',
          link: ''
        }
      } else if (this.$route.path === '/vebinar') {
        return {
          text: 'Вебинары',
          link: ''
        }
      } else if (this.$route.path === '/fitness-courses') {
        return {
          text: 'Главная',
          link: ''
        }
      } else if (this.$route.path === '/profile-trainer') {
        return {
          text: 'Видеокурсы',
          link: ''
        }
      } else if (this.$route.path === '/profile-user') {
        return {
          text: 'Тренировки',
          link: ''
        }
      } else if (this.$route.path === '/send-message') {
        return {
          text: 'Занятия',
          link: ''
        }
      } else if (this.$route.path === '/coach-now') {
        return {
          text: 'Профиль',
          link: ''
        }
      } else if (this.$route.path === '/cash-now') {
        return {
          text: 'Профиль',
          link: ''
        }
      } else if (this.$route.path === '/cart') {
        return {
          text: 'Список товаров',
          link: ''
        }
      } else if (this.$route.path === '/shop-item') {
        return {
          text: 'Список товаров',
          link: ''
        }
      } else if (this.$route.path === '/profile-user-info') {
        return {
          text: 'Профиль',
          link: 'profile'
        }
      } else {
        return ''
      }
    },
    ...mapState({
      authorizated: state => state.auth.authorizated
    }),
    ...mapGetters(['USER_INFO'])
  }
}
</script>
