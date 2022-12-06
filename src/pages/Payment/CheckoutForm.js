import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect, useState } from 'react';
import { Authcontext } from '../../Context/AuthContext/AuthServices';

const CheckoutForm = ({ data }) => {
    const { presentUser } = useContext(Authcontext)
    // console.log(prea);
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('')
    const [success, setSuccess] = useState('')
    const [transaction, setTransaction] = useState('')
    const [clientSecret, setClientSecret] = useState("");
    const { carprice } = data
    console.log(carprice)

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("http://localhost:5000/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ items: { carprice } }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [carprice]);


    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });
        if (error) {
            console.log('[error]', error);
            setCardError(error.message)
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            setCardError(' ')
        }
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: presentUser.displayName,
                        email: presentUser.email
                    },
                },
            },
        );
        if (confirmError) {
            setCardError(confirmError.message)
            return
        }
        if (paymentIntent.status === 'succeeded') {
            setSuccess('Congrats! your payment is successfull')
            setTransaction(paymentIntent.id)
        }
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button type="submit"
                    className='btn btn-outline mt-5 w-full'
                    disabled={!stripe || !clientSecret}>
                    Pay
                </button>
                <p className='text-red-900'>{cardError}</p>
                {
                    success ? <div>
                        <p className='text-green-900 text-xl font-semibold'>{success}</p>
                        <p className='text-green-900'>Your Transaction id is :: <small
                            className='text-2xl font-extrabold'
                        >{transaction}</small></p>
                    </div> : ''
                }
            </form>
        </>
    );
};

export default CheckoutForm;