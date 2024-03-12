import { NewUser, Template } from "../types";
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
    const {data} = await axiosInstance.get('/users/auth');
    return data
  }catch(err){
    return err;
  }
}

export const uploadTemplate = async (template: Template) => {
  try{
    const {data} = await axiosInstance.post('/template/create', template);
    return data;
  }catch(err){
    return err;
  }
}

export const getAllTemplates = async () => {
  try{
    const {data} = await axiosInstance.get('/template/');
    return data;
  }catch(err){
    return err;
  }
}

export const getTemplate = async (id: string) => {
  try{
    const {data} = await axiosInstance.get(`/template/${id}?type=single`);
    return data;
  }catch(err){
    return err; 
  }
}