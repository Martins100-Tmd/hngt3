import { useContext } from 'react';
import { Star } from '..';
import { Link } from 'react-router-dom';
import ProductContext from '../context/singleProd';
import CartContext from '../context/cart';
// type Img = {
//    photos: Array<{ url: string }>;
// };
export interface cardI {
   name: string;
   unique_id: string;
   available_quantity: number;
   image: string;
   price: string;
   id: string;
}
export default function Card({ name, unique_id, available_quantity, image, price, id }: cardI) {
   let { setProductState } = useContext(ProductContext);
   let { filter } = useContext(CartContext);

   return (
      <section className='flex flex-col items-center w-[95%] mx-auto p-3 rounded-xl gap-4' id='mani'>
         <div className='w-full flex justify-start'>
            <p className='font-sora text-sm font-semibold rounded shadow text-green-950 p-2 bg-green-300'>Newest sales</p>
         </div>
         <img src={image} className='object-cover w-full h-[150px]' alt='spek_img' />
         <p className='font-sora text-sm text-center w-full font-semibold'>{name}</p>
         <p className='font-sora text-sm text-center w-full font-semibold'>SP APPLIANCES</p>
         <p className='font-sora text-lg text-center w-full font-semibold'>{price}</p>
         <p className='font-sora text-sm text-center w-full font-semibold'>
            3yrs guarantee/ {unique_id}/ {available_quantity}
         </p>
         <div className='flex flex-row items-center gap-1 sm:w-2/5 w-[55%] mx-auto justify-between'>
            <img src={Star} className='object-cover w-[8%]' alt='star_img' />
            <img src={Star} className='object-cover w-[8%]' alt='star_img' />
            <img src={Star} className='object-cover w-[8%]' alt='star_img' />
            <img src={Star} className='object-cover w-[8%]' alt='star_img' />
            <img src={Star} className='object-cover w-[8%]' alt='star_img' />
            <img src={Star} className='object-cover w-[8%]' alt='star_img' />
         </div>
         <div className='flex flex-row items-center w-4/5 mx-auto justify-between gap-1'>
            <button
               onClick={() => setProductState(id)}
               className='rounded shadow w-full font-sora text-base text-white sm:py-3 sm:px-2 p-2 bg-[#004403]'
            >
               <Link to={'/check'}>View product</Link>
            </button>
            <button
               onClick={() => filter(id)}
               className='rounded shadow w-full font-sora text-base text-white sm:py-3 sm:px-2 p-2 bg-Orange-0'
            >
               Add to cart
            </button>
         </div>
      </section>
   );
}
