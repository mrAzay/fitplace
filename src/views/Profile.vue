<template>
  <div class="container grid">
    <ProfileBlock></ProfileBlock>
    <Paraments></Paraments>
  </div>
</template>

<script>
import ProfileBlock from '@/components/ProfileBlock'
import Paraments from '@/components/Paraments'
export default {
  name: 'Profile',
  components: {
    ProfileBlock,
    Paraments
  }
}
</script>
