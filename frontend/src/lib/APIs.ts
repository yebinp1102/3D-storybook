import { NewUser } from "../types";
import axiosInstance from "../utils/axios";


// 회원가입
export const createUserAccount = async(user: NewUser) => {
  try{
    const res = await axiosInstance.post('/users/register', user);
    if(res.status !== 200) throw Error;
    return res.status
  }catch(err){
    return err;
  }
}

// 로그인
export const signInAccount = async(user: {email:string, password: string}) => {
  try{
    const res = await axiosInstance.post('/users/login', user);
    if(res.status !== 200) throw Error;
    localStorage.setItem('accessToken', res.data.accessToken);
    return res.status;
  }catch(err){
    return err;
  }
}

// token을 통해 유저 정보 get
export const getCurrentUser = async () => {
  try{
    const res = await axiosInstance.get('/users/auth');
    return res.data
  }catch(err){
    return err;
  }
}