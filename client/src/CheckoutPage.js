import React, { useEffect, useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';
import { useUserContext } from './Context/UserContext';
function CheckoutPage() {
  console.log("hello")
 
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState('');
  const [paymentError, setPaymentError] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  console.log(stripe)
const {cart,dispatch,SUCESSFUL_PAYMENT} = useUserContext()
const clearCartItems = () => {
  dispatch({
    type: 'EMPTY',
    payload: [],
  });

  // Clear cart items in local storage
  localStorage.setItem('cart', JSON.stringify([]));
};
  useEffect(() => {
    // Fetch the PaymentIntent client secret from your backend
    const fetchPaymentIntent = async () => {
      try {
        const response = await axios.post('/create_payment_intent', {
          cart_items: cart,
        });
        setClientSecret(response.data.client_secret);
      } catch (error) {
        console.error('Error fetching PaymentIntent:', error);
        // Handle the error appropriately (e.g., show an error message to the user)
      }
    };

    fetchPaymentIntent();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet
      return;
    }

    // Collect the card details entered by the user
    const cardElement = elements.getElement(CardElement);

    // Confirm the card payment using the client secret
    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: cardElement,
        // Add other billing details here if required
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
      <h1>hi</h1>
      <h1>hi</h1>
      <h1>hi</h1>
      <h1>hi</h1>
      <h1>hi</h1>
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