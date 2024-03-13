import {
  useQuery, // use for fetch data
  useMutation,
  useQueryClient, // use for modifiying data
} from '@tanstack/react-query'
import { NewUser, PaymentType, Template } from '../types'
import { addToCart, createUserAccount, deleteFromCart, fetchCartItems, getAllTemplates, getTemplate, payment, signInAccount, uploadTemplate } from './APIs'

// react-query를 사용하는 이유 : fetching, mutation 데이터를 단순화하기 위해서 

// 회원가입 (새로운 계정 생성)
export const useCreateUserAccountMutation = () => {
  return useMutation({
    mutationFn: (user: NewUser) => createUserAccount(user),
  })
}

// login
export const useSignInAccount = () => {
  return useMutation({
    mutationFn: (user: {email: string, password: string}) => signInAccount(user),
  })
}


// template upload (create)
export const useUploadNewTemplate = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (template: Template) => uploadTemplate(template),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['GET_ALL_TEMPLATES']
      })
    }
  })
}

// get all templates from DB
export const useGetAllTemplates = () => {
  return useQuery({
    queryFn: getAllTemplates,
    queryKey: ['GET_ALL_TEMPLATES']
  })
}

// get a template by id
export const useGetTemplate = (id: string) => {
  return useQuery({
    queryFn: () => getTemplate(id),
    queryKey: ['GET_TEMPLATE', id]
  })
}

export const useAddToCart = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => addToCart(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['ADD_TO_CART']
      }),
      queryClient.invalidateQueries({
        queryKey: ['FETCH_CART_ITEMS']
      })
    }
  })
}

export const useFetchCartItems = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (cartItemsId: string[]) => fetchCartItems(cartItemsId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['FETCH_CART_ITEMS']
      })
    }
  })
}

export const useDeleteFromCart = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => deleteFromCart(id), 
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['FETCH_CART_ITEMS']
      })
    }
  })
}

export const usePayment = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (body:PaymentType) => payment(body),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['FETCH_CART_ITEMS']
      }),
      queryClient.invalidateQueries({
        queryKey: ['GET_ALL_TEMPLATES']
      }),
      queryClient.invalidateQueries({
        queryKey: ['GET_TEMPLATE']
      })
    }
  })
}