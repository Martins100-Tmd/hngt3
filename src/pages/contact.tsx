import { Link } from 'react-router-dom';
import { Footer, Navbar, awof } from '..';
export default function Contact() {
   return (
      <section className='flex flex-col items-center h-screen'>
         <section className='w-full relative'>
            <Navbar remove={true} />
         </section>
         <section className='sm:w-4/5 mx-auto w-[95%] flex sm:flex-row flex-col items-center gap-5 mt-10'>
            <div className='sm:w-1/2 w-full flex justify-center h-[300px] self-start'>
               <img src={awof} className='w-full object-cover' alt='img' />
            </div>
            <button className='sm:hidden flex text-center justify-center rounded-xl py-3 sm:py-3 sm:px-14 px-7 font-san3 text-base bg-[#15613f] text-white w-1/2 mt-10'>
               <Link to={'/auth'}>Sign Up</Link>
            </button>
            <div className='flex flex-col items-start sm:w-[43%] w-[90%] mx-auto gap-4 self-end'>
               <p className='font-sora text-green-800 text-start text-2xl font-semibold'>Customers Details</p>
               <div className='grid sm:grid-cols-3 grid-cols-2 gap-3 items-start w-full justify-between'>
                  <div className='flex flex-col items-start w-full'>
                     <input type='text' id='inp' className='w-full outline-none border rounded-lg p-3 border-green-800 font-sora' />
                     <label htmlFor='inp' className='font-sora text-sm text-green-700 text-start'>
                        First name
                     </label>
                  </div>
                  <div className='flex flex-col items-start w-full'>
                     <input type='text' id='inp' className='w-full outline-none border rounded-lg p-3 border-green-800 font-sora' />
                     <label htmlFor='inp' className='font-sora text-sm text-green-700 text-start'>
                        Middle name
                     </label>
                  </div>
                  <div className='flex flex-col items-start w-full'>
                     <input type='text' id='inp' className='w-full outline-none border rounded-lg p-3 border-green-800 font-sora' />
                     <label htmlFor='inp' className='font-sora text-sm text-green-700 text-start'>
                        Last name
                     </label>
                  </div>
               </div>
               <div className='flex flex-col items-start w-full justify-center'>
                  <div className='flex flex-col items-start w-full'>
                     <input type='email' id='inp' className='w-full outline-none border rounded-lg p-3 border-green-800 font-sora' />
                     <label htmlFor='inp' className='font-sora text-sm text-green-700 text-start'>
                        Email
                     </label>
                  </div>
                  <div className='flex flex-col items-start w-full'>
                     <input type='number' id='inp' className='w-full outline-none border rounded-lg p-3 border-green-800 font-sora' />
                     <label htmlFor='inp' className='font-sora text-sm text-green-700 text-start'>
                        Phone number
                     </label>
                  </div>
               </div>
               <div className='flex flex-col items-start w-full justify-center'>
                  <div className='grid grid-cols-3 gap-5 items-start w-full'>
                     <div className='flex flex-col items-center w-full'>
                        <input
                           type='text'
                           id='inp'
                           placeholder='mm'
                           className='w-full outline-none border rounded-lg p-3 border-green-800 font-sora'
                        />
                        <label htmlFor='inp' className='font-sora w-full text-sm text-green-700 text-start'>
                           Birthday
                        </label>
                     </div>
                     <div className='flex flex-col items-center w-full'>
                        <input
                           type='text'
                           id='inp'
                           placeholder='dd'
                           className='w-full outline-none border rounded-lg p-3 border-green-800 font-sora'
                        />
                     </div>
                     <div className='flex flex-col items-center w-full'>
                        <input
                           type='text'
                           id='inp'
                           placeholder='yy'
                           className='w-full outline-none border rounded-lg p-3 border-green-800 font-sora'
                        />
                     </div>
                  </div>
                  <div className='flex flex-col items-center w-full mt-5'>
                     <input
                        type='text'
                        id='inp'
                        placeholder='please select'
                        className='w-full outline-none border rounded-lg p-3 border-green-800 font-sora'
                     />
                     <label htmlFor='inp' className='font-sora w-full text-sm text-green-700 text-start'>
                        Gender
                     </label>
                  </div>
               </div>
               <div className='flex flex-col items-center w-full'>
                  <input
                     type='text'
                     id='inp'
                     placeholder='please select'
                     className='w-full outline-none border rounded-lg p-3 border-green-800 font-sora'
                  />
                  <label htmlFor='inp' className='font-sora text-sm w-full text-green-700 text-start'>
                     Preferred Location
                  </label>
               </div>
               <div className='flex flex-row items-center gap-4'>
                  <i className='material-icons text-xl'>check_box_outline_blank</i>
                  <p className='text-sm font-semibold text-start'>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                     aliqua. Ut enim a
                  </p>
               </div>
               <div className='flex flex-col items-center w-full'>
                  <button className='bg-[#277c53] rounded-xl py-3 px-5 flex flex-row items-center justify-center w-full'>
                     <span className='font-sora text-white text-center text-sm'>Submit</span>
                  </button>
                  <p className='font-sora text-sm font-medium text-center w-full sm:mt-10 mt-5'>
                     Dont have account? <span className='font-semibold'>Sign Up</span>
                  </p>
               </div>
            </div>
         </section>
         <Footer style='' />
      </section>
   );
}
