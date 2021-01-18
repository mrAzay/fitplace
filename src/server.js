import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://back.fit-place.com/app/'
})

export default instance
