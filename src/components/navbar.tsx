import { HeroI, Search, LinK, Home, Logo, searchg } from '..';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar({ remove }: { remove: boolean }) {
   let navigate = useNavigate();
   return (
      <header className='relative flex flex-col items-center w-full justify-between bg-[#CCE7D0]'>
         <nav className='sm:flex hidden my-7 flex-row items-center gap-10 z-10 w-[80%] justify-between mx-auto rounded-full py-3 px-16 shadow bg-[#004403]'>
            <img onClick={() => navigate('/')} src={Logo} className='object-cover w-[10%]' alt='logo' />
            <div className='rounded-full shadow border border-white px-3 w-[80%] flex flex-row items-center'>
               <img src={Search} className='object-cover w-[5%] ml-3' alt='search icon' />
               <input
                  type='search'
                  className='outline-none p-2 shadow text-white font-sora bg-transparent w-[95%]'
                  placeholder='Search for product'
               />
            </div>
            <div className='flex flex-row items-center sm:w-[55%] w-[45%] justify-between'>
               <ul className='flex flex-row items-center gap-10'>
                  <Link to={'/'} className='flex flex-col items-center'>
                     <li className='flex flex-row items-center gap-3 justify-center'>
                        <img src={Home} className='object-cover w-[17%]' alt='home link' />
                        <span className='font-sora font-thin text-center text-base text-orange-300 cursor-pointer'>Home</span>
                     </li>
                     <span className=' h-[0.5px] bg-orange-300 mt-1 w-[70px]'></span>
                  </Link>
                  <li
                     onClick={() => {
                        navigate('/');
                        setTimeout(() => {
                           window.location.href = '#shop';
                        }, 200);
                     }}
                     className='font-sora cursor-pointer font-thin text-center text-base text-white'
                  >
                     Shop
                  </li>
                  <li className='font-sora font-thin text-center text-base text-white'>
                     <Link to={'/contact'}>Account</Link>
                  </li>
               </ul>
               <Link to={'/aproduct'} className='ml-7'>
                  <img src={LinK} className='object-cover w-[18%]' alt='home link' />
               </Link>
               <button className='bg-white rounded-full py-2 px-7 shadow font-medium font-sora text-orange-400'>
                  <Link to={'/cont'}>Contact</Link>
               </button>
            </div>
         </nav>
         <div className='w-full relative'>
            <SmNav />
         </div>
         <div
            className={`rounded-full shadow border border-[#016134] px-3 w-[90%] z-40 mt-10 mb-24 sm:hidden ${
               remove ? 'hidden' : 'flex'
            } flex-row items-center`}
         >
            <img src={searchg} className='object-cover w-[5%] ml-3' alt='search icon' />
            <input
               type='search'
               className='outline-none p-2 placeholder:text-[#016134] shadow text-white font-sora bg-transparent'
               placeholder='Search for product'
            />
         </div>
         <div
            className={`${
               remove ? 'hidden' : 'flex'
            } flex-row items-center w-full bg-[#CCE7D0]  z-0 sm:max-h-[400px] max-h-[290px] pb-4 shadow sm:mt-10 -mt-[3%]`}
         >
            <div className='w-full sm:w-3/5 h-[400px] bg-[#CCE7D0] flex justify-center'>
               <section className='flex flex-col items-start sm:w-3/5 w-[94%] mx-auto gap-4 h-4/5 justify-center self-start'>
                  <p className='text-3xl sm:text-5xl font-sora text-center sm:text-start font-bold w-full mx-0 text-[#004403]'>
                     Shop from the best instrument plug
                  </p>
                  <p className='font-sora font-normal text-base sm:text-lg text-center sm:text-start w-full sm:w-4/5 text-black text-opacity-75 mt-2'>
                     It all starts with a click and you are one step ahead to finding your dream <br />
                     speaker with quality
                  </p>
                  <div className='flex flex-row items-stretch w-[97%] sm:mx-0 mx-auto sm:w-3/4 justify-between my-5 sm:mb-16 gap-5'>
                     <button className='rounded-xl p-3 w-full font-sora text-base text-white bg-[#004403]'>
                        <Link to={'/auth'}>Sign In</Link>
                     </button>
                     <button className='rounded-xl p-3 w-full font-sora text-base border-black border'>
                        <Link to={'/contact'}>Sign Up</Link>
                     </button>
                  </div>
               </section>
            </div>
            <img src={HeroI} alt='hero_img' className='sm:flex hidden object-cover object-center h-[400px] w-[49%] rounded' />
         </div>
      </header>
   );
}

export function SmNav() {
   let [state, setstate] = useState({
      sb: 0,
   });
   let navigate = useNavigate();
   return (
      <nav className='sm:hidden sticky top-0 z-50 flex flex-row items-center w-full justify-between bg-[#016134] p-6'>
         <div className='w-[45%]'>
            <img src={Logo} className='object-cover w-[65%]' alt='logo' />
         </div>
         <div className='flex flex-row items-center gap-10 sm:w-[55%] w-1/5 justify-end'>
            <Link to={'/aproduct'} className='self-center'>
               <img src={LinK} className='object-cover w-[50%]' alt='home link' />
            </Link>
            <i onClick={() => setstate((prev) => ({ ...prev, sb: 1 }))} className='material-icons text-2xl text-white'>
               menu
            </i>
         </div>
         <div
            className={`bg-[#016134] p-3 ${
               state.sb ? 'flex' : 'hidden'
            } w-[55%] flex-col items-center absolute right-0 top-0 h-auto justify-center`}
         >
            <div className='flex flex-row items-center gap-10 w-4/5 justify-center pt-5 mb-10'>
               <Link to={'/aproduct'}>
                  <img src={LinK} className='object-cover w-[28%]' alt='home link' />
               </Link>
               <i onClick={() => setstate((prev) => ({ ...prev, sb: 0 }))} className='material-icons text-3xl text-white'>
                  menu
               </i>
            </div>
            <ul className='flex flex-col items-center gap-10'>
               <div onClick={() => setstate((prev) => ({ ...prev, sb: 0 }))} className='flex flex-col w-full items-center'>
                  <li className='flex flex-row items-center gap-3 justify-center'>
                     <img src={Home} className='object-cover w-[11%]' alt='home link' />
                     <span className='font-sora font-thin text-center text-base text-orange-300'>
                        <Link to={'/'}>Home</Link>
                     </span>
                  </li>
                  <span className=' h-[0.5px] bg-orange-300 mt-1 w-[70px]'></span>
               </div>
               <li
                  onClick={() => {
                     navigate('/');
                     setstate((prev) => ({ ...prev, sb: 0 }));
                     setTimeout(() => {
                        window.location.href = '#shop';
                     }, 200);
                  }}
                  className='font-sora font-thin text-center text-base w-full text-white'
               >
                  Shop
               </li>
               <li
                  onClick={() => setstate((prev) => ({ ...prev, sb: 0 }))}
                  className='font-sora font-thin text-center text-base w-full text-white'
               >
                  <Link to={'/contact'}>Account</Link>
               </li>
               <button
                  onClick={() => setstate((prev) => ({ ...prev, sb: 0 }))}
                  className='bg-white rounded-full py-2 px-7 shadow font-medium font-sora text-orange-400'
               >
                  <Link to={'/cont'}>Contact</Link>
               </button>
            </ul>
         </div>
      </nav>
   );
}
