import { water, HPerson } from '..';

export default function Hero() {
   return (
      <>
         <section className='w-full sm:w-[78%] z-40 sm:bg-white bg-[#CCE7D0]'>
            <div
               id='mani'
               className='flex flex-row items-center w-[90%] mx-auto sm:my-0 mb-7 sm:w-[40%] sm:mx-0 -mt-[3%]
          z-50 bg-white justify-between rounded-xl py-3 px-5'
            >
               <div className='flex flex-col items-center'>
                  <p className='font-sora font-bold text-lg sm:text-2xl text-center text-[#004403]'>2K</p>
                  <p className='font-sora sm:text-sm text-xs font-thin text-center'>Speaker Display</p>
               </div>
               <div className='flex flex-col items-center'>
                  <p className='font-sora font-bold text-lg sm:text-2xl text-center text-[#004403]'>1K</p>
                  <p className='font-sora sm:text-sm text-xs font-thin text-center'>Satisfied Customer</p>
               </div>
               <div className='flex flex-col items-center'>
                  <p className='font-sora font-bold text-lg sm:text-2xl text-center text-[#004403]'>355</p>
                  <p className='font-sora sm:text-sm text-xs font-thin text-center'>Trusted Companies</p>
               </div>
            </div>
         </section>
         <section className='w-full flex bg-[#016134] justify-center sm:mt-10 mt-0 p-5'>
            <section className='sm:flex hidden flex-row items-center justify-between sm:w-4/5 w-full overflow-scroll'>
               {[1, 2, 3, 4, 5, 6].map((item) => {
                  console.log(item);
                  return (
                     <div className='flex flex-col items-center' key={item}>
                        <img src={item % 2 == 0 ? HPerson : water} className='object-cover w-[20%]' alt='home link' />
                        <p className='font-sora text-xs sm:text-lg font-semibold sm:font-bold text-white text-center'>
                           Water
                           <br />
                           Resistance
                        </p>
                     </div>
                  );
               })}
            </section>
            <section className='flex sm:hidden flex-row items-center justify-between sm:w-4/5 w-full overflow-scroll'>
               {[1, 2].map((item) => {
                  console.log(item);
                  return (
                     <div className='flex flex-col items-center' key={item}>
                        <img src={item % 2 == 0 ? HPerson : water} className='object-cover w-[20%]' alt='home link' />
                        <p className='font-sora font-lg font-bold text-white text-center'>
                           Water
                           <br />
                           Resistance
                        </p>
                     </div>
                  );
               })}
            </section>
         </section>
      </>
   );
}
