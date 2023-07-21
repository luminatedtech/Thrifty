import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
const stripePromise = loadStripe("pk_test_51NNhPXFlyTUX9bWPFpoF4xXPgZ4mu7krSbtMrT8RwkRr3jV4BiEYCjZnXTEjSEcP400Avsy7ChlM9S1KuODNMGAK002pBiKzsE")
ReactDOM.render(
  <Elements stripe={stripePromise}>

  
    <App />
    </Elements>
  ,
  document.getElementById('root')
);

