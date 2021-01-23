import axios from '@/api/axios'
import qs from 'qs'

export const changeProfile = (token, uid, credentials) => {
  return axios.put(`/users/${uid}`, qs.stringify(credentials), {
    headers: {
      Authorization: token,
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    }
  })
}
