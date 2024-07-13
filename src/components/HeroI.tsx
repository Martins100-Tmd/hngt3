import { Card } from '..';
import { useState, useContext, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { url, sleep } from '../index';
import PageContext from '../context/pages';

export default function HeroI() {
   let { PageState, setPageState } = useContext(PageContext);
   let [state, setstate] = useState({
      count: 3,
      style: 1,
      page: PageState,
      size: 10,
   });
   const fetchAll = (page = 1) => fetch('/api/' + url(page, 10)).then((res) => res.json());
   const { isSuccess, isError, isPending, data, refetch } = useQuery({
      queryFn: () => fetchAll(PageState),
      queryKey: ['products', PageState],
   });

   useEffect(() => {
      refetch();
   }, [state.page]);

   if (isPending) {
      return (
         <section className='w-full flex justify-center my-10'>
            <i className='material-icons text-3xl text-center animate-spin'>renew</i>
         </section>
      );
   }

   if (isSuccess) {
      console.log(data, data.size);
   }

   if (isError) {
      async function load() {
         for (let i = 0; i < 3; i++) {
            if (isSuccess || isPending) break;
            await sleep(2000);
            refetch();
         }
      }
      load();
   }

   return (
      <section className='flex flex-col items-center w-full mt-24'>
         <section className='flex flex-row gap-3 items-center sm:w-2/5 mx-auto w-4/5'>
            <p
               id='shop'
               onClick={() => setstate((prev) => ({ ...prev, count: 3, style: 1 }))}
               className={`font-sora sm:text-xl text-lg cursor-pointer text-center w-full font-semibold ${
                  state.style ? 'text-[#004403] underline' : ''
               }`}
            >
               Special Offers
            </p>
            <p
               onClick={() => setstate((prev) => ({ ...prev, count: 18, style: 0 }))}
               className={`font-sora text-sm cursor-pointer text-center w-full font-semibold text-stone-600 ${
                  !state.style ? 'text-[#004403] underline' : ''
               }`}
            >
               All products
            </p>
         </section>
         <section className='grid sm:grid-cols-3 grid-cols-1 gap-8 items-center w-full mt-4 sm:w-[90%] mx-auto'>
            {isSuccess && data
               ? data.items.map((item: any, index: number) => {
                    return (
                       <div className='w-full' key={index}>
                          <Card
                             name={item.name}
                             image={`https://api.timbu.cloud/images/${item.photos[0].url}`}
                             unique_id={item.unique_id}
                             price={'N' + item.current_price[0].NGN[0]}
                             available_quantity={item.available_quantity}
                             id={item.id}
                          />
                       </div>
                    );
                 })
               : ''}
         </section>
         <section className='w-[90%] justify-end flex mx-auto mt-7 sm:mt-10'>
            <div className='flex flex-row items-center w-[70%] sm:w-[30%] self-end justify-center gap-3 sm:gap-6'>
               <i onClick={() => setPageState(1)} className='material-icons text-4xl text-stone-800'>
                  skip_previous
               </i>
               <p
                  onClick={() => setPageState(1)}
                  className='font-sora text-base font-semibold border-2 border-stone-400 sm:py-3 py-2 px-4 sm:px-7 rounded-xl'
               >
                  1
               </p>
               <p
                  onClick={() => setPageState(2)}
                  className='font-sora text-base font-semibold border-2 border-stone-400 sm:py-3 py-2 px-4 sm:px-7 rounded-xl'
               >
                  2
               </p>
               <p
                  onClick={() => setPageState(3)}
                  className='font-sora text-base font-semibold border-2 border-stone-400 sm:py-3 py-2 px-4 sm:px-7 rounded-xl'
               >
                  3
               </p>
               <i onClick={() => setPageState(3)} className='material-icons text-4xl text-stone-800'>
                  skip_next
               </i>
            </div>
         </section>
      </section>
   );
}
