import { ReactNode, createContext, useState, useEffect } from 'react';

export const ProductContext = createContext<any>(undefined as any);

interface ProductProviderProps {
   children: ReactNode;
}

export const ProductProvider = ({ children }: ProductProviderProps) => {
   const [productState, setProductState] = useState('c266a53a58eb4a548d9bec0907d7ed88');

   useEffect(() => {
      console.log(productState);
   }, [productState]);

   return <ProductContext.Provider value={{ productState, setProductState }}>{children}</ProductContext.Provider>;
};

export default ProductContext;
