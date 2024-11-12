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
import CheckOut from './CheckOut'

// stripe 

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51QJt9FFadvgEyax9io1vn8kwWZtQ6S8jtY3ahoughVaqMmBFUDksi4N3ZfuH4nw5Jzgx01nSIq4DxxuLwuNwx5QX00wAoeyevW');




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

    <Elements stripe={stripePromise}>


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
{/* <CheckOut/> */}
{/* <SignUp></SignUp> */}

</cartItemsContext.Provider>
</Elements>
  )
}
