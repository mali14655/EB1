import React, { useEffect, useState,createContext } from 'react'
// import SignUp from "./SignUp"
import Header from './Header'
import HeaderChild from './HeaderChild'
import LivingRoom from './LivingRoom'
import NewArrivals from './NewArrivals'
import Services from './Services'
import Room from './Room'
import Articles from './Articles'
import Join from './Join'
import Footer from './Footer'
import HeaderChild2 from './HeaderChild2'
import Cart from './Cart'

export const cartItemsContext=createContext();

export default function App() {
   const [Width,setWidth]=useState(window.innerWidth)
   
   const [CartItems,setCartItems]=useState([]);


   let decision=null;
   if(Width>=768){
    decision=true;
   }
   else{
    decision=false;
   }

   useEffect(()=>{
    const handleResize=()=>{
      setWidth(window.innerWidth)
    }
    window.addEventListener('resize',handleResize);

    return function (){
      window.removeEventListener('resize',handleResize);
    }
   })

  return (
<cartItemsContext.Provider value={{CartItems,setCartItems}}>
{/* <Cart/> */}
{decision || <HeaderChild2/> }
<Header></Header>
{ decision && <HeaderChild2/>}
<HeaderChild/>
<LivingRoom/>
<NewArrivals/>
<Services></Services>
<Room/>
<Articles/>
<Join/>
<Footer/>
{/* <SignUp></SignUp> */}

</cartItemsContext.Provider>
  )
}
