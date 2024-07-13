import { useContext, useEffect, useState } from 'react';
import { Footer, Navbar, fetchData } from '..';
import CartContext from '../context/cart';
import { useQueries } from '@tanstack/react-query';

export default function ShoppingCart() {
   let { cartState } = useContext(CartContext);
   let [count, setCount] = useState(2);
   let [total, settotal] = useState(0);

   //let { amount, setamount } = useContext(AmountContext);
   let [obj, setobj] = useState<any>({});

   const [hours, setHours] = useState(23);
   const [minutes, setMinutes] = useState(59);
   const [seconds, setSeconds] = useState(59);
   const [cart, setcart] = useState({ a: 0 });

   const queries = cartState.map((id: string) => ({
      queryKey: ['data', id],
      queryFn: () => fetchData(id),
   }));

   useEffect(() => {
      setobj({});
      settotal(Object.values(cart).reduce((acc, value) => acc + value, 0));
      console.log(total);
   }, [cart]);

   const results = useQueries({ queries });

   useEffect(() => {
      var countDownDate = new Date('Jan 5, 2030 15:37:25').getTime();

      // Update the count down every 1 second
      var x = setInterval(function () {
         // Get today's date and time
         var now = new Date().getTime();

         // Find the distance between now and the count down date
         var distance = countDownDate - now;

         // Time calculations for days, hours, minutes and seconds
         //  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
         var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
         var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
         var seconds = Math.floor((distance % (1000 * 60)) / 1000);
         setHours(hours);
         setMinutes(minutes);
         setSeconds(seconds);
         // If the count down is over, write some text
         if (distance < 0) {
            clearInterval(x);
         }
      }, 1000);
   }, [hours, seconds]);

   const formattedHours = String(hours).padStart(2, '0');
   const formattedMinutes = String(minutes).padStart(2, '0');

   return (
      <section className='flex flex-col items-center h-screen'>
         <section className='w-full relative'>
            <Navbar remove={true} />
         </section>
         <section className='grid grid-cols-1 sm:grid-cols-2 sm:w-[85%] w-[98%] mx-auto gap-4 mt-10'>
            <section className='flex flex-col items-start w-full shadow sm:p-2 p-1 sm:max-h-[400px] overflow-scroll'>
               <p className='text-start font-semibold text-2xl text-stone-800 font-sora mb-2'>Order</p>
               <section className='flex flex-col items-center w-full p-4 rounded gap-5' id='mani'>
                  {results.map((item: any) => {
                     if (item.isPending) {
                        return (
                           <section className='w-full flex justify-center my-10'>
                              <i className='material-icons text-3xl text-center animate-spin'>renew</i>
                           </section>
                        );
                     }
                     if (item.isSuccess) {
                        obj[item.data.id] = { count: 0, amount: 0 };
                        let data: any = item.data;
                        return (
                           <div className='flex overflow-scroll flex-row sm:gap-2 gap-4 items-center w-full justify-between border-b pb-3'>
                              <section className='w-full flex flex-col items-start justify-start'>
                                 <img
                                    src={`https://api.timbu.cloud/images/${data.photos[0].url}`}
                                    className='object-cover rounded sm:w-[75%] min-w-[120px] sm:h-[130px] h-[80px]'
                                    alt='product_img'
                                 />
                                 <p className='font-sora text-start font-medium text-xs'>{data.name}</p>
                              </section>
                              <section className='flex flex-row gap-5 justify-center w-full'>
                                 <p className='font-sora text-green-800 sm:text-base text-sm self-start'>{'N' + data.current_price}</p>
                                 <p className='font-sora text-green-800 sm:text-base text-sm line-through self-start'>
                                    {'N' + (data.current_price - 3000)}
                                 </p>
                              </section>
                              <section className='flex flex-row items-center gap-2'>
                                 <p className='font-sora text-xs font-semibold text-stone-400'>Quantity:</p>
                                 <div className='flex flex-row items-center border border-green-300 rounded'>
                                    <i
                                       data-id={data.id}
                                       onClick={() => {
                                          setCount(count + 1);
                                          setcart((prev) => ({ ...prev, [data.id]: count * data.current_price }));
                                       }}
                                       className='material-icons text-2xl cursor-pointer text-green-950 py-2 px-3 text-center self-stretch border-r border-green-300'
                                    >
                                       add
                                    </i>
                                    <p data-id={data.id} className='font-sora px-5 text-sm self-center text-center font-semibold'>
                                       {count - 2 == 0 ? 1 : count - 2}
                                    </p>
                                    <i
                                       data-id={data.id}
                                       onClick={() => {
                                          setCount(count > 1 ? count - 1 : count);
                                       }}
                                       className='material-icons text-2xl cursor-pointer text-green-950 py-2 px-3 text-center self-stretch border-l border-green-300'
                                    >
                                       remove
                                    </i>
                                 </div>
                              </section>
                           </div>
                        );
                     }
                  })}
               </section>
            </section>
            <section className='flex flex-col items-start w-full'>
               <p className='text-start font-semibold text-lg sm:text-2xl text-stone-800 font-sora mb-2'>Payment Summary</p>
               <section className='flex flex-col items-center w-full rounded-lg p-3 gap-5' id='mani'>
                  <p className='text-stone-700 sm:text-lg text-sm bg-stone-200 p-3 text-center font-semibold w-[80%] mx-auto font-sora'>
                     UNREGISTERED ACCOUNT
                  </p>
                  <div className='flex flex-row items-center w-full justify-between'>
                     <p className='font-sora text-sm text-stone-400'>Transaction code</p>
                     <p className='font-sora text-sm text-stone-400'>VC11566S</p>
                  </div>
                  <div className='flex flex-row items-center w-full justify-between gap-3'>
                     <p className='border p-3 w-3/5 shadow font-sora border-stone-500 rounded-md'>COUPON CODE</p>
                     <p className='border p-3 w-2/5 shadow font-bold font-sora text-center text-green-800 bg-green-300 rounded-md'>Apply</p>
                  </div>
                  <div className='w-full h-[1px] border border-dashed border-stone-400 my-5'></div>
                  <div className='flex flex-row items-center w-full justify-between'>
                     <p className='font-sora text-base text-stone-400 font-semibold'>Order Summary</p>
                     <p className='font-sora text-sm text-stone-400 font-semibold'>{'$' + total}</p>
                  </div>
                  <div className='flex flex-row items-center w-full justify-between'>
                     <p className='font-sora text-base text-stone-400 font-semibold'>Additional Service</p>
                     <p className='font-sora text-sm text-stone-400 font-semibold'>$10</p>
                  </div>
                  <div className='flex flex-row items-center w-full justify-between'>
                     <p className='font-sora text-base text-stone-400 font-semibold'>Total Amount</p>
                     <p className='font-sora text-sm text-green-700 font-semibold'>{'$' + (total + 10)}</p>
                  </div>
                  <div className='w-full h-[1px] border border-dashed border-stone-400 my-5'></div>
                  <button className='w-full bg-green-700 text-center text-white my-3 font-sora p-3 shadow'>Make Payment</button>
                  <div className='flex flex-row justify-center items-center bg-green-200 w-full p-3 shadow rounded'>
                     <p className='font-sora text-base uppercase'>SALES Expiring in: </p>
                     <p className='text-green-500 text-center font-sora ml-2 font-semibold'>
                        {formattedHours}:{formattedMinutes}
                     </p>
                  </div>
               </section>
            </section>
         </section>
         <Footer style='bg-white' />
      </section>
   );
}
