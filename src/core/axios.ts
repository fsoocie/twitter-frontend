import axios from 'axios'

axios.interceptors.request.use((config) => {
  console.log(config)
  config.headers['token'] = window.localStorage.getItem('token')
  return config
})

export { axios }
