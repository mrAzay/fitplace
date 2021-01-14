import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Training from '../views/Training.vue'
import SearchCoach from '../views/Search-coach.vue'

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
    path: '/vebinar',
    name: 'Vebinar',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Vebinar.vue')
  },
  {
    path: '/fitness-courses',
    name: 'FitnessCourses',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/FitnessCourses.vue')
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
    component: () => import(/* webpackChunkName: "about" */ '../views/Profile.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
