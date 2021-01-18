import axios from '@/api/axios'

const getCards = token => {
  return axios.get('/users/main_screen/cards', {
    Authorization: token
  })
}

export default getCards
