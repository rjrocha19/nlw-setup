import axios from 'axios'

export const api = axios.create({
  baseURL: 'gs://nlwstup.appspot.com'
})