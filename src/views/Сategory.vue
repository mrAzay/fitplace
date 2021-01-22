<template>
  <div class="category">
    <div class="container">
      <div class="category__inner">
        <h1 class="category__title title">Курсы и уроки</h1>
        <div class="category__items grid">
          <router-link
            class="category__item"
            v-for="(item, index) in categoryData['data']"
            :key="index"
            :to="/videocourses/ + item.id"
          >
            <img :src="item.preview_url.min" :alt="item.title" />
          </router-link>
        </div>
      </div>
      <div></div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.block {
  padding: 0;
  font-size: 0;
  margin-bottom: 24px;
  img {
    width: 100%;
    border-radius: 12px;
  }
}
</style>
<script>
import {mapState} from 'vuex'
export default {
  data() {
    return {
      category: ''
    }
  },
  computed: {
    ...mapState({
      categoryData: state => state.auth.dataCategory
    })
  },
  methods: {
    async getCategories() {
      const token = await this.$store.state.auth.token
      return this.$store.dispatch('getCategory', token)
    }
  },
  mounted() {
    this.getCategories()
  }
}
</script>

<style lang="scss">
.category__items {
  display: flex;
  justify-content: space-between;
  margin: 0 -10px -24px 0;
}

.category__item {
  flex: 0 0 calc(33.333% - 10px);
  margin-right: 10px;
  margin-bottom: 24px;
  border-radius: 12px;
  overflow: hidden;
  img {
    width: 100%;
    border-radius: 12px;
  }

  &:last-child {
    margin-right: auto;
  }
}

@media (max-width: 1200px) {
  .category__item {
    flex: 0 0 calc(50% - 15px);
    margin-right: 15px;
  }

  .category__items {
    margin-right: -15px;
  }
}
</style>
