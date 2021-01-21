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
import firebase from 'firebase/app'
import {mapState} from 'vuex'

export default {
  name: 'App',
  data() {
    return {
      locations: []
    }
  },
  components: {
    TopNav,
    RightNav
  },
  created() {
    const vm = this
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        const userInfo = {
          uid: user.uid,
          token: user.ya
        }
        vm.$store.dispatch('logInToken', userInfo)
        vm.$store.dispatch('GET_USER_INFO')
        vm.$store.dispatch('GET_CARDS')
        vm.$store.dispatch('GET_STORIES')
      } else {
        vm.$router.push({name: 'Home'})
        console.log(vm.$store.state)
        vm.$store.state.auth.statusPopUp = true
      }
    })
  },
  mounted() {
    if (this.token) {
      this.GET_STORIES()
      this.GET_CARDS()
      this.GET_USER_INFO()
    }
  },
  computed: {
    ...mapState({
      token: (state) => state.auth.token
    })
  }
  // eslint-disable-next-line space-before-function-paren
}
</script>

<style lang="scss">
*,
*:before,
*:after {
  box-sizing: border-box;
}

body {
  position: relative;
}

ul,
li,
h1,
h2,
h3,
h4,
h5,
p,
strong {
  margin: 0;
  padding: 0;
}

li {
  list-style: none;
  list-style-type: none;
}

#app {
  position: relative;
}

button,
input,
textarea {
  appearance: none;
  border-radius: 0;
  border: none;
  background: none;
  padding: 0;
}

button:disabled {
  cursor: not-allowed;
}

.container {
  padding: 0 100px 0 calc(100px - 66px) !important;
}

.d-flex-column {
  display: flex;
  flex-direction: column;
}

.modal__btn-close {
  width: 14px;
  height: 14px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  transition: 0.2s transform;

  span {
    width: inherit;
    height: 2px;
    background-color: #000;
    margin: -1px;
  }

  span:first-child {
    transform: rotate(-45deg);
  }

  span:last-child {
    transform: rotate(45deg);
  }

  &:hover,
  &:focus {
    transform: rotate(90deg);
  }
}

@media (max-width: 991px) {
  .container {
    padding: 0 40px 100px !important;
  }
}
</style>
