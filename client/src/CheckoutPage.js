import React, { useEffect, useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';
import { useUserContext } from './Context/UserContext';
function CheckoutPage() {

  const stripe = useStripe(); 
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState('');
  const [paymentError, setPaymentError] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
const {cart,dispatch} = useUserContext()
const clearCartItems = () => {
  dispatch({
    type: 'EMPTY',
    payload: [],
  });


  localStorage.setItem('cart', JSON.stringify([]));
};
  useEffect(() => {

    const fetchPaymentIntent = async () => {
      try {
        const response = await axios.post('/create_payment_intent', {
          cart_items: cart,
        });
        setClientSecret(response.data.client_secret);
      } catch (error) {
        console.error('Error fetching PaymentIntent:', error);

      }
    };

    fetchPaymentIntent();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {

      return;
    }


    const cardElement = elements.getElement(CardElement);


    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: cardElement,

      },
    });

    if (result.error) {
      console.error('Payment error:', result.error.message);
      setPaymentError(result.error.message);
    } else if (result.paymentIntent.status === 'succeeded') {
      console.log('Payment succeeded!');
      setPaymentSuccess(true);
      clearCartItems()
    }
  };

  return (
   
   
    <div className='checkoutForm'>
      <h2>Checkout Page</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Card Details</label>
          <CardElement />
        </div>
        {paymentError && <div style={{ color: 'red' }}>{paymentError}</div>}
        {paymentSuccess && <div style={{ color: 'green' }}>Payment Successful!</div>}
        <button type="submit">Pay Now</button>
      </form>
    </div>
  );
};

export default CheckoutPage;