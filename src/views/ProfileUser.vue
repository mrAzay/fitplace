<template>
  <div class="profile-user">
    <div class="container grid-container">
      <ProfileBlock class="profile"></ProfileBlock>

      <Paraments class="parametr"></Paraments>

      <Data class="data"></Data>

      <Time class="mode"></Time>

      <Info class="activiti"></Info>

      <UserAbout class="health"></UserAbout>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.profile-user {
  padding-bottom: 70px;
}
.block {
  max-width: none;
}
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 191px 274px;
  gap: 24px 32px;
  grid-template-areas:
    'profile data mode'
    'profile data activiti'
    'parametr health health';
}

.profile {
  grid-area: profile;
}

.data {
  grid-area: data;
}

.mode {
  grid-area: mode;
}

.activiti {
  grid-area: activiti;
}

.health {
  grid-area: health;
}

.parametr {
  grid-area: parametr;
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
