import axios from '@/api/axios'

export const getCategoryCards = token => {
  return axios.get('/videolibrary/cards', {
    headers: {
      Authorization: token,
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    }
  })
}

export const getCourse = (token, categoryID) => {
  return axios.get(`/videolibrary/cards/${categoryID}`, {
    headers: {
      Authorization: token,
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    }
  })
}
