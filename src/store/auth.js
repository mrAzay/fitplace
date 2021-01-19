import firebase from 'firebase/app'
import {setItem} from '@/helpers/persistanceStorage'
import {authWithToken} from '@/api/auth'

export default {
  state: {
    token: '',
    isSubmitting: false,
    validationErrors: null,
    statusPopUp: false,
    authorizated: false,
    uid: ''
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
    },
    saveUId(state, uid) {
      state.uid = uid
    }
  },
  actions: {
    async login({dispatch, commit}, {email, password}) {
      try {
        commit('authStart')
        await firebase
          .auth()
          .signInWithEmailAndPassword(email, password)
          .then((resp) => {
            console.log(resp)
            commit('authEnd')
            commit('changeStatusPopUp')
            commit('authorizated')
          })
          .catch((e) => {
            commit('authEnd')
            commit('validationErrors', e)
          })
        await firebase
          .auth()
          .currentUser.getIdToken(true)
          .then(function (idToken) {
            commit('saveToken', idToken)
            setItem('accesToken', idToken)
          })
        await firebase.auth().onAuthStateChanged(function (user) {
          if (user) {
            commit('saveUId', user.uid)
          }
        })
      } catch (e) {}
    },

    auth(context, token) {
      return new Promise((resolve) => {
        authWithToken(token)
          .then((res) => {
            resolve(res)
          })
          .catch(() => {
            context.commit('changeStatusPopUp')
          })
      })
    },

    // authPhone(context, phoneNumber, appVerifier) {
    //   return new Promise((resolve) => {
    //     context.commit('authStart')
    //     firebase
    //       .auth()
    //       .verifyPhoneNumber(phoneNumber)
    //       .then((confirmationResult) => {
    //         window.confirmationResult = confirmationResult
    //         context.commit('authEnd')
    //         context.commit('changeStatusPopUp')
    //         context.commit('authorizated')
    //         resolve(confirmationResult)
    //       })
    //       .catch((error) => {
    //         context.commit('authEnd')
    //         context.commit('validationErrors', error)
    //       })
    //   })
    // }

    authPhone(context, phoneNumber, appVerifier) {
      return new Promise((resolve) => {
        context.commit('authStart')
        firebase
          .auth()
          .verifyPhoneNumber(phoneNumber)
          .then((confirmationResult) => {
            window.confirmationResult = confirmationResult
            context.commit('authEnd')
            context.commit('changeStatusPopUp')
            context.commit('authorizated')
            resolve(confirmationResult)
          })
          .catch((error) => {
            context.commit('authEnd')
            context.commit('validationErrors', error)
          })
      })
    }
  }
}
