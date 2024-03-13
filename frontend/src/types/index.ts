export type NewUser = {
  name: string;
  email: string;
  password: string;
}

export type User = {
  id: string;
  name: string;
  email: string;
  isAdmin: boolean,
  cart: CartItem[],
  order: OrderItem[],
}

export type ContextType = {
  user: User;
  isLoading: boolean;
  setUser: React.Dispatch<React.SetStateAction<boolean>>;
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  checkAuthUser: () => Promise<boolean>;
}

export type CartItem = {
  id: string;
  price: number;
  image: string;
  title: string;
}

export type OrderItem = {
  id: string;
  productId: string;
  productTitle: string;
}

export type OrderInfo = {
  name: string;
  phone: string;
  email: string;
}

export type Template = {
  title: string;
  description: string;
  price: number;
  images: any;
}

export type TemplateItem = {
  _id: string;
  title: string;
  description: string;
  price: number;
  views: number;
  images: [string];
}

export type PaymentType = {
  total: number;
  name: string;
  phone: string;
  email: string;
  cart: TemplateItem[],
}