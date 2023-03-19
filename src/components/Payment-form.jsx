import {CardElement} from '@stripe/react-stripe-js';
import { useElements , useStripe } from "@stripe/react-stripe-js";
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ResetCart } from '../store/cart/cart-reducer';
import { CartItemsSelect, TotalSelect } from '../store/cart/cart-selector';
import { UserSelector } from '../store/user/user-selector';
import SpinnerPayment from './Spinner-payment';




export const PaymentForm = () =>{
    const stripe = useStripe();
    const elements = useElements();
    const [payLoading , SetpayLoading] = useState(false)
    const User = useSelector(UserSelector)
    const Total = useSelector(TotalSelect)
    const CartItems = useSelector(CartItemsSelect)
    const dispatch = useDispatch()
    const Navigate = useNavigate()
    const paymentHandler = async(e)=>{
        e.preventDefault()
        if (!stripe || !elements) {
        return;
        }
        SetpayLoading(true)
        const response = await fetch('/.netlify/functions/create-payment-intent' ,{
            method : 'post' ,
            headers : {
                'Content-Type' : 'application/json'  ,
            } ,
            body : JSON.stringify({ amount : Total*100}),
        }).then(res => res.json())
        // console.log(response)

        const clientsecret = response.paymentIntent.client_secret
        // console.log(clientsecret)
        const paymentResult = await stripe.confirmCardPayment(clientsecret ,{
            payment_method : {
                card : elements.getElement(CardElement) ,
                billing_details : {
                    name : User.displayName?User.displayName:'Guest'
                }
            },
        })

        

        if(paymentResult.error){
            alert('Try again?!??')
            SetpayLoading(false)
        }else{
            if(paymentResult.paymentIntent.status === 'succeeded') {
                alert('Payment Successful')
                SetpayLoading(false)
                dispatch(ResetCart())
                Navigate('/')
            }
        }
    }
    return (
        <form onSubmit={paymentHandler} className='flex flex-col justify-center items-center gap-[2rem]'>
            <CardElement className='h-full w-[90%] md:w-[50%]'/>
            <button type='submit' disabled={CartItems.length>0?false:true} className='uppercase w-[200px] h-[50px] px-4 py-2 bg-black text-white rounded font-bold'>
                {payLoading?<SpinnerPayment/> : 'pay now'}
            </button>
        </form>
    )
}