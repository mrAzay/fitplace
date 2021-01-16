import axios from 'axios'

const instance = axios.create({
  baseURL: '/app/'
})

export default instance
