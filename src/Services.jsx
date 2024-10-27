import React, { useEffect, useState } from 'react'
import Bus from "./assets/vectors/Bus.png"
import Phone from "./assets/vectors/Phone.png"
import Lock from "./assets/vectors/Vector.png"
import Rect from "./assets/vectors/Rect.png"

import data from "./data/data2.json"

export default function Services() {

    const[StateData,setStateData]=useState([]);

    useEffect(()=>{
        setStateData(data);
    })


  return (
    <>

    <div className='w-full h-autopy-8 py-8 md:py-12 flex justify-center' >
        
        {/* flexbox */}
        <div className='w-[80%] h-full'>

            <div className='h-auto md:h-auto flex gap-2 justify-center  md:justify-between flex-wrap md:flex-nowrap '>
            {/* card */}

            {StateData.map((product,index)=>(
                <div key={index} className=' w-5/12 md:w-[262px] py-8 flex-grow md:py-12 px-4 md:px-8 flex flex-col justify-between gap-4 bg-[#F3F5F7]'>

                {/* icons */}
                <div className='h-12 w-12'>
                    <img src={product.icon} alt="" />
                </div>

                {/* details */}
                <div className='flex flex-col justify-between gap-1'>
                    <h1 className='poppins text-[#141718]  font-semibold text-sm leading-[22px] md:font-medium md:leading-7 md:text-xl'>{product.service}</h1>
                    <p className='poppins text-[#6C7275] leading-6 text-sm font-normal'>{product.price}</p>
                </div>

            </div>

            ))}
                
            </div>

        </div>
    </div>
    
    
    
    </>
  )
}
