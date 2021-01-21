import axios from '@/api/axios'

export const getTrainers = token => {
  return axios.get('/trainer/main_screen/cards', {
    headers: {
      Authorization: token,
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    }
  })
}
