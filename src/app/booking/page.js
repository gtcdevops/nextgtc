import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import BookingSummary from "../components/BookingSummary"

import { generateServerClientUsingCookies } from '@aws-amplify/adapter-nextjs/api';
import { cookies } from 'next/headers';
import { revalidatePath } from 'next/cache';
import * as mutations from '@/graphql/mutations';
import config from '@/amplifyconfiguration.json';

const cookiesClient = generateServerClientUsingCookies({
  config,
  cookies
});

async function createBookingData(formData) {
  'use server';
  const { data } = await cookiesClient.graphql({
    query: mutations.createBookingData,
    variables: {
      input: {
        name: formData.get('name')?.toString() ?? '',
        email: formData.get('name')?.toString() ?? '',
        pax: formData.get('name')?.toString() ?? '',
        luggage: formData.get('name')?.toString() ?? '',
        typeoftransfer: formData.get('name')?.toString() ?? '',
        pickup: formData.get('name')?.toString() ?? '',
        dropoff: formData.get('name')?.toString() ?? '',
        date: formData.get('name')?.toString() ?? '',
        flightno: formData.get('name')?.toString() ?? '',
        pickuptime: formData.get('name')?.toString() ?? '',
        contactno: formData.get('name')?.toString() ?? '',
        postal: formData.get('name')?.toString() ?? '',
        fare: formData.get('name')?.toString() ?? '',
        typeofvehicle: formData.get('name')?.toString() ?? '',
        agree: formData.get('name')?.toString() ?? '',

      }
    }
  });
  console.log('Created Todo: ', data?.createBookingData);
  revalidatePath('/');
} 



const Page = () => {
  return (
    <main className="min-h-screen items-center">
    <Navbar />

<BookingSummary onSubmit={createBookingData}/>
  <Footer />
  </main>  
  )
}

export default Page;