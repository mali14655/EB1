import React, { useContext, useEffect, useState,createContext} from 'react'
import cross from "./assets/vectors2/Shape.png"
import img from "../src/images/img.png"
import {mycontext} from "./HeaderChild2"
import { cartItemsContext } from './App'
import CheckOut from './CheckOut'

export const amountcontext=createContext();

function Cart() {
     
    const {CartItems,setCartItems}=useContext(cartItemsContext);
    const [total,settotal]=useState(0);
    const [show,setshow]=useState(false);
    const {InOut='SlideOut',setInOut=()=>{}}=useContext(mycontext) || {};


    useEffect(()=>{

        let CalculateTotal=(array)=>{
            let total=0;
            array.forEach((item)=>{
                total=total+item.price;
            })
            settotal(total);
        }   
    
        CalculateTotal(CartItems);

    },[CartItems])


  return (
<amountcontext.Provider value={{total,show,setshow}}>
    {show&&<CheckOut/>}
<div className={`${InOut} w-[90%] md:w-[400px] md:h-[1024px] bg-white h-[100vh]  z-20 px-4 py-5 cart`}>

{/* 1st */}
<div className='w-full h-[60vh] overflow-y-auto px-2 scroll'>

    <div className='flex justify-between items-center sticky top-0 z-30 bg-white'>
        <h1 className='poppins font-medium leading-8 text-[28px]'>Cart</h1>
        <div className='h-6 w-6 flex justify-center items-center'>
        <img src={cross} alt="" onClick={()=>{
            setInOut("slideOut")
        }}  />
        </div>
    </div>

    <div className='w-full overflow-auto'>
        
        {CartItems.map((product,index)=>{

                
           return (
            

            <div key={index} className='w-full py-5 shadow1 px-1'>
                <div className='w-full h-[96px] flex gap-4 relative '>

                    <div className='w-[80px] h-[96px]'>
                        <img src={product.url} className='object-cover object-center h-full w-full' alt="" />
                    </div>

                    <div className='h-full w-5/12 flex flex-col justify-between'>
                    <h1 className='inter font-medium text-[14px]'>{product.name}</h1>
                    <p className='inter text-[12px] text-[#6C7275]'>Color: Black</p>
                    <div className='w-[80px] h-8 rounded border-[#6C7275] border-[1px] flex justify-between px-3 items-center'>
                        <button className='flex items-center font-medium'>-</button>
                        <h1>1</h1>
                        <button className='flex items-center font-medium'>+</button>
                    </div>
                    </div>
                    <div className='h-[44px] w-[54px] absolute top-0 right-0'>
                        <h1 className='absolute right-0 inter font-semibold text-[14px]'>${product.price}</h1>
                        <div className='h-4 w-4 flex justify-center items-center absolute top-[100%] right-0'>
                            <img src={cross} className='' alt="" />
                        </div>
                    </div>
                </div>

            </div>

        )})}
           
        
    </div>
</div>
{/* 2nd */}
<div className='w-full px-2 flex flex-col gap-10'>
<div className=''>
    <div className=' flex flex-col gap-3 py-3'>
        <div className='flex justify-between items-center'>
            <h1 className='inter'>Subtotal</h1>
            <p className='inter font-semibold'>${total}</p>
        </div>
        <div className='flex justify-between'>
            <h1 className='poppins font-semibold text-[20px]'>Total</h1>
            <p className='poppins font-semibold text-[20px]'>${total&&total+50}</p>
        </div>
    </div>

</div>

<div className='w-full'>
    <button className='py-3 bg-black w-full text-white rounded' onClick={()=>{
        setshow(true);
        setInOut("slideOut")
    }} >Checkout</button>
</div>

</div>



</div>
</amountcontext.Provider>
  )
}


export default React.memo(Cart)