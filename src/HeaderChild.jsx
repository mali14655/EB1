import React from 'react'
import theme from "./assets/Paste.png"
import mob from "./assets/mob.png"

export default function HeaderChild() {
  return (
    <>

    
    {/* <div className='h-[60px] w-[80%]  flex justify-between'> */}

        {/* logo */}
        {/* <div className='flex justify-center items-center'> */}
            {/* <h1 className="font-semibold md:text-2xl">3legant.</h1> */}
        {/* </div> */}

        {/* links */}
        {/* <div  className='flex justify-center items-center'>

            <ul className='flex justify-center items-center gap-8'>
                <li>Home</li>
                <li>Shop</li>
                <li>Contact</li>
                <li>Product </li>
            </ul>
        </div> */}

         {/* icons */}
        {/* <div  className='flex justify-center items-center gap-2'>
<p>iii</p>
<p>iii</p>
<p>iii</p>
<p>iii</p>
        </div>
    </div> */}
    



    {/* 2nd section */}

    <div className='w-full flex flex-col items-center'>
        <div className='w-[80%] '>
            <div>
                <img src={theme} alt="" className='hidden md:block object-cover object-center w-full h-full' />
                <img src={mob} alt="" className='h-full w-full md:hidden aspect-auto ' />
            </div>
            <div className='flex flex-col items-center my-8 md:flex-row'>
                <div className='w-full md:7/12'>
                <span className='text-[40px] font-medium leading-[44px] poppins-medium block md:text-[72px] md:leading-[76px] '>Simply Unique/</span>
                <span className='text-[40px] font-medium leading-[44px] poppins-medium md:text-[72px] md:leading-[76px] block'>Simply Better.</span>
                </div>
                <div className='w-full md:w-5/12 mt-4 md:mt-0'>
                  <div className='w-full md:w-[95%]'>
                    <p className=' text-[14px] leading-5 font-normal  md:text-[16px] md:font-semibold md:leading-7' >
                        <span className='text-[#121212]'>
                        3legantis
                        </span>
                        <span className='text-[#343839]'> a gift & decorations store based in HCMC, Vietnam. Est since 2019. 
                        </span>
                    </p>
                  </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
