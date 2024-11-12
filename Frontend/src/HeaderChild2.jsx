import React, { useState,createContext,Provider} from 'react'
import acc from "./assets/vectors2/vector1.png"
import rec from "./assets/vectors2/Rec.png"
import notf from "./assets/vectors2/not.png"
import menu from "./assets/vectors2/Vector.png"
import cross from "./assets/vectors2/Shape.png"
import srch from "./assets/vectors/srch.png"
import heart from "./assets/heart.png"
import Cart from './Cart'


export const mycontext=createContext();


function HeaderChild2() {

    const [decision,setdecision]=useState(false);

    // forCart
    const[InOut,setInOut]=useState("slideout");

  return (
    <mycontext.Provider value={{InOut,setInOut}} >
    <Cart/>
    <div className='w-full flex justify-center py-3 items-center bg-white sticky z-10 top-0'>
        <div className='w-[80%] flex justify-between'>
            <div className='flex items-center gap-2 relative'>
                    <img src={menu} className='inline md:hidden' onClick={()=>{
                        setdecision(!decision);
                    }} alt="" />
                <h1 className='poppins font-semibold text-base md:text-2xl leading-6'>3legant.</h1>

                {/* MObile sidebar */}

                <div className={`md:hidden side1 ${decision && "side" }  h-[100vh] w-[95vw] py-5 flex flex-col items-center z-10 bg-white justify-between `}>
                    
                    {/* 1st */}
                    <div className='w-[90%] h-auto flex flex-col gap-5 '>

                        {/* 1st inside */}

                        <div className='flex justify-between'>
                            <div>
                            <h1 className='poppins font-semibold'>3legant.
                            </h1>
                            </div>
                            <div className='h-6 w-6 flex justify-center items-center'>
                            <img src={cross} className='object-contain object-center' onClick={()=>{
                                setdecision(!decision)
                            }} alt="" />
                            </div>
                        </div>
                         
                         {/*  2nd inside */}

                        <div className='w-full relative'>
                            <img src={srch} className=' absolute h-5 w-5 top-[9px] left-[12px]' alt="" />
                            <input type="text" placeholder='Search' id='srh' className='inter w-full rounded-lg px-10  ' />
                        </div>

                        {/* 3rd inside */}

                        <div className='w-full flex flex-col inter font-semibold text-[14px]  gap-5 leading-6 '>
                            <h1 className='shade'>Home</h1>
                            <h1 className='shade'>Shop</h1>
                            <h1 className='shade'>Products</h1>
                            <h1 className='shade'>Contact Us</h1>

                        </div>
                    </div>
                    {/* 1st ends here */}

                    {/* 2nd starts */}

                    <div className='w-[90%] text-[#6C7275] inter text-[18px] flex flex-col font-medium leading-8 gap-3' >
                        <div className=' flex flex-col gap-2'>
                            <div className='flex justify-between'>
                                <h1>Cart</h1>
                                <div className='flex gap-2'>
                                <img src={rec} alt="" className='h-4 w-4' />
                                <img src={notf} alt="" className='h-4 w-4' />
                                </div>
                            </div>
                            <div className='flex justify-between'>
                                <h1>Wishlist</h1>
                                <div className='flex gap-2 h-4'>
                                <img src={heart} alt="" className='h-full' />
                                <img src={notf} alt="" className='h-4 w-4' />
                                </div>
                            </div>
                        </div>
                        <div className='w-full'>
                            <button className='bg-black py-2 w-full rounded text-white'>Sign In</button>

                        </div>
                    </div>


                </div>


            </div>
            <div className='hidden md:flex items-center'>
                <ul className='flex items-center gap-6 inter font-medium text-[14px]  leading-6'>
                    <li><a href="">Home</a></li>
                    <li><a href="">Shop</a></li>
                    <li><a href="">Products</a></li>
                    <li><a href="">Contact Us</a></li>
                </ul>
            </div>
            <div className='flex gap-2'>
                <div className='hidden md:block'>
                <img src={acc} className='inline' alt="" />
                </div>
                <div className='hidden md:block'>
                <img src={acc} className='inline' alt="" />
                </div>
                <div className=''>
                <button
                className='relative'
                onClick={()=>{
                    setInOut("slideIn")
                }}
                >
                    
                <img src={rec} className='inline h-[22px] w-[22px] rounded-[50%]' alt="" /></button>
                </div>
                <div className='relative inline  '>
                <img src={notf} alt="" className='inline  ' />
                <h1 className='absolute text-white font-semibold text-sm top-[3px] left-[7px]'>2</h1>
                </div>
            </div>

        </div>

    </div>
    
    
    
    </mycontext.Provider>
  )
}


export default React.memo(HeaderChild2);