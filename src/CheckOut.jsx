import React,{useState,useEffect, useContext} from 'react'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { amountcontext } from './Cart';




export default function CheckOut() {
    const stripe = useStripe();
    const elements = useElements();
    const [clientSecret, setClientSecret] = useState('');
    const [errorMessage, setErrorMessage] = useState(null);
    const [loading, setLoading] = useState(false);
    const {total,show,setshow}=useContext(amountcontext);
    
    useEffect(() => {
        // This is where you send the cart total to your backend
        // fetch('https://ecom-app-psi.vercel.app/create-payment-intent', {
        fetch('https://ecom-app-psi.vercel.app/create-payment-intent', {
          method: 'POST',
          body: JSON.stringify({ amount:total*100 }), // Example: Pass the amount in cents (e.g., $20.00)
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then((response) => response.json())
          .then((data) =>{
            if (data.clientSecret) {
                setClientSecret(data.clientSecret);
              } else {
                setErrorMessage('Client secret not received');
              }
          })
          .catch((error) => setErrorMessage('Failed to load client secret'));
      }, []);


      const handleSubmit = async (event) => {
        event.preventDefault();
    
        if (!stripe || !elements) return;
    
        setLoading(true);
        const cardElement = elements.getElement(CardElement);
    
        const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
          payment_method: {
            card: cardElement,
          },
        });
    
        setLoading(false);
    
        if (error) {
          setErrorMessage(error.message);
        } else if (paymentIntent.status === 'succeeded') {
          alert('Payment successful!');
          setshow(false)
        }
      };


  return (

    <>
    <div className={` w-full h-[100vh] fixed md:top-0 left-0 z-50 bg-gray-300 bg-opacity-50 flex justify-center md:items-center`}>

<div className=' fixed top-56 md:static w-[90%] md:w-[50%] z-50 flex flex-col items-center justify-around rounded bg-white min-h-[30vh] py-5 md:min-h-[40vh] md:py-10 shadow-md'>


<form onSubmit={handleSubmit} className=' w-full flex flex-col items-center gap-10'>
      <h2 className='font-bold'>Checkout</h2>
      <CardElement className='w-[90%]' 

options={{
    style:{
        base:{
            backgroundColor: '#fff',
            '::placeholder': {
                color: '#aab7c4',
            },
        }}
    }}
    
    />
      {errorMessage && <div className="error">{errorMessage}</div>}
      <button type="submit" disabled={!stripe || loading} className='bg-black opacity-80 text-white rounded px-2 py-1 w-[90%] hover:scale-[102%] hover:opacity-100 transition-all duration-1000'>
        {loading ? 'Processing...' : 'Pay Now'}
      </button>
    </form>
    </div>    
    </div>
    
    
    </>
  )
}
