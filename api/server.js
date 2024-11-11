// server.js
import express from 'express';
import cors from 'cors';

import Stripe from 'stripe';  // Use ES Modules import

const stripe = Stripe('sk_test_51QJt9FFadvgEyax9NC8HZokdE6hh7fMJRaverOKM5BlujEswwDpJoR8ytAqRZpe3onx1655ODeQUOnBNMWlWE3fa00y8a6350f');  // Initialize Stripe
const app = express();

app.use(cors()); // Allow all origins (or restrict it to specific ones)
// Middleware to parse JSON bodies
app.use(express.json());

app.post('/create-payment-intent', async (req, res) => {
  const { amount } = req.body; 

  console.log('Received amount:', amount);  // Debugging line

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: 'usd', // You can change this to the currency you are working with
    });

    res.send({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'Payment creation failed' });
  }
});

// Start the server
const port = 3010; // You can change the port if needed
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
