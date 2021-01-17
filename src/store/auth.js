import firebase from 'firebase/app'
import {setItem} from '@/helpers/persistanceStorage'

export default {
  state: {
    token: '',
    isSubmitting: false,
    validationErrors: null,
    statusPopUp: false,
    authorizated: false
  },
  mutations: {
    saveToken(state, token) {
      state.token = token
    },
    authStart(state) {
      state.isSubmitting = true
    },
    authEnd(state) {
      state.isSubmitting = false
    },
    validationErrors(state, payload) {
      state.validationErrors = payload
    },
    changeStatusPopUp(state) {
      state.statusPopUp = !state.statusPopUp
    },
    authorizated(state) {
      state.authorizated = true
    }
  },
  actions: {
    async login({dispatch, commit}, {email, password}) {
      try {
        commit('authStart')
        await firebase
          .auth()
          .signInWithEmailAndPassword(email, password)
          .then(resp => {
            console.log(resp)
            commit('authEnd')
            commit('changeStatusPopUp')
            commit('authorizated')
          })
          .catch(e => {
            commit('authEnd')
            commit('validationErrors', e)
          })
        await firebase
          .auth()
          .currentUser.getIdToken(true)
          .then(function(idToken) {
            commit('saveToken', idToken)
            setItem('accesToken', idToken)
          })
      } catch (e) {}
    }
  }
}
