<template>
  <div class="profile-user">
    <div class="container">
      <div class="grid">
        <div class="column">
          <ProfileBlock></ProfileBlock>
          <Paraments></Paraments>
        </div>
        <div class="column">
          <Data></Data>
          <Time></Time>
        </div>
        <div class="column">
          <Info></Info>
          <UserAbout></UserAbout>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .column {
    width: 100%;
    max-width: 352px;
  }

  .grid{
    margin: -20px;
  }

</style>

<script>
import ProfileBlock from '../components/ProfileBlock'
import Paraments from '../components/Paraments'
import Data from '../components/Data'
import Time from '../components/Time'
import Info from '../components/Info'
import UserAbout from '../components/UserAbout'

export default {
  name: 'ProfileUser',
  components: {
    UserAbout,
    Info,
    Time,
    Data,
    Paraments,
    ProfileBlock
  }
}
</script>
