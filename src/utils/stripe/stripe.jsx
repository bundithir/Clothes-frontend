import {loadStripe} from '@stripe/stripe-js';
export const stripePromise = loadStripe(`${import.meta.env.VITE__STRIPE_PUBLISHABLE_KEY}`);