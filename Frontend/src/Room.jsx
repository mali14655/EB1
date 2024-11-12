import React from 'react'
import room from "./assets/room.png"
import arrow from "./assets/arrow-right.png"

export default function Room() {
  return (
    <>


    <div className='w-full flex h-auto flex-col md:flex-row '>

{/* pic */}

<div className='w-full md:w-1/2'
>
<img src={room} className='object-cover h-full w-full' alt="" />
</div>


{/* details */}

<div className='w-full md:w-1/2 h-full flex flex-col gap-2 md:pr-[10%] '>

<div className='w-9/12 mx-[32px] md:ml-[72px] md:mt-[18%] flex flex-col gap-3 pt-12 md:pt-0 '>
    <p className='inter text-[#377DFF] leading-4 font-bold text-base'>SALE UP TO 35% OFF</p>
    <h1 className='text-[#141718] text-[34px] md:text-[30px] lg:font-medium lg:text-[40px] poppins font-medium leading-[38px] md:leading-[44px]'>
        <span className='block'>HUNDREDS of </span>
        <span className='block'>New lower prices!</span>
    </h1>
    <p className='inter text-[#141718] font-normal text-base md:text-xl leading-6 md:leading-8'>It’s more affordable than ever to give every room in your home a stylish makeover</p>
</div>
<div className='pb-12 md:pb-0'>
    <a href='#' className='ml-8 md:ml-[72px]'>Shop Now <img className='inline' src={arrow} alt="" /></a>
</div>
</div>


    </div>    
    </>
  )
}
