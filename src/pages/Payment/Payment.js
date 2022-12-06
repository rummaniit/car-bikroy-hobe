// import { useQuery } from '@tanstack/react-query';
// import axios from 'axios';
// import React, { useContext } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';
// import { Authcontext } from '../../Context/AuthContext/AuthServices';
const stripePromise = loadStripe('pk_test_51M9vT1KC3hoVsD4SRMHvXh65XkTW1fvoFKvcLonT6lWdONXABk8QdwJKUOf1r2BbO3VFtQ0yWeoVFD3heUsaAZAN00g0gSShNH');
console.log(stripePromise);

const Payment = () => {
    const data = useLoaderData()
    console.log(data);
    return (
        <div>
            <h1 className="text-3xl text-orange-700 font-mono mt-14">Your Car name is {data?.carname}</h1>
            <h1 className='text-4xl text-white font-mono font-extrabold text-left'>Car Price is {data?.carprice}</h1>
            <div className='mt-10 w-96'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                        data={data}
                    />
                </Elements>
            </div>
        </div>

    );
};

export default Payment;