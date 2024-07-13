import React from 'react';
import Layout from './components/Layout';
import { Route, Routes } from 'react-router-dom';
import AProduct from './pages/singleProd';
import AuthPage from './pages/auth';
import Contact from './pages/contact';
import Checkout from './pages/check';
import ContactPage from './pages/cont';
import { CartProxy } from '.';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ShoppingCart from './pages/cart';
const queryClient = new QueryClient();

export default function App() {
   return (
      <React.Fragment>
         <QueryClientProvider client={queryClient}>
            <CartProxy />
            <Routes>
               <Route path='/' element={<Layout />} />
               <Route path={'/aproduct'} element={<AProduct />} />
               <Route path={'/auth'} element={<AuthPage />} />
               <Route path={'/contact'} element={<Contact />} />
               <Route path={'/check'} element={<Checkout />} />
               <Route path={'/cont'} element={<ContactPage />} />
               <Route path={'/cart'} element={<ShoppingCart />} />
            </Routes>
         </QueryClientProvider>
      </React.Fragment>
   );
}
