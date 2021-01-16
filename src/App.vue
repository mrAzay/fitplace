<template>
  <div id="app">
    <TopNav></TopNav>
    <RightNav></RightNav>
    <router-view/>
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
  data () {
    return {
      locations: []
    }
  }
}
</script>

<style lang="scss"></style>
