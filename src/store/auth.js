import firebase from 'firebase/app'
import {setCookie} from '@/helpers/persistanceStorage'
import {getCategoryCards, getCourse} from '@/api/category'
import {getTrainers} from '@/api/trainers'
import {changeProfile} from '@/api/changeProfile'
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
    dataCourse: '',
    trainers: '',
    days_of_the_weeks: [],
    duration: Number,
    daytime: Number,
    workout_notification_for: Number,
    notification: null
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
    saveTrainers(state, data) {
      state.trainers = data
    },
    deleteCourse(state) {
      state.dataCourse = null
    },
    acceptDaysOfTheWeeks(state, payload) {
      state.days_of_the_weeks = payload
    },
    acceptDaytime(state, payload) {
      state.daytime = payload
    },
    acceptDuration(state, payload) {
      state.duration = payload
    },
    setNotification(state, payload) {
      state.notification = payload
    },
    setWorkoutNotification(state, payload) {
      state.workout_notification_for = payload
    }
  },
  actions: {
    logInToken: async (context, data) => {
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

    getTrainers(context, token) {
      return new Promise((resolve) => {
        getTrainers(token)
          .then((res) => {
            context.commit('saveTrainers', res)
            resolve(res)
          })
          .catch((e) => {
            console.log('trainers error', e)
          })
      })
    },

    changeProfile(context, credentials) {
      return new Promise((resolve) => {
        changeProfile(context.state.token, context.state.uid, credentials)
          .then((res) => {
            resolve(res)
          })
          .catch((e) => {
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
