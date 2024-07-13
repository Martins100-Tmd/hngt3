import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { ProductProvider } from './context/singleProd';
import { CartProvider } from './context/cart';
import { PageProvider } from './context/pages.tsx';
import { AmountContextProvider } from './context/amount.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
   <BrowserRouter>
      <AmountContextProvider>
         <PageProvider>
            <CartProvider>
               <ProductProvider>
                  <React.StrictMode>
                     <App />
                  </React.StrictMode>
               </ProductProvider>
            </CartProvider>
         </PageProvider>
      </AmountContextProvider>
   </BrowserRouter>
);
