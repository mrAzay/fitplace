<template>
  <div class="container grid-container">
    <ProfileBlock></ProfileBlock>
    <Paraments class="paraments"></Paraments>
    <Balance class="balance"></Balance>
    <History class="history"></History>
    <Aboniment class="aboniment"></Aboniment>
  </div>
</template>

<style scoped lang="scss">
  .block{
    max-width: none;
  }
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 191px 274px;
  gap: 24px 32px;
  grid-template-areas:
    'profile balance aboniment'
    'profile history aboniment'
    'paraments history aboniment';
  padding-bottom: 30px !important;
}

.profile {
  grid-area: profile;
}

.paraments {
  grid-area: paraments;
}

.balance {
  grid-area: balance;
}

.history {
  grid-area: history;
}

.aboniment {
  grid-area: aboniment;
}

.column {
  max-width: 352px;
  width: 100%;
}
@media (max-width: 1220px) {
  .grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 191px 264px auto 240px;
    gap: 30px 20px;
    grid-template-areas:
      'profile paraments'
      'profile balance'
      'aboniment aboniment'
      'history history';
  }
  .block {
    max-width: none;
    margin: 0;
  }
}

@media (max-width: 991px) {
  .grid-container {
    padding-bottom: 80px !important;
  }
}
</style>

<script>
import ProfileBlock from '@/components/ProfileBlock'
import Paraments from '@/components/Paraments'
import Balance from '../components/Balance'
import History from '../components/Historu'
import Aboniment from '../components/Aboniment'
import {mapActions} from 'vuex'

export default {
  name: 'Profile',
  components: {
    Aboniment,
    History,
    Balance,
    ProfileBlock,
    Paraments
  },
  methods: {
    ...mapActions(['GET_USER_INFO'])
  },
  mounted() {
    this.GET_USER_INFO()
  }
}
</script>
