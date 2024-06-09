import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://3d-storybook-api.vercel.app",
})


axiosInstance.interceptors.request.use(function (config) {
  // 요청할 때마다 헤더에 토큰 정보 함께 보냄
  config.headers.Authorization = `Bearer ${localStorage.getItem('accessToken')}`
  return config;
}, function (err){
  return Promise.reject(err);
})

// jwt 만료되면 자동 로그아웃
axiosInstance.interceptors.response.use(function (response) {
  return response;
}, function (err){
  if(err.response.data === 'jwt expired'){
    localStorage.removeItem('accessToken');
    window.location.reload();
  }
  return Promise.reject(err);
})

export default axiosInstance;