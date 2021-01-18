import axios from '@/api/axios'
const authWithToken = token => {
  return axios.get('/sign_in', {
    headers: {
      Authorization: token,
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    }
  })
}

export default authWithToken
