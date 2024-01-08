'use client'

import React from 'react'

 export default function Contactform() {

  return (
    <div className="font-sans px-8 py-20 sm:py-22 lg:px-8">

      <div className="mx-auto max-w-2xl">
        <div className="font-mono lg:text-5xl font-bold tracking-tight text-fuchsia-700 text-4xl">Contact Us</div>
        <div className="mt-4 text-base leading-6 font-light text-gray-600 ">
          For 24/7 enquiries or assistance, we can be reach via:  SMS / WhatsApp / Line / WeChat:  
          <p className='font-semibold text-lg mb-6'>+65 99887755</p>
        </div>
        <div className="mt-4 border-t border-gray-300 col-span-12"></div>

      </div>

      

      <form action="#" method="POST" className="mx-auto max-w-2xl mt-6">
        <div className="grid grid-cols-1 gap-x-10 gap-y-6 sm:grid-cols-2">

          <div>
            <label htmlFor="first-name" className="block text-md font-normal leading-6 text-gray-700">
              Name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 px-2.5 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-6"
              />
            </div>
          </div>
          <div>
          <label htmlFor="email" className="block text-md font-normal leading-6 text-gray-700">
              Email
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                className="block w-full rounded-md border-0 px-2.5 py-2.5 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-6"
              />
            </div>
          </div>
      
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-md font-normal leading-6 text-gray-700">
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                name="message"
                id="message"
                rows={12}
                className="block w-full rounded-md border-0 px-2.5 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-6"
                defaultValue={''}
              />
            </div>
          </div>         
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="flex w-full justify-center bg-fuchsia-700 p-3 mt-4 text-lg leading-6 text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            SEND
          </button>
        </div>
      </form>
    </div>
  )
}
