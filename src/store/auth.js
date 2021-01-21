import firebase from 'firebase/app'
import {setCookie} from '@/helpers/persistanceStorage'
import {getCategoryCards, getCourse} from '@/api/category'
// import {authWithToken} from '@/api/auth'

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
    authorizatedWithToken(state, data) {
      state.authorizated = true
      state.uid = data.uid
      state.token = data.token
    },
    saveUId(state, uid) {
      state.uid = uid
    },
    saveCategoryDate(state, data) {
      state.dataCategory = data
    },
    saveCourse(state, data) {
      state.dataCourse = data
    },
    deleteCourse(state) {
      state.dataCourse = null
    }
  },
  actions: {
    logInToken: async (context, data) => {
      console.log(data)
      context.commit('authorizatedWithToken', data)
    },
    changePopup: (context) => {
      context.commit('changeStatusPopUp')
    },
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
            setCookie('accesToken', idToken, 'yes', '/')
          })
        await firebase.auth().onAuthStateChanged(function (user) {
          if (user) {
            commit('saveUId', user.uid)
          }
        })
      } catch (e) {}
    },

    auth(context, token) {
      console.log(token)
      return new Promise((resolve) => {
        firebase
          .auth()
          .signInWithCustomToken(token)
          .then((user) => {
            // Signed in
            context.commit('changeStatusPopUp')
          })
          .catch((error) => {
            var errorCode = error.code
            var errorMessage = error.message
            console.log(errorCode, errorMessage)
            // ...
          })
      })
    },
    getCategory(context, token) {
      return new Promise((resolve) => {
        getCategoryCards(token)
          .then((res) => {
            context.commit('saveCategoryDate', res)
            resolve(res)
          })
          .catch((e) => {
            console.log('error', e)
          })
      })
    },

    getCouese(context, ID) {
      return new Promise((resolve) => {
        getCourse(context.state.token, ID)
          .then((res) => {
            context.commit('saveCourse', res)
            resolve(res)
          })
          .catch((e) => {
            console.log('error', e)
          })
      })
    },
    deleteCourse(context) {
      context.commit('deleteCourse')
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
