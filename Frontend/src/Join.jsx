import React from 'react'
import email from "./assets/vectors/email.png"
import bgd from "./images/bg.png"

export default function Join() {
  return (

    <>
    
    <div className='w-full flex flex-col  relative justify-center items-center gap-10 px-8 xl:px-[450px] py-[100px] bg-[#F2F4F6] md:bg-transparent '
    >

      <img src={bgd} className=' hidden md:block absolute z-[-1] w-full h-full object-cover object-center ' alt="" />

        <div className='w-full flex flex-col justify-center items-center' >
            <div className='flex flex-col  items-center gap-1'>
            <h1 className='poppins font-medium text-[40px]'>Join Our Newsletter</h1>
            <p className='inter text-[14px]'>Sign up for deals, new products and promotions</p>
            </div>
        </div>


        <div className='flex justify-center items-center '>

            <div className='flex justify-between gap-2 '>

        <div>
            <img src={email} alt="" />
        </div>
        <div className=' w-[50vw] md:w-[20vw] text-[#6C727] inter font-medium flex items-center'>Email address</div>
        <div className='text-[#6C7275] font-medium leading-6'><a href="">Signup</a></div>

        </div>
        </div>
        </div>
    </>

  )
}
