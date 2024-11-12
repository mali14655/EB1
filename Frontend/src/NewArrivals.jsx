import React, { useContext, useEffect, useState } from 'react'
import arrow from "./assets/arrow-right.png"
import sofa from "./assets/sofa.png"    
import star from "./assets/Star.png"
import heart from "./assets/heart.png"
import { cartItemsContext } from './App'

//  importing json
import data from "./data/data.json";



export default function NewArrivals() {


    const {CartItems,setCartItems}=useContext(cartItemsContext);
    const[Mydata,setMydata]=useState([])
    console.log(CartItems);

    useEffect(()=>{
        setMydata(data);
    },[])

  return (

    <>
    <div className='w-full flex flex-col items-center py-[32px] md:py-[48px]'>

        {/* first */}

        <div className='w-[80%] flex flex-row'>
            <div className='w-1/2'>
                <h1 className='poppins font-medium text-[34px] leading-[38px] md:leading-[44px] md:text-[40px]'>New</h1>
                <h1 className='poppins font-medium text-[34px] leading-[38px] md:leading-[44px] md:text-[40px]'>Arrivals</h1>
            </div>
            <div className=' hidden w-1/2 md:flex justify-end items-end'>
           <a href="#"> <p className='inter font-medium leading-6 md:leading-7 text-[14px] md:text-[16px]'>More Products<img src={arrow} className='inline' alt="" /></p>
           </a>
            </div>
        </div>


        {/* second */}

        <div className=' scrolldiv w-[80%] py-[40px] md:py-[48px]  overflow-x-scroll'>
            <div className=' flex space-x-4'>


                {Mydata.map((product,index)=>(
                
                <div key={index} className='w-[262px] h-[433px] relative flex flex-shrink-0 flex-col'>
                    {/* img */}
                    <div className='w-full h-[349px] flex justify-center' style={
                        {
                            backgroundImage:`url(${product.image})`,
                            backgroundSize:"cover",
                            backgroundPosition:"center",
                            backgroundRepeat:"no-repeat"
                        }
                    }>

                        <div className='w-[71px] h-[56px] flex flex-col justify-between absolute top-4 left-4'>
                            <div className=' rounded h-[24px] bg-[#FFFFFF] inter font-bold leading-4 text-[16px] flex items-center justify-center'>{product.label1}</div>
                            <div className=' rounded h-[24px] bg-[#38CB89] inter font-bold leading-4 text-[16px] flex items-center justify-center text-white'>{product.label2}</div>
                        </div>

                        {/* favourite */}

                        <button className='w-8 h-8 absolute left-[214px] top-4' style={{
                            backgroundImage:`url(${heart})`,
                            backgroundPosition:"center",
                            backgroundSize:"cover",
                            backgroundRepeat:"no-repeat"
                        }}></button>

                        {/* button */}

                        <button className='w-10/12 h-[46px] rounded-lg bg-[#141718] inter md:text-base md:leading-7  text-white md:font-medium relative top-[287px]'
                        
                        onClick={()=>{
                            setCartItems((prev)=>([...prev,
                                {name:product.name,
                                 url:product.image,
                                 price:product.price

                            }]))
                        }}

                        >Add to cart</button>



                    </div>

                    {/* details */}

                    <div className='w-full flex flex-col gap-1 py-2'>
                        <div className='flex gap-1'>
                            <img src={star} className='inline' alt="" />
                            <img src={star} className='inline' alt="" />
                            <img src={star} className='inline' alt="" />
                            <img src={star} className='inline' alt="" />
                            <img src={star} className='inline' alt="" />
                        </div>
                        <div className='inter md:text-[16px] md:leading-6 md:font-semibold'><h1>{product.name}</h1></div>
                        <data className='inter font-semibold text-[14px] leading-5'>${product.price}</data>
                    </div>
                </div>  
                ))}
            </div>
        </div>

        {/* 3rd */}
        <div className='md:hidden w-[80%] my-[40px] flex justify-start items-start'>
           <a href="#"> <p className='inter font-medium leading-6 md:leading-7 text-[14px] md:text-[16px]'>More Products<img src={arrow} className='inline' alt="" /></p>
           </a>
            </div>
    </div>
</>
  )
}
