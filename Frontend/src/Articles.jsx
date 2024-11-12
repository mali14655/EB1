import React from 'react'
import arrow from "./assets/arrow-right.png"
import img from "./images/img.png"
import img1 from "./images/img1.png"
import img2 from "./images/img2.png"


export default function Articles() {
  return (

    <>
<div className='w-full h-auto flex justify-center  py-10 md:py-20'>
<div className='w-[80%] flex flex-col gap-3'>

{/* 1st */}
<div className='w-full flex justify-between items-center '>
    <h1 className='inline  poppins font-medium text-[34px] md:text-[40px] leading-9 md:leading-10'>Articles</h1>
    <a href='#' className='flex  inter underline underline-offset-8 font-medium text-[14px] md:text-base  leading-6'>More Articles<img className='inline' src={arrow} alt="" /></a>
</div>

{/* 2nd */}

<div className='w-full flex gap-4 md:gap-1 flex-wrap '>

    {/* card */}
    <div className='w-full  md:w-[33%] md:h-[413px] flex flex-col gap-6 flex-shrink-0'>

    <div className=' h-0 pb-[90.99%] md:pb-0  md:w-full md:h-[325px]'
    style={{
        backgroundImage:`url(${img})`,
        backgroundSize:"cover",
        backgroundPosition:"center",
        backgroundRepeat:"no-repeat"
    }}
    
    >

    </div>

    {/* details */}

    <div className='flex flex-col gap-3'>
        <h1 className='poppins font-semibold md:font-medium text-base md:text-xl'>7 ways to decor your home</h1>
        <a href="#" className='inter font-medium text-base '>Read More <img src={arrow} className='inline' alt="" /></a>
    </div>




    </div>

    {/* card ends */}
    {/* card */}
    <div className='w-full  md:w-[33%] md:h-[413px] flex flex-col gap-6 flex-shrink-0'>

    <div className=' h-0 pb-[90.99%] md:pb-0  md:w-full md:h-[325px]'
    style={{
        backgroundImage:`url(${img1})`,
        backgroundSize:"cover",
        backgroundPosition:"center",
        backgroundRepeat:"no-repeat"
    }}
    
    >

    </div>

    {/* details */}

    <div className='flex flex-col gap-3'>
        <h1 className='poppins font-semibold md:font-medium text-base md:text-xl'>Kitchen organization</h1>
        <a href="#" className='inter font-medium text-base '>Read More <img src={arrow} className='inline' alt="" /></a>
    </div>




    </div>

    {/* card ends */}
    {/* card */}
    <div className='w-full md:w-[33%] md:h-[413px] flex flex-col gap-6 flex-shrink-0'>

    <div className=' h-0 pb-[90.99%] md:pb-0  md:w-full md:h-[325px]'
    style={{
        backgroundImage:`url(${img2})`,
        backgroundSize:"cover",
        backgroundPosition:"center",
        backgroundRepeat:"no-repeat"
    }}
    
    >

    </div>

    {/* details */}

    <div className='flex flex-col gap-3'>
        <h1 className='poppins font-semibold md:font-medium text-base md:text-xl'>Decor your bedroom</h1>
        <a href="#" className='inter font-medium text-base '>Read More <img src={arrow} className='inline' alt="" /></a>
    </div>




    </div>

    {/* card ends */}


</div>



</div>


</div>




    </>

  )
}
