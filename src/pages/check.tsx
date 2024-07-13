import { Footer, Navbar, cart } from '..';
import { useQuery } from '@tanstack/react-query';
import { productUrl, sleep } from '../index';
import { useContext } from 'react';
import ProductContext from '../context/singleProd';
import CartContext from '../context/cart';

export default function Checkout() {
   let { productState } = useContext<any>(ProductContext);
   let { filter } = useContext(CartContext);

   let URL = productUrl(productState);

   const { isSuccess, isError, isPending, data, refetch } = useQuery({
      queryFn: async () => {
         const A = await fetch('/api/' + URL);
         const B = await A.json();
         return B;
      },
      queryKey: ['check'],
   });

   if (isPending) {
      return (
         <section className='w-full flex justify-center my-10'>
            <i className='material-icons text-3xl text-center animate-spin'>renew</i>
         </section>
      );
   }

   if (isSuccess) console.log(data);

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
      <section className='flex flex-col items-center w-full h-screen'>
         <section className='w-full relative'>
            <Navbar remove={true} />
         </section>
         <div className='h-[3px] bg-green-950 sm:w-[90%] w-full text-transparent my-10 '>.</div>
         <section className='flex sm:flex-row flex-col items-center w-[95%] mx-auto sm:w-[80%]'>
            <section className='w-full flex justify-start'>
               <img src={`https://api.timbu.cloud/images/${data.photos[0].url}`} className='object-cover w-[85%]' alt='product_img' />
            </section>
            <section className='flex flex-col items-center sm:w-3/5 mx-auto w-[95%] mt-3 sm:mt-10 h-full justify-between'>
               <div className='flex flex-col items-start justify-start w-full gap-5'>
                  <p className='text-start font-sora text-base font-semibold text-green-700'>Newest items</p>
                  <p className='text-start font-sora text-3xl font-semibold'>{data && data.name}</p>
                  <p className='font-sora text-xs text-start text-stone-600'>
                     Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla esse tempora illum saepe odit quaerat aspernatur quasi!
                     Vel fugiat natus suscipit esse iure provident magnam eveniet voluptas pariatur beatae error, architecto dolorem ducimus
                     nihil. Atque quaerat, explicabo sapiente dolores natus facere officiis provident, nulla, enim delectus quibusdam amet
                     ipsam consectetur?
                  </p>
                  <div className='flex flex-col items-start w-full'>
                     <p className='text-start font-sora font-semibold'>Select size</p>
                     <div className='grid grid-cols-3 gap-5 w-4/5'>
                        <div className='border-2 border-green-200 p-3 text-center font-sora shadow rounded-lg'>1xl</div>
                        <div className='border-2 border-green-200 p-3 text-center font-sora shadow rounded-lg'>2xl</div>
                        <div className='border-2 border-green-200 p-3 text-center font-sora shadow rounded-lg'>3xl</div>
                        <div className='border-2 border-green-200 p-3 text-center font-sora shadow rounded-lg'>4xl</div>
                        <div className='border-2 border-green-200 p-3 text-center font-sora shadow rounded-lg'>5xl</div>
                        <div className='border-2 border-green-200 p-3 text-center font-sora shadow rounded-lg'>6xl</div>
                     </div>
                  </div>
                  <div className='flex flex-row items-center w-full gap-10'>
                     <button
                        onClick={() => filter(data.id)}
                        className='bg-deepGreen-0 py-2 px-4 text-center self-start gap-2 rounded-xl justify-center shadow flex flex-row items-center'
                     >
                        <img src={cart} className='object-cover w-[15%]' alt='cart' />
                        <span className='font-sora text-white text-sm'>Add to cart</span>
                     </button>
                     <p className='font-sora text-green-800 text-3xl self-start'>{'N' + data.current_price}</p>
                  </div>
               </div>
            </section>
         </section>
         <Footer style='bg-white' />
      </section>
   );
}
