import React from 'react'
import one from "./assets/one.png"
import two from "./assets/two.png"
import third from "./assets/Third.png"
import arrow from "./assets/arrow-right.png"

function LivingRoom() {
    console.log("hello")
  return (
    <>
    <div className='w-full flex justify-center'>
        
        <div className='w-[80%] h-full flex flex-col md:flex-row gap-3'>

            <div className='bg-[#F3F5F7] md:w-6/12 w-full h-full relative'>
               <div className='flex flex-col gap-1 absolute top-[8%] left-[8%] md:top-[8%] md:left-[8%]'>
                <div>
                    <h1 className='poppins-medium text-3xl md:text-4xl font-medium  leading-9'>Living Room</h1>
                </div>
                <div >
                    <a href="#" className='inter text-[14px] md:text-[16px]' >Shop Now<span><img className='inline' src={arrow} alt="" /></span></a>
                </div>
               </div>
                <img src={one} alt="" className='object-cover object-center h-full w-full' />
            </div>

            <div className='flex md:w-6/12 w-full flex-col justify-between gap-3'>
                <div className='bg-[#F3F5F7] relative'>
                <div className='flex flex-col gap-1 absolute top-[50%] left-[8%] md:top-[50%] md:left-[8%]'>
                <div>
                    <h1 className='poppins-medium text-[28px] md:text-[34px] font-medium leading-7  md:leading-9'>Bedroom</h1>
                </div>
                <div >
                    <a href="#" className='inter text-[14px] md:text-[16px]' >Shop Now<span><img className='inline' src={arrow} alt="" /></span></a>
                </div>
               </div>
                    <img src={two} alt="" className='object-cover object-center h-full w-full' />
                </div>
                <div className='bg-[#F3F5F7] relative'>
                <div className='flex flex-col gap-1 absolute top-[50%] left-[8%] md:top-[50%] md:left-[8%]'>
                <div>
                    <h1 className='poppins-medium text-3xl md:text-4xl font-medium leading-7  md:leading-9'>Kitchen</h1>
                </div>
                <div >
                    <a href="#" className='inter text-[14px] md:text-[16px]' >Shop Now<span><img className='inline' src={arrow} alt="" /></span></a>
                </div>
               </div>
                    <img src={third} alt="" className='object-cover object-center h-full w-full' />
                </div>
            </div>

        </div>




    </div>
    
    </>
  )
}

export default React.memo(LivingRoom)