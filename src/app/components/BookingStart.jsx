"use client";

import React from "react";
import { useState } from "react";
import Link from "next/link";

const BookingStart = () => {

  const [formData, setFormData] = useState({
    name : '',
    email : '',
    contactno : '',
    date : '',
    pickuptime : '',
    flightno : '',
    pax : '',
    luggage : '',
    postal : '',
    typeoftransfer : '',
    pickup : '',
    dropoff: '',
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  
  const [isFormVisible, setIsFormVisible] = useState(true);

  const handleNext = () => {
    setIsFormVisible(false);
  };

  let inputFieldVehicleType;
  if ((formData.pax) === '' && (formData.luggage) === '') {
    inputFieldVehicleType = '';
  } else if ((formData.pax) < 5 && (formData.luggage) < 3) {
    inputFieldVehicleType = '4 Seater';
  } else if ((formData.pax) < 5 && (formData.luggage) > 2) {
    inputFieldVehicleType = '5 Seater';
  } else if ((formData.pax) < 5 && (formData.luggage) > 5) {
    inputFieldVehicleType = '5 Seater';
  } else if ((formData.pax) < 5 && (formData.luggage) < 5) {
    inputFieldVehicleType = '5 Seater';
  } else if ((formData.pax) < 6 && (formData.luggage) < 6) {
    inputFieldVehicleType = '5 Seater';
  } else if ((formData.pax) > 7) {
    inputFieldVehicleType = 'Please Contact Us For More Information';
  } else if ((formData.pax) > 5 && (formData.luggage) < 8) {
    inputFieldVehicleType = '7 Seater';
  } else {
    inputFieldVehicleType = '';
  }

let vehicleFare;
    if (inputFieldVehicleType === '4 Seater') {
      vehicleFare = 14;
    } else if (inputFieldVehicleType === '5 Seater') {
      vehicleFare = 20;
    } else if (inputFieldVehicleType === '7 Seater') {
      vehicleFare = 30;
    } else {
      vehicleFare = 0;
    }

let postalFare;
  if (parseInt(formData.postal) < 69999 ) {
    postalFare = '13';
  } else if ((parseInt(formData.postal) < 89999 )) {
    postalFare = '23';
  } else if ((parseInt(formData.postal) < 109999 )) {
    postalFare = '28';
  } else if ((parseInt(formData.postal) < 139999 )) {
    postalFare = '38';
  } else if ((parseInt(formData.postal) < 169999 )) {
    postalFare = '45';
  } else if ((parseInt(formData.postal) < 179999 )) {
    postalFare = '30';x
  } else if ((parseInt(formData.postal) < 199999 )) {
    postalFare = '25';
  } else if ((parseInt(formData.postal) < 219999 )) {
    postalFare = '18';
  } else if ((parseInt(formData.postal) < 239999 )) {
    postalFare = '24';
  } else if ((parseInt(formData.postal) < 279999 )) {
    postalFare = '30';
  } else {
    postalFare = '';
  }

let finalFare = +postalFare + +vehicleFare;


  return (

    <>

    { isFormVisible ? (
      <form>
<div className='font-sans mx-auto justify-center container px-3 mt-2 lg:mt-7'>
 <div className='font-mono text-[2.6rem] lg:text-7xl text-center font-bold tracking-normal text-fuchsia-700 mb-2'>Get Your Ride Here</div>
 <div className='lg:text-2xl text-1xl mt-2 text-center font-bold tracking-tight text-purple-900'>Singapore Changi Airport Land Transfer</div>
 <p className='flex mx-auto lg:text-lg sm:text-sm font-light text-center mt-3 text-slate-700 max-w-3xl'>Simple and Safe Way to get your way around Singapore with the trusted legacy service provider in Changi Airport Ground Transport Concierge since 2014.</p>
 </div>
  
    <div className="font-sans mx-auto text-sm mb-10 mt-10 bg-slate-50 shadow-lg lg:rounded-2xl sm:rounded lg:w-8/12 sm:px-6">
        <div className="grid grid-cols-12 gap-x-4 gap-y-6 p-8">
  {/* type of transfer */}
          <div className="col-span-12 md:col-span-6">
            <label
              htmlFor="typeoftransfer"
              className="block text-md font-medium leading-6 text-gray-600"
            >
              Type of Transfer
            </label>
              <select
                name="typeoftransfer"
                value={formData.typeoftransfer}
                onChange={handleChange}
                className="mt-2 block w-full rounded-md border-0 py-2.5 px-2.5  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-7"
                required
              >
                <option value="" disabled>
                  Please Select
                </option>
                <option value="Arrival">Arrival in Singapore</option>
                <option value="Departure">Departure from Singapore</option>
              </select>
          </div>

          {/* pax */}
          <div className="col-span-6 md:col-span-3">
            <label
              htmlFor="pax"
              className="block text-md font-medium leading-6 text-gray-600"
            >
              No. of Pax
            </label>
            <select
                name="pax"
                value={formData.pax}
                onChange={handleChange}
                className="mt-2 block w-full rounded-md border-0 py-2.5 px-2.5  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-7"
                required
              >
                <option value="" disabled>
                  Select
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">More than 7</option>
              </select>
          </div>
  {/* luggage  */}
          <div className="col-span-6 md:col-span-3">
            <label
              htmlFor="luggage"
              className="block text-md font-medium leading-6 text-gray-600"
            >
              No. of Luggage(s)
            </label>
            <select
                name="luggage"
                value={formData.luggage}
                onChange={handleChange}
                className="mt-2 block w-full rounded-md border-0 py-2.5 px-2.5  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-7"
                required
              >
                <option value="" disabled>
                  Select
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">More than 7</option>
              </select>
          </div>
          <div className="mt-2 border-t border-gray-300 col-span-12"></div>

  {/* arrival terminals */}

          {formData.typeoftransfer === "Arrival" && (
            <>
              <div className="col-span-12 md:col-span-12">
                <label
                  htmlFor="pickupairport"
                  className="block text-md font-medium leading-6 text-gray-600"
                >
                  Pick Up Location
                </label>
                  <select
                  value={formData.pickup}
                  onChange={handleChange}
                    name="pickup"
                    className="mt-2 block w-full rounded-md border-0 py-2.5 px-2.5  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-7"
                  >
                    <option value="" disabled>
                    Select Terminal
                    </option>
                    <option value="Changi Airport, T1">
                      Singapore Changi Airport, Terminal 1
                    </option>
                    <option value="Changi Airport, T2">
                      Singapore Changi Airport, Terminal 2
                    </option>
                    <option value="Changi Airport, T3">
                      Singapore Changi Airport, Terminal 3
                    </option>
                    <option value="Changi Airport, T4">
                      Singapore Changi Airport, Terminal 4
                    </option>
                  </select>
              </div>
              <div className="col-span-12 text-sm h-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2.25a.75.75 0 01.75.75v16.19l6.22-6.22a.75.75 0 111.06 1.06l-7.5 7.5a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 111.06-1.06l6.22 6.22V3a.75.75 0 01.75-.75z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
  {/* dropoff location  */}
              <div className="col-span-12 md:col-span-9">
                <label
                  htmlFor="dropoff"
                  className="block text-md font-medium leading-6 text-gray-600"
                >
                  Drop Off Location
                </label>
                  <input
                  value={formData.dropoff}
                  onChange={handleChange}
                    type="text"
                    name="dropoff"
                    id="dropofflocation"
                    className="mt-2 block w-full rounded-md border-0 py-2.5 px-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-7"
                  />
              </div>
  {/* dropoff postal  */}
              <div className="col-span-6 md:col-span-3">
                <label
                  htmlFor="dropoffpostal"
                  className="block text-md font-medium leading-6 text-gray-600"
                >
                  Postal Code
                </label>
                  <input
                    value={formData.postal}
                    onChange={handleChange}
                    type="text"
                    name="postal"
                    className="mt-2 block w-full rounded-md border-0 py-2.5 px-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-7"
                  />
              </div>
            </>
          )}

  {/* departure terminals */}

          {formData.typeoftransfer === "Departure" && (
            <>
        {/* pickup location  */}
              <div className="col-span-12 md:col-span-9">
                <label
                  htmlFor="pickup"
                  className="block text-md font-medium leading-6 text-gray-600"
                >
                  Pick Up Location
                </label>
                  <input
                value={formData.pickup}
                onChange={handleChange}
                    type="text"
                    name="pickup"
                    className="mt-2 block w-full rounded-md border-0 py-2.5 px-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-7"
                  />
              </div>

        {/* pickup postal  */}
              <div className="col-span-6 md:col-span-3">
                <label
                  htmlFor="postal"
                  className="block text-md font-medium leading-6 text-gray-600"
                >
                  Postal Code
                </label>
                  <input
                    value={formData.postal}
                    onChange={handleChange}
                    type="text"
                    name="postal"
                    className="mt-2 block w-full rounded-md border-0 py-2.5 px-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-7"
                  />
              </div>
              <div className="col-span-12 text-sm h-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2.25a.75.75 0 01.75.75v16.19l6.22-6.22a.75.75 0 111.06 1.06l-7.5 7.5a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 111.06-1.06l6.22 6.22V3a.75.75 0 01.75-.75z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>

    {/* dropoff airport */}
              <div className="col-span-12 md:col-span-12">
                <label
                  htmlFor="dropoff"
                  className="block text-md font-medium leading-6 text-gray-600"
                >
                  Drop Off Location
                </label>
                  <select
                    value={formData.dropoff}
                    onChange={handleChange}
                    name="dropoff"
                    className="mt-2 block w-full rounded-md border-0 py-2.5 px-2.5  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-7"
                  >
                    <option value="" disabled>
                    Select Terminal
                    </option>
                    <option value="Changi Airport, T1">
                      Singapore Changi Airport, Terminal 1
                    </option>
                    <option value="Changi Airport, T2">
                      Singapore Changi Airport, Terminal 2
                    </option>
                    <option value="Changi Airport, T3">
                      Singapore Changi Airport, Terminal 3
                    </option>
                    <option value="Changi Airport, T4">
                      Singapore Changi Airport, Terminal 4
                    </option>
                  </select>
              </div>
            </>
          )}

          <button 
          onClick={handleNext}
          type="button"
          className="grid col-span-12 w-100 justify-center bg-purple-700 px-20 py-3 mt-[20px] text-lg leading-6 text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"      
          >
          GET FARE
          </button>
        </div>
{/* hidden fields */}
<div className="hidden grid-cols-4 gap-4 p-8">
      <p className="text-lg">Vehicle Type: {inputFieldVehicleType}</p>
      <p className="text-lg">Zone Fare: {postalFare}</p>
      <p className="text-lg">Vehicle Fare: {vehicleFare}</p>
      <p className="text-lg">Type of Transfer: {formData.typeoftransfer}</p>
      <p className="text-lg">Pickup: {formData.pickup}</p>
      <p className="text-lg">Dropoff: {formData.dropoff}</p>
      <p className="text-lg">Postal {formData.postal}</p>
      <p className="text-lg">Pax {formData.pax}</p>
      <p className="text-lg">Luggage {formData.luggage}</p>
      <p className="text-lg">Final Fare :{finalFare}</p>
  </div>
    </div> 
    </form>
    
    ) : (
        
<div>

<div className='mx-auto font-sans lg:px-[12rem;] px-8 py-8 max-w-7xl'>

{/* heading */}
      <div className="sm:px-0">
        <h1 className="font-mono text-5xl font-semibold leading-7 text-fuchsia-700">Your Booking Fare</h1>
        <p className="mt-5 max-w-2xl text-base font-light leading-6 text-gray-500">We offer an highly optimised fare base on the distance and vehicle type.</p>
      </div>
{/* display booking fare */}
      <div className="px-4 mt-6 sm:px-0">
        <h1 className="text-4xl font-semibold leading-7 mt-4 text-gray-700" name='fare'>
          <span className="font-light">Fare:</span> S${finalFare}/-
        </h1>
      </div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          
          <div className="px-4 py-2 sm:grid sm:grid-cols-4 sm:gap-2 sm:px-0">
            <dt className="text-sm uppercase font-bold leading-6 text-gray-600">Vehicle Type :</dt>
            <dd className="mt-1 text-lg leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{inputFieldVehicleType}</dd>
          </div>
          <div className="px-4 py-2 sm:grid sm:grid-cols-4 sm:gap-2 sm:px-0">
            <dt className="text-sm uppercase font-bold leading-6 text-gray-600">Pax :</dt>
            <dd className="mt-1 text-lg leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{formData.pax}</dd>
          </div>
          <div className="px-4 py-2 sm:grid sm:grid-cols-4 sm:gap-2 sm:px-0">
            <dt className="text-sm uppercase font-bold leading-6 text-gray-600">Luggage :</dt>
            <dd className="mt-1 text-lg leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {formData.luggage}
            </dd>
          </div>
          <div className="px-4 py-2 sm:grid sm:grid-cols-4 sm:gap-2 sm:px-0">
            <dt className="text-sm uppercase font-bold leading-6 text-gray-600">Type of Transfer :</dt>
            <dd className="mt-1 text-lg leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{formData.typeoftransfer}</dd>
          </div>
         
          <div className="px-4 py-2 sm:grid sm:grid-cols-4 sm:gap-2 sm:px-0">
            <dt className="text-sm uppercase font-bold leading-6 text-gray-600">Pick Up Location :</dt>
            <dd className="mt-1 text-lg leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {formData.pickup}
            </dd>
          </div>
          <div className="px-4 py-2 sm:grid sm:grid-cols-4 sm:gap-2 sm:px-0">
            <dt className="text-sm uppercase font-bold leading-6 text-gray-700">Drop Off :</dt>
            <dd className="mt-1 text-lg leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {formData.dropoff}
            </dd>
          </div>
        </dl>
      </div>
    </div> 

<div className="font-sans mx-auto text-sm mb-10 mt-4 bg-slate-50 shadow-lg lg:rounded-2xl sm:rounded lg:w-9/12 sm:px-6 p-8 grid grid-cols-12 gap-4">
  {/* premable */}
  <div className="col-span-12 mb-4 text-base">
    Complete your booking by providing the details below:
  </div>
{/* name */}
<div className="lg:col-span-4 col-span-12">
              <label htmlFor="name" className="block text-md font-medium leading-6 text-gray-600">
                Name *
              </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  autoComplete="given-name"
                  className="mt-2 block w-full rounded-md border-0 py-2.5 px-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-7"
                />
            </div>
{/* email */}
            <div className="lg:col-span-4 col-span-12">
            <label htmlFor="email" className="block text-md font-medium leading-6 text-gray-600">
                Email  *
              </label>
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  autoComplete="email"
                  className="mt-2 block w-full rounded-md border-0 py-2.5 px-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-7"
                />
            </div>
{/* contact no. */}
            <div className="lg:col-span-4 col-span-12">
            <label htmlFor="email" className="block text-md font-medium leading-6 text-gray-600">
                Contact No.
              </label>
                <input
                name="contactno"
                value={formData.contactno}
                onChange={handleChange}
                  type="tel"
                  className="mt-2 block w-full rounded-md border-0 py-2.5 px-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-7"
                />
            </div>    
    {/* arrival date */}
            <div className="lg:col-span-4 col-span-6">
              <label htmlFor="arrivaldate" className="block text-md font-medium leading-6 text-gray-600">
                Date *
              </label>
                <input
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  type="date"
                  autoComplete="date"
                  className="mt-2 block w-full h-fit rounded-md border-0 py-[10px] px-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-7"
                />
            </div>
            
{/* pick time */}
            <div className="lg:col-span-4 col-span-6">
            <label htmlFor="pickuptime" className="block text-md font-medium leading-6 text-gray-600">
              Pick Up Time *
            </label>
              <input
                type="time"
                name="pickuptime"
                value={formData.pickuptime}
                onChange={handleChange}
                placeholder="00:00"
                className="mt-2 block w-full rounded-md border-0 py-2.5 px-2.5 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-700 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg leading-7"
              />
          </div>
{/* Flight No. */}
          <div className="lg:col-span-4 col-span-4">
              <label htmlFor="city" className="block text-md font-medium leading-6 text-gray-600">
                Flight No. *
              </label>
                <input
                  type="text"
                  name="flightno"
                  value={formData.flightno}
                  onChange={handleChange}
                  className="mt-2 block w-full rounded-md border-0 py-2.5 px-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-7"
                />
            </div>

            <Link 
            href={{
              pathname: "/booking",
              query: {
                name: `${formData.name}`,
                email: `${formData.email}`,
                contactno: `${formData.contactno}`,
                date: `${formData.date}`,
                pickuptime: `${formData.pickuptime}`,
                flightno: `${formData.flightno}`,
                pax: `${formData.pax}`,
                luggage: `${formData.luggage}`,
                typeoftransfer: `${formData.typeoftransfer}`,
                pickup: `${formData.pickup}`,
                dropoff: `${formData.dropoff}`,
                postal: `${formData.postal}`,
                vehicle: `${inputFieldVehicleType}`,
                fare: `${finalFare}`
              },
            }}

            className="grid col-span-12 w-100 justify-center bg-purple-700 px-20 py-3 mt-[20px] text-lg leading-6 text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" 

            >GET THIS RIDE
            </Link>
      
          {/* <button type="submit" 
          className="grid col-span-12 w-100 justify-center bg-fuchsia-700 px-20 py-3 mt-[20px] text-lg leading-6 text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" >   
          GET THIS RIDE
          </button> */}

            </div> {/* end of slate box layer */}
    
    </div>
    ) }   

      </>
      );
    };

export default BookingStart;


