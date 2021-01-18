import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/scss/style.scss'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: 'AIzaSyDWKNaKsJJ9c5NeHFvbAdOuMFb4dV7rJrc',
  authDomain: 'fitplace-289115.firebaseapp.com',
  databaseURL: 'https://fitplace-289115.firebaseio.com',
  projectId: 'fitplace-289115',
  storageBucket: 'fitplace-289115.appspot.com',
  messagingSenderId: '321678494291',
  appId: '1:321678494291:web:20d45c3ee5119471d354a6',
  measurementId: 'G-V29B8FGDRQ'
})

let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
