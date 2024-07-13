import { Footer, Navbar } from '..';

export default function ContactPage() {
   return (
      <section className='h-screen w-full flex flex-col items-center justify-between'>
         <section className='w-full relative'>
            <Navbar remove={true} />
         </section>
         <section className='bg-[#CCE7D0] sm:w-3/4 mx-auto rounded w-[95%] mt-10 shadow sm:flex-row flex flex-col items-center'>
            <div className='flex flex-col items-start justify-center w-full p-7'>
               <p className='font-sora text-lg text-[#1c2521]'>Our available pickup points</p>
               <div className='flex flex-col items-center w-full gap-2 mt-5 h-4/5 my-auto'>
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
            </div>
            <div className='flex flex-col items-center self-center w-full gap-10 pl-10 sm:border-l-2 pb-10 p-3 border-green-900 h-3/5'>
               <div className='flex flex-col items-start w-full border-b-2 border-green-900'>
                  <p className='text-base font-sora text-start'>Hotline</p>
                  <p className='text-xl text-start font-sora font-semibold'>07042300162</p>
               </div>
               <div className='flex flex-col items-start w-full border-b-2 border-green-900'>
                  <p className='text-base font-sora text-start'>Office line</p>
                  <p className='text-xl text-start font-sora font-semibold'>07042300162</p>
               </div>
               <div className='flex flex-col items-start w-full'>
                  <p className='text-base font-sora text-start'>Email</p>
                  <p className='text-xl text-start font-sora font-semibold'>christian45gupme@gmail.com</p>
               </div>
            </div>
         </section>
         <Footer style='bg-white' />
      </section>
   );
}
