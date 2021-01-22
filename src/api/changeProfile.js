import axios from '@/api/axios'

export const changeProfile = (token, uid, credentials) => {
  return axios.put(`/users/${uid}`, {
    Authorization: token,
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    ...credentials
  })
}
