import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.PROD ? '' : 'http://localhost:3000'
})

export default axiosInstance;