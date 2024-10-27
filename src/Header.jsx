import React from 'react'
import vector from "./assets/Vector.png"
import arrow from "./assets/arrow-right.png"

export default function Header() {
  return (
    <>
    <div className='w-full h-[36px] px-8 py-2 md:p-0 md:h-[40px] flex justify-center items-center bg-[#F3F5F7]'>
        <div className='w-[224px] h-[20px]  md:w-[372px] md:h-[24px] flex justify-between'>
            <div className=' w-[224px] h-[20px] md:w-[269px] md:h-[24px] flex justify-between items-center'>
            <div className='w-[16px] h-[16px] md:h-[24px] md:w-[24px] flex justify-center items-center'>
                <img src={vector} className=' w-[13px] h-[12px] md:w-[20px] md:h-[18px]' alt="" />
            </div>
            <div className='w-[200px] h-[20px] md:w-[233px] md:h-[22px]'>
                <p className='inter1 hidden md:block'>30% off storewide — Limited time!</p>
                <p className='inter11 md:hidden'>30% off storewide — Limited time!</p>
            </div>
            </div>
            <div className=' hidden md:flex md:flex-row md:w-[91px] md:h-[24px]'>
                <a href="#" className='text-[#377DFF] flex justify-center items-center'>
                    <div className='md:w-[69px] h-[24px]'><p className='inter2'>Shop Now</p></div> 
                    <div className='w-[18px] h-[24px] flex justify-center items-center'>
                    <img className='h-[18px] w-[18px]' src={arrow} alt="" />
                    </div>
                     </a>
            </div>
        </div>
    </div>
    
    </>
  )
}
