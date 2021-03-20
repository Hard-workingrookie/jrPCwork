import axios from 'axios';
let token = 'abcwwww';
axios.interceptors.request.use((config) => {
  config.headers['X-Authorization'] = "Bearer " + token;
  return config;
});

axios.interceptors.response.use((config) => {
  switch (config.status) {
    case 200:
      return config.data;
    default:
      alert('接口请求失败')
  }
})
export default axios;