"use client";

import React from 'react';
import Image from 'next/image'
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { createTodo } from '@/components/Action'
import { loadStripe } from '@stripe/stripe-js';


const redirectToCheckout = async () => {

  const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

  if (!stripe) throw new Error('Stripe failed to initialize.');

  await fetch('/api/checkout_sessions', 
  {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(),
  })
  .then(res => {
    return res.json()
  })
  .then(res => {
    console.log(res)
    if (res.url) {
      window.location.href = res.url
    }
  })
}


export default function BookingSummary () {

  const handleSubmit = (event) => {
    createTodo(event); redirectToCheckout(event);
  }

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    if (query.get('success')) {
      console.log('Order placed! You will receive an email confirmation.');
    }

    if (query.get('canceled')) {
      console.log('Order canceled -- continue to shop around and checkout when you’re ready.');
    }
  }, []);
  
  const [agree, setAgree] = useState(true);
  const searchParams = useSearchParams();
  const name = searchParams.get('name');
  const email = searchParams.get('email');
  const pax = searchParams.get('pax');
  const luggage = searchParams.get('luggage');
  const typeoftransfer = searchParams.get('typeoftransfer');
  const pickup = searchParams.get('pickup');
  const dropoff = searchParams.get('dropoff');
  const date = searchParams.get('date');
  const flightno = searchParams.get('flightno');
  const pickuptime = searchParams.get('pickuptime');
  const contactno = searchParams.get('contactno');
  const postal = searchParams.get('postal');
  const fare = searchParams.get('fare');
  const typeofvehicle = searchParams.get('vehicle');

  const {amountTotal} = fare;


  return (
  
  <form action={handleSubmit}>  

  <div className="hidden">
      <input type="text" name='name' defaultValue={`${name}`} placeholder="Add"/>
      <input type="text" name='ifare' defaultValue={`${amountTotal}`} placeholder="Add"/>
      <input type="text" name='email' defaultValue={`${email}`} placeholder="som" />
      <input type="text" name='contactno' defaultValue={`${contactno}`} placeholder="new" />
      <input type="text" name="typeoftransfer" defaultValue={`${typeoftransfer}`} placeholder="zon" />
      <input type="text" name= "pax" defaultValue={`${pax}`} placeholder="ton" /> 
      <input type="text" name="luggage" defaultValue={`${luggage}`} placeholder="non"  />
      <input type="text" name="pickup" defaultValue={`${pickup}`} placeholder="mon" />
      <input type="text" name="dropoff" defaultValue={`${dropoff}`} placeholder="won"/>
      <input type="text" name="postal" defaultValue={`${postal}`} placeholder="mon" />
      <input type="text" name="pickuptime" defaultValue={`${pickuptime}`} placeholder="mon" />
      <input type="text" name="flightno" defaultValue={`${flightno}`} placeholder="mon" />
      <input type="text" name="typeofvehicle" defaultValue={`${typeofvehicle}`} placeholder="mon" />
      <input type="text" name="date" defaultValue={`${date}`} placeholder="dat" />
      <input type="text" name="fare" defaultValue={`${fare}`} placeholder="fare" />
      <input type="text" name="agree" defaultValue={`${agree}`} placeholder="agr" /> 
      <input type="text" name="description" placeholder="Add a todo" /> 
      </div>

    <div className='mx-auto font-sans lg:px-[10rem;] px-2 py-8 max-w-6xl'>

      <div className="px-4">
        <h1 className="font-mono text-5xl font-semibold leading-10 text-fuchsia-700">Booking Summary</h1>
        <p className="mt-6 max-w-2xl text-lg font-light leading-6 text-gray-700">Please review your booking details before making payment:</p>
      </div>

      <div className="px-4">
        <div className="relative place-items-baseline text-4xl font-semibold leading-7 mt-6 text-gray-700">
        <span className="lg:text-2xl text-lg font-light text-fuchsia-600">Amount Payable: </span> S${fare}/- 
        <div className="lg:absolute right-0 lg:text-left bottom-0 text-sm font-light text-purple-400 text-right">Order No.: 230000000</div>
        </div>
      </div>

{/* detailsStart */}
      <div className="bg-slate-50 mt-8 px-4 border-gray-300 p-5 rounded-2xl border">
        <dl className="divide-y divide-gray-100">
          
          <div className="px-2 py-1 sm:grid sm:grid-cols-4 sm:gap-2 sm:px-0">
            <dt className="text-sm uppercase font-bold leading-6 text-gray-500">Vehicle Type :</dt>
            <dd className="text-lg leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {typeofvehicle}
            </dd>
          </div>

          <div className="px-2 py-1 sm:grid sm:grid-cols-4 sm:gap-2 sm:px-0">
            <dt className="text-sm uppercase font-bold leading-6 text-gray-500">Pax :</dt>
            <dd className="text-lg leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
            {pax}
            </dd>
          </div>

          <div className="px-2 py-1 sm:grid sm:grid-cols-4 sm:gap-2 sm:px-0">
            <dt className="text-sm uppercase font-bold leading-6 text-gray-500">Luggage :</dt>
            <dd className="text-lg leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
            {luggage}
            </dd>
          </div>

          <div className="px-2 py-1 sm:grid sm:grid-cols-4 sm:gap-2 sm:px-0">
            <dt className="text-sm uppercase font-bold leading-6 text-gray-500">Type of Transfer :</dt>
            <dd className="text-lg leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
            {typeoftransfer}
            </dd>
          </div>

          <div className="px-2 py-1 sm:grid sm:grid-cols-4 sm:gap-2 sm:px-0">
            <dt className="text-sm uppercase font-bold leading-6 text-gray-500">Date :</dt>
            <dd className="text-lg leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {date}
            </dd>
          </div>

          <div className="px-2 py-1 sm:grid sm:grid-cols-4 sm:gap-2 sm:px-0">
            <dt className="text-sm uppercase font-bold leading-6 text-gray-500">Pick Up Time :</dt>
            <dd className="text-lg leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {pickuptime}
            </dd>
          </div>

          <div className="px-2 py-1 sm:grid sm:grid-cols-4 sm:gap-2 sm:px-0">
            <dt className="text-sm uppercase font-bold leading-6 text-gray-500">Flight No. :</dt>
            <dd className="text-lg leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {flightno}
            </dd>
          </div>
         
          <div className="px-2 py-1 sm:grid sm:grid-cols-4 sm:gap-2 sm:px-0">
            <dt className="text-sm uppercase font-bold leading-6 text-gray-500">Pick Up Location :</dt>
            <dd className="text-lg leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
            {pickup}{postal}
            </dd>
          </div>

          <div className="px-2 py-1 sm:grid sm:grid-cols-4 sm:gap-2 sm:px-0">
            <dt className="text-sm uppercase font-bold leading-6 text-gray-500">Drop Off :</dt>
            <dd className="text-lg leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {dropoff}
            </dd>
          </div>

          <div className="px-2 py-1 sm:grid sm:grid-cols-4 sm:gap-2 sm:px-0">
            <dt className="text-sm uppercase font-bold leading-6 text-gray-500">Name :</dt>
            <dd className="text-lg leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {name}
            </dd>
          </div>

          <div className="px-2 py-1 sm:grid sm:grid-cols-4 sm:gap-2 sm:px-0">
            <dt className="text-sm uppercase font-bold leading-6 text-gray-500">Email :</dt>
            <dd className="text-lg leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {email}
            </dd>
          </div>

          <div className="px-2 py-1 sm:grid sm:grid-cols-4 sm:gap-2 sm:px-0">
            <dt className="text-sm uppercase font-bold leading-6 text-gray-500">Contact No. :</dt>
            <dd className="text-lg leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {contactno}
            </dd>
          </div>

        </dl>
      </div>

      <div className="relative flex gap-x-3 mt-8 justify-center">
              <div className="flex h-6 items-center">
                <input name="agree" type="checkbox" onChange={(e) => setAgree(e.target.value)} value={agree} className="h-6 w-6 rounded border-gray-300 text-purple-600 focus:ring-purple-600"/>
              </div>
              <div className="text-sm leading-6">
                <label htmlFor="comments" className="font-medium text-gray-700">Agree to All Terms and Conditions</label>
              </div>
            </div>

          <button type="submit" 
          className="grid col-span-12 w-full justify-center bg-purple-700 px-20 py-3 mt-[20px] text-lg leading-6 text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"      
          >
          PAY NOW
          </button>

          <div className="mt-8">
          <Image
            src="/creditcards.png"
            className="mx-auto h-auto w-50"
            width="0"
            height="0"
            alt="credit cards"
          />
          </div>
      </div>

    </form>
    
  )
  
}
