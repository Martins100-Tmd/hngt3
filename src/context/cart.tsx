import { ReactNode, createContext, useState } from 'react';

const CartContext = createContext<any>(undefined as any);

interface CartProviderProps {
   children: ReactNode;
}

export const CartProvider = ({ children }: CartProviderProps) => {
   const [cartState, setCartState] = useState(['c266a53a58eb4a548d9bec0907d7ed88']);
   const filter = (id: string) => {
      setCartState(Array.from(new Set([...cartState, id])));
   };

   return <CartContext.Provider value={{ cartState, setCartState, filter }}>{children}</CartContext.Provider>;
};

export default CartContext;
