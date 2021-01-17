/* eslint-disable space-before-function-paren */
<template>
  <div id="app">
    <TopNav></TopNav>
    <RightNav></RightNav>
    <router-view />
  </div>
</template>

<script>
import TopNav from '@/components/TopNav'
import RightNav from '@/components/RightNav'

export default {
  components: {
    TopNav,
    RightNav
  },
  // eslint-disable-next-line space-before-function-paren
  data() {
    return {
      locations: []
    }
  }
}
</script>

<style lang="scss"></style>
