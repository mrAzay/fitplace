import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import server from '@/server.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    homeStories: null,
    homeCards: null,
    products: null,
    shopStories: null,
    videocourse: null,
    users: null
  },
  getters: {
    STORIES: (state) => {
      return state.homeStories
    },
    CARDS: (state) => {
      return state.homeCards
    },
    PRODUCTS: (state) => {
      return state.products
    },
    SHOP_STORIES: (state) => {
      return state.shopStories
    },
    VIDEOCOURSE: (state) => {
      return state.videocourse
    },
    USERS: (state) => {
      return state.users
    }
  },
  mutations: {
    SET_STORIES: (state, payload) => {
      state.homeStories = payload.map((stories) => ({
        id: stories.id,
        title: stories.title,
        previewImage: stories.preview_url,
        image: stories.image_urls
      }))
    },
    SET_CARDS: (state, payload) => {
      state.homeCards = payload.map((card) => ({
        id: card.id,
        type: card.type,
        image: card.background_url
      }))
    },
    SET_SHOP_STORIES: (state, payload) => {
      state.shopStories = payload.map((stories) => ({
        id: stories.id,
        title: stories.title,
        previewImage: stories.preview_url,
        image: stories.image_urls
      }))
    },
    SET_PRODUCTS: (state, payload) => {
      state.products = payload.map((product) => ({
        id: product.id,
        stock: product.in_stock,
        price: product.price,
        description: product.description,
        title: product.title,
        image: product.image_urls
      }))
    },
    SET_VIDEOCOURSE: (state, payload) => {
      state.videocourse = payload.map((video) => ({
        id: video.id,
        image: video.preview_url
      }))
    },
    SET_USERS: (state, payload) => {
      state.users = payload.map((user) => ({
        id: user.id
      }))
    }
  },
  actions: {
    GET_STORIES: async (context) => {
      const token = context.state.auth.token
      const {data} = await server.get('users/main_screen/stories', {
        headers: {
          Authorization: token,
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        }
      })
      context.commit('SET_STORIES', data)
    },
    GET_CARDS: async (context) => {
      const token = context.state.auth.token
      const {data} = await server.get('users/main_screen/cards', {
        headers: {
          Authorization: token,
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        }
      })
      context.commit('SET_CARDS', data)
    },
    GET_SHOP_STORIES: async (context) => {
      const token = context.state.auth.token
      const {data} = await server.get('shop/stories', {
        headers: {
          Authorization: token,
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        }
      })
      context.commit('SET_SHOP_STORIES', data)
    },
    GET_PRODUCT: async (context) => {
      const token = context.state.auth.token
      const {data} = await server.get('shop/products', {
        headers: {
          Authorization: token,
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        }
      })
      context.commit('SET_PRODUCTS', data)
    },
    GET_VIDEOCOURSE: async (context) => {
      const token = context.state.auth.token
      const {data} = await server.get('videolibrary/cards', {
        headers: {
          Authorization: token,
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        }
      })
      context.commit('SET_VIDEOCOURSE', data)
    },
    GET_USERS: async (context) => {
      const token = context.state.auth.token
      const {data} = await server.get('users', {
        headers: {
          Authorization: token,
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        }
      })
      context.commit('SET_USERS', data)
    }
  },
  modules: {
    auth
  }
})
