import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Training from '../views/Training.vue'
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
    path: '/videocourses',
    name: 'Videocourses',
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
    path: '/profile-user',
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
