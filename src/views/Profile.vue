<template>
  <div class="container grid">
    <div class="column">
      <ProfileBlock></ProfileBlock>
      <Paraments></Paraments>
    </div>
    <div class="column">
      <Balance></Balance>
      <History></History>
    </div>
    <div class="column">
      <Aboniment></Aboniment>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .grid{
    margin: -20px auto;
  }
  .column{
    max-width: 352px;
    width: 100%;
  }
</style>

<script>
import ProfileBlock from '@/components/ProfileBlock'
import Paraments from '@/components/Paraments'
import Balance from '../components/Balance'
import History from '../components/Historu'
import Aboniment from '../components/Aboniment'

export default {
  name: 'Profile',
  components: {
    Aboniment,
    History,
    Balance,
    ProfileBlock,
    Paraments
  }
}
</script>
