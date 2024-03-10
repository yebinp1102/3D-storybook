import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.PROD ? '' : 'http://localhost:3000'
})


axiosInstance.interceptors.request.use(function (config) {
  // 요청할 때마다 헤더에 토큰 정보 함께 보냄
  config.headers.Authorization = `Bearer ${localStorage.getItem('accessToken')}`
  return config;
}, function (err){
  return Promise.reject(err);
})

export default axiosInstance;