import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Training from '../views/Training.vue'
import ProfileCoach from '../views/Profile-coach.vue'
import ProfileUser from '../views/Profile-user.vue'
import SendMessage from '../views/Send-message.vue'
import CouchTraining from '../views/Couch-training.vue'
import Upstatus from '../views/Upstatus.vue'
import CoachNow from '../views/Coach-now.vue'
import CashNow from '../views/Cash-now.vue'
import SearchCoach from '../views/SearchCoach.vue'

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
    component: () => import('../views/Сategory.vue')
  },
  {
    path: '/videocourses/:id',
    name: 'Videocourses',
    props: true,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/Videocourses.vue')
  },
  {
    path: '/vebinar',
    name: 'Vebinar',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/Vebinar.vue')
  },
  {
    path: '/fitness-courses',
    name: 'FitnessCourses',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/FitnessCourses.vue')
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
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/Profile.vue')
  },
  {
    path: '/aboniments',
    name: 'Aboniments',
    component: () => import('../views/Aboniments.vue')
  },
  {
    path: '/profile-user-info',
    name: 'ProfileUser',
    component: () => import('../views/ProfileUser.vue')
  },
  {
    path: '/profile-trainer',
    name: 'ProfileTrainer',
    component: () => import('../views/ProfileTrainer.vue')
  },
  {
    path: '/shop',
    name: 'Shop',
    component: () => import('../views/Shop.vue')
  },
  {
    path: '/shop-item',
    name: 'ShopItem',
    component: () => import('../views/ShopItem.vue')
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('../views/Cart.vue')
  },
  {
    path: '/chat',
    name: 'Chat',
    component: () => import('../views/Chat.vue')
  },
  {
    path: '/training-schedule',
    name: 'TrainingSchedule',
    component: () => import('../views/TrainingSchedule.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
