import { NewUser, PaymentType, Template } from "../types";
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
    sessionStorage.setItem('accessToken', res.data.accessToken);
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
    const res = await axiosInstance.post('/template/create', template);
    return res.status;
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
    return data[0];
  }catch(err){
    return err; 
  }
}

export const addToCart = async (id: string) => {
  try{
    const res = await axiosInstance.post(`/users/addToCart`, {id});
    if(res.status !== 200) throw Error;
    return res.status;
  }catch(err: any){
    return err?.response.data.message;
  }
}

export const fetchCartItems = async (cartItemsId: string[]) => {
  try{
    const {data} = await axiosInstance.get(`/template/${cartItemsId}?type=array`);
    return data;
  }catch(err){
    console.log(err);
    return err;
  }
}

export const deleteFromCart = async (id: string) => {
  try{
    const res = await axiosInstance.delete(`/users/deleteFromCart?id=${id}`);
    return res.status;
  }catch(err){
    return err;
  }
}

export const payment = async (body: PaymentType) => {
  try{
    const res = await axiosInstance.post(`/users/payment`, body);
    if(res.status !== 200) throw Error;
    return res.status
  }catch(err: any){
    return err?.response.data.message;
  }
}
