import React from 'react'
import facebook from "./assets/vectors/facebook.png"

export default function Footer() {
  return (
    <>
    <div className='w-full bg-neutral-950 flex flex-col gap-16 items-center pt-20 pb-8'>

        <div className='w-[80%] flex flex-col md:flex-row items-center md:justify-between gap-10'>

            <div className='w-[80%] md:w-[45%] flex items-center justify-between  flex-col md:flex-row gap-5'>
                <h1 className=' text-white poppins font-medium md:leading-6 md:text-2xl'>3legant.</h1>
                <div className='w-[1px] h-6 bg-[#6C7275] rotate-90 md:rotate-0'></div>
                <p className=' text-center w-[100%] md:w-[65%] inter text-[14px] text-[#E8ECEF]'>Gift & Decoration Store</p>

            </div>


            <div className='text-[white] inter text-[14px]'>
                <ul className='flex gap-7 flex-col md:flex-row items-center '>
                    <li>Home</li>
                    <li>Shop</li>
                    <li>Product</li>
                    <li>Blog</li>
                    <li>Contact Us</li>
                </ul>
            </div>

        </div>

        <div className='w-[80%] flex md:justify-between md:items-baseline items-center flex-col-reverse md:flex-row gap-10 border-t-2 py-10 md:py-5 border-[#6C7275]'>
            <div className='poppins text-[12px] text-white'>Copyright © 2023 3legant. All rights reserved</div>
            <div className='text-white flex w-[65%] gap-5 justify-center md:justify-start'>
                <h1>Privacy Policy</h1>
                <h1>Terms of Use</h1>
            </div>
            <div className='flex gap-6'>
                <img src={facebook} className='inline' alt="" />
                <img src={facebook} className='inline' alt="" />
                <img src={facebook} className='inline' alt="" />
            </div>

        </div>

    </div>
    
    </>
  )
}
