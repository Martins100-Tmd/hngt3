import { useState, useEffect, useContext } from 'react';
import { cart } from '..';
import CartContext from '../context/cart';
import { useNavigate } from 'react-router-dom';

export default function CartProxy() {
   let { cartState } = useContext(CartContext);
   let [state, setstate] = useState({
      cartCount: 0,
      location: '',
   });

   useEffect(() => {
      setstate((prev) => ({ ...prev, cartCount: cartState.length }));
   }, [cartState]);

   let navigate = useNavigate();
   return (
      <section
         onClick={() => navigate('/cart')}
         id='mani'
         className={`flex justify-center p-3 z-50 fixed right-[3%] bottom-[5%] sm:bottom-[10%] sm:right-[6%] cursor-pointer sm:h-[50px] sm:w-[50px] h-[50px] w-[50px] shadow-2 xl shadow-orange-500/5 rounded-full bg-orange-500`}
      >
         <img src={cart} className='object-cover w-[100%]' />
         <span className='text-xl font-semibold text-stone-950 text-start absolute top-0 right-[5%]'>{state.cartCount}</span>
      </section>
   );
}
