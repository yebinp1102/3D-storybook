import { createContext, useContext, useState } from "react"
import { TemplateItem, User } from "../types"
import { getCurrentUser } from "../lib/APIs"
import { useFetchCartItems } from "../lib/queriesAndMutations"

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
  checkAuthUser: async () => false as boolean,
  cartDetails: [],
  setCartDetails: () => {}
}

type ContextType = {
  user: User;
  isLoading: boolean;
  setUser: React.Dispatch<React.SetStateAction<User>>;
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  checkAuthUser: () => Promise<boolean>;
  cartDetails: TemplateItem[],
  setCartDetails: React.Dispatch<React.SetStateAction<TemplateItem[]>>
}


const AuthContext = createContext<ContextType>(INITIAL_STATE);

const AuthProvider = ({children}: {children: React.ReactNode}) => {
  const [user, setUser] = useState<User>(INITIAL_USER);
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [cartDetails, setCartDetails] = useState<TemplateItem[]>([]);
  const { mutateAsync: fetchCartItems } = useFetchCartItems();

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

        // user.cart 상세 get
        if(currentUser.cart.length > 0){
          const ids:string[] = []
          currentUser.cart.forEach((id: {id: string}) => {
            ids.push(id.id)
          })
          const cartItems = await fetchCartItems(ids);
          setCartDetails(cartItems)
        }

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

  const value = {user, setUser, isLoading, isAuthenticated, setIsAuthenticated, checkAuthUser, cartDetails, setCartDetails}

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;

export const useUserContext = () => useContext(AuthContext);