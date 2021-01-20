<template>
  <div class="profile-trainer">
    <div class="container">
      <div class="profile-trainer__inner grid">
        <div class="trainer block">
          <img src="@/assets/img/video.jpg" alt="" class="trainer__img" />
          <div class="trainer__info">
            <div class="trainer__acc">
              <img
                src="@/assets/img/avatar.jpg"
                alt=""
                class="trainer__acc-img"
              />
              <div class="trainer__acc-wrap">
                <div class="trainer__acc-info">
                  <div class="trainer__acc-info-name block-title">
                    Арсений Головин
                  </div>
                  <div class="trainer__acc-info-desc">г. Москва, 30 лет</div>
                </div>
                <div class="trainer__acc-desc">
                  <div class="trainer__acc-desc-item">
                    <div class="trainer__acc-desc-value block-title">5.0</div>
                    <div class="trainer__acc-desc-name block-text">Рейтинг</div>
                  </div>
                  <div class="trainer__acc-desc-item">
                    <div class="trainer__acc-desc-value block-title">
                      10 лет
                    </div>
                    <div class="trainer__acc-desc-name block-text">
                      Стаж работы
                    </div>
                  </div>
                </div>
              </div>
              <div class="trainer__acc-pro">
                pro
              </div>
            </div>
            <div class="trainer__use">
              <div class="trainer__use-item">ТАЙБО</div>
              <div class="trainer__use-item">КАРДИО</div>
              <div class="trainer__use-item">КАЛЛАНЕТИКА</div>
              <div class="trainer__use-item">БОДИБИЛДИНГ</div>
              <div class="trainer__use-item">АРМРЕСТЛИНГ</div>
            </div>
            <div class="trainer__desc">
              <div class="trainer__desc-title block-title">
                Описание тренера
              </div>
              <div class="trainer__desc-value block-text">
                Добрый день! Меня зовут Арсений. У меня большой опыт
                персонального составления плана тренировок и питания,
                составление программ тренировки и питания дистанционно(стаж с
                2010 года), подготовка профессиональных атлетов к спортивному
                сезону(баскетбол, хоккей, регби, многоборье, силовые виды).
              </div>
            </div>
            <div class="trainer__opit">
              <div class="trainer__opit-title block-title">Опыт работы</div>
              <div class="trainer__opit-value block-text">
                Фитнес-клуб World Class, 2005-2015
              </div>
            </div>
            <a href="#" class="trainer__button button">Сообщение</a>
            <a href="#" class="trainer__button trainer__button-white button"
              >Расписание тренера</a
            >
          </div>
        </div>
        <div class="column">
          <div class="review block">
            <div class="review__item" v-for="(item, index) of 6" :key="index">
              <router-link :to="{name: 'Profile User'}"
                ><img
                  class="review__item-img"
                  alt=""
                  src="@/assets/img/avatar.jpg"
              /></router-link>
              <div class="review__item-info">
                <div class="review__item-info-title">
                  <router-link class="block-title" :to="{name: 'Profile User'}"
                    >Пётр Свиридов</router-link
                  >
                  <div class="review__item-info-star">
                    <svg
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7.72352 13.4218L4.82723 15.0116C4.09625 15.4128 3.22417 14.7958 3.35927 13.9729L3.91082 10.6136C3.93154 10.4896 3.92343 10.3621 3.88721 10.2422C3.851 10.1223 3.78778 10.0138 3.70311 9.92615L1.37068 7.5512C0.799023 6.96911 1.12741 5.98432 1.93402 5.86184L5.16345 5.37145C5.27037 5.3542 5.37178 5.30952 5.459 5.24125C5.54622 5.17297 5.61665 5.08313 5.66425 4.97941L7.11354 1.91324C7.47449 1.14961 8.56102 1.14972 8.92181 1.91343L10.3702 4.97941C10.4178 5.08313 10.4883 5.17297 10.5755 5.24125C10.6627 5.30952 10.7641 5.3542 10.871 5.37145L14.0998 5.86088C14.9065 5.98318 15.2351 6.96811 14.6634 7.55028L12.3314 9.92479C12.2464 10.0125 12.183 10.1213 12.1468 10.2414C12.1106 10.3615 12.1026 10.4894 12.1237 10.6136L12.6752 13.9729C12.8103 14.7958 11.9382 15.4128 11.2073 15.0116L8.31097 13.4218C8.22014 13.3718 8.11943 13.3457 8.01724 13.3457C7.91505 13.3457 7.81434 13.3718 7.72352 13.4218Z"
                        fill="#FFF000"
                      />
                    </svg>
                    <svg
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7.72352 13.4218L4.82723 15.0116C4.09625 15.4128 3.22417 14.7958 3.35927 13.9729L3.91082 10.6136C3.93154 10.4896 3.92343 10.3621 3.88721 10.2422C3.851 10.1223 3.78778 10.0138 3.70311 9.92615L1.37068 7.5512C0.799023 6.96911 1.12741 5.98432 1.93402 5.86184L5.16345 5.37145C5.27037 5.3542 5.37178 5.30952 5.459 5.24125C5.54622 5.17297 5.61665 5.08313 5.66425 4.97941L7.11354 1.91324C7.47449 1.14961 8.56102 1.14972 8.92181 1.91343L10.3702 4.97941C10.4178 5.08313 10.4883 5.17297 10.5755 5.24125C10.6627 5.30952 10.7641 5.3542 10.871 5.37145L14.0998 5.86088C14.9065 5.98318 15.2351 6.96811 14.6634 7.55028L12.3314 9.92479C12.2464 10.0125 12.183 10.1213 12.1468 10.2414C12.1106 10.3615 12.1026 10.4894 12.1237 10.6136L12.6752 13.9729C12.8103 14.7958 11.9382 15.4128 11.2073 15.0116L8.31097 13.4218C8.22014 13.3718 8.11943 13.3457 8.01724 13.3457C7.91505 13.3457 7.81434 13.3718 7.72352 13.4218Z"
                        fill="#FFF000"
                      />
                    </svg>
                    <svg
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7.72352 13.4218L4.82723 15.0116C4.09625 15.4128 3.22417 14.7958 3.35927 13.9729L3.91082 10.6136C3.93154 10.4896 3.92343 10.3621 3.88721 10.2422C3.851 10.1223 3.78778 10.0138 3.70311 9.92615L1.37068 7.5512C0.799023 6.96911 1.12741 5.98432 1.93402 5.86184L5.16345 5.37145C5.27037 5.3542 5.37178 5.30952 5.459 5.24125C5.54622 5.17297 5.61665 5.08313 5.66425 4.97941L7.11354 1.91324C7.47449 1.14961 8.56102 1.14972 8.92181 1.91343L10.3702 4.97941C10.4178 5.08313 10.4883 5.17297 10.5755 5.24125C10.6627 5.30952 10.7641 5.3542 10.871 5.37145L14.0998 5.86088C14.9065 5.98318 15.2351 6.96811 14.6634 7.55028L12.3314 9.92479C12.2464 10.0125 12.183 10.1213 12.1468 10.2414C12.1106 10.3615 12.1026 10.4894 12.1237 10.6136L12.6752 13.9729C12.8103 14.7958 11.9382 15.4128 11.2073 15.0116L8.31097 13.4218C8.22014 13.3718 8.11943 13.3457 8.01724 13.3457C7.91505 13.3457 7.81434 13.3718 7.72352 13.4218Z"
                        fill="#FFF000"
                      />
                    </svg>
                    <svg
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7.72352 13.4218L4.82723 15.0116C4.09625 15.4128 3.22417 14.7958 3.35927 13.9729L3.91082 10.6136C3.93154 10.4896 3.92343 10.3621 3.88721 10.2422C3.851 10.1223 3.78778 10.0138 3.70311 9.92615L1.37068 7.5512C0.799023 6.96911 1.12741 5.98432 1.93402 5.86184L5.16345 5.37145C5.27037 5.3542 5.37178 5.30952 5.459 5.24125C5.54622 5.17297 5.61665 5.08313 5.66425 4.97941L7.11354 1.91324C7.47449 1.14961 8.56102 1.14972 8.92181 1.91343L10.3702 4.97941C10.4178 5.08313 10.4883 5.17297 10.5755 5.24125C10.6627 5.30952 10.7641 5.3542 10.871 5.37145L14.0998 5.86088C14.9065 5.98318 15.2351 6.96811 14.6634 7.55028L12.3314 9.92479C12.2464 10.0125 12.183 10.1213 12.1468 10.2414C12.1106 10.3615 12.1026 10.4894 12.1237 10.6136L12.6752 13.9729C12.8103 14.7958 11.9382 15.4128 11.2073 15.0116L8.31097 13.4218C8.22014 13.3718 8.11943 13.3457 8.01724 13.3457C7.91505 13.3457 7.81434 13.3718 7.72352 13.4218Z"
                        fill="#FFF000"
                      />
                    </svg>
                    <svg
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7.72352 13.4218L4.82723 15.0116C4.09625 15.4128 3.22417 14.7958 3.35927 13.9729L3.91082 10.6136C3.93154 10.4896 3.92343 10.3621 3.88721 10.2422C3.851 10.1223 3.78778 10.0138 3.70311 9.92615L1.37068 7.5512C0.799023 6.96911 1.12741 5.98432 1.93402 5.86184L5.16345 5.37145C5.27037 5.3542 5.37178 5.30952 5.459 5.24125C5.54622 5.17297 5.61665 5.08313 5.66425 4.97941L7.11354 1.91324C7.47449 1.14961 8.56102 1.14972 8.92181 1.91343L10.3702 4.97941C10.4178 5.08313 10.4883 5.17297 10.5755 5.24125C10.6627 5.30952 10.7641 5.3542 10.871 5.37145L14.0998 5.86088C14.9065 5.98318 15.2351 6.96811 14.6634 7.55028L12.3314 9.92479C12.2464 10.0125 12.183 10.1213 12.1468 10.2414C12.1106 10.3615 12.1026 10.4894 12.1237 10.6136L12.6752 13.9729C12.8103 14.7958 11.9382 15.4128 11.2073 15.0116L8.31097 13.4218C8.22014 13.3718 8.11943 13.3457 8.01724 13.3457C7.91505 13.3457 7.81434 13.3718 7.72352 13.4218Z"
                        fill="#FFF000"
                      />
                    </svg>
                  </div>
                </div>
                <div class="review__item-info-text block-text">
                  Мне всё очень понравилось, тренер замечательный, эффективные
                  тренировки, купил весь курс.
                </div>
                <div class="review__item-info-date">25.05.2020</div>
              </div>
            </div>
          </div>
          <div class="push block">
            <div class="push__title block-title">Отзыв</div>
            <textarea
              class="push__textarea"
              placeholder="Напишите отзыв"
            ></textarea>
            <div class="push__stars">
              <div class="push__star">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11.5604 20.1327L6.33109 23.0092C5.60025 23.4112 4.72742 22.7945 4.86228 21.9714L5.85361 15.9204C5.88462 15.7344 5.87249 15.5431 5.81828 15.3633C5.76407 15.1835 5.66945 15.0207 5.54272 14.8892L1.36682 10.628C0.79624 10.0458 1.12466 9.06213 1.9306 8.93949L7.72852 8.05717C7.88856 8.0313 8.04035 7.96429 8.1709 7.86187C8.30144 7.75946 8.40686 7.62469 8.47811 7.46912L11.0963 1.91812C11.4569 1.15348 12.5448 1.1536 12.9052 1.91831L15.5219 7.46912C15.5931 7.62469 15.6986 7.75946 15.8291 7.86187C15.9597 7.96429 16.1114 8.0313 16.2715 8.05717L22.0687 8.93785C22.8748 9.06031 23.2034 10.0441 22.6327 10.6264L18.4573 14.8872C18.3301 15.0188 18.2352 15.1819 18.181 15.3621C18.1268 15.5423 18.1149 15.7341 18.1464 15.9204L19.1377 21.9714C19.2726 22.7945 18.3998 23.4112 17.6689 23.0092L12.4396 20.1327C12.3037 20.0577 12.153 20.0185 12 20.0185C11.847 20.0185 11.6963 20.0577 11.5604 20.1327Z"
                    fill="#E0E0E0"
                  />
                </svg>
              </div>
              <div class="push__star">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11.5604 20.1327L6.33109 23.0092C5.60025 23.4112 4.72742 22.7945 4.86228 21.9714L5.85361 15.9204C5.88462 15.7344 5.87249 15.5431 5.81828 15.3633C5.76407 15.1835 5.66945 15.0207 5.54272 14.8892L1.36682 10.628C0.79624 10.0458 1.12466 9.06213 1.9306 8.93949L7.72852 8.05717C7.88856 8.0313 8.04035 7.96429 8.1709 7.86187C8.30144 7.75946 8.40686 7.62469 8.47811 7.46912L11.0963 1.91812C11.4569 1.15348 12.5448 1.1536 12.9052 1.91831L15.5219 7.46912C15.5931 7.62469 15.6986 7.75946 15.8291 7.86187C15.9597 7.96429 16.1114 8.0313 16.2715 8.05717L22.0687 8.93785C22.8748 9.06031 23.2034 10.0441 22.6327 10.6264L18.4573 14.8872C18.3301 15.0188 18.2352 15.1819 18.181 15.3621C18.1268 15.5423 18.1149 15.7341 18.1464 15.9204L19.1377 21.9714C19.2726 22.7945 18.3998 23.4112 17.6689 23.0092L12.4396 20.1327C12.3037 20.0577 12.153 20.0185 12 20.0185C11.847 20.0185 11.6963 20.0577 11.5604 20.1327Z"
                    fill="#E0E0E0"
                  />
                </svg>
              </div>
              <div class="push__star">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11.5604 20.1327L6.33109 23.0092C5.60025 23.4112 4.72742 22.7945 4.86228 21.9714L5.85361 15.9204C5.88462 15.7344 5.87249 15.5431 5.81828 15.3633C5.76407 15.1835 5.66945 15.0207 5.54272 14.8892L1.36682 10.628C0.79624 10.0458 1.12466 9.06213 1.9306 8.93949L7.72852 8.05717C7.88856 8.0313 8.04035 7.96429 8.1709 7.86187C8.30144 7.75946 8.40686 7.62469 8.47811 7.46912L11.0963 1.91812C11.4569 1.15348 12.5448 1.1536 12.9052 1.91831L15.5219 7.46912C15.5931 7.62469 15.6986 7.75946 15.8291 7.86187C15.9597 7.96429 16.1114 8.0313 16.2715 8.05717L22.0687 8.93785C22.8748 9.06031 23.2034 10.0441 22.6327 10.6264L18.4573 14.8872C18.3301 15.0188 18.2352 15.1819 18.181 15.3621C18.1268 15.5423 18.1149 15.7341 18.1464 15.9204L19.1377 21.9714C19.2726 22.7945 18.3998 23.4112 17.6689 23.0092L12.4396 20.1327C12.3037 20.0577 12.153 20.0185 12 20.0185C11.847 20.0185 11.6963 20.0577 11.5604 20.1327Z"
                    fill="#E0E0E0"
                  />
                </svg>
              </div>
              <div class="push__star">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11.5604 20.1327L6.33109 23.0092C5.60025 23.4112 4.72742 22.7945 4.86228 21.9714L5.85361 15.9204C5.88462 15.7344 5.87249 15.5431 5.81828 15.3633C5.76407 15.1835 5.66945 15.0207 5.54272 14.8892L1.36682 10.628C0.79624 10.0458 1.12466 9.06213 1.9306 8.93949L7.72852 8.05717C7.88856 8.0313 8.04035 7.96429 8.1709 7.86187C8.30144 7.75946 8.40686 7.62469 8.47811 7.46912L11.0963 1.91812C11.4569 1.15348 12.5448 1.1536 12.9052 1.91831L15.5219 7.46912C15.5931 7.62469 15.6986 7.75946 15.8291 7.86187C15.9597 7.96429 16.1114 8.0313 16.2715 8.05717L22.0687 8.93785C22.8748 9.06031 23.2034 10.0441 22.6327 10.6264L18.4573 14.8872C18.3301 15.0188 18.2352 15.1819 18.181 15.3621C18.1268 15.5423 18.1149 15.7341 18.1464 15.9204L19.1377 21.9714C19.2726 22.7945 18.3998 23.4112 17.6689 23.0092L12.4396 20.1327C12.3037 20.0577 12.153 20.0185 12 20.0185C11.847 20.0185 11.6963 20.0577 11.5604 20.1327Z"
                    fill="#E0E0E0"
                  />
                </svg>
              </div>
              <div class="push__star">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11.5604 20.1327L6.33109 23.0092C5.60025 23.4112 4.72742 22.7945 4.86228 21.9714L5.85361 15.9204C5.88462 15.7344 5.87249 15.5431 5.81828 15.3633C5.76407 15.1835 5.66945 15.0207 5.54272 14.8892L1.36682 10.628C0.79624 10.0458 1.12466 9.06213 1.9306 8.93949L7.72852 8.05717C7.88856 8.0313 8.04035 7.96429 8.1709 7.86187C8.30144 7.75946 8.40686 7.62469 8.47811 7.46912L11.0963 1.91812C11.4569 1.15348 12.5448 1.1536 12.9052 1.91831L15.5219 7.46912C15.5931 7.62469 15.6986 7.75946 15.8291 7.86187C15.9597 7.96429 16.1114 8.0313 16.2715 8.05717L22.0687 8.93785C22.8748 9.06031 23.2034 10.0441 22.6327 10.6264L18.4573 14.8872C18.3301 15.0188 18.2352 15.1819 18.181 15.3621C18.1268 15.5423 18.1149 15.7341 18.1464 15.9204L19.1377 21.9714C19.2726 22.7945 18.3998 23.4112 17.6689 23.0092L12.4396 20.1327C12.3037 20.0577 12.153 20.0185 12 20.0185C11.847 20.0185 11.6963 20.0577 11.5604 20.1327Z"
                    fill="#E0E0E0"
                  />
                </svg>
              </div>
            </div>
            <button class="push__button button">Оставить отзыв</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.profile-trainer {
  .column {
    flex: 0 0 calc(50% - 30px);
  }
  .trainer {
    padding: 0;
    overflow: hidden;
    flex: 0 0 calc(50% - 30px);
    max-width: unset;

    &__img {
      width: 100%;
    }

    &__info {
      padding: 20px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      &-name {
        margin-bottom: 12px;
      }
    }

    &__acc {
      width: 100%;
      display: flex;
      margin-bottom: 24px;
      align-items: flex-start;

      &-img {
        width: 56px;
        height: 56px;
        margin-right: 16px;
      }

      &-pro {
        margin-left: auto;
        font-weight: bold;
        font-size: 14px;
        line-height: 17px;
        background: #ffef00;
        border-radius: 16px;
        padding: 7px 17px;
      }

      &-desc {
        display: flex;

        &-item {
          margin-right: 48px;
        }
      }

      &-info {
        margin-bottom: 20px;

        &-name {
          margin-bottom: 12px;
        }
      }
    }

    &__use {
      padding: 20px 0 20px;
      margin-bottom: 20px;
      border-top: 1px solid rgba(0, 0, 0, 0.08);
      border-bottom: 1px solid rgba(0, 0, 0, 0.08);
      display: flex;
      align-items: center;
      overflow: auto;
      -ms-overflow-style: none;
      overflow: -moz-scrollbars-none;

      &::-webkit-scrollbar {
        width: 0;
      }

      &-item {
        font-weight: 600;
        font-size: 12px;
        line-height: 15px;
        padding: 10px 20px;
        border: 1px solid rgba(0, 0, 0, 0.08);
        border-radius: 22px;
        margin-right: 8px;
        word-break: keep-all;
      }
    }

    &__desc {
      padding-bottom: 20px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.08);
      margin-bottom: 20px;

      &-title {
        margin-bottom: 12px;
      }
    }

    &__opit {
      width: 100%;
      margin-bottom: 10px;

      &-title {
        margin-bottom: 12px;
      }
    }

    &__button {
      display: block;
      flex: 0 0 calc(50% - 5px);
      padding: 13px 0;
      width: 100%;

      &-white {
        background-color: #fff;
      }
    }
  }

  .review {
    max-height: 561px;
    overflow: auto;
    margin-bottom: 20px;
    &__item {
      display: flex;
      align-items: flex-start;

      & + .review__item {
        margin-top: 20px;
        padding-top: 20px;
        border-top: 1px solid rgba(0, 0, 0, 0.08);
      }

      &-img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin-right: 16px;
      }

      &-info {
        &-title {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 12px;
        }

        &-text {
          margin-bottom: 16px;
        }

        &-date {
          color: rgba(0, 0, 0, 0.64);
          font-size: 12px;
          line-height: 15px;
        }
      }
    }
  }

  .push {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-between;

    &__title {
      margin-bottom: 16px;
      width: 100%;
    }

    &__textarea {
      width: 100%;
      height: 127px;
      margin-bottom: 16px;
    }

    &__stars {
      flex: 0 0 calc(50% - 5px);
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid rgba(0, 0, 0, 0.08);
      border-radius: 8px;
      padding: 10px 0;
    }

    &__star {
      cursor: pointer;
      & + .push__star {
        margin-left: 6px;
      }
    }

    &__button {
      padding: 13px 0px;
      text-align: center;
      flex: 0 0 calc(50% - 5px);
    }
  }
}

@media (max-width: 991px) {
  .profile-trainer__inner {
    flex-direction: column;
    justify-content: center;

    .column {
      float: 0 0 100%;
    }

    .trainer {
      flex: 0 0 100%;
    }
  }

  .profile-trainer .review,
  .profile-trainer .push {
    max-width: unset;
  }

  .profile-trainer .review {
    margin-top: 20px;
  }
}
</style>

<script>
export default {
  name: 'ProfileTrainer'
}
</script>
