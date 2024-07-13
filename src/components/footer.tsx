import { Link } from 'react-router-dom';
import { IG, Logo, V1, V10, V11, V12, V2, V3, V4, V5, V6, V7, V8, V9, X, YT } from '..';

export default function footer({ style }: { style: string }) {
   return (
      <>
         <section
            className={`${style} flex flex-col items-center sm:w-2/5 w-[90%] mt-10 z-40 border border-[#004403] mx-auto sm:-mb-[3.2%] -mb-[15%] bg-[#CCE7D0] sm:p-14 py-12 px-5 gap-3 shadow rounded-xl`}
         >
            <p className='font-sora sm:text-base text-xs font-medium text-center'>
               Subscribe to our newsletter and never miss a New
               <br className='sm:flex hidden' /> products and good offers
            </p>
            <div className='flex flex-row items-stretch w-full shadow'>
               <input
                  type='text'
                  className='font-san3 text-sm border rounded-l-lg border-[#004403] sm:py-3 p-2 sm:px-4 w-4/5'
                  placeholder='christian45gupme@gmail.com'
               />
               <button
                  type='button'
                  className='bg-[#004403] sm:px-10 p-2 sm:w-1/4 w-[30%] text-sm font-thin text-white font-sora rounded-r-lg'
               >
                  Suscribe
               </button>
            </div>
         </section>
         <footer className='w-full bg-[#016134] sm:p-20 flex justify-center py-20 px-6'>
            <section className='flex sm:flex-row flex-col items-start gap-24 justify-between sm:w-[80%] mx-auto w-[95%] h-full'>
               <div className='flex flex-col items-start gap-4 w-full'>
                  <Link to={'/'}>
                     <img src={Logo} className='object-cover w-[30%] -mb-[2%]' alt='logo' />
                  </Link>
                  <p className='font-sora text-base text-start text-white'>soundPrince</p>
                  <div className='flex flex-row items-center gap-3'>
                     <img
                        src={IG}
                        className='object-cover w-[15%]'
                        onClick={() => (window.location.href = 'https://instagram.com')}
                        alt='logo'
                     />
                     <img src={X} className='object-cover w-[15%]' onClick={() => (window.location.href = 'https://x.com')} alt='logo' />
                     <img
                        src={YT}
                        className='object-cover w-[15%]'
                        onClick={() => (window.location.href = 'https://youtube.com')}
                        alt='logo'
                     />
                  </div>
               </div>
               <div className='flex flex-col items-start gap-4 self-start w-full'>
                  <div className='flex flex-row items-start gap-2'>
                     <img src={V1} className='object-cover w-[8%]' alt='iconImg' />
                     <p className='font-sora text-sm font-thin text-white'>Suggestions</p>
                  </div>
                  <div className='flex flex-row items-start gap-2'>
                     <img src={V2} className='object-cover w-[8%]' alt='iconImg' />
                     <p className='font-sora text-sm font-thin text-white'>Blog Post</p>
                  </div>
                  <div className='flex flex-row items-start gap-2'>
                     <img src={V3} className='object-cover w-[8%]' alt='iconImg' />
                     <p className='font-sora text-sm font-thin text-white'>About Us</p>
                  </div>
                  <div className='flex flex-row items-start gap-2'>
                     <img src={V4} className='object-cover w-[8%]' alt='iconImg' />
                     <p className='font-sora text-sm font-thin text-white'>Our location</p>
                  </div>
               </div>
               <div className='flex flex-col items-start gap-4 w-full'>
                  <div className='flex flex-row items-start gap-2'>
                     <img src={V5} className='object-cover w-[8%]' alt='iconImg' />
                     <p className='font-sora text-sm font-thin text-white'>Terms and condition</p>
                  </div>
                  <div className='flex flex-row items-start gap-2'>
                     <img src={V6} className='object-cover w-[8%]' alt='iconImg' />
                     <p className='font-sora text-sm font-thin text-white'>Privacy and policy</p>
                  </div>
                  <div className='flex flex-row items-start gap-2'>
                     <img src={V7} className='object-cover w-[8%]' alt='iconImg' />
                     <p className='font-sora text-sm font-thin text-white'>Delivery Information</p>
                  </div>
                  <div className='flex flex-row items-start gap-2'>
                     <img src={V8} className='object-cover w-[8%]' alt='iconImg' />
                     <p className='font-sora text-sm font-thin text-white'>Company Reviews</p>
                  </div>
               </div>
               <div className='flex flex-col items-start gap-4 w-full'>
                  <div className='flex flex-row items-start gap-2'>
                     <img src={V9} className='object-cover w-[8%]' alt='iconImg' />
                     <p className='font-sora text-sm font-thin text-white'>FAQs</p>
                  </div>
                  <div className='flex flex-row items-start gap-2'>
                     <img src={V10} className='object-cover w-[8%]' alt='iconImg' />
                     <p className='font-sora text-sm font-thin text-white'>
                        <Link to={'/'}>About Us</Link>
                     </p>
                  </div>
                  <div className='flex flex-row items-start gap-2'>
                     <img src={V11} className='object-cover w-[8%]' alt='iconImg' />
                     <p className='font-sora text-sm font-thin text-white'>
                        <Link to={'/contact'}>Contact Us</Link>
                     </p>
                  </div>
                  <div className='flex flex-row items-start gap-2'>
                     <img src={V12} className='object-cover w-[8%]' alt='iconImg' />
                     <p className='font-sora text-sm font-thin text-white'>Pricing</p>
                  </div>
               </div>
            </section>
         </footer>
      </>
   );
}
