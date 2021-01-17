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
</style>
