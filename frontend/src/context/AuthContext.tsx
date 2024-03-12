import { createContext, useContext, useEffect, useState } from "react"
import { User } from "../types"
import { getCurrentUser } from "../lib/APIs"
import { useNavigate } from "react-router-dom"

export const INITIAL_USER = {
  id: '',
  name: '',
  email: '',
  isAdmin: false,
  cart: [],
  order: [],
}

const INITIAL_STATE = {
  user: INITIAL_USER,
  isLoading: false,
  isAuthenticated: false,
  setUser : () => {},
  setIsAuthenticated: () => {},
  checkAuthUser: async () => false as boolean
}

type ContextType = {
  user: User;
  isLoading: boolean;
  setUser: React.Dispatch<React.SetStateAction<User>>;
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  checkAuthUser: () => Promise<boolean>;
}

const AuthContext = createContext<ContextType>(INITIAL_STATE);

const AuthProvider = ({children}: {children: React.ReactNode}) => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User>(INITIAL_USER);
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const checkAuthUser = async () => {
    setIsLoading(true);
    try{
      const currentUser = await getCurrentUser();
      if(currentUser.id){
        setUser({
          id: currentUser.id,
          name: currentUser.name,
          email: currentUser.email,
          isAdmin: currentUser.isAdmin,
          cart: currentUser.cart,
          order: currentUser.order,
        })
        setIsAuthenticated(true);
        return true;
      }
      return false;
    }catch(err){
      return false;
    }finally{
      setIsLoading(false);
    }
  };

  // 컴포넌트가 리렌더링 될 때마다 토큰 존재로 로그인 여부 판단. 
  // 토큰이 없으면 로그인 페이지로 라우팅
  useEffect(() => {
    const cookie = localStorage.getItem('accessToken');
    if(cookie === "[]" || cookie === null || cookie === undefined) navigate('/login');
    checkAuthUser();
  },[])


  const value = {user, setUser, isLoading, isAuthenticated, setIsAuthenticated, checkAuthUser}

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;

export const useUserContext = () => useContext(AuthContext);