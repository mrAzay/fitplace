import firebase from 'firebase/app'
import {setCookie, getCookie} from '@/helpers/persistanceStorage'
import {getCategoryCards, getCourse} from '@/api/category'
import {authWithToken} from '@/api/auth'

export default {
  state: {
    token: '',
    isSubmitting: false,
    validationErrors: null,
    statusPopUp: false,
    authorizated: false,
    uid: '',
    dataCategory: '',
    dataCourse: ''
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
    },
    saveCategoryDate(state, data) {
      state.dataCategory = data
    },
    saveCourse(state, data) {
      state.dataCourse = data
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
            setCookie('accesToken', idToken, 'yes', '/')
          })
        await firebase.auth().onAuthStateChanged(function(user) {
          if (user) {
            commit('saveUId', user.uid)
          }
        })
      } catch (e) {}
    },

    auth(context) {
      return new Promise(resolve => {
        authWithToken(getCookie('accesToken'))
          .then(res => {
            resolve(res)
          })
          .catch(() => {
            context.commit('changeStatusPopUp')
          })
      })
    },

    getCategory(context, token) {
      return new Promise(resolve => {
        getCategoryCards(token)
          .then(res => {
            context.commit('saveCategoryDate', res)
            resolve(res)
          })
          .catch(e => {
            console.log('error', e)
          })
      })
    },

    getCouese(context, ID) {
      return new Promise(resolve => {
        getCourse(context.state.token, ID)
          .then(res => {
            context.commit('saveCourse', res)
            resolve(res)
          })
          .catch(e => {
            console.log('error', e)
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
      return new Promise(resolve => {
        context.commit('authStart')
        firebase
          .auth()
          .verifyPhoneNumber(phoneNumber)
          .then(confirmationResult => {
            window.confirmationResult = confirmationResult
            context.commit('authEnd')
            context.commit('changeStatusPopUp')
            context.commit('authorizated')
            resolve(confirmationResult)
          })
          .catch(error => {
            context.commit('authEnd')
            context.commit('validationErrors', error)
          })
      })
    }
  }
}
