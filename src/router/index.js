import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Training from '../views/Training.vue'
import SearchCoach from '../views/Search-coach.vue'
import ProfileCoach from '../views/Profile-coach.vue'
import ProfileUser from '../views/Profile-user.vue'
import SendMessage from '../views/Send-message.vue'
import CouchTraining from '../views/Couch-training.vue'
import Upstatus from '../views/Upstatus.vue'
import CoachNow from '../views/Coach-now.vue'
import CashNow from '../views/Cash-now.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/category',
    name: 'Сategory',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Сategory.vue')
  },
  {
    path: '/videocourses',
    name: 'Videocourses',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Videocourses.vue')
  },
  {
    path: '/training',
    name: 'Training',
    component: Training
  },
  {
    path: '/search-coach',
    name: 'Search',
    component: SearchCoach
  },
  {
    path: '/profile-coach',
    name: 'Profile Coach',
    component: ProfileCoach
  },
  {
    path: '/profile-user',
    name: 'Profile User',
    component: ProfileUser
  },
  {
    path: '/send-message',
    name: 'Send Message',
    component: SendMessage
  },
  {
    path: '/couch-training',
    name: 'Couch Training',
    component: CouchTraining
  },
  {
    path: '/upstatus',
    name: 'Upstatus',
    component: Upstatus
  },
  {
    path: '/coach-now',
    name: 'CoachNow',
    component: CoachNow
  },
  {
    path: '/cash-now',
    name: 'CashNow',
    component: CashNow
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
