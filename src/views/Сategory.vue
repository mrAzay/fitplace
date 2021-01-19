<template>
  <div class="category">
    <div class="container">
      <div class="category__inner">
        <h1 class="category__title title">Курсы и уроки</h1>
        <div class="category__items grid">
          <router-link to="/videocourses" class="category__item block" v-for="(item, index) in items" :key="index">
            <img :src="require('@/assets/img/'+item.img+'.jpg')" alt="">
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .block{
    padding: 0;
    font-size: 0;
    margin-bottom: 24px;
    img{
      width: 100%;
      border-radius: 12px;
    }
  }
</style>
<script>
export default {
  data () {
    return {
      items: {
        item1: {
          img: 'category1'
        },
        item2: {
          img: 'category2'
        },
        item3: {
          img: 'category3'
        },
        item4: {
          img: 'category4'
        }
      }
    }
  }
}
</script>
