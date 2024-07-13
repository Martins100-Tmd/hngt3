import { Footer, Navbar, Speaker, em, email, google } from '..';
import { Link } from 'react-router-dom';
export default function AuthPage() {
   return (
      <section className='flex h-screen flex-col justify-between'>
         <section className='w-full relative'>
            <Navbar remove={true} />
         </section>
         <section className='sm:w-[85%] w-full mx-auto sm:border border-[#465B52] sm:p-7 p-2 my-[8%] rounded-2xl justify-between flex flex-col sm:flex-row items-start'>
            <div className='w-full sm:w-2/5 flex flex-col sm:items-start items-center self-center'>
               <div className='w-full border border-[#1e2924] p-5 rounded-3xl sm:flex hidden justify-center'>
                  <img src={Speaker} className='w-4/5 mx-0 object-cover' alt='img' />
               </div>
               <div className='flex flex-col items-center sm:items-start w-full sm:mt-[15%] mt-2 gap-3 sm:gap-7'>
                  <p className='font-sora text-3xl font-bold text-center sm:text-start text-[#173b2b] sm:w-1/2 w-full'>
                     Your Easiest Platform To Book speakers at affordable rate
                  </p>
                  <p className='font-sora text-sm text-center sm:text-start text-[#22523c]'>
                     It all Starts With A Click and You are One Step Ahead to Finding Your Dream Speaker with quality
                  </p>
                  <p className='text-center sm:text-start font-sora font-semibold text-[#1f4735]'>Learn More</p>
               </div>
            </div>
            <div className='flex flex-col items-center justify-center self-start sm:self-start sm:w-1/2 w-full gap-10'>
               <div className='flex flex-col items-start justify-center sm:justify-end gap-5 sm:w-3/5 w-[95%] mt-10'>
                  <p className='font-sora text-3xl text-[#192c24] my-4 w-full text-start'>Welcome Back!</p>
                  <div className='border border-[#465B52] flex flex-row items-center w-full rounded-lg p-2'>
                     <input
                        placeholder='chistian5gupme@gmail.com'
                        type='text'
                        className='w-full font-sora bg-transparent outline-none placeholder:text-stone-500 p-3'
                     />
                     <img src={email} className='w-[4%] object-cover' alt='form_email' />
                  </div>
                  <div className='border border-[#465B52] flex flex-row items-center w-full rounded-lg p-2'>
                     <input
                        placeholder='password'
                        type='password'
                        className='w-full font-sora bg-transparent outline-none placeholder:text-stone-500 p-3'
                     />
                     <img src={em} className='w-[4%] object-cover' alt='form_email' />
                  </div>
                  <div className='flex flex-row items-center w-full mt-1 justify-between'>
                     <div className='flex flex-row items-center gap-4'>
                        <i className='material-icons text-xl'>check_box_outline_blank</i>
                        <p className='text-sm font-semibold text-start'>Remember me</p>
                     </div>
                     <p className='text-sm font-sora font-semibold'>Forgot password?</p>
                  </div>
                  <div className='flex flex-col items-start w-full gap-3'>
                     <button className='bg-[#277c53] rounded-xl py-3 px-5 flex flex-row items-center justify-center w-full'>
                        <span className='font-sora text-white text-center text-sm'>Sign in</span>
                     </button>
                     <button
                        onClick={() => (window.location.href = 'https://google.com/account')}
                        className='border border-[#465B52] rounded-xl py-3 px-5 flex flex-row items-center justify-center w-full'
                     >
                        <img src={google} className='w-[4%] object-cover mr-3' alt='cart' />
                        <span className='font-sora text-center text-sm'>Sign in with Google</span>
                     </button>
                  </div>
                  <p className='font-sora text-sm font-medium text-center w-full sm:mt-10 mt-5'>
                     Dont have account?{' '}
                     <span className='font-semibold'>
                        <Link to={'/auth'}>Sign Up</Link>
                     </span>
                  </p>
               </div>
            </div>
         </section>
         <Footer style='bg-white' />
      </section>
   );
}
