import { Footer, Navbar, Speak, Star, cart, left, purchase, rating, right } from '..';
import { Link } from 'react-router-dom';
export default function AProduct() {
   return (
      <section className='flex h-screen flex-col justify-between'>
         <section className='w-full relative'>
            <Navbar remove={true} />
         </section>
         <section className='flex sm:flex-row flex-col items-center w-[90%] mx-auto gap-10 my-[10%]'>
            <section className='flex sm:flex-col flex-row items-center justify-center w-full'>
               <img src={Speak} className='sm:w-full w-4/5 object-cover shadow' alt='img' />
               <div className='flex flex-col sm:flex-row items-center sm:w-full w-1/5 gap-10 mt-3'>
                  <img src={left} className='w-[7%] sm:w-[4%] object-cover cursor-pointer' alt='img' />
                  <img src={Speak} className='w-[25%] sm:w-[18%] object-cover shadow' alt='img' />
                  <img src={Speak} className='w-[25%] sm:w-[18%] object-cover shadow' alt='img' />
                  <img src={Speak} className='w-[25%] sm:w-[18%] object-cover shadow' alt='img' />
                  <img src={right} className='w-[7%] sm:w-[4%] object-cover cursor-pointer' alt='img' />
               </div>
            </section>
            <section className='flex flex-col items-center w-full gap-3'>
               <div className='flex flex-row items-center w-full'>
                  <div className='flex flex-col items-start w-full'>
                     <p className='font-sora text-sm text-start w-full font-semibold'>Speaker Model</p>
                     <p className='font-sora text-sm text-start w-full font-semibold'>Sp135</p>
                  </div>
                  <select className='border border-black p-2 shadow rounded'>
                     <option value='1'>1</option>
                  </select>
               </div>
               <p className='font-sora text-base text-start w-full font-semibold'>N1,000,000</p>
               <p className='font-sora text-sm text-start w-full font-semibold'>
                  15 Inch / 4800watt / Pure Acostic / 100 coil /Double magnet
               </p>
               <div className='flex flex-row  items-center gap-2 sm:w-2/5 w-[55%] mx-auto justify-between'>
                  <img src={rating} className='object-cover w-[8%]' alt='star_img' />
                  <img src={rating} className='object-cover w-[8%]' alt='star_img' />
                  <img src={rating} className='object-cover w-[8%]' alt='star_img' />
                  <img src={rating} className='object-cover w-[8%]' alt='star_img' />
                  <img src={rating} className='object-cover w-[8%]' alt='star_img' />
                  <img src={Star} className='object-cover w-[8%]' alt='star_img' />
               </div>
               <div className='flex flex-col items-start w-full gap-3'>
                  <button className='bg-orange-400 py-2 px-5 rounded flex flex-row items-center justify-center w-full'>
                     <img src={cart} className='w-[7%] mr-4 object-cover' alt='cart' />
                     <span className='font-sora text-white text-center text-sm'>Add to cart</span>
                  </button>
                  <Link to={'/check'} className='w-full'>
                     <button className='bg-[#016134] py-2 px-5 rounded flex flex-row items-center justify-center w-full'>
                        <img src={purchase} className='w-[7%] mr-4 object-cover' alt='cart' />
                        <span className='font-sora text-white text-center text-sm'>Purchase</span>
                     </button>
                  </Link>
               </div>
               <button className='bg-orange-400 p-3 rounded shadow self-start font-sora text-white text-sm'>More Info</button>
               <div className='flex justify-start w-full'>
                  <p className='font-sora text-xs self-start'>
                     This speaker boasts a powerful 15-inch driver and a remarkable 4800 watts of output, delivering pure acoustic sound. It
                     features a robust 100-coil construction and a double magnet system for enhanced performance and stability. Ideal for
                     both professional and home use, it ensures deep bass, clear mids, and crisp highs, making every audio experience
                     exceptional.
                  </p>
               </div>
            </section>
            <section className='flex flex-col items-start justify-end shadow bg-[#CCE7D0] w-full p-3'>
               <p className='font-sora text-lg text-[#1c2521]'>Our available pickup points</p>
               <div className='flex flex-col items-center w-full gap-2 mt-5'>
                  <div className='flex flex-row items-center w-full gap-4'>
                     <i className='text-[#1b2420] text-2xl'>{'>'}</i>
                     <p className='font-sora text-sm text-[#465B52]'>Ikeja City Mall, Alausa</p>
                  </div>
                  <div className='flex flex-row items-center w-full gap-4'>
                     <i className='text-[#1b2420] text-2xl'>{'>'}</i>
                     <p className='font-sora text-sm text-[#465B52]'>Lekki Phase 1, Admiralty Way</p>
                  </div>
                  <div className='flex flex-row items-center w-full gap-4'>
                     <i className='text-[#1b2420] text-2xl'>{'>'}</i>
                     <p className='font-sora text-sm text-[#465B52]'>Surulere, Adeniran Ogunsanya </p>
                  </div>
                  <div className='flex flex-row items-center w-full gap-4'>
                     <i className='text-[#1b2420] text-2xl'>{'>'}</i>
                     <p className='font-sora text-sm text-[#465B52]'>Yaba, Tejuosho Market</p>
                  </div>
                  <div className='flex flex-row items-center w-full gap-4'>
                     <i className='text-[#1b2420] text-2xl'>{'>'}</i>
                     <p className='font-sora text-sm text-[#465B52]'>Victoria Island, Eko Hotel and Suites</p>
                  </div>
                  <div className='flex flex-row items-center w-full gap-4'>
                     <i className='text-[#1b2420] text-2xl'>{'>'}</i>
                     <p className='font-sora text-sm text-[#465B52]'>Ikorodu, Ikorodu Mall</p>
                  </div>
                  <div className='flex flex-row items-center w-full gap-4'>
                     <i className='text-[#1b2420] text-2xl'>{'>'}</i>
                     <p className='font-sora text-sm text-[#465B52]'>Ajah, Novare Mall</p>
                  </div>
                  <div className='flex flex-row items-center w-full gap-4'>
                     <i className='text-[#1b2420] text-2xl'>{'>'}</i>
                     <p className='font-sora text-sm text-[#465B52]'>Festac Town, Festival Mall</p>
                  </div>
                  <div className='flex flex-row items-center w-full gap-4'>
                     <i className='text-[#1b2420] text-2xl'>{'>'}</i>
                     <p className='font-sora text-sm text-[#465B52]'>Maryland, Ikeja City Mall</p>
                  </div>
                  <div className='flex flex-row items-center w-full gap-4'>
                     <i className='text-[#1b2420] text-2xl'>{'>'}</i>
                     <p className='font-sora text-sm text-[#465B52]'>Ogba, Ogba Retail Market</p>
                  </div>
               </div>
            </section>
         </section>

         <Footer style='' />
      </section>
   );
}
