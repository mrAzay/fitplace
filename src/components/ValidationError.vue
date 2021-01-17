<template>
  <div>
    <ul>
      <li v-for="errorMessage in errorMessages" :key="errorMessage">
        {{ errorMessage }}
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
ul {
  padding-left: 14px;
  margin-bottom: 15px;
}

li {
  color: red;
  list-style-type: disc;
  font-size: 12px;
}
</style>

<script>
export default {
  name: 'ValidationError',
  props: {
    validationErrors: {
      type: Object,
      required: true
    }
  },
  computed: {
    errorMessages() {
      return Object.keys(this.validationErrors).map(name => {
        const messages = this.validationErrors[name]
        return `${name} ${messages}`
      })
    }
  }
}
</script>
