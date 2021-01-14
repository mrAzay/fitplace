<template>
  <div class="container grid">
    <ProfileBlock></ProfileBlock>
    <Paraments></Paraments>
    <Balance></Balance>
    <History></History>
    <Aboniment></Aboniment>
  </div>
</template>

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
