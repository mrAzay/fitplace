<template>
  <section class="search-coach">
    <div class="container">
      <div class="search-coach__wrapper">
        <div class="search-coach__header">
          <h2 class="search-coach__header-title">Поиск тренера</h2>
          <label
            ><input
              type="text"
              class="search-coach__header-input"
              placeholder="Что вы хотите найти?"
              v-model="searchInput"
          /></label>
        </div>
        <div class="search-coach__filter">
          <img
            src="../assets/img/filter-icon.svg"
            @click.prevent=""
            class="search-coach__filter-button"
          />
          <nav class="filter__items">
            <a
              href="#"
              class="filter__items-item"
              :class="item.id == itemActive ? 'filter-active' : ''"
              @click.prevent="itemActive = item.id"
              v-for="item in filters"
              :key="item.id"
              >{{ item.name }}</a
            >
          </nav>
        </div>
        <div class="search-coach__content">
          <router-link
            class="coach__block"
            v-for="item in 24"
            :key="item"
            :to="{name: 'Profile Coach'}"
          >
            <img src="../assets/img/coach-img.png" alt="" />
            <span class="coach__block-info">
              <span class="coach__block-info-name">Кэни Вест</span>
              <span class="coach__block-info-text">
                <span>Рейтинг: <b>5.0</b></span>
                <span>Стаж работы <b>10 лет</b></span>
              </span>
            </span>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SearchCoach',
  data: () => ({
    searchInput: '',
    itemActive: 1,
    filters: [
      {
        id: 1,
        name: 'Нутрициолог'
      },
      {
        id: 2,
        name: 'Фитнес'
      },
      {
        id: 3,
        name: 'Йога'
      },
      {
        id: 4,
        name: 'Бодибилдинг'
      },
      {
        id: 5,
        name: 'Воркаут'
      },
      {
        id: 6,
        name: 'Тай-бо'
      }
    ]
  })
}
</script>

<style scoped lang="scss">
.coach__block span {
  display: block;
}

.search-coach {
  &__wrapper {
    display: flex;
    flex-direction: column;
  }
  &__header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 24px;
    &-title {
      font-family: Montserrat;
      font-style: normal;
      font-weight: bold;
      font-size: 24px;
      line-height: 29px;
      color: #000000;
    }
    label {
      position: relative;
    }
    label::before {
      content: '';
      background: url('../assets/img/search-icon.svg');
      position: absolute;
      width: 20px;
      height: 20px;
      top: 10px;
      left: 16px;
      z-index: 2;
    }
    &-input {
      padding: 12px 44px;
      max-width: 352px;
      width: 100%;
      background: #ffffff;
      border: 1px solid rgba(0, 0, 0, 0.08);
      box-sizing: border-box;
      border-radius: 8px;
      position: relative;
      &:focus {
        color: black;
      }
    }
  }
  &__filter {
    width: 100%;
    display: flex;
    align-items: center;
    background: #ffffff;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.15);
    border-radius: 12px;
    margin-bottom: 40px;
    &-button {
      display: block;
      width: fit-content;
      height: auto;
      padding: 12px 20px;
      border-right: 1px solid rgba(0, 0, 0, 0.08);
    }
    .filter__items {
      padding: 12px;
      display: flex;
      &-item {
        font-family: Montserrat;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 17px;
        color: #000000;
        margin-left: 20px;
        &.filter-active {
          font-weight: 600;
        }
      }
    }
  }
  &__content {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .coach__block {
      display: flex;
      flex: 1 1 30%;
      max-width: 352px;
      padding: 20px 16px 30px 20px;
      background: #ffffff;
      box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.15);
      border-radius: 12px;
      margin-bottom: 24px;
      img {
        width: 46px;
        height: 46px;
        object-fit: cover;
        border-radius: 50%;
      }
      &-info {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-left: 12px;
        &-name {
          font-family: Montserrat;
          font-style: normal;
          font-weight: 600;
          font-size: 14px;
          line-height: 17px;
          color: #000000;
        }
        &-text {
          display: flex;
          span {
            font-family: Montserrat;
            font-style: normal;
            font-weight: normal;
            font-size: 14px;
            line-height: 17px;
            color: #000000;
            b {
              font-weight: 600;
            }
          }
          span + span {
            margin-left: 16px;
          }
        }
      }
    }
  }
}
</style>
