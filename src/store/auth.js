import firebase from 'firebase/app'

export default {
  state: {
    token: ''
  },
  mutations: {
    saveToken (state, token) {
      state.token = token
    }
  },
  actions: {
    async login ({ dispatch, commit }, { email, password }) {
      try {
        await firebase.auth().signInWithEmailAndPassword(email, password)
          .then((resp) => {
            console.log(resp)
          })
        await firebase.auth().currentUser.getIdToken(true)
          .then(function (idToken) {
            commit('saveToken', idToken)
          })
      } catch (e) {
      }
    }
  }
}
